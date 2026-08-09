package com.example.backend.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FavoriteStatusResponse {

    private boolean favorite;
}