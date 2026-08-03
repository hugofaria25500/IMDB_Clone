package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.DiscoverMovieDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

import java.util.List;

@Data
public class DiscoverMoviesListResponse {

    @JsonAlias("page")
    private Integer page;

    @JsonAlias("results")
    private List<DiscoverMovieDTO> results;

    @JsonAlias("total_pages")
    private Integer totalPages;

}
