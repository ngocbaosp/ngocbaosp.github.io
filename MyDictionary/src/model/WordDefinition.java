package model;

public class WordDefinition {

    private String wordType;
    private String definition;

    public WordDefinition(String wordType, String definition) {
        this.wordType = wordType;
        this.definition = definition;
    }

    public String getWordType() {
        return wordType;
    }

    public void setWordType(String wordType) {
        this.wordType = wordType;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }
}
