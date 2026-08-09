package com.example.backend.repository;

import com.example.backend.entity.FavoriteMovie;
import com.example.backend.entity.User;
import com.example.backend.entity.WatchlistMovie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface WatchlistMovieRepository extends JpaRepository<WatchlistMovie, Long> {

    List<WatchlistMovie> findByUser(User user);

    Optional<WatchlistMovie> findByUserAndMovieId(User user, Integer movieId);

    boolean existsByUserAndMovieId( User user, Integer movieId);
}
