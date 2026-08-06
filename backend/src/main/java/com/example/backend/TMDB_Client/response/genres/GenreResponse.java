package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.GenreDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class GenreResponse {

    @JsonProperty("genres")
    private List<GenreDTO> genres;
}