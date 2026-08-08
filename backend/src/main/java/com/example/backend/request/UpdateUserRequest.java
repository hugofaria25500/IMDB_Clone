package com.example.backend.request;


import jakarta.validation.constraints.NotBlank;
import lombok.Data;

public class UpdateUserRequest {

    @NotBlank
    private String icon;

    public UpdateUserRequest () {
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

}
