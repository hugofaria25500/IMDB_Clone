package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.BasicMovieDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class PopularMoviesListResponse {

    @JsonProperty("results")
    private List<BasicMovieDTO> results;
}