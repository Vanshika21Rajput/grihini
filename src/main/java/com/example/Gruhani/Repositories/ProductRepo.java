package com.example.Gruhani.Repositories;

import com.example.Gruhani.models.product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<product,Long> {
}
