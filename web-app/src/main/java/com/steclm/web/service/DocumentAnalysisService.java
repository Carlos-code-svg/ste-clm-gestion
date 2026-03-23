package com.steclm.web.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Service
public class DocumentAnalysisService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String PYTHON_SERVICE_URL = "http://localhost:8001/analyze-document";

    public Map<String, Object> callPythonAnalyzer(byte[] fileData, String filename) {
        // Esta lógica en Java conecta con el microservicio de Python
        // para delegar el trabajo pesado de procesamiento de datos.
        try {
            return restTemplate.postForObject(PYTHON_SERVICE_URL, fileData, Map.class);
        } catch (Exception e) {
            return Map.of("error", "Python service unavailable");
        }
    }
}
