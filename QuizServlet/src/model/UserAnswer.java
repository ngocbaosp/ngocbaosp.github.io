package model;

import java.util.ArrayList;

public class UserAnswer {
    private int score;
    private int currentQuestionNo;
    private ArrayList<String> ansList;

    public void addAnswer(String ans)
    {
        ansList.add(ans);
    }

    public void checkAndUpdateScore(String ans, String key)
    {
        if (ans.equals(key))
            score++;
    }

    public ArrayList<String> getAnsList() {
        return ansList;
    }

    public void setAnsList(ArrayList<String> ansList) {
        this.ansList = ansList;
    }



    public UserAnswer()
    {
        ansList = new ArrayList<>();

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
}
