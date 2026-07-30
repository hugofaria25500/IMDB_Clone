package com.example.backend.Controllers;

import com.example.backend.Services.MovieService;
import com.example.backend.TMDB_Client.dto.PopularMoviesListResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/movies")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/popular")
    public ResponseEntity<PopularMoviesListResponse> getPopularMovies() {
        return ResponseEntity.ok(movieService.getPopularMovies());
    }


}
