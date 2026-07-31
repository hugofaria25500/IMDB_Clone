package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.BasicMovieDTO;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class TrendingMoviesListResponse {
    @JsonProperty("page")
    private int page;

    @JsonProperty("results")
    private List<BasicMovieDTO> results;

    @JsonProperty("total_pages")
    private int totalPages;

    @JsonProperty("total_results")
    private int totalResults;
}
