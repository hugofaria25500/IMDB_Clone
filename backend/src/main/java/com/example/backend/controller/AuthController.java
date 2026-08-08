package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.request.LoginRequest;
import com.example.backend.request.RefreshRequest;
import com.example.backend.response.LoginResponse;
import com.example.backend.response.UserResponse;
import com.example.backend.service.AuthService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
    @PostMapping("/refresh")
    public LoginResponse refresh(@RequestBody RefreshRequest request) {
        System.out.println("🔥 REFRESH ENDPOINT HIT");
        return authService.refresh(request.refreshToken());
    }
}