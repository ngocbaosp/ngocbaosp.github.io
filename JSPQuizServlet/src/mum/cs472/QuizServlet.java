package mum.cs472;

import model.Question;
import model.QuestionBank;
import model.UserAnswer;
import model.UserSession;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet(name = "QuizServlet")
public class QuizServlet extends HttpServlet {

    private QuestionBank questionBank;

    public void init() throws ServletException {
        questionBank = new QuestionBank();
        questionBank.initQuestionBank();
    }


    private UserSession getSessionInfo(HttpServletRequest request) {

        UserSession userSession = new UserSession();
        HttpSession session = request.getSession(false);
        if (session != null) {
            userSession = (UserSession) session.getAttribute("userSession");
        } else {

            session = request.getSession();
            session.setAttribute("userSession", userSession);

        }

        if (userSession == null) {
            userSession = new UserSession();
            session = request.getSession();
            session.setAttribute("userSession", userSession);

        }

        return userSession;
    }


    private void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        UserSession userSession = getSessionInfo(request);
        if (userSession.getAge() == -1) {//the first request
            //get age and validate
            String sAge = request.getParameter("age");
            if (userSession.checkAge(sAge) == true) {
                userSession.setAgeValidate(true);
                userSession.setQuestionBank(questionBank);
                ShowPage(request, response, "quiz.jsp");
            } else {
                userSession.setAgeValidate(false);
                response.sendRedirect("index.jsp");
            }
        } else {

            UserAnswer userAnswer = userSession.getUserAnswer();

            if (userAnswer.isNextQuestion()==false) {
                //store user's answer

                String ans = request.getParameter("ans");
                //userAnswer.addAnswer(ans);
                // Check user's answer
                userAnswer.checkAndUpdateScore(ans, questionBank.getQuestion(userAnswer.getCurrentQuestionNo()));
            }
            if (userAnswer.isNextQuestion()) {
                if (userAnswer.isAnswerDisplayed() == true)
                    // Go to the next question
                    userAnswer.gotoNextQuestion();
                    //userAnswer.setCurrentQuestionNo(userAnswer.getCurrentQuestionNo() + 1);
                else
                    userAnswer.setAnswerDisplayed(true);

            }

            if (userAnswer.getCurrentQuestionNo() < questionBank.getQuestions().size())
                ShowPage(request, response, "quiz.jsp");
            else
                ShowPage(request, response, "result.jsp");


        }

    }

    private void ShowPage(HttpServletRequest request, HttpServletResponse response, String page) throws ServletException, IOException {

        RequestDispatcher view = request.getRequestDispatcher(page);
        view.forward(request, response);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        processRequest(request, response);

    }

    private void ShowAnswerInDetail(PrintWriter out, UserAnswer userAnswer) {
        out.print("<h2> Please review your answer in details below:</h2>");

        int i = 0;
        for (Question question : questionBank.getQuestions()) {
            out.print("<h4> Question No: " + (i + 1) + "</h4>");
            out.print(question.display());
            out.print("<br/>");
            out.print("Correct answer: " + question.getAnswer());
            out.print("<br/>");
            out.print("Your answer: " + userAnswer.getAnsList().get(i));
            out.print("<br/>");
            out.print("Result: " + question.getAnswer().equals(userAnswer.getAnsList().get(i)));
            i++;
            out.print("<br/>");

        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        processRequest(request, response);

    }
}
