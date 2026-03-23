package com.steclm.web;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Set;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;
    private String userType; // "FREE" or "AFFILIATE"
    private boolean emailVerified;

    @ElementCollection
    private Set<String> interests;
}
