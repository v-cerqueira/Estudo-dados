from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def criar_resumo_executivo():
    """Cria um resumo executivo para revisão rápida"""
    
    doc = SimpleDocTemplate("Resumo_Executivo_Estrutura_Dados.pdf", pagesize=A4)
    styles = getSampleStyleSheet()
    
    # Estilos
    title_style = ParagraphStyle(
        'Title',
        parent=styles['Heading1'],
        fontSize=18,
        spaceAfter=20,
        alignment=TA_CENTER,
        textColor=colors.darkblue
    )
    
    subtitle_style = ParagraphStyle(
        'Subtitle',
        parent=styles['Heading2'],
        fontSize=14,
        spaceAfter=15,
        textColor=colors.darkred
    )
    
    normal_style = ParagraphStyle(
        'Normal',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=8
    )
    
    highlight_style = ParagraphStyle(
        'Highlight',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=8,
        textColor=colors.darkgreen,
        leftIndent=20
    )
    
    story = []
    
    # Título
    story.append(Paragraph("RESUMO EXECUTIVO - ESTRUTURA DE DADOS", title_style))
    story.append(Paragraph("2º Bimestre - Revisão Rápida para Prova", subtitle_style))
    story.append(Spacer(1, 20))
    
    # 1. CONCEITOS FUNDAMENTAIS
    story.append(Paragraph("1. CONCEITOS FUNDAMENTAIS", subtitle_style))
    
    story.append(Paragraph("Dados:", normal_style))
    story.append(Paragraph("• Elementos brutos que representam aspectos da realidade", highlight_style))
    story.append(Paragraph("• Matéria-prima que se transforma em informação", highlight_style))
    
    story.append(Paragraph("Estruturas de Dados:", normal_style))
    story.append(Paragraph("• <b>Homogêneas:</b> Um tipo de dado (vetor de inteiros)", highlight_style))
    story.append(Paragraph("• <b>Heterogêneas:</b> Diferentes tipos (struct)", highlight_style))
    
    story.append(PageBreak())
    
    # 2. COMPARAÇÃO DE ESTRUTURAS
    story.append(Paragraph("2. COMPARAÇÃO DE ESTRUTURAS", subtitle_style))
    
    # Tabela comparativa
    data = [
        ['Estrutura', 'Princípio', 'Operações', 'Vantagens', 'Desvantagens'],
        ['Vetor', 'Acesso Direto', 'Inserção/Remoção', 'Acesso rápido', 'Tamanho fixo'],
        ['Lista Encadeada', 'Ponteiros', 'Inserção/Remoção', 'Tamanho dinâmico', 'Sem acesso direto'],
        ['Pilha', 'LIFO', 'Push/Pop', 'Simples', 'Acesso limitado'],
        ['Fila', 'FIFO', 'Enqueue/Dequeue', 'Ordem garantida', 'Acesso limitado']
    ]
    
    table = Table(data, colWidths=[80, 80, 80, 100, 100])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
        ('GRID', (0, 0), (-1, -1), 1, colors.black)
    ]))
    
    story.append(table)
    story.append(Spacer(1, 20))
    
    # 3. PRINCÍPIOS FUNDAMENTAIS
    story.append(Paragraph("3. PRINCÍPIOS FUNDAMENTAIS", subtitle_style))
    
    story.append(Paragraph("LIFO (Last In, First Out):", normal_style))
    story.append(Paragraph("• Último a entrar, primeiro a sair", highlight_style))
    story.append(Paragraph("• Exemplo: Pilha de pratos, call stack", highlight_style))
    
    story.append(Paragraph("FIFO (First In, First Out):", normal_style))
    story.append(Paragraph("• Primeiro a entrar, primeiro a sair", highlight_style))
    story.append(Paragraph("• Exemplo: Fila de pessoas, impressão", highlight_style))
    
    story.append(PageBreak())
    
    # 4. FUNÇÕES IMPORTANTES EM C
    story.append(Paragraph("4. FUNÇÕES IMPORTANTES EM C", subtitle_style))
    
    story.append(Paragraph("Alocação de Memória:", normal_style))
    story.append(Paragraph("• <b>malloc():</b> Aloca memória dinamicamente", highlight_style))
    story.append(Paragraph("• <b>free():</b> Libera memória alocada", highlight_style))
    story.append(Paragraph("• <b>NULL:</b> Indica ponteiro nulo", highlight_style))
    
    story.append(Paragraph("Estrutura de Nó:", normal_style))
    story.append(Paragraph("""
    typedef struct Node {
        int data;
        struct Node* next;
    } Node;
    """, normal_style))
    
    story.append(PageBreak())
    
    # 5. IMPLEMENTAÇÕES BÁSICAS
    story.append(Paragraph("5. IMPLEMENTAÇÕES BÁSICAS", subtitle_style))
    
    story.append(Paragraph("Pilha com Vetor:", normal_style))
    story.append(Paragraph("""
    typedef struct {
        int data[MAX];
        int top;
    } Stack;
    
    void push(Stack* s, int value) {
        if (s->top < MAX-1) {
            s->data[++s->top] = value;
        }
    }
    
    int pop(Stack* s) {
        if (s->top >= 0) {
            return s->data[s->top--];
        }
        return -1;
    }
    """, normal_style))
    
    story.append(Paragraph("Fila Circular:", normal_style))
    story.append(Paragraph("""
    typedef struct {
        int data[MAX];
        int front, rear;
    } Queue;
    
    void enqueue(Queue* q, int value) {
        if ((q->rear + 1) % MAX != q->front) {
            q->data[q->rear] = value;
            q->rear = (q->rear + 1) % MAX;
        }
    }
    """, normal_style))
    
    story.append(PageBreak())
    
    # 6. QUESTÕES MAIS COMUNS
    story.append(Paragraph("6. QUESTÕES MAIS COMUNS", subtitle_style))
    
    questions = [
        "O que caracteriza uma lista encadeada? → Cada nó tem valor + ponteiro",
        "Qual a vantagem de listas vs vetores? → Inserção/remoção eficiente",
        "O que significa FIFO? → First In, First Out",
        "O que significa LIFO? → Last In, First Out",
        "Qual função aloca memória? → malloc()",
        "Qual função libera memória? → free()",
        "Índice do último elemento em vetor de 10? → 9",
        "Ponteiro de lista vazia? → NULL"
    ]
    
    for q in questions:
        story.append(Paragraph(f"• {q}", highlight_style))
    
    story.append(PageBreak())
    
    # 7. DICAS FINAIS
    story.append(Paragraph("7. DICAS PARA A PROVA", subtitle_style))
    
    tips = [
        "Memorize LIFO (pilhas) e FIFO (filas)",
        "Entenda diferenças entre estruturas estáticas e dinâmicas",
        "Pratique implementações básicas em C",
        "Atenção aos ponteiros e NULL",
        "Revise vantagens/desvantagens de cada estrutura",
        "Teste casos extremos (vazio, um elemento, cheio)",
        "Sempre libere memória com free()",
        "Use módulo (%) em filas circulares"
    ]
    
    for tip in tips:
        story.append(Paragraph(f"✓ {tip}", highlight_style))
    
    story.append(Spacer(1, 20))
    story.append(Paragraph("BOA SORTE NA PROVA! 🍀", title_style))
    
    # Gerar PDF
    doc.build(story)
    print("Resumo executivo gerado com sucesso: Resumo_Executivo_Estrutura_Dados.pdf")

if __name__ == "__main__":
    criar_resumo_executivo() 