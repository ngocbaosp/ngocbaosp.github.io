package model;

import java.util.ArrayList;

public class UserAnswer {
    private int score;
    private int currentQuestionNo;
    private ArrayList<UserChoice> ansList;

    public boolean isAnswerDisplayed() {
        return answerDisplayed;
    }

    public void setAnswerDisplayed(boolean answerDisplayed) {
        this.answerDisplayed = answerDisplayed;
    }

    private boolean answerDisplayed;

    public int getAttempt() {
        return Attempt;
    }

    public void setAttempt(int attempt) {
        Attempt = attempt;
    }

    private int Attempt;

    public boolean isNextQuestion() {
        return nextQuestion;
    }

    public void setNextQuestion(boolean nextQuestion) {
        this.nextQuestion = nextQuestion;
    }

    private boolean nextQuestion;


    public String getFinalGrade()
    {
        String s = "";
        if (score>=45 && score <=50)
            s="A";
        if (score>=35 && score <=44)
            s="B";

        if (score>=25 && score <=34)
            s="C";

        if (score<25)
            s="NC";


        return s;

    }

    public void addAnswer(String ans)
    {
        //ansList.add(ans);
    }

    public void checkAndUpdateScore(String ans, Question question)
    {
        nextQuestion=false;
        Attempt++;

        if (ans.equals(question.getAnswer())) {

            if(ansList.size()<=currentQuestionNo) {

                UserChoice userChoice = new UserChoice();
                userChoice.addAns(ans);
                userChoice.setScore(question.getScores().get(0));
                ansList.add(userChoice);
                score+=userChoice.getScore();
            }
            else
            {
                UserChoice userChoice = ansList.get(currentQuestionNo);
                userChoice.setScore(question.getScores().get(userChoice.getAns().size()));
                userChoice.addAns(ans);
                score+=userChoice.getScore();
            }

            nextQuestion=true;
            answerDisplayed=true;

        }
        else
        {
            if(ansList.size()<=currentQuestionNo)
            {
                UserChoice userChoice = new UserChoice();
                userChoice.addAns(ans);
                ansList.add(userChoice);
            }
            else
            {
                UserChoice userChoice = ansList.get(currentQuestionNo);
                userChoice.addAns(ans);
                if(userChoice.getAns().size()==question.getScores().size())
                    nextQuestion=true;

            }


        }
    }

    public ArrayList<UserChoice> getAnsList() {
        return ansList;
    }

    public void setAnsList(ArrayList<UserChoice> ansList) {
        this.ansList = ansList;
    }



    public UserAnswer()
    {
        ansList = new ArrayList<>();
        answerDisplayed=false;

    }

    public UserAnswer(int score, int currentQuestionNo) {
        this.score = score;
        this.currentQuestionNo = currentQuestionNo;
        ansList = new ArrayList<>();
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getCurrentQuestionNo() {
        return currentQuestionNo;
    }

    public void setCurrentQuestionNo(int currentQuestionNo) {
        this.currentQuestionNo = currentQuestionNo;
    }

    public void gotoNextQuestion()
    {
        currentQuestionNo++;
        Attempt = 0;
        answerDisplayed=false;
        nextQuestion=false;

    }
}
