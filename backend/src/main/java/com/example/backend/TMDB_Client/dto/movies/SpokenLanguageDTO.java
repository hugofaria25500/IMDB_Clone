package com.example.backend.TMDB_Client.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

@Data
public class SpokenLanguageDTO {

    @JsonAlias("english_name")
    private String englishName;

}
