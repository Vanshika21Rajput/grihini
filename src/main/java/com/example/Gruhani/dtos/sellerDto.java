package com.example.Gruhani.dtos;

import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;

import java.nio.ByteBuffer;
import java.util.Base64;
import java.util.UUID;

public class sellerDto {
    @Id
    Long id;
    String name;
    String address;
    String ContactNumber;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactNumber() {
        return ContactNumber;
    }

    public void setContactNumber(String contactNumber) {
        ContactNumber = contactNumber;
    }

    @PrePersist
    public void saveid()
    {
        if (this.id == null) {
            this.id = Long.valueOf(generateCompactUUID());
        }
    }
    private String generateCompactUUID() {
        UUID uuid = UUID.randomUUID();
        ByteBuffer buffer = ByteBuffer.allocate(16);
        buffer.putLong(uuid.getMostSignificantBits());
        buffer.putLong(uuid.getLeastSignificantBits());
        return Base64.getUrlEncoder().withoutPadding().encodeToString(buffer.array());
    }
}
