package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.BasicMovieDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

import java.util.List;

@Data
public class MoviesListResponse {

    @JsonAlias("results")
    private List<BasicMovieDTO> results;
}