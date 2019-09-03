<%--
  Created by IntelliJ IDEA.
  User: tranngocbao
  Date: 2019-05-07
  Time: 12:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>$Title$</title>
</head>
<body>
<h1 align="center">Beer Selection Page</h1>

<form method="POST"
      action="SelectBeer.do">
    Select beer characteristics
    <p>
        Color:
        <select name="color" size="1">
            <option value="light"> light</option>
            <option value="amber"> amber</option>
            <option value="brown"> brown</option>
            <option value="dark"> dark</option>
        </select>
        <br><br>
    <div>
        <input type="submit" value="Submit">
</div>
</form>
</body>
</html>
