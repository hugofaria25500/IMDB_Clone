package com.example.backend.controller;

import com.example.backend.entity.FavoriteMovie;
import com.example.backend.entity.FavoriteSeries;
import com.example.backend.entity.WatchlistMovie;
import com.example.backend.entity.WatchlistSeries;
import com.example.backend.response.FavoriteStatusResponse;
import com.example.backend.response.WatchlistStatusResponse;
import com.example.backend.service.WatchlistService;
import com.example.backend.tmdb_client.dto.movies.BasicMovieDTO;
import com.example.backend.tmdb_client.dto.series.BasicSeriesDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/watchlist")
public class WatchlistController {

    private final WatchlistService watchlistService;

    public WatchlistController(WatchlistService watchlistService) {
        this.watchlistService = watchlistService;
    }

    // =========================
    // MOVIES
    // =========================

    @PostMapping("/movies/{movieId}")
    public ResponseEntity<WatchlistMovie> addMovie(@PathVariable Integer movieId) {
        WatchlistMovie watchlistMovie = watchlistService.addMovie(movieId);
        return ResponseEntity.status(HttpStatus.CREATED).body(watchlistMovie);
    }

    @DeleteMapping("/movies/{movieId}")
    public ResponseEntity<Void> removeMovie(@PathVariable Integer movieId) {
        watchlistService.removeMovie(movieId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/movies")
    public ResponseEntity<List<BasicMovieDTO>> getWatchlistMovies() {
        return ResponseEntity.ok(watchlistService.getWatchlistMovies());
    }

    @GetMapping("/movies/{movieId}")
    public ResponseEntity<WatchlistStatusResponse> isMovieFavorite(@PathVariable Integer movieId) {
        return ResponseEntity.ok(watchlistService.isWatchlistMovie(movieId));
    }

    // =========================
    // SERIES
    // =========================

    @PostMapping("/series/{seriesId}")
    public ResponseEntity<WatchlistSeries> addSeries(@PathVariable Integer seriesId) {
        WatchlistSeries watchlistSeries = watchlistService.addSeries(seriesId);
        return ResponseEntity.status(HttpStatus.CREATED).body(watchlistSeries);
    }

    @DeleteMapping("/series/{seriesId}")
    public ResponseEntity<Void> removeSeries( @PathVariable Integer seriesId) {
        watchlistService.removeSeries(seriesId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/series")
    public ResponseEntity<List<BasicSeriesDTO>> getWatchlistSeries() {
        return ResponseEntity.ok(watchlistService.getWatchlistSeries());
    }

    @GetMapping("/series/{seriesId}")
    public ResponseEntity<WatchlistStatusResponse> isSeriesFavorite(@PathVariable Integer seriesId) {
        return ResponseEntity.ok(watchlistService.isWatchlistSeries(seriesId));
    }
}
