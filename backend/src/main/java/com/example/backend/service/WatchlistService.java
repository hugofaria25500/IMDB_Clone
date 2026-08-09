package com.example.backend.service;

import com.example.backend.entity.*;
import com.example.backend.repository.FavoriteMovieRepository;
import com.example.backend.repository.FavoriteSeriesRepository;
import com.example.backend.repository.WatchlistMovieRepository;
import com.example.backend.repository.WatchlistSeriesRepository;
import com.example.backend.response.FavoriteStatusResponse;
import com.example.backend.response.WatchlistStatusResponse;
import com.example.backend.tmdb_client.dto.genres.GenreDTO;
import com.example.backend.tmdb_client.dto.movies.BasicMovieDTO;
import com.example.backend.tmdb_client.dto.movies.MovieDetailsDTO;
import com.example.backend.tmdb_client.dto.series.BasicSeriesDTO;
import com.example.backend.tmdb_client.dto.series.SeriesDetailsDTO;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class WatchlistService {

    private final WatchlistMovieRepository watchlistMovieRepository;
    private final WatchlistSeriesRepository watchlistSeriesRepository;

    private final MovieService movieService;

    private final SeriesService seriesService;

    public WatchlistService(WatchlistMovieRepository watchlistMovieRepository, WatchlistSeriesRepository watchlistSeriesRepository, MovieService movieService, SeriesService seriesService) {
        this.watchlistMovieRepository = watchlistMovieRepository;
        this.watchlistSeriesRepository = watchlistSeriesRepository;
        this.movieService = movieService;
        this.seriesService = seriesService;
    }

    // =========================
    // MOVIES
    // =========================

    public WatchlistMovie addMovie(Integer movieId) {

        User user = getAuthenticatedUser();

        if (watchlistMovieRepository.existsByUserAndMovieId(user, movieId)) {
            throw new RuntimeException("Movie is already in favourites");
        }

        WatchlistMovie watchlistMovie = new WatchlistMovie(user, movieId);

        return watchlistMovieRepository.save(watchlistMovie);
    }

    public void removeMovie(Integer movieId) {

        User user = getAuthenticatedUser();

        WatchlistMovie watchlistMovie =
                watchlistMovieRepository
                        .findByUserAndMovieId(user, movieId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Movie is not in favourites"
                                )
                        );

        watchlistMovieRepository.delete(watchlistMovie);
    }

    public List<BasicMovieDTO> getWatchlistMovies() {

        User user = getAuthenticatedUser();

        List<WatchlistMovie> favorites = watchlistMovieRepository.findByUser(user);

        return favorites.stream()
                .map(favorite ->
                        movieService.getMovieDetails(
                                favorite.getMovieId()
                        )
                )
                .map(this::toBasicSeriesDTO)
                .toList();
    }

    public WatchlistStatusResponse isWatchlistMovie(Integer movieId) {
        User user = getAuthenticatedUser();
        boolean isFavorite = watchlistMovieRepository.existsByUserAndMovieId(user, movieId);
        return new WatchlistStatusResponse(isFavorite);
    }

    // =========================
    // SERIES
    // =========================

    public WatchlistSeries addSeries(Integer seriesId) {

        User user = getAuthenticatedUser();

        if (watchlistSeriesRepository.existsByUserAndSeriesId(user, seriesId)) {
            throw new RuntimeException("Series is already in favourites");
        }

        WatchlistSeries watchlistSeries = new WatchlistSeries(user, seriesId);

        return watchlistSeriesRepository.save(watchlistSeries);
    }

    public void removeSeries(Integer seriesId) {

        User user = getAuthenticatedUser();

        WatchlistSeries watchlistSeries =
                watchlistSeriesRepository
                        .findByUserAndSeriesId(user, seriesId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Series is not in favourites"
                                )
                        );

        watchlistSeriesRepository.delete(watchlistSeries);
    }

    public List<BasicSeriesDTO> getWatchlistSeries() {

        User user = getAuthenticatedUser();

        List<WatchlistSeries> favorites = watchlistSeriesRepository.findByUser(user);

        return favorites.stream()
                .map(favorite ->
                        seriesService.getSeriesDetails(
                                favorite.getSeriesId()
                        )
                )
                .map(this::toBasicSeriesDTO)
                .toList();
    }


    public WatchlistStatusResponse isWatchlistSeries(Integer seriesId) {
        User user = getAuthenticatedUser();
        boolean isFavorite = watchlistSeriesRepository.existsByUserAndSeriesId(user, seriesId);
        return new WatchlistStatusResponse(isFavorite);
    }

    // =========================
    // USER CONTEXT
    // =========================

    private User getAuthenticatedUser() {

        return (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
    }

    // =========================
    // MAPPER
    // =========================

    private BasicSeriesDTO toBasicSeriesDTO(SeriesDetailsDTO series) {

        BasicSeriesDTO dto = new BasicSeriesDTO();

        dto.setId(series.getId());
        dto.setOriginalName(series.getOriginalName());
        dto.setPosterPath(series.getPosterPath());
        dto.setGenreIds(
                series.getGenres()
                        .stream()
                        .map(GenreDTO::getId)
                        .toList()
        );
        dto.setFirstReleaseDate(series.getFirstAirDate());
        dto.setRating(series.getRating().toString());

        return dto;
    }

    private BasicMovieDTO toBasicSeriesDTO(MovieDetailsDTO movie) {

        BasicMovieDTO dto = new BasicMovieDTO();

        dto.setId(movie.getId());
        dto.setTitle(movie.getTitle());
        dto.setPosterPath(movie.getPosterPath());
        dto.setGenreIds(
                movie.getGenres()
                        .stream()
                        .map(GenreDTO::getId)
                        .toList()
        );
        dto.setReleaseDate(movie.getReleaseDate());
        dto.setRating(movie.getRating().toString());

        return dto;
    }
}