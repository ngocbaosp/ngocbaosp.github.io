<%--
  Created by IntelliJ IDEA.
  User: tranngocbao
  Date: 2019-05-07
  Time: 13:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>

<html>
<head>
    <title>Title</title>
</head>
<body>

<c:forEach var="student" items="${students}">
    <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
    </tr>
</c:forEach>

</body>
</html>
