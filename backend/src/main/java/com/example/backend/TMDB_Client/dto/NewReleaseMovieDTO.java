package com.example.backend.TMDB_Client.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

import java.util.List;

@Data
public class NewReleaseMovieDTO {

    @JsonAlias("id")
    private int id;

    @JsonAlias("title")
    private String title;

    @JsonAlias("overview")
    private String overview;

    @JsonAlias("backdrop_path")
    private String backdropPath;

    @JsonAlias("genre_ids")
    private List<Integer> genreIds;

    @JsonAlias("release_date")
    private String releaseDate;
}
