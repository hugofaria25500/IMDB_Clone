package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.GenreDTO;
import com.fasterxml.jackson.annotation.JsonAlias;

import java.util.List;

public class GenreResponse {

    @JsonAlias("genres")
    private List<GenreDTO> genres;
}