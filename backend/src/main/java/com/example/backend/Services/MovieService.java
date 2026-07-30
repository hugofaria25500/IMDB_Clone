package com.example.backend.Services;

import com.example.backend.TMDB_Client.client.MovieClient;
import com.example.backend.TMDB_Client.dto.PopularMoviesListResponse;
import org.springframework.stereotype.Service;

@Service
public class MovieService {
    private final MovieClient movieClient;

    public MovieService(MovieClient movieClient) {
        this.movieClient = movieClient;
    }

    public PopularMoviesListResponse getPopularMovies() {
        return movieClient.getPopularMovies();
    }

}
