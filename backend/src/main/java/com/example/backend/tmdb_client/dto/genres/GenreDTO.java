package com.example.backend.tmdb_client.dto.genres;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class GenreDTO {
    @JsonProperty("id")
    private int id;

    @JsonProperty("name")
    private String name;
}
