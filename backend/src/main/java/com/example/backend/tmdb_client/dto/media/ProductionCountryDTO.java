package com.example.backend.tmdb_client.dto.media;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ProductionCountryDTO {

    @JsonProperty("name")
    private String name;

}
