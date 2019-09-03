<%--
  Created by IntelliJ IDEA.
  User: tranngocbao
  Date: 2019-05-08
  Time: 14:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Title</title>
</head>
<body>


<c:set var="item" value="2"/>
    <c:out value="${item}"/>

<c:if test="${var==1}" var="result" scope="session">

</c:if>

<c:out value="${result}"/>

<c:out value="abc"/>

<c:out value="${'1'+'1'}"/>


${"a"&&"1"}

<c:set var="currency" scope="session" >
    USD,EUR,AUD,INR
</c:set>

<c:out value="${currency}"/>

<c:set var="currency" scope="session" value="null" />

<c:out value="${currency}"/>

<c:set var = "salary" scope = "session" value = "${2000*2}"/>
<p>Your salary is : <c:out value = "${salary}"/></p>
<c:choose>
    <c:when test = "${salary <= 0}">
        Salary is very low to survive.
    </c:when>
    <c:when test = "${salary > 1000}">
        Salary is very good.
    </c:when>
    <c:otherwise>
        No comment sir...
    </c:otherwise>
</c:choose>
<c:set var="j" value="4,3,2,1"/>
<c:forEach items="${j}" var="item" begin="1" end="2">
    <c:out value="${item}" default="abc"/>
</c:forEach>

<c:set var="item" value="2"/>
<c:forEach var="item" begin="0" end="0" step="2">
    <c:out value="${item}" default="abc"/>
</c:forEach>


<%int i = 1;%>
<%=i%>
<c:set var="item" value="2"/>
<c:choose>
    <c:when test="${item>0}">
        <c:out value="1"/>
    </c:when>
    <c:when test="${item==2}">
        <c:out value="2"/>
    </c:when>
    <c:when test="${item<2}">
        <c:out value="3"/>
    </c:when>
    <c:otherwise>
        <c:out value="4"/>
    </c:otherwise>
</c:choose>

<% int y = 0; %>
<% int z = 0; %>

<% for(int x=0;x<3;x++) { %>
<% z++;++y;%>
<% }%>
<% if(z<y) {%>
<%= z%>
<% } else {%>
<%= z - 1%>
<% }%>

</body>
</html>
