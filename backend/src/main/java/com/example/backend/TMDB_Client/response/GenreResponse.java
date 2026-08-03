package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.GenreDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

import java.util.List;

@Data
public class GenreResponse {

    @JsonAlias("genres")
    private List<GenreDTO> genres;
}