package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.DiscoverMovieDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class DiscoverMoviesListResponse {

    @JsonProperty("page")
    private Integer page;

    @JsonProperty("results")
    private List<DiscoverMovieDTO> results;

    @JsonAlias("total_pages")
    private Integer totalPages;

}
