<%--
  Created by IntelliJ IDEA.
  User: tranngocbao
  Date: 2019-05-06
  Time: 13:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="mum.cs472.QuizServlet" %>
<%@ page import="model.UserSession" %>
<%@ page import="model.UserAnswer" %>

<html>
<head>
    <title>Quiz MVC</title>
    <link href="quiz.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<%
    UserSession userSession = (UserSession) request.getSession().getAttribute("userSession");
    UserAnswer userAnswer = userSession.getUserAnswer();
%>
<form action='QuizServlet' method='POST'>

    <h1> The Number Quiz</h1>
    <p>
        Your age is <%=userSession.getAge()%>
    </p>
    <p>
        Your current score is <%=userAnswer.getScore()%>
    </p>
    <h4> Question No: <%=(userAnswer.getCurrentQuestionNo() + 1)%>
    </h4>
    <%=userSession.getQuestionBank().getQuestion(userAnswer.getCurrentQuestionNo()).display()%>
    <p>
    <div class="form-group">
        Your answer: <input type="text" name="ans" value="" size="10"/> (<label
            class="highlight">Attempted/Tried:</label> <%=userAnswer.getAttempt()%>)
    </div>
    <div class="form-group">
        <%
            if (userAnswer.isNextQuestion() == true) {
        %>
        <p class="highlight">
            The correct answer
            is <%=userSession.getQuestionBank().getQuestion(userAnswer.getCurrentQuestionNo()).getAnswer()%>
            (this is the sequence
            of <%=userSession.getQuestionBank().getQuestion(userAnswer.getCurrentQuestionNo()).getDescription()%>)
        </p>
        <%
            }


        %>
    </div>
    <div class="form-group">

        <input type='submit' value='Submit'/>
    </div>
</form>
</body>
</html>
