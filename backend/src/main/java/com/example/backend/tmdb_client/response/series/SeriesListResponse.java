package com.example.backend.tmdb_client.response.series;

import com.example.backend.tmdb_client.dto.series.BasicSeriesDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class SeriesListResponse {

    @JsonProperty("results")
    private List<BasicSeriesDTO> results;
}