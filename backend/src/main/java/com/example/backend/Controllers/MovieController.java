package com.example.backend.Controllers;

import com.example.backend.Services.MovieService;
import com.example.backend.TMDB_Client.response.PopularMoviesListResponse;
import com.example.backend.TMDB_Client.response.TrendingMoviesListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private final MovieService movieService;

    @GetMapping("/popular")
    public ResponseEntity<PopularMoviesListResponse> getPopularMovies() {
        return ResponseEntity.ok(movieService.getPopularMovies());
    }

    @GetMapping("/trending")
    public ResponseEntity<TrendingMoviesListResponse> getTrendingMovies() {
        return ResponseEntity.ok(movieService.getTrendingMovies());
    }
}
