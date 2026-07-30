package com.example.backend.TMDB_Client.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GenreResponse {

    @JsonProperty("id")
    private int id;

    @JsonProperty("name")
    private String name;
}
