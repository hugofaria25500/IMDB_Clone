package com.example.backend.TMDB_Client.response.movies;

import com.example.backend.TMDB_Client.dto.genres.GenreDTO;
import com.example.backend.TMDB_Client.dto.movies.ProductionCompanyDTO;
import com.example.backend.TMDB_Client.dto.movies.ProductionCountryDTO;
import com.example.backend.TMDB_Client.dto.movies.SpokenLanguageDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class MovieDetailsResponse {

    @JsonProperty("id")
    private Integer id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("overview")
    private String overview;

    @JsonProperty("tagline")
    private String tagline;

    @JsonProperty("runtime")
    private Integer runtime;

    @JsonAlias("release_date")
    private String releaseDate;

    @JsonAlias("vote_average")
    private Double voteAverage;

    @JsonAlias("poster_path")
    private String posterPath;

    @JsonProperty("budget")
    private Long budget;

    @JsonProperty("revenue")
    private Long revenue;

    @JsonProperty("status")
    private String status;

    @JsonProperty("genres")
    private List<GenreDTO> genres;

    @JsonAlias("production_companies")
    private List<ProductionCompanyDTO> productionCompanies;

    @JsonAlias("production_countries")
    private List<ProductionCountryDTO> productionCountries;

    @JsonAlias("spoken_languages")
    private List<SpokenLanguageDTO> spokenLanguages;

}