package com.example.backend.TMDB_Client.dto.genres;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class GenreDTO {
    @JsonProperty("id")
    private int id;

    @JsonProperty("name")
    private String name;
}
