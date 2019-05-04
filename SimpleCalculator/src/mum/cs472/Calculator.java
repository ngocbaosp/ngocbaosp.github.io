package mum.cs472;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet(name = "Calculator")
public class Calculator extends HttpServlet {


    private ArrayList<String> p = new ArrayList<>();

    public void init() throws ServletException {

    }

    private void myComputeAndStoreSession(HttpServletRequest request) {
        ArrayList<String> vals = new ArrayList<>();

        vals.add(request.getParameter("p1"));
        vals.add(request.getParameter("p2"));
        if (vals.get(0) != "" && vals.get(1) != "") {
            float a = Float.parseFloat(vals.get(0));
            float b = Float.parseFloat(vals.get(1));
            float sum = a + b;
            vals.add(String.valueOf(sum));
        } else {
            vals.add("");
        }

        vals.add(request.getParameter("p3"));
        vals.add(request.getParameter("p4"));
        if (vals.get(3) != "" && vals.get(4) != "") {
            float a = Float.parseFloat(vals.get(3));
            float b = Float.parseFloat(vals.get(4));
            float sum = a * b;
            vals.add(String.valueOf(sum));
        } else {
            vals.add("");
        }


        HttpSession session = request.getSession();


        session.setAttribute("txt", vals);

    }

    private ArrayList<String> myGetSessionInfo(HttpServletRequest request)
    {
        ArrayList<String> vals = new ArrayList<>();
        HttpSession session = request.getSession(false);
        if (session != null) {
            vals = (ArrayList<String>) session.getAttribute("txt");
        } else {
            for (int i = 0; i <= 6; i++)
                vals.add("");
        }
        return vals;
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        myComputeAndStoreSession(request);

        RequestDispatcher view = request.getRequestDispatcher("index.html");
        view.forward(request, response);


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ArrayList<String> vals = myGetSessionInfo(request);

        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Test</title></head><body>");

        out.print("<form action='Calculator' method='POST'>");

        out.print("<input type='text' name='p1' value='" + vals.get(0) + "' size='6' />+");
        out.print("<input type='text' name='p2' value='" + vals.get(1) + "' size='6'/>=");
        out.print("<input type='text' name='r1' value='" + vals.get(2) + "' size='6' readonly=\"readonly\"/>");
        out.print("<br/>");


        out.print("<input type='text' name='p3' value='" + vals.get(3) + "' size='6'/>*");
        out.print("<input type='text' name='p4' value='" + vals.get(4) + "' size='6'/>=");
        out.print("<input type='text' name='r2' value='" + vals.get(5) + "' size='6' readonly=\"readonly\"/>");
        out.print("<br/>");
        out.print("<br/>");

        out.print("<input type='submit' value='Submit'/>");


        out.print("</form>");
        out.print("</body></html>");


    }
}
