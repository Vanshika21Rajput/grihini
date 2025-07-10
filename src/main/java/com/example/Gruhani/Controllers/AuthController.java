package com.example.Gruhani.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @GetMapping("/home")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> home() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Map<String, Object> response = new HashMap<>();
        
        if (auth != null && auth.isAuthenticated() && !auth.getName().equals("anonymousUser")) {
            Map<String, Object> user = new HashMap<>();
            user.put("id", "1");
            user.put("name", auth.getName());
            user.put("email", auth.getName());
            user.put("type", "customer");
            
            response.put("authenticated", true);
            response.put("user", user);
            response.put("message", "Welcome to Gruhani!");
        } else {
            response.put("authenticated", false);
            response.put("message", "Please login to continue");
        }
        
        return ResponseEntity.ok(response);
    }

    @GetMapping("/logins")
    public String loginPage() {
        return "redirect:http://localhost:8080"; // Redirect to frontend login
    }
}