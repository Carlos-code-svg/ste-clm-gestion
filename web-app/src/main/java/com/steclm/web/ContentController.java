package com.steclm.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class ContentController {

    @GetMapping("/")
    public String index() {
        return "index"; // Página de inicio/login
    }

    @GetMapping("/form")
    public String showForm() {
        return "form"; // Formulario de carga de contenido
    }

    @PostMapping("/submit-content")
    public String submitContent(
            @RequestParam("subject") String subject,
            @RequestParam("introduction") String introduction,
            @RequestParam("files") MultipartFile[] files,
            Model model) {
        
        // Lógica para guardar contenido en la base de datos
        // Sincronización con la app se realizaría aquí o vía API REST
        
        model.addAttribute("message", "Contenido enviado exitosamente.");
        return "success";
    }
}
