package com.example.backend.service;

import com.example.backend.tmdb_client.client.SeriesClient;
import com.example.backend.tmdb_client.dto.series.BasicSeriesDTO;
import com.example.backend.tmdb_client.dto.series.SeriesDetailsDTO;
import com.example.backend.tmdb_client.dto.series.SeriesTrailerDTO;
import com.example.backend.tmdb_client.response.series.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SeriesService {

    private final SeriesClient seriesClient;

    public SeriesListResponse getPopularSeries() {
        return seriesClient.getPopularSeries();
    }

    public SeriesListResponse getTrendingSeries() { return seriesClient.getTrendingSeries(); }

    public NewReleaseSeriesListResponse getNewReleaseSeries() { return seriesClient.getNewSeriesReleases(); }

    public BasicSeriesDTO getRandomMovie(){
        return seriesClient.getRandomSeries().getResults().get(0);
    }

    public SearchSeriesListResponse getSearchSeriesResults(String query, int page) { return seriesClient.getSearchSeriesResults(query,page); }

    public DiscoverSeriesListResponse discoverSeries(Integer page, Integer genre, Integer yearFrom, Integer yearTo, Double rating, String sortBy) {
        return seriesClient.discoverSeries(page, genre, yearFrom, yearTo, rating, sortBy);
    }

    public SeriesTrailerDTO getSeriesTrailer(Integer seriesId) {

        SeriesTrailerResponse response = seriesClient.getSeriesTrailer(seriesId);

        if (response == null || response.getResults() == null) {
            return null;
        }

        return response.getResults().stream()
                .filter(video -> "YouTube".equals(video.getSite()))
                .filter(video -> "Trailer".equals(video.getType()))
                .filter(video -> Boolean.TRUE.equals(video.getOfficial()))
                .findFirst()

                .or(() ->
                        response.getResults().stream()
                                .filter(video -> "YouTube".equals(video.getSite()))
                                .filter(video -> "Trailer".equals(video.getType()))
                                .findFirst()
                )

                .or(() ->
                        response.getResults().stream()
                                .filter(video -> "YouTube".equals(video.getSite()))
                                .findFirst()
                )

                .orElse(null);
    }

    public SeriesDetailsDTO getSeriesDetails(Integer seriesId) {

        SeriesDetailsResponse response = seriesClient.getSeriesDetails(seriesId);

        return SeriesDetailsDTO.builder()

                .id(response.getId())
                .originalName(response.getOriginalName())
                .overview(response.getOverview())
                .runtime(response.getRuntime())
                .firstAirDate(response.getFirstReleaseDate())
                .rating(response.getVoteAverage())
                .posterPath(response.getPosterPath())
                .totalEpisodes(response.getTotalEpisodes())
                .totalSeasons(response.getTotalSeasons())
                .status(response.getStatus())
                .genres(response.getGenres())
                .productionCompanies(response.getProductionCompanies())
                .productionCountries(response.getProductionCountries())
                .spokenLanguages(response.getSpokenLanguages())
                .build();
    }
}
