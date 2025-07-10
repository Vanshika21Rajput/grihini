package com.example.Gruhani.Repositories;

import com.example.Gruhani.models.product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<product,Long> {
}
