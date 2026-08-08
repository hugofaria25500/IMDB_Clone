package com.example.backend.service;

import com.example.backend.tmdb_client.client.GenreClient;
import com.example.backend.tmdb_client.response.genres.GenreResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GenreService {

    private final GenreClient genreClient;

    public GenreResponse getMovieGenres() {
        return genreClient.getMovieGenres();
    }

    public GenreResponse getSeriesGenres() {
        return genreClient.getSeriesGenres();
    }
}
