package com.example.backend.tmdb_client.response.genres;

import com.example.backend.tmdb_client.dto.genres.GenreDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class GenreResponse {

    @JsonProperty("genres")
    private List<GenreDTO> genres;
}