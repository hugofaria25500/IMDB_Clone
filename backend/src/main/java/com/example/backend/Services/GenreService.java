package com.example.backend.Services;

import com.example.backend.TMDB_Client.client.GenreClient;
import com.example.backend.TMDB_Client.response.genres.GenreResponse;
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
