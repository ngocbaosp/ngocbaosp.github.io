package model;

import java.util.ArrayList;

public class QuestionBank {
    private ArrayList<Question> questions;

    public void initQuestionBank() {
        String[] question =
                {
                        "3, 1, 4, 1, 5",//pi
                        "1, 1, 2, 3, 5",//fibo
                        "1, 4, 9, 16, 25",//squares
                        "2, 3, 5, 7, 11",//prime
                        "1, 2, 4, 8, 16"//power of 2
                };

        String anwser[] = {"9", "8", "36", "13", "32"};
        String des[] ={"pi","fibonaci","squares","prime","power of 2"};

        ArrayList<Integer> scores = new ArrayList<>();
        scores.add(10);
        scores.add(5);
        scores.add(2);


        for (int i = 0; i < question.length; i++)
            questions.add(new Question(question[i], anwser[i],scores,des[i]));
    }

    public Question getQuestion(int i) {
        return questions.get(i);
    }

    public QuestionBank() {
        questions = new ArrayList<>();
    }

    public ArrayList<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(ArrayList<Question> questions) {
        this.questions = questions;
    }

    public int getMaxScore()
    {
        int score=0;
        for(Question question:questions)
            score+=question.getScores().get(0);
        return score;
    }
}
