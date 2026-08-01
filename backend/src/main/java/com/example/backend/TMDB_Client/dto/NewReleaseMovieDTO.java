package com.example.backend.TMDB_Client.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class NewReleaseMovieDTO {

    @JsonProperty("id")
    private int id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("overview")
    private String overview;

    @JsonProperty("backdrop_path")
    private String backdropPath;

    @JsonProperty("genre_ids")
    private List<Integer> genreIds;

    @JsonProperty("release_date")
    private String releaseDate;
}
