package com.example.backend.request;

public record CreateUserRequest(
        String username,
        String email,
        String password
) {
}