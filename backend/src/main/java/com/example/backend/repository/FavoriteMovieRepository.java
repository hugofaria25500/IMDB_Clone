package com.example.backend.repository;

import com.example.backend.entity.FavoriteMovie;
import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FavoriteMovieRepository
        extends JpaRepository<FavoriteMovie, Long> {

    List<FavoriteMovie> findByUser(User user);

    Optional<FavoriteMovie> findByUserAndMovieId(User user, Integer movieId);

    boolean existsByUserAndMovieId( User user, Integer movieId);
}
