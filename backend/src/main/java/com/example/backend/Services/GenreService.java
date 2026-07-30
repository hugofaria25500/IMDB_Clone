package com.example.backend.Services;

import com.example.backend.TMDB_Client.client.GenreClient;
import com.example.backend.TMDB_Client.dto.GenreResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GenreService {

    @Autowired
    private final GenreClient genreClient;

    public GenreResponse getMovieGenres() {
        return genreClient.getMovieGenres();
    }
}
