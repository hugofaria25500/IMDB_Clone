package com.example.backend.tmdb_client.response.movies;

import com.example.backend.tmdb_client.dto.movies.BasicMovieDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class MoviesListResponse {

    @JsonProperty("results")
    private List<BasicMovieDTO> results;
}