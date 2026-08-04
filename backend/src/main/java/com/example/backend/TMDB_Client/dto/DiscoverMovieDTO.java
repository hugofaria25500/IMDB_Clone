package com.example.backend.TMDB_Client.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class DiscoverMovieDTO {

    @JsonProperty("id")
    private int id;

    @JsonProperty("title")
    private String title;

    @JsonAlias("poster_path")
    private String posterPath;

    @JsonAlias("genre_ids")
    private List<Integer> genreIds;

    @JsonAlias("release_date")
    private String releaseDate;

    @JsonAlias("vote_average")
    private String rating;

    @JsonProperty("popularity")
    private String popularity;
}
