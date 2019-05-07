<%@ page import="model.UserSession" %><%--
  Created by IntelliJ IDEA.
  User: tranngocbao
  Date: 2019-05-04
  Time: 15:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="mum.cs472.QuizServlet" %>
<html>
<head>
    <title>Quiz MVC Example</title>
    <link href="quiz.css" type="text/css" rel="stylesheet"/>

</head>
<body>
<form action="QuizServlet" method="post">
    <div class="form-group">
        <label class="field-label">Your age: </label>
        <input type="text" name="age" value="" placeholder="enter the number between 4 to 100" size="40" maxlength="3"/>

        <%
            UserSession userSession = (UserSession) request.getSession().getAttribute("userSession");
            if (userSession != null) {
                if (userSession.isAgeValidate() == false) {%>
        <div class="form-group">
            <label class="error-warning">Your age is invalid, please check and input again</label>
        </div>
        <%
                }
            }
        %>
        <br/>
    </div>

    <input type="submit" value="Next step"/>

</form>
</body>
</html>
