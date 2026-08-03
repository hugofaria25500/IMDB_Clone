package com.example.backend.TMDB_Client.response;

import com.example.backend.TMDB_Client.dto.NewReleaseMovieDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

import java.util.List;

@Data
public class NewReleaseMoviesListResponse {

    @JsonAlias("results")
    private List<NewReleaseMovieDTO> results;
}
