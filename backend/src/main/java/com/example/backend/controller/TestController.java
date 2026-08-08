package com.example.backend.controller;

import com.example.backend.entity.User;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/auth")
    public String testAuthentication(Authentication authentication) {

        User user = (User) authentication.getPrincipal();

        return "Authenticated as: " + user.getUsername();
    }
}
