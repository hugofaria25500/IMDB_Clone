package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.MovieTrailerDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class MovieTrailerResponse {

    @JsonProperty("results")
    private List<MovieTrailerDTO> results;

}
