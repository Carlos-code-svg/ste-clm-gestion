package com.steclm.web;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "posts")
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;

    @Column(columnDefinition = "TEXT")
    private String introduction;

    private String attachmentPath;

    private String category; // "PRIMARIA", "SECUNDARIA", etc.

    private LocalDateTime createdAt = LocalDateTime.now();
}
