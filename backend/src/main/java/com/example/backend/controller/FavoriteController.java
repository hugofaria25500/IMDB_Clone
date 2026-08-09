package com.example.backend.controller;

import com.example.backend.entity.FavoriteMovie;
import com.example.backend.entity.FavoriteSeries;
import com.example.backend.response.FavoriteStatusResponse;
import com.example.backend.service.FavoriteService;
import com.example.backend.tmdb_client.dto.movies.BasicMovieDTO;
import com.example.backend.tmdb_client.dto.series.BasicSeriesDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    // =========================
    // MOVIES
    // =========================

    @PostMapping("/movies/{movieId}")
    public ResponseEntity<FavoriteMovie> addMovie( @PathVariable Integer movieId) {
        FavoriteMovie favoriteMovie = favoriteService.addMovie(movieId);
        return ResponseEntity.status(HttpStatus.CREATED).body(favoriteMovie);
    }

    @DeleteMapping("/movies/{movieId}")
    public ResponseEntity<Void> removeMovie(@PathVariable Integer movieId) {
        favoriteService.removeMovie(movieId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/movies")
    public ResponseEntity<List<BasicMovieDTO>> getFavoriteMovies() {
        return ResponseEntity.ok(favoriteService.getFavoriteMovies());
    }

    @GetMapping("/movies/{movieId}")
    public ResponseEntity<FavoriteStatusResponse> isMovieFavorite( @PathVariable Integer movieId) {
        return ResponseEntity.ok(favoriteService.isMovieFavorite(movieId));
    }

    // =========================
    // SERIES
    // =========================

    @PostMapping("/series/{seriesId}")
    public ResponseEntity<FavoriteSeries> addSeries(@PathVariable Integer seriesId) {
        FavoriteSeries favoriteSeries =favoriteService.addSeries(seriesId);
        return ResponseEntity.status(HttpStatus.CREATED).body(favoriteSeries);
    }

    @DeleteMapping("/series/{seriesId}")
    public ResponseEntity<Void> removeSeries( @PathVariable Integer seriesId) {
        favoriteService.removeSeries(seriesId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/series")
    public ResponseEntity<List<BasicSeriesDTO>> getFavoriteSeries() {
        return ResponseEntity.ok(favoriteService.getFavoriteSeries());
    }

    @GetMapping("/series/{seriesId}")
    public ResponseEntity<FavoriteStatusResponse> isSeriesFavorite(@PathVariable Integer seriesId) {
        return ResponseEntity.ok(favoriteService.isSeriesFavorite(seriesId));
    }
}
