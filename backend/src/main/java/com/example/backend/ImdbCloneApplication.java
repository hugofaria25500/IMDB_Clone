package com.example.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class ImdbCloneApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImdbCloneApplication.class, args);
	}

}
