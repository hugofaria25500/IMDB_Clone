package com.example.backend.controller;

import com.example.backend.service.SeriesService;
import com.example.backend.tmdb_client.dto.series.BasicSeriesDTO;
import com.example.backend.tmdb_client.dto.series.SeriesDetailsDTO;
import com.example.backend.tmdb_client.dto.series.SeriesTrailerDTO;
import com.example.backend.tmdb_client.response.series.DiscoverSeriesListResponse;
import com.example.backend.tmdb_client.response.series.NewReleaseSeriesListResponse;
import com.example.backend.tmdb_client.response.series.SearchSeriesListResponse;
import com.example.backend.tmdb_client.response.series.SeriesListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/series")
public class SeriesController {

    @Autowired
    private final SeriesService seriesService;

    @GetMapping("/popular")
    public ResponseEntity<SeriesListResponse> getPopularSeries() {
        return ResponseEntity.ok(seriesService.getPopularSeries());
    }

    @GetMapping("/trending")
    public ResponseEntity<SeriesListResponse> getTrendingSeries() {
        return ResponseEntity.ok(seriesService.getTrendingSeries());
    }

    @GetMapping("/newReleases")
    public ResponseEntity<NewReleaseSeriesListResponse> getNewReleaseSeries() {
        return ResponseEntity.ok(seriesService.getNewReleaseSeries());
    }

    @GetMapping("/random")
    public ResponseEntity<BasicSeriesDTO> getRandomSeries() {
        return ResponseEntity.ok(seriesService.getRandomSeries());
    }

    @GetMapping("/search")
    public ResponseEntity<SearchSeriesListResponse> getSearchSeriesResults(@RequestParam(defaultValue = "") String query, @RequestParam(defaultValue = "1") int page) {
        return ResponseEntity.ok(seriesService.getSearchSeriesResults(query, page));
    }

    @GetMapping("/discover")
    public ResponseEntity<DiscoverSeriesListResponse> discoverSeries(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(required = false) Integer genre,
            @RequestParam(required = false) Integer yearFrom,
            @RequestParam(required = false) Integer yearTo,
            @RequestParam(required = false) Double rating,
            @RequestParam(defaultValue = "popularity.desc") String sortBy) {

        return ResponseEntity.ok(seriesService.discoverSeries(page, genre, yearFrom, yearTo, rating, sortBy));
    }

    @GetMapping("/{id}/trailer")
    public ResponseEntity<SeriesTrailerDTO> getSeriesTrailer(@PathVariable Integer id) {
        return ResponseEntity.ok(seriesService.getSeriesTrailer(id));
    }

    @GetMapping("/{id}/details")
    public ResponseEntity<SeriesDetailsDTO> getSeriesDetails(@PathVariable Integer id) {
        return ResponseEntity.ok(seriesService.getSeriesDetails(id));
    }
}
