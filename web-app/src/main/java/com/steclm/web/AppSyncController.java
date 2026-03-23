package com.steclm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class AppSyncController {

    // Simulación de repositorio
    private List<Post> posts;

    @GetMapping("/posts")
    public List<Post> getPostsByInterests(@RequestParam List<String> interests) {
        // En una implementación real, esto consultaría la DB filtrando por intereses
        return posts.stream()
                .filter(p -> interests.contains(p.getCategory()))
                .collect(Collectors.toList());
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        // Lógica de registro y validación de email para afiliados
        if ("AFFILIATE".equals(user.getUserType())) {
            // Enviar email de validación
            return "Registro exitoso. Verifique su email.";
        }
        return "Registro exitoso.";
    }
}
