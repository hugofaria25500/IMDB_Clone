package com.example.backend.tmdb_client.response.series;

import com.example.backend.tmdb_client.dto.series.SeriesTrailerDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class SeriesTrailerResponse {

    @JsonProperty("results")
    private List<SeriesTrailerDTO> results;

}
