package com.example.backend.tmdb_client.response.series;

import com.example.backend.tmdb_client.dto.genres.GenreDTO;
import com.example.backend.tmdb_client.dto.media.ProductionCompanyDTO;
import com.example.backend.tmdb_client.dto.media.ProductionCountryDTO;
import com.example.backend.tmdb_client.dto.media.SpokenLanguageDTO;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class SeriesDetailsResponse {

    @JsonProperty("id")
    private Integer id;

    @JsonAlias("original_name")
    private String originalName;

    @JsonProperty("overview")
    private String overview;

    @JsonAlias("first_air_date")
    private String firstReleaseDate;

    @JsonAlias("vote_average")
    private Double voteAverage;

    @JsonAlias("poster_path")
    private String posterPath;

    @JsonProperty("number_of_episodes")
    private Long totalEpisodes;

    @JsonProperty("number_of_seasons")
    private Long totalSeasons;

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