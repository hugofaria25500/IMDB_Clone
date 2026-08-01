package com.example.backend.Services;

import com.example.backend.TMDB_Client.client.MovieClient;
import com.example.backend.TMDB_Client.dto.BasicMovieDTO;
import com.example.backend.TMDB_Client.response.MoviesListResponse;
import com.example.backend.TMDB_Client.response.NewReleaseMoviesListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieClient movieClient;

    public MoviesListResponse getPopularMovies() {
        return movieClient.getPopularMovies();
    }

    public MoviesListResponse getTrendingMovies() { return movieClient.getTrendingMovies(); }

    public NewReleaseMoviesListResponse getNewReleaseMovies() { return movieClient.getNewReleases(); }

    public BasicMovieDTO getRandomMovie(){
        return movieClient.getRandomMovie().getResults().get(0);
    }

}
