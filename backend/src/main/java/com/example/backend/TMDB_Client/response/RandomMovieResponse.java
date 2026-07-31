package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.BasicMovieDTO;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class RandomMovieResponse {

    @JsonProperty("results")
    private List<BasicMovieDTO> results;
}
