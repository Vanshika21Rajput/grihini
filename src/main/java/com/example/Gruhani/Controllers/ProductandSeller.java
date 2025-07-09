package com.example.Gruhani.Controllers;


import com.example.Gruhani.Repositories.SellerRepo;
import com.example.Gruhani.dtos.sellerDto;
import com.example.Gruhani.models.Seller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ProductandSeller {
    @Autowired
    SellerRepo srepo;

    @PostMapping("/register")
    public void register(@ModelAttribute sellerDto seller)
    {
        System.out.print("register ke ander");
        Seller sell=new Seller();
           sell.setAddress(seller.getAddress());
           sell.setApproved(false);
           sell.setName(seller.getName());
           sell.setContactNo(seller.getContactNumber());
        srepo.save(sell);
    }
}
