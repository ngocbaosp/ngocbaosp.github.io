package model;

import java.util.ArrayList;

public class Question {
    private String question;
    private String answer;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    private String description;

    public ArrayList<Integer> getScores() {
        return scores;
    }

    public void setScores(ArrayList<Integer> scores) {
        this.scores = scores;
    }

    private ArrayList<Integer> scores;


    public Question(String question, String answer, ArrayList<Integer> scores, String description) {
        this.question = question;
        this.answer = answer;
        this.scores = scores;
        this.description = description;

    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String display() {
        String s = "";
        s = s + "Guess the next number in the sequence: ";
        s = s + "\n" + question;
        return s;
    }

}
