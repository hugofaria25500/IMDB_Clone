package com.example.backend.repository;

import com.example.backend.entity.User;
import com.example.backend.entity.WatchlistSeries;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface WatchlistSeriesRepository extends JpaRepository<WatchlistSeries, Long> {

    List<WatchlistSeries> findByUser(User user);

    Optional<WatchlistSeries> findByUserAndSeriesId(User user, Integer seriesId);

    boolean existsByUserAndSeriesId(User user, Integer seriesId);
}

