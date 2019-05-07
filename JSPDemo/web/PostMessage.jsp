<%--
  Created by IntelliJ IDEA.
  User: tranngocbao
  Date: 2019-05-07
  Time: 14:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

<%! int count = 0; %>
The count is now:
<%= ++count %>

<%-- This is a jsp scriptlet that increments the count --%>
<!-- This is an html comment inserted by the increment comment -->
<% count = count * 10; %>
The count is now:
<%= count %>


</body>
</html>
