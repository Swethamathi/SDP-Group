package com.littleinn.storytelling.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Stories {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long storyId;
    
    private String name;
    private String description;
    private String storyJournal;


    public long getStoryId() {
        return storyId;
    }

    public void setStoryId(long storyId) {
        this.storyId = storyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStoryJournal() {
        return storyJournal;
    }

    public void setStoryJournal(String storyJournal) {
        this.storyJournal = storyJournal;
    }
}
