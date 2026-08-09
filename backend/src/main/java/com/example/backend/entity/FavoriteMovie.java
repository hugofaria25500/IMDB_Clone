package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(
        name = "favorite_movies",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = {"user_id", "movie_id"})
        }
)
public class FavoriteMovie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "movie_id", nullable = false)
    private Long movieId;

    public FavoriteMovie() {
    }

    public FavoriteMovie(User user, Long movieId) {
        this.user = user;
        this.movieId = movieId;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }
}
