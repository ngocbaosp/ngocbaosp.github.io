package mum.cs472;

import model.BeerExpert;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

@WebServlet(name = "BeerSelect")
public class BeerSelect extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {



        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        out.println("Beer Selection Advice<br>");

        String c = request.getParameter("color");

        BeerExpert be = new BeerExpert();

        List result = be.getBrands(c);

        Iterator it = result.iterator();

        while(it.hasNext()) {

            out.print("<br>try: " + it.next());

        }

        //out.println("<br>Got beer color " + c);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
