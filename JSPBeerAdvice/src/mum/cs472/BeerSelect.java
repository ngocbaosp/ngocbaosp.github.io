package mum.cs472;

import model.BeerExpert;
import model.Student;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@WebServlet(name = "BeerSelect")
public class BeerSelect extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String c = request.getParameter("color");
        BeerExpert be = new BeerExpert();
        List result = be.getBrands(c);

        request.setAttribute("styles", result);

/*
        Student[] table = new Student[]
                {
                        new Student("bob", 23),
                        new Student("jill", 33),
                        new Student("kim", 18)
                };

        //List<Student> students = new ArrayList<>();


        request.setAttribute("students", table);
*/
        //ShowPage(request, response, "resultCustomTag.jsp");

        ShowPage(request, response, "midTerm.jsp");

        //ShowPage(request, response, "result.jsp");

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Student[] table = new Student[]
                {
                        new Student("bob", 23),
                        new Student("jill", 33),
                        new Student("kim", 18)
                };
        request.setAttribute("students", table);
    }

    private void ShowPage(HttpServletRequest request, HttpServletResponse response, String page) throws ServletException, IOException {

        RequestDispatcher view = request.getRequestDispatcher(page);
        view.forward(request, response);

    }
}
