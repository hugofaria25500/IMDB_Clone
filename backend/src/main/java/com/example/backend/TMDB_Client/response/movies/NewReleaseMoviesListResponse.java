package com.example.backend.TMDB_Client.response.movies;

import com.example.backend.TMDB_Client.dto.movies.NewReleaseMovieDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class NewReleaseMoviesListResponse {

    @JsonProperty("results")
    private List<NewReleaseMovieDTO> results;
}
