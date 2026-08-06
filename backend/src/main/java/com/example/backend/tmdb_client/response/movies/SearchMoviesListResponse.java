package com.example.backend.TMDB_Client.response.movies;

import com.example.backend.TMDB_Client.dto.movies.BasicMovieDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class SearchMoviesListResponse {

    @JsonProperty("page")
    private Integer page;

    @JsonProperty("results")
    private List<BasicMovieDTO> results;

    @JsonAlias("total_pages")
    private Integer totalPages;
}
