package com.example.backend.Config;

import com.example.backend.TMDB_Client.config.TMDBProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Bean
    public WebClient webClient(TMDBProperties properties) {
        return WebClient.builder().baseUrl(properties.getBaseUrl()).build();
    }
}
