package com.example.backend.tmdb_client.response.series;

import com.example.backend.tmdb_client.dto.series.NewReleaseSeriesDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class NewReleaseSeriesListResponse {

    @JsonProperty("results")
    private List<NewReleaseSeriesDTO> results;
}
