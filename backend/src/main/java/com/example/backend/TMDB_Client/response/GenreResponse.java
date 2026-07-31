package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.GenreDTO;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class GenreResponse {

    @JsonProperty("genres")
    private List<GenreDTO> genres;
}