package com.example.Gruhani.Repositories;

import com.example.Gruhani.models.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepo extends JpaRepository<Seller,Long> {
}
