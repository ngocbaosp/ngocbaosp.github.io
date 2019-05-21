package db;

import model.DefinitionList;
import model.WordDefinition;

import java.sql.*;

public class DbConnection {

    //String dbDriver = "com.mysql.jdbc.Driver";

    String dbDriver = "com.mysql.cj.jdbc.Driver";


    String dbURL = "jdbc:mysql:// localhost:3306/";
    // Database name to access
    String dbName = "entries";
    String dbUsername = "newuser";
    String dbPassword = "Mum@1234";


    public Connection initializeDatabase()
            throws SQLException, ClassNotFoundException, IllegalAccessException, InstantiationException {
        // Initialize all the information regarding
        // Database Connection

        Class.forName(dbDriver).newInstance();
        Connection con = DriverManager.getConnection(dbURL + dbName + "?serverTimezone=UTC",
                dbUsername,
                dbPassword);
        return con;
    }

    public DefinitionList getDefinition(String word) {
        DefinitionList definitionList = new DefinitionList(word);

        try {
            Connection con = initializeDatabase();
            System.out.println(con.getSchema());


            String query = "SELECT * FROM entries where word='"+word+"'";

            // create the java statement
            Statement st = con.createStatement();

            // execute the query, and get a java resultset
            ResultSet rs = st.executeQuery(query);

            // iterate through the java resultset
            while (rs.next())
            {
                WordDefinition wordDefinition = new WordDefinition(rs.getString("wordtype"),rs.getString("definition"));
               definitionList.addDefinition(wordDefinition);
            }
            st.close();

            con.close();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }


        return definitionList;

    }


}
