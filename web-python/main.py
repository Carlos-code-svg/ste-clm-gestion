from fastapi import FastAPI, UploadFile, File
from typing import List
import uvicorn

app = FastAPI(title="STE-CLM Document Processor")

@app.get("/")
def read_root():
    return {"message": "Microservicio Python para procesamiento de documentos STE-CLM activo"}

@app.post("/analyze-document")
async def analyze_document(file: UploadFile = File(...)):
    # Simulación de procesamiento de lenguaje natural (NLP) profesional
    # Aquí Python analizaría el contenido del PDF o imagen para categorizarlo
    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "analysis": "Documento verificado por IA",
        "category_suggestion": "Formación",
        "urgency_score": 0.85
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)
