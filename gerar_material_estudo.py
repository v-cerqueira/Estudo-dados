from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
import os

def criar_material_estudo():
    """Cria um material de estudo completo em PDF"""
    
    # Criar o documento
    doc = SimpleDocTemplate("Material_Estudo_Estrutura_Dados.pdf", pagesize=A4)
    styles = getSampleStyleSheet()
    
    # Estilos personalizados
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=18,
        spaceAfter=30,
        alignment=TA_CENTER,
        textColor=colors.darkblue
    )
    
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Heading2'],
        fontSize=14,
        spaceAfter=20,
        spaceBefore=20,
        textColor=colors.darkred
    )
    
    question_style = ParagraphStyle(
        'Question',
        parent=styles['Normal'],
        fontSize=12,
        spaceAfter=10,
        spaceBefore=15,
        leftIndent=20
    )
    
    answer_style = ParagraphStyle(
        'Answer',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=15,
        leftIndent=40,
        textColor=colors.darkgreen
    )
    
    code_style = ParagraphStyle(
        'Code',
        parent=styles['Normal'],
        fontSize=10,
        fontName='Courier',
        leftIndent=30,
        spaceAfter=10,
        backColor=colors.lightgrey
    )
    
    # Conteúdo do material
    story = []
    
    # Título principal
    story.append(Paragraph("MATERIAL DE ESTUDO - ESTRUTURA DE DADOS", title_style))
    story.append(Paragraph("2º Bimestre - Preparação para Prova", subtitle_style))
    story.append(Spacer(1, 20))
    
    # Índice
    story.append(Paragraph("ÍNDICE", subtitle_style))
    story.append(Paragraph("1. Conceitos Fundamentais", question_style))
    story.append(Paragraph("2. Listas Encadeadas", question_style))
    story.append(Paragraph("3. Pilhas", question_style))
    story.append(Paragraph("4. Filas", question_style))
    story.append(Paragraph("5. Vetores e Matrizes", question_style))
    story.append(Paragraph("6. Exercícios Resolvidos", question_style))
    story.append(Paragraph("7. Questões de Múltipla Escolha", question_style))
    story.append(PageBreak())
    
    # 1. CONCEITOS FUNDAMENTAIS
    story.append(Paragraph("1. CONCEITOS FUNDAMENTAIS", subtitle_style))
    
    story.append(Paragraph("O que são dados em Tecnologia da Informação?", question_style))
    story.append(Paragraph("Dados são elementos brutos e isolados que representam aspectos da realidade. São a matéria-prima que, quando processada, se transforma em informação útil.", answer_style))
    
    story.append(Paragraph("Estruturas Homogêneas vs Heterogêneas:", question_style))
    story.append(Paragraph("• <b>Homogêneas:</b> Armazenam apenas um tipo de dado (ex: vetor de inteiros)<br/>• <b>Heterogêneas:</b> Armazenam diferentes tipos de dados (ex: struct)", answer_style))
    
    story.append(Paragraph("Vetores (Arrays):", question_style))
    story.append(Paragraph("• Estrutura de dados linear<br/>• Elementos armazenados em posições contínuas da memória<br/>• Acesso direto por índice<br/>• Tamanho fixo (desvantagem)<br/>• Alto custo para inserção/remoção no meio", answer_style))
    
    story.append(Paragraph("Matrizes:", question_style))
    story.append(Paragraph("• Estrutura de dados bidimensional<br/>• Organizada em linhas e colunas<br/>• Útil para representar tabelas, imagens, etc.", answer_style))
    
    story.append(PageBreak())
    
    # 2. LISTAS ENCADEADAS
    story.append(Paragraph("2. LISTAS ENCADEADAS", subtitle_style))
    
    story.append(Paragraph("Características das Listas Encadeadas:", question_style))
    story.append(Paragraph("• Cada nó contém um valor e um ponteiro para o próximo<br/>• Elementos NÃO são armazenados em posições contínuas<br/>• Tamanho dinâmico<br/>• Inserção e remoção eficientes em qualquer posição", answer_style))
    
    story.append(Paragraph("Vantagens vs Vetores:", question_style))
    story.append(Paragraph("• <b>Vantagens:</b> Tamanho dinâmico, inserção/remoção eficiente<br/>• <b>Desvantagens:</b> Sem acesso direto, uso de ponteiros", answer_style))
    
    story.append(Paragraph("Ponteiro quando lista está vazia:", question_style))
    story.append(Paragraph("O ponteiro recebe NULL quando a lista está vazia.", answer_style))
    
    story.append(Paragraph("Funções importantes em C:", question_style))
    story.append(Paragraph("• <b>malloc():</b> Aloca memória dinamicamente<br/>• <b>free():</b> Libera a memória alocada", answer_style))
    
    story.append(Paragraph("Estrutura básica de um nó:", question_style))
    story.append(Paragraph("""
    typedef struct Node {
        int data;
        struct Node* next;
    } Node;
    """, code_style))
    
    story.append(PageBreak())
    
    # 3. PILHAS
    story.append(Paragraph("3. PILHAS", subtitle_style))
    
    story.append(Paragraph("Características das Pilhas:", question_style))
    story.append(Paragraph("• Estrutura de dados linear<br/>• LIFO: Last In, First Out (último a entrar, primeiro a sair)<br/>• Operações: PUSH (empilhar) e POP (desempilhar)<br/>• Acesso apenas ao topo da pilha", answer_style))
    
    story.append(Paragraph("Exemplos de uso:", question_style))
    story.append(Paragraph("• Chamadas de função (call stack)<br/>• Desfazer operações (undo)<br/>• Avaliação de expressões<br/>• Navegação em navegadores (botão voltar)", answer_style))
    
    story.append(Paragraph("Implementação básica:", question_style))
    story.append(Paragraph("""
    #define MAX 100
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
        return -1; // erro
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # 4. FILAS
    story.append(Paragraph("4. FILAS", subtitle_style))
    
    story.append(Paragraph("Características das Filas:", question_style))
    story.append(Paragraph("• Estrutura de dados linear<br/>• FIFO: First In, First Out (primeiro a entrar, primeiro a sair)<br/>• Inserção no final, remoção no início<br/>• Controle de ordem de execução", answer_style))
    
    story.append(Paragraph("Exemplos reais:", question_style))
    story.append(Paragraph("• Fila de pessoas<br/>• Fila de impressão<br/>• Senhas em atendimento<br/>• Buffers de rede<br/>• Filas de processos", answer_style))
    
    story.append(Paragraph("Implementação com vetor:", question_style))
    story.append(Paragraph("""
    #define MAX 10
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
    
    int dequeue(Queue* q) {
        if (q->front != q->rear) {
            int value = q->data[q->front];
            q->front = (q->front + 1) % MAX;
            return value;
        }
        return -1; // fila vazia
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # 5. VETORES E MATRIZES
    story.append(Paragraph("5. VETORES E MATRIZES", subtitle_style))
    
    story.append(Paragraph("Diferenças para estruturas dinâmicas:", question_style))
    story.append(Paragraph("• <b>Vetores/Matrizes:</b> Tamanho fixo, acesso direto, memória contínua<br/>• <b>Pilhas/Listas/Filas:</b> Tamanho dinâmico, operações específicas, flexibilidade", answer_style))
    
    story.append(Paragraph("Índices em vetores:", question_style))
    story.append(Paragraph("• Primeiro elemento: índice 0<br/>• Último elemento: índice (tamanho - 1)<br/>• Exemplo: vetor de 10 posições, último elemento = índice 9", answer_style))
    
    story.append(PageBreak())
    
    # 6. EXERCÍCIOS RESOLVIDOS
    story.append(Paragraph("6. EXERCÍCIOS RESOLVIDOS", subtitle_style))
    
    story.append(Paragraph("Exercício 1: Implementar lista encadeada simples", question_style))
    story.append(Paragraph("""
    #include <stdio.h>
    #include <stdlib.h>
    
    typedef struct Node {
        int data;
        struct Node* next;
    } Node;
    
    Node* createNode(int value) {
        Node* newNode = (Node*)malloc(sizeof(Node));
        newNode->data = value;
        newNode->next = NULL;
        return newNode;
    }
    
    void insertAtEnd(Node** head, int value) {
        Node* newNode = createNode(value);
        if (*head == NULL) {
            *head = newNode;
            return;
        }
        Node* current = *head;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode;
    }
    
    void printList(Node* head) {
        Node* current = head;
        while (current != NULL) {
            printf("%d -> ", current->data);
            current = current->next;
        }
        printf("NULL\\n");
    }
    """, code_style))
    
    story.append(Paragraph("Exercício 2: Implementar pilha", question_style))
    story.append(Paragraph("""
    #define MAX 100
    
    typedef struct {
        int data[MAX];
        int top;
    } Stack;
    
    void initStack(Stack* s) {
        s->top = -1;
    }
    
    int isEmpty(Stack* s) {
        return s->top == -1;
    }
    
    int isFull(Stack* s) {
        return s->top == MAX - 1;
    }
    
    void push(Stack* s, int value) {
        if (!isFull(s)) {
            s->data[++s->top] = value;
        }
    }
    
    int pop(Stack* s) {
        if (!isEmpty(s)) {
            return s->data[s->top--];
        }
        return -1;
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # 7. QUESTÕES DE MÚLTIPLA ESCOLHA
    story.append(Paragraph("7. QUESTÕES DE MÚLTIPLA ESCOLHA", subtitle_style))
    
    questions = [
        {
            "q": "O que caracteriza uma lista encadeada simples em C?",
            "a": "c) Cada nó contém um valor e um ponteiro para o próximo",
            "explanation": "Listas encadeadas usam ponteiros para conectar os nós, não armazenam dados em posições contínuas."
        },
        {
            "q": "Qual é a principal vantagem das listas encadeadas em relação a vetores?",
            "a": "b) Inserção e remoção eficientes em qualquer posição",
            "explanation": "Vetores têm custo alto para inserção/remoção no meio, listas encadeadas são mais eficientes."
        },
        {
            "q": "O que acontece com o ponteiro de uma lista quando ela está vazia?",
            "a": "c) Recebe NULL",
            "explanation": "NULL indica que não há elementos na lista."
        },
        {
            "q": "Qual função da linguagem C é usada para alocar memória dinamicamente?",
            "a": "c) malloc()",
            "explanation": "malloc() é a função padrão para alocação dinâmica de memória."
        },
        {
            "q": "O que a função free() faz em listas?",
            "a": "c) Libera a memória alocada",
            "explanation": "free() é essencial para evitar vazamentos de memória."
        },
        {
            "q": "O que significa FIFO?",
            "a": "First In, First Out (primeiro a entrar, primeiro a sair)",
            "explanation": "Princípio fundamental das filas."
        },
        {
            "q": "Em um vetor de 10 posições, qual é o índice do último elemento?",
            "a": "b) 9",
            "explanation": "Índices começam em 0, então o último elemento tem índice 9."
        },
        {
            "q": "Qual estrutura permite armazenar dados em linhas e colunas?",
            "a": "c) Matriz",
            "explanation": "Matrizes são estruturas bidimensionais."
        }
    ]
    
    for i, q in enumerate(questions, 1):
        story.append(Paragraph(f"{i}. {q['q']}", question_style))
        story.append(Paragraph(f"<b>Resposta:</b> {q['a']}", answer_style))
        story.append(Paragraph(f"<b>Explicação:</b> {q['explanation']}", answer_style))
        story.append(Spacer(1, 10))
    
    story.append(PageBreak())
    
    # DICAS FINAIS
    story.append(Paragraph("DICAS PARA A PROVA", subtitle_style))
    story.append(Paragraph("• Entenda bem as diferenças entre estruturas estáticas e dinâmicas", question_style))
    story.append(Paragraph("• Memorize os princípios LIFO (pilhas) e FIFO (filas)", question_style))
    story.append(Paragraph("• Pratique implementações básicas em C", question_style))
    story.append(Paragraph("• Atenção aos ponteiros e alocação de memória", question_style))
    story.append(Paragraph("• Revise as vantagens e desvantagens de cada estrutura", question_style))
    
    # Gerar o PDF
    doc.build(story)
    print("Material de estudo gerado com sucesso: Material_Estudo_Estrutura_Dados.pdf")

if __name__ == "__main__":
    criar_material_estudo() 