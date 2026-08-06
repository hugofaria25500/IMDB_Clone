package com.example.backend.tmdb_client.client;

import com.example.backend.tmdb_client.config.TMDBProperties;
import com.example.backend.tmdb_client.response.movies.*;
import com.example.backend.tmdb_client.response.series.*;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.concurrent.ThreadLocalRandom;
@Service
@RequiredArgsConstructor
public class SeriesClient {

    private final WebClient webClient;
    private final TMDBProperties properties;

    @Cacheable("popularSeries")
    public SeriesListResponse getPopularSeries() {

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/tv/popular")
                        .queryParam("api_key", properties.getApiKey())
                        .build())
                .retrieve()
                .bodyToMono(SeriesListResponse.class)
                .block();
    }

    @Cacheable("trendingSeries")
    public SeriesListResponse getTrendingSeries() {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/trending/tv/week")
                        .queryParam("api_key", properties.getApiKey())
                        .build())
                .retrieve()
                .bodyToMono(SeriesListResponse.class)
                .block();
    }

    @Cacheable("newSeriesReleases")
    public NewReleaseSeriesListResponse getNewSeriesReleases() {

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/tv/on_the_air")
                        .queryParam("api_key", properties.getApiKey())
                        .build())
                .retrieve()
                .bodyToMono(NewReleaseSeriesListResponse.class)
                .block();
    }

    public SeriesListResponse getRandomSeries() {

        int randomizePageResult = ThreadLocalRandom.current().nextInt(1, 51);
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/discover/tv")
                        .queryParam("api_key", properties.getApiKey())
                        .queryParam("sort_by", "popularity.asc")
                        .queryParam("page", randomizePageResult)
                        .build())
                .retrieve()
                .bodyToMono(SeriesListResponse.class)
                .block();
    }

    public SearchSeriesListResponse getSearchSeriesResults(String query, int page) {

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/search/movie")
                        .queryParam("api_key", properties.getApiKey())
                        .queryParam("query", query)
                        .queryParam("page", page)
                        .build())
                .retrieve()
                .bodyToMono(SearchSeriesListResponse.class)
                .block();
    }

    public DiscoverSeriesListResponse discoverSeries(Integer page, Integer genre, Integer yearFrom, Integer yearTo, Double rating, String sortBy) {

        return webClient.get()
                .uri(uriBuilder -> {
                    uriBuilder
                            .path("/discover/tv")
                            .queryParam("api_key", properties.getApiKey())
                            .queryParam("page", page)
                            .queryParam("sort_by", sortBy);
                    if (genre != null) {
                        uriBuilder.queryParam("with_genres", genre);
                    }

                    if (yearFrom != null) {
                        uriBuilder.queryParam(
                                "first_air_date.gte",
                                yearFrom + "-01-01"
                        );
                    }

                    if (yearTo != null) {
                        uriBuilder.queryParam(
                                "first_air_date.lte",
                                yearTo + "-12-31"
                        );
                    }

                    if (rating != null) {
                        uriBuilder.queryParam(
                                "vote_average.gte",
                                rating
                        );
                    }
                    return uriBuilder.build();
                })
                .retrieve()
                .bodyToMono(DiscoverSeriesListResponse.class)
                .block();
    }

    public SeriesTrailerResponse getSeriesTrailer(Integer seriesId) {

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/tv/{id}/videos")
                        .queryParam("api_key", properties.getApiKey())
                        .build(seriesId))
                .retrieve()
                .bodyToMono(SeriesTrailerResponse.class)
                .block();
    }

    @Cacheable(value = "seriesDetails", key = "#seriesId")
    public SeriesDetailsResponse getSeriesDetails(Integer seriesId) {

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/tv/{id}")
                        .queryParam("api_key", properties.getApiKey())
                        .build(seriesId))
                .retrieve()
                .bodyToMono(SeriesDetailsResponse.class)
                .block();
    }
}
