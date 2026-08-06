package com.example.backend.Controllers;

import com.example.backend.Services.GenreService;
import com.example.backend.TMDB_Client.response.genres.GenreResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/genres")
public class GenreController {

    private final GenreService genreService;

    @GetMapping("/movies")
    public ResponseEntity<GenreResponse> getMovieGenres() {
        return ResponseEntity.ok(genreService.getMovieGenres());
    }

    @GetMapping("/series")
    public ResponseEntity<GenreResponse> getSeriesGenres() {
        return ResponseEntity.ok(genreService.getSeriesGenres());
    }
}
