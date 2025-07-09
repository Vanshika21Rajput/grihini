package com.example.Gruhani.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class product {
    @Id
    Long id;
    String name;
    String description;
    Float price;
    @ManyToOne
    @JoinColumn(name="seller_id")
    Seller seller;


}
