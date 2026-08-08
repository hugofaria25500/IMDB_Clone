package com.example.backend.tmdb_client.dto.movies;

import com.example.backend.tmdb_client.dto.genres.GenreDTO;
import com.example.backend.tmdb_client.dto.media.ProductionCompanyDTO;
import com.example.backend.tmdb_client.dto.media.ProductionCountryDTO;
import com.example.backend.tmdb_client.dto.media.SpokenLanguageDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class MovieDetailsDTO {

    private Integer id;

    private String title;

    private String overview;

    private Integer runtime;

    private String releaseDate;

    private Double rating;

    private String posterPath;

    private Long budget;

    private Long revenue;

    private String status;

    private List<GenreDTO> genres;

    private List<ProductionCompanyDTO> productionCompanies;

    private List<ProductionCountryDTO> productionCountries;

    private List<SpokenLanguageDTO> spokenLanguages;

}
