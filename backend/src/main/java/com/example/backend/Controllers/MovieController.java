package com.example.backend.Controllers;

import com.example.backend.Services.MovieService;
import com.example.backend.TMDB_Client.dto.BasicMovieDTO;
import com.example.backend.TMDB_Client.response.MoviesListResponse;
import com.example.backend.TMDB_Client.response.NewReleaseMoviesListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<MoviesListResponse> getPopularMovies() {
        return ResponseEntity.ok(movieService.getPopularMovies());
    }

    @GetMapping("/trending")
    public ResponseEntity<MoviesListResponse> getTrendingMovies() {
        return ResponseEntity.ok(movieService.getTrendingMovies());
    }

    @GetMapping("/newReleases")
    public ResponseEntity<NewReleaseMoviesListResponse> getNewReleaseMovies() {
        return ResponseEntity.ok(movieService.getNewReleaseMovies());
    }

    @GetMapping("/random")
    public ResponseEntity<BasicMovieDTO> getRandomMovie() {
        return ResponseEntity.ok(movieService.getRandomMovie());
    }
}
