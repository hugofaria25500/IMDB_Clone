package com.example.backend.tmdb_client.response.movies;

import com.example.backend.tmdb_client.dto.movies.NewReleaseMovieDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class NewReleaseMoviesListResponse {

    @JsonProperty("results")
    private List<NewReleaseMovieDTO> results;
}
