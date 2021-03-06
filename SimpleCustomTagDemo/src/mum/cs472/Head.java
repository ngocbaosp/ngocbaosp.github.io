package mum.cs472;

import javax.servlet.jsp.*;
import javax.servlet.jsp.tagext.*;
import java.io.IOException;

public class Head extends SimpleTagSupport {
    String theColor;
    String words;

    //This is called from JSP servlet to render custom tag
    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();

        //getJspContext().getOut().write("Hi Bob");

        //getJspBody().invoke(null);

        if (theColor != null)
            out.write(String.format("<span style='color:%s'>%s</span>", theColor, words));
        else
            out.write(String.format("<span>%s</span>", words));

    }

    //Need a setter for each attribute of custom tag
    public void setTheColor(String theColor) {
        this.theColor = theColor;
    }

    public void setWords(String words) {
        this.words = words;
    }
}
