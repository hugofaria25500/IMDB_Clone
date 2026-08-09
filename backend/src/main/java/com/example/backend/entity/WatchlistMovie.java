package com.example.backend.entity;

import jakarta.persistence.*;


@Entity
@Table(
        name = "watchlist_movies",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"user_id", "movie_id"})
        }
)
public class WatchlistMovie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "movie_id", nullable = false)
    private Integer movieId;

    public WatchlistMovie() {
    }

    public WatchlistMovie(User user, Integer movieId) {
        this.user = user;
        this.movieId = movieId;
    }

    public Integer getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Integer getMovieId() {
        return movieId;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }
}
