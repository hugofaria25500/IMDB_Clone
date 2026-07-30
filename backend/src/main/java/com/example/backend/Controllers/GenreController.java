package com.example.backend.Controllers;

import com.example.backend.Services.GenreService;
import com.example.backend.TMDB_Client.dto.GenreResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/genres")
public class GenreController {

    private final GenreService genreService;

    @GetMapping("/all")
    public ResponseEntity<GenreResponse> getPopularMovies() {
        return ResponseEntity.ok(genreService.getMovieGenres());
    }
}
