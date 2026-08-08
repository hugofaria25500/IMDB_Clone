package com.example.backend.tmdb_client.dto.series;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class NewReleaseSeriesDTO {

    @JsonProperty("id")
    private int id;

    @JsonAlias("original_name")
    private String originalName;

    @JsonProperty("overview")
    private String overview;

    @JsonAlias("backdrop_path")
    private String backdropPath;

    @JsonAlias("genre_ids")
    private List<Integer> genreIds;

    @JsonAlias("first_air_date")
    private String firstReleaseDate;
}
