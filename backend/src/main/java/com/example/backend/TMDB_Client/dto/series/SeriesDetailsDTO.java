package com.example.backend.TMDB_Client.dto.series;

import com.example.backend.TMDB_Client.dto.genres.GenreDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SeriesDetailsDTO {

    private Integer id;

    private String title;

    private String overview;

    private String tagline;

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
