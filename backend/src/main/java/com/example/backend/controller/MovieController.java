package com.example.backend.Controllers;

import com.example.backend.Services.MovieService;
import com.example.backend.TMDB_Client.dto.movies.BasicMovieDTO;
import com.example.backend.TMDB_Client.dto.movies.MovieDetailsDTO;
import com.example.backend.TMDB_Client.dto.movies.MovieTrailerDTO;
import com.example.backend.TMDB_Client.response.movies.DiscoverMoviesListResponse;
import com.example.backend.TMDB_Client.response.movies.MoviesListResponse;
import com.example.backend.TMDB_Client.response.movies.NewReleaseMoviesListResponse;
import com.example.backend.TMDB_Client.response.movies.SearchMoviesListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/search")
    public ResponseEntity<SearchMoviesListResponse> getSearchMoviesResults(@RequestParam(defaultValue = "") String query, @RequestParam(defaultValue = "1") int page) {
        return ResponseEntity.ok(movieService.getSearchMoviesResults(query, page));
    }

    @GetMapping("/discover")
    public ResponseEntity<DiscoverMoviesListResponse> discoverMovies(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(required = false) Integer genre,
            @RequestParam(required = false) Integer yearFrom,
            @RequestParam(required = false) Integer yearTo,
            @RequestParam(required = false) Double rating,
            @RequestParam(defaultValue = "popularity.desc") String sortBy) {

        return ResponseEntity.ok(movieService.discoverMovies(page, genre, yearFrom, yearTo, rating, sortBy));
    }

    @GetMapping("/{id}/trailer")
    public ResponseEntity<MovieTrailerDTO> getMovieTrailer(@PathVariable Integer id) {
        return ResponseEntity.ok(movieService.getMovieTrailer(id));
    }

    @GetMapping("/{id}/details")
    public ResponseEntity<MovieDetailsDTO> getMovieDetails(@PathVariable Integer id) {
        return ResponseEntity.ok(movieService.getMovieDetails(id));
    }
}