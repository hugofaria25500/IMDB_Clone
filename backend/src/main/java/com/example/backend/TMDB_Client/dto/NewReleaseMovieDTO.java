package com.example.backend.TMDB_Client.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
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

    @JsonAlias("backdrop_path")
    private String backdropPath;

    @JsonAlias("genre_ids")
    private List<Integer> genreIds;

    @JsonAlias("release_date")
    private String releaseDate;
}
