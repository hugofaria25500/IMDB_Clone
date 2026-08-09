package com.example.backend.service;

import com.example.backend.entity.FavoriteMovie;
import com.example.backend.entity.FavoriteSeries;
import com.example.backend.entity.User;
import com.example.backend.repository.FavoriteMovieRepository;
import com.example.backend.repository.FavoriteSeriesRepository;
import com.example.backend.tmdb_client.dto.movies.MovieDetailsDTO;
import com.example.backend.tmdb_client.dto.series.SeriesDetailsDTO;
import com.example.backend.tmdb_client.response.movies.MovieDetailsResponse;
import com.example.backend.tmdb_client.response.movies.MoviesListResponse;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;

public class FavoriteService {

    private final FavoriteMovieRepository favoriteMovieRepository;
    private final FavoriteSeriesRepository favoriteSeriesRepository;

    private final MovieService movieService;

    private final SeriesService seriesService;

    public FavoriteService(FavoriteMovieRepository favoriteMovieRepository, FavoriteSeriesRepository favoriteSeriesRepository, MovieService movieService, SeriesService seriesService) {
        this.favoriteMovieRepository = favoriteMovieRepository;
        this.favoriteSeriesRepository = favoriteSeriesRepository;
        this.movieService = movieService;
        this.seriesService = seriesService;
    }

    // =========================
    // MOVIES
    // =========================

    public FavoriteMovie addMovie(Integer movieId) {

        User user = getAuthenticatedUser();

        if (favoriteMovieRepository.existsByUserAndMovieId(user, movieId)) {
            throw new RuntimeException("Movie is already in favourites");
        }

        FavoriteMovie favoriteMovie =
                new FavoriteMovie(user, movieId);

        return favoriteMovieRepository.save(favoriteMovie);
    }

    public void removeMovie(Integer movieId) {

        User user = getAuthenticatedUser();

        FavoriteMovie favoriteMovie =
                favoriteMovieRepository
                        .findByUserAndMovieId(user, movieId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Movie is not in favourites"
                                )
                        );

        favoriteMovieRepository.delete(favoriteMovie);
    }

    public List<MovieDetailsDTO> getFavoriteMovies() {

        User user = getAuthenticatedUser();

        List<FavoriteMovie> favorites = favoriteMovieRepository.findByUser(user);

        List<MovieDetailsDTO> movies = favorites.stream()
                .map(favorite ->
                        movieService.getMovieDetails(favorite.getMovieId())
                )
                .toList();

        return movies;
    }

    // =========================
    // SERIES
    // =========================

    public FavoriteSeries addSeries(Integer seriesId) {

        User user = getAuthenticatedUser();

        if (favoriteSeriesRepository.existsByUserAndSeriesId(user, seriesId)) {
            throw new RuntimeException("Series is already in favourites");
        }

        FavoriteSeries favoriteSeries = new FavoriteSeries(user, seriesId);

        return favoriteSeriesRepository.save(favoriteSeries);
    }

    public void removeSeries(Integer seriesId) {

        User user = getAuthenticatedUser();

        FavoriteSeries favoriteSeries =
                favoriteSeriesRepository
                        .findByUserAndSeriesId(user, seriesId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Series is not in favourites"
                                )
                        );

        favoriteSeriesRepository.delete(favoriteSeries);
    }

    public List<SeriesDetailsDTO> getFavoriteSeries() {
        User user = getAuthenticatedUser();

        List<FavoriteSeries> favorites = favoriteSeriesRepository.findByUser(user);

        List<SeriesDetailsDTO> series = favorites.stream()
                .map(favorite ->
                        seriesService.getSeriesDetails(favorite.getSeriesId())
                )
                .toList();

        return series;
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
}
