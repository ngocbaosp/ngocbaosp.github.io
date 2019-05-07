package model;

import java.util.ArrayList;

public class UserChoice {

    private ArrayList<String> ans;

    private Question question;
    private int score;

    public UserChoice() {

        ans = new ArrayList<>();

    }

    public void addAns(String ans)
    {
        this.ans.add(ans);

    }

    public ArrayList<String> getAns() {
        return ans;
    }

    public void setAns(ArrayList<String> ans) {
        this.ans = ans;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
