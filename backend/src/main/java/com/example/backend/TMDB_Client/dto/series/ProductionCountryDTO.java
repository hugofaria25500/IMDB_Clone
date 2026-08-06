package com.example.backend.TMDB_Client.dto.series;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ProductionCountryDTO {

    @JsonProperty("name")
    private String name;

}
