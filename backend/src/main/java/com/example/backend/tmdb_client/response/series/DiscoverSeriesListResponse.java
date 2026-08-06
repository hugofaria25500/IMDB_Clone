package com.example.backend.tmdb_client.response.series;

import com.example.backend.tmdb_client.dto.series.DiscoverSeriesDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class DiscoverSeriesListResponse {

    @JsonProperty("page")
    private Integer page;

    @JsonProperty("results")
    private List<DiscoverSeriesDTO> results;

    @JsonAlias("total_pages")
    private Integer totalPages;

}
