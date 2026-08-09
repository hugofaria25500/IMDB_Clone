package com.example.backend.service;

import com.example.backend.entity.FavoriteMovie;
import com.example.backend.entity.FavoriteSeries;
import com.example.backend.entity.User;
import com.example.backend.repository.FavoriteMovieRepository;
import com.example.backend.repository.FavoriteSeriesRepository;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;

public class FavoriteService {

    private final FavoriteMovieRepository favoriteMovieRepository;
    private final FavoriteSeriesRepository favoriteSeriesRepository;

    public FavoriteService(FavoriteMovieRepository favoriteMovieRepository, FavoriteSeriesRepository favoriteSeriesRepository) {
        this.favoriteMovieRepository = favoriteMovieRepository;
        this.favoriteSeriesRepository = favoriteSeriesRepository;
    }

    // =========================
    // MOVIES
    // =========================

    public FavoriteMovie addMovie(Long movieId) {

        User user = getAuthenticatedUser();

        if (favoriteMovieRepository.existsByUserAndMovieId(user, movieId)) {
            throw new RuntimeException("Movie is already in favourites");
        }

        FavoriteMovie favoriteMovie =
                new FavoriteMovie(user, movieId);

        return favoriteMovieRepository.save(favoriteMovie);
    }

    public void removeMovie(Long movieId) {

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

    public List<FavoriteMovie> getFavoriteMovies() {

        User user = getAuthenticatedUser();

        return favoriteMovieRepository.findByUser(user);
    }

    // =========================
    // SERIES
    // =========================

    // =========================
    // SERIES
    // =========================

    public FavoriteSeries addSeries(Long seriesId) {

        User user = getAuthenticatedUser();

        if (favoriteSeriesRepository.existsByUserAndSeriesId(user, seriesId)) {
            throw new RuntimeException("Series is already in favourites");
        }

        FavoriteSeries favoriteSeries = new FavoriteSeries(user, seriesId);

        return favoriteSeriesRepository.save(favoriteSeries);
    }

    public void removeSeries(Long seriesId) {

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

    public List<FavoriteSeries> getFavoriteSeries() {
        User user = getAuthenticatedUser();
        return favoriteSeriesRepository.findByUser(user);
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
