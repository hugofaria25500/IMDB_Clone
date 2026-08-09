package com.example.backend.repository;

import com.example.backend.entity.FavoriteSeries;
import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FavoriteSeriesRepository
        extends JpaRepository<FavoriteSeries, Long> {

    List<FavoriteSeries> findByUser(User user);

    Optional<FavoriteSeries> findByUserAndSeriesId(User user, Integer seriesId);

    boolean existsByUserAndSeriesId(User user, Integer seriesId);
}
