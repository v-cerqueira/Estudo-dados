import PyPDF2
import os
import re

def extract_text_from_pdf(pdf_path):
    """Extrai texto de um arquivo PDF"""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text()
            return text
    except Exception as e:
        print(f"Erro ao ler {pdf_path}: {e}")
        return ""

def analyze_pdfs():
    """Analisa todos os PDFs no diretório atual"""
    pdf_files = [f for f in os.listdir('.') if f.endswith('.pdf')]
    
    for pdf_file in pdf_files:
        print(f"\n{'='*50}")
        print(f"ANALISANDO: {pdf_file}")
        print(f"{'='*50}")
        
        text = extract_text_from_pdf(pdf_file)
        
        if text:
            # Procurar por padrões de questões
            questions = re.findall(r'(\d+[\.\)]?\s*[A-Za-zÀ-ÿ\s,;:?!.()]+)', text)
            
            print(f"Texto extraído (primeiros 500 caracteres):")
            print(text[:500])
            print(f"\nTotal de caracteres: {len(text)}")
            
            if questions:
                print(f"\nPossíveis questões encontradas:")
                for i, q in enumerate(questions[:10]):  # Mostrar apenas as primeiras 10
                    print(f"{i+1}. {q.strip()}")
        else:
            print("Não foi possível extrair texto deste PDF")

if __name__ == "__main__":
    analyze_pdfs() 