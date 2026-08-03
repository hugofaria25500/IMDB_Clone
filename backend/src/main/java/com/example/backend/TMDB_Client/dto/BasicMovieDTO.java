package com.example.backend.TMDB_Client.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

import java.util.List;

@Data
public class BasicMovieDTO {

    @JsonAlias("id")
    private int id;

    @JsonAlias("title")
    private String title;

    @JsonAlias("poster_path")
    private String posterPath;

    @JsonAlias("genre_ids")
    private List<Integer> genreIds;

    @JsonAlias("release_date")
    private String releaseDate;

    @JsonAlias("vote_average")
    private String rating;
}