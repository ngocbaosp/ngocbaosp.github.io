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
<%@ page import="model.QuestionBank" %>
<html>
<head>
    <title>Quiz result</title>
    <link href="quiz.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<%
    UserSession userSession = (UserSession) request.getSession().getAttribute("userSession");
    UserAnswer userAnswer = userSession.getUserAnswer();
    QuestionBank questionBank = userSession.getQuestionBank();
%>
<h1> The Number Quiz</h1>
<p>
    Your age is <%=userSession.getAge()%>
</p>
<p>
    Your current score is <%=userAnswer.getScore()%>
</p>
<p>
    You have completed the Number Quiz, with a score of <%= userAnswer.getScore()%>
    out of  <%=questionBank.getMaxScore()%>
</p>
<p>
    Your final grade is  <label class="final-grade"><%=userAnswer.getFinalGrade()%></label>
</p>

</body>
</html>
