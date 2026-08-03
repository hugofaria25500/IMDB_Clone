package com.example.backend.TMDB_Client.dto;

import com.fasterxml.jackson.annotation.JsonAlias;

public class GenreDTO {
    @JsonAlias("id")
    private int id;

    @JsonAlias("name")
    private String name;
}
