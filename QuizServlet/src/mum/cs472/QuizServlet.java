package mum.cs472;

import model.Question;
import model.QuestionBank;
import model.UserAnswer;

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

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        UserAnswer userAnswer = myGetSessionInfo(request);

        String ans = request.getParameter("ans");
        //store user's answer
        userAnswer.addAnswer(ans);
        // Check user's answer
        userAnswer.checkAndUpdateScore(ans, questionBank.getQuestion(userAnswer.getCurrentQuestionNo()).getAnswer());

        // Go to the next question
        userAnswer.setCurrentQuestionNo(userAnswer.getCurrentQuestionNo() + 1);

        if (userAnswer.getCurrentQuestionNo() < questionBank.getQuestions().size())
            showQuestion(request, response, userAnswer);
        else
            showResult(request, response, userAnswer);

        /*
        HttpSession session = request.getSession();
        session.setAttribute("userAnswer", userAnswer);
        RequestDispatcher view = request.getRequestDispatcher("index.html");
        view.forward(request, response);
        */


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

    private void showResult(HttpServletRequest request, HttpServletResponse response, UserAnswer userAnswer) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Quiz Servlet</title></head><body>");
        out.print("<h1> The Number Quiz</h1>");
        out.print("Your current score is " + userAnswer.getScore());
        out.print("<br/>");
        out.print("You have completed the Number Quiz, with a score of " + userAnswer.getScore());
        out.print(" out of " + (questionBank.getQuestions().size()));

        ShowAnswerInDetail(out, userAnswer);


    }

    private void showQuestion(HttpServletRequest request, HttpServletResponse response, UserAnswer userAnswer) throws ServletException, IOException {

        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Quiz Servlet</title></head><body>");

        out.print("<form action='QuizServlet' method='POST'>");

        out.print("<h1> The Number Quiz</h1>");

        out.print("Your current score is " + userAnswer.getScore());
        out.print(" out of " + userAnswer.getCurrentQuestionNo());

        String s = "";

        int currentNo = userAnswer.getCurrentQuestionNo();

        s = questionBank.getQuestion(currentNo).display();

        out.print("<br/>");
        out.print("<br/>");
        out.print("<h4> Question No: " + (userAnswer.getCurrentQuestionNo() + 1) + "</h4>");

        out.print(s);
        out.print("<br/>");
        out.print("<br/>");


        out.print("Your answer: <input type='text' name='ans' value=''" + " size='10'/>");

        out.print("<br/>");
        out.print("<br/>");

        out.print("<input type='submit' value='Submit'/>");

        out.print("</form>");
        out.print("</body></html>");

    }

    private UserAnswer myGetSessionInfo(HttpServletRequest request) {
        UserAnswer userAnswer = new UserAnswer();
        HttpSession session = request.getSession(false);
        if (session != null) {
            userAnswer = (UserAnswer) session.getAttribute("userAnswer");
        } else {
            session = request.getSession();
            userAnswer.setCurrentQuestionNo(0);
            userAnswer.setScore(0);
            session.setAttribute("userAnswer", userAnswer);

        }

        return userAnswer;
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        UserAnswer userAnswer = myGetSessionInfo(request);

        showQuestion(request, response, userAnswer);


    }
}
