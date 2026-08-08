package com.example.backend.response;

import com.example.backend.entity.RefreshToken;
import com.example.backend.entity.User;

public record LoginResponse(
        String token,

        String refreshToken,
        UserResponse userResponse
) {}