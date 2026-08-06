package com.example.backend.TMDB_Client.dto.series;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SeriesTrailerDTO {

    @JsonProperty("name")
    private String name;

    @JsonProperty("key")
    private String key;

    @JsonProperty("site")
    private String site;

    @JsonProperty("type")
    private String type;

    @JsonProperty("official")
    private Boolean official;

}
