package com.example.backend.response;

public record UserResponse(
            Long id,
            String username,
            String email
    ) {
}
