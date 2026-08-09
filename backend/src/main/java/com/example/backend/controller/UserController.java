package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.request.UpdateUserRequest;
import com.example.backend.response.UserResponse;
import com.example.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> getCurrentUser(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        UserResponse response = userService.getUserResponse(user);
        return ResponseEntity.ok(response);
    }

    @PatchMapping("/me")
    public ResponseEntity<UserResponse> updateCurrentUser( Authentication authentication, @RequestBody UpdateUserRequest request) {
        User user = (User) authentication.getPrincipal();
        UserResponse response = userService.updateUser(user, request);
        return ResponseEntity.ok(response);
    }
}
