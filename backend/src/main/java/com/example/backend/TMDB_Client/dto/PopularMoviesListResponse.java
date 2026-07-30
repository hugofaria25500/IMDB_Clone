package com.example.backend.TMDB_Client.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class PopularMoviesListResponse {

    @JsonProperty("page")
    private int page;

    @JsonProperty("results")
    private List<MovieDTO> results;

    @JsonProperty("total_pages")
    private int totalPages;

    @JsonProperty("total_results")
    private int totalResults;

    @JsonProperty("genre_ids")
    private List<Integer> genreIds;
}