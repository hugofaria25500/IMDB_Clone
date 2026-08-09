package com.example.backend.service;

import com.example.backend.entity.FavoriteMovie;
import com.example.backend.entity.FavoriteSeries;
import com.example.backend.entity.User;
import com.example.backend.repository.FavoriteMovieRepository;
import com.example.backend.repository.FavoriteSeriesRepository;
import com.example.backend.response.FavoriteStatusResponse;
import com.example.backend.tmdb_client.dto.genres.GenreDTO;
import com.example.backend.tmdb_client.dto.movies.BasicMovieDTO;
import com.example.backend.tmdb_client.dto.movies.MovieDetailsDTO;
import com.example.backend.tmdb_client.dto.series.BasicSeriesDTO;
import com.example.backend.tmdb_client.dto.series.SeriesDetailsDTO;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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

    public List<BasicMovieDTO> getFavoriteMovies() {

        User user = getAuthenticatedUser();

        List<FavoriteMovie> favorites = favoriteMovieRepository.findByUser(user);

        return favorites.stream()
                .map(favorite ->
                        movieService.getMovieDetails(
                                favorite.getMovieId()
                        )
                )
                .map(this::toBasicSeriesDTO)
                .toList();
    }

    public FavoriteStatusResponse isMovieFavorite(Integer movieId) {
        User user = getAuthenticatedUser();
        boolean isFavorite = favoriteMovieRepository.existsByUserAndMovieId(user, movieId);
        return new FavoriteStatusResponse(isFavorite);
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

    public List<BasicSeriesDTO> getFavoriteSeries() {

        User user = getAuthenticatedUser();

        List<FavoriteSeries> favorites = favoriteSeriesRepository.findByUser(user);

        return favorites.stream()
                .map(favorite ->
                        seriesService.getSeriesDetails(
                                favorite.getSeriesId()
                        )
                )
                .map(this::toBasicSeriesDTO)
                .toList();
    }


    public FavoriteStatusResponse isSeriesFavorite(Integer seriesId) {
        User user = getAuthenticatedUser();
        boolean isFavorite = favoriteSeriesRepository.existsByUserAndSeriesId(user, seriesId);
        return new FavoriteStatusResponse(isFavorite);
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
