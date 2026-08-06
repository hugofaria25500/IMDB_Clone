package com.example.backend.tmdb_client.response.movies;

import com.example.backend.tmdb_client.dto.movies.MovieTrailerDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class MovieTrailerResponse {

    @JsonProperty("results")
    private List<MovieTrailerDTO> results;

}
