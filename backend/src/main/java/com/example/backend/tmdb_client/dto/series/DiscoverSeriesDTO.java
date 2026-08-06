package com.example.backend.tmdb_client.dto.series;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class DiscoverSeriesDTO {

    @JsonProperty("id")
    private int id;

    @JsonAlias("original_name")
    private String originalName;

    @JsonAlias("poster_path")
    private String posterPath;

    @JsonAlias("genre_ids")
    private List<Integer> genreIds;

    @JsonAlias("first_air_date")
    private String firstReleaseDate;

    @JsonAlias("vote_average")
    private String rating;

    @JsonProperty("popularity")
    private String popularity;
}
