package com.example.backend.TMDB_Client.response.movies;

import com.example.backend.TMDB_Client.dto.movies.BasicMovieDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class MoviesListResponse {

    @JsonProperty("results")
    private List<BasicMovieDTO> results;
}