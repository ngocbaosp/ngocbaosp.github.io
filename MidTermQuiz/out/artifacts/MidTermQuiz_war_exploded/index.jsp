<%--
  Created by IntelliJ IDEA.
  User: tranngocbao
  Date: 2019-05-08
  Time: 14:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import = "classes.Employee" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>

   <jsp:useBean id="employee" class="classes.Employee" scope="session"/> <jsp:setProperty name="employee" property="*"/>

  </body>
</html>
