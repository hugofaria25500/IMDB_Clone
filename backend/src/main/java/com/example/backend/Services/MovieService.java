package com.example.backend.Services;

import com.example.backend.TMDB_Client.client.MovieClient;
import com.example.backend.TMDB_Client.response.PopularMoviesListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieClient movieClient;

    public PopularMoviesListResponse getPopularMovies() {
        return movieClient.getPopularMovies();
    }

}
