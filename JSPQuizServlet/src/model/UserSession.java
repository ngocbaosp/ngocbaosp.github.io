package model;

public class UserSession {



    private int age;
    UserAnswer userAnswer;

    public QuestionBank getQuestionBank() {
        return questionBank;
    }

    public void setQuestionBank(QuestionBank questionBank) {
        this.questionBank = questionBank;
    }

    QuestionBank questionBank;

    public boolean isAgeValidate() {
        return ageValidate;
    }

    public void setAgeValidate(boolean ageValidate) {
        this.ageValidate = ageValidate;
    }

    boolean ageValidate;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public UserAnswer getUserAnswer() {
        return userAnswer;
    }

    public void setUserAnswer(UserAnswer userAnswer) {
        this.userAnswer = userAnswer;
    }



    public UserSession() {
        age = -1;
        //userAnswer=null;
        userAnswer = new UserAnswer(0,0);
        ageValidate=true;

    }

    public boolean checkAge(String age)
    {

        try {
            int myAge = Integer.parseInt(age);
            if (myAge < 4 ||  myAge > 100)
                return false;

            setAge(myAge);

        }
        catch (Exception ex)
        {
            return false;
        }
        return true;
    }

}
