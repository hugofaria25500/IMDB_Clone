package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(
        name = "favorite_series",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = {"user_id", "series_id"})
        }
)
public class FavoriteSeries {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "series_id", nullable = false)
    private Integer seriesId;

    public FavoriteSeries() {
    }

    public FavoriteSeries(User user, Integer seriesId) {
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