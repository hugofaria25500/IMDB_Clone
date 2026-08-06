package com.example.backend.tmdb_client.dto.series;

import com.example.backend.tmdb_client.dto.genres.GenreDTO;
import com.example.backend.tmdb_client.dto.media.ProductionCompanyDTO;
import com.example.backend.tmdb_client.dto.media.ProductionCountryDTO;
import com.example.backend.tmdb_client.dto.media.SpokenLanguageDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SeriesDetailsDTO {

    private Integer id;

    private String originalName;

    private String overview;

    private Integer runtime;

    private String firstAirDate;

    private Double rating;

    private String posterPath;

    private Long totalEpisodes;

    private Long totalSeasons;

    private String status;

    private List<GenreDTO> genres;

    private List<ProductionCompanyDTO> productionCompanies;

    private List<ProductionCountryDTO> productionCountries;

    private List<SpokenLanguageDTO> spokenLanguages;

}
