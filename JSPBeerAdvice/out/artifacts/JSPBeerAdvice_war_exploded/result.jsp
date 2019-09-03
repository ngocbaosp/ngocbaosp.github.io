<%@ page import="java.util.List" %>
<%@ page import="java.util.Iterator" %>
<%@ page import="model.Student" %><%--
  Created by IntelliJ IDEA.
  User: tranngocbao
  Date: 2019-05-07
  Time: 12:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1 align=”center”>Beer Recommendations JSP</h1>
<p>

        <%List styles = (List)request.getAttribute("styles");
        Iterator it = styles.iterator(); while(it.hasNext()) { out.print("<br>try: " + it.next()); }

%>
<table>

    <%
        Student[] students = (Student[]) request.getAttribute("students");
        for (int i = 0; i < students.length; i++) {
    %>
    <tr>
        <td><%=students[i].getName()%>
        </td>
        <td><%=students[i].getAge()%>
        </td>
    </tr>
    <%
        }
    %>

</table>



</body>
</html>
