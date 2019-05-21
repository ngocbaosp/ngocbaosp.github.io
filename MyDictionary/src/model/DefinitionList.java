package model;

import java.util.ArrayList;
import java.util.List;

public class DefinitionList {


    private String word;
    List<WordDefinition> list;

    public void addDefinition(WordDefinition wordDefinition){

        list.add(wordDefinition);
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public List<WordDefinition> getList() {
        return list;
    }

    public void setList(List<WordDefinition> list) {
        this.list = list;
    }


    public DefinitionList(String word) {
        this.word = word;
        list = new ArrayList<>();
    }



}
