package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(
        name = "watchlist_series",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"user_id", "series_id"})
        }
)
public class WatchlistSeries {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "series_id", nullable = false)
    private Integer seriesId;

    public WatchlistSeries() {
    }

    public WatchlistSeries(User user, Integer seriesId) {
        this.user = user;
        this.seriesId = seriesId;
    }

    public Integer getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Integer getSeriesId() {
        return seriesId;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setSeriesId(Integer seriesId) {
        this.seriesId = seriesId;
    }
}
