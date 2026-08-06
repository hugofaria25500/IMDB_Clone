package com.example.backend.tmdb_client.dto.media;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

@Data
public class SpokenLanguageDTO {

    @JsonAlias("english_name")
    private String englishName;

}
