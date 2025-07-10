package com.example.Gruhani.Controllers;


import com.example.Gruhani.Repositories.SellerRepo;
import com.example.Gruhani.dtos.sellerDto;
import com.example.Gruhani.models.Seller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ProductandSeller {
    @Autowired
    SellerRepo srepo;

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody sellerDto seller)
    {
        try {
            System.out.println("Register endpoint hit with data: " + seller.getName());
            
            Seller sell = new Seller();
            sell.setId(java.util.UUID.randomUUID().toString()); // Generate unique ID
            sell.setAddress(seller.getAddress());
            sell.setApproved(false);
            sell.setName(seller.getName());
            sell.setContactNo(seller.getContactNumber());
            
            srepo.save(sell);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Seller registered successfully");
            response.put("sellerId", sell.getId());
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Registration failed: " + e.getMessage());
            
            return ResponseEntity.badRequest().body(response);
        }
    }
}
