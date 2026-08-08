package com.example.backend.config;

import com.example.backend.security.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtAuthenticationFilter jwtAuthenticationFilter) throws Exception {

        http
            .csrf(csrf -> csrf.disable())
            .cors(Customizer.withDefaults())
            .authorizeHttpRequests(auth -> auth
                    // PUBLIC
                    .requestMatchers(
                            "/api/auth/**",
                            "/api/movies/**",
                            "/api/series/**",
                            "/api/genres/**",
                            "/h2-console/**"
                    ).permitAll()

                    // PRIVATE
                    .requestMatchers(
                            "/api/favorites/**",
                            "/api/watchlist/**",
                            "/api/users/**"
                    ).authenticated()

                    // Por segurança, tudo o que não definirmos
                    // fica protegido
                    .anyRequest().authenticated()
            )
            .headers(headers ->
                headers.frameOptions(frame ->
                        frame.sameOrigin()
                )
            )
            .addFilterBefore(
                    jwtAuthenticationFilter,
                    UsernamePasswordAuthenticationFilter.class
            );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
