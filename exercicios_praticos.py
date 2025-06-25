from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def criar_exercicios_praticos():
    """Cria exercícios práticos adicionais"""
    
    doc = SimpleDocTemplate("Exercicios_Praticos_Estrutura_Dados.pdf", pagesize=A4)
    styles = getSampleStyleSheet()
    
    # Estilos
    title_style = ParagraphStyle(
        'Title',
        parent=styles['Heading1'],
        fontSize=16,
        spaceAfter=20,
        alignment=TA_CENTER,
        textColor=colors.darkblue
    )
    
    subtitle_style = ParagraphStyle(
        'Subtitle',
        parent=styles['Heading2'],
        fontSize=12,
        spaceAfter=15,
        textColor=colors.darkred
    )
    
    question_style = ParagraphStyle(
        'Question',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=10,
        leftIndent=20
    )
    
    code_style = ParagraphStyle(
        'Code',
        parent=styles['Normal'],
        fontSize=9,
        fontName='Courier',
        leftIndent=30,
        backColor=colors.lightgrey
    )
    
    story = []
    
    # Título
    story.append(Paragraph("EXERCÍCIOS PRÁTICOS - ESTRUTURA DE DADOS", title_style))
    story.append(Spacer(1, 20))
    
    # Exercício 1: Lista Encadeada
    story.append(Paragraph("EXERCÍCIO 1: Implementação de Lista Encadeada", subtitle_style))
    story.append(Paragraph("Complete o código abaixo para implementar uma lista encadeada simples:", question_style))
    story.append(Paragraph("""
    #include <stdio.h>
    #include <stdlib.h>
    
    typedef struct Node {
        int data;
        struct Node* next;
    } Node;
    
    // Função para criar um novo nó
    Node* createNode(int value) {
        // COMPLETE AQUI
    }
    
    // Função para inserir no início
    void insertAtBeginning(Node** head, int value) {
        // COMPLETE AQUI
    }
    
    // Função para inserir no final
    void insertAtEnd(Node** head, int value) {
        // COMPLETE AQUI
    }
    
    // Função para remover um elemento
    void deleteNode(Node** head, int value) {
        // COMPLETE AQUI
    }
    
    // Função para imprimir a lista
    void printList(Node* head) {
        // COMPLETE AQUI
    }
    """, code_style))
    
    story.append(Paragraph("RESPOSTA:", question_style))
    story.append(Paragraph("""
    Node* createNode(int value) {
        Node* newNode = (Node*)malloc(sizeof(Node));
        newNode->data = value;
        newNode->next = NULL;
        return newNode;
    }
    
    void insertAtBeginning(Node** head, int value) {
        Node* newNode = createNode(value);
        newNode->next = *head;
        *head = newNode;
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
    
    void deleteNode(Node** head, int value) {
        if (*head == NULL) return;
        
        if ((*head)->data == value) {
            Node* temp = *head;
            *head = (*head)->next;
            free(temp);
            return;
        }
        
        Node* current = *head;
        while (current->next != NULL && current->next->data != value) {
            current = current->next;
        }
        
        if (current->next != NULL) {
            Node* temp = current->next;
            current->next = temp->next;
            free(temp);
        }
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
    
    story.append(PageBreak())
    
    # Exercício 2: Pilha
    story.append(Paragraph("EXERCÍCIO 2: Implementação de Pilha", subtitle_style))
    story.append(Paragraph("Implemente uma pilha usando vetor com as operações push, pop e peek:", question_style))
    story.append(Paragraph("""
    #define MAX 100
    
    typedef struct {
        int data[MAX];
        int top;
    } Stack;
    
    // Inicializar pilha
    void initStack(Stack* s) {
        // COMPLETE AQUI
    }
    
    // Verificar se está vazia
    int isEmpty(Stack* s) {
        // COMPLETE AQUI
    }
    
    // Verificar se está cheia
    int isFull(Stack* s) {
        // COMPLETE AQUI
    }
    
    // Empilhar elemento
    void push(Stack* s, int value) {
        // COMPLETE AQUI
    }
    
    // Desempilhar elemento
    int pop(Stack* s) {
        // COMPLETE AQUI
    }
    
    // Ver elemento do topo
    int peek(Stack* s) {
        // COMPLETE AQUI
    }
    """, code_style))
    
    story.append(Paragraph("RESPOSTA:", question_style))
    story.append(Paragraph("""
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
        return -1; // erro
    }
    
    int peek(Stack* s) {
        if (!isEmpty(s)) {
            return s->data[s->top];
        }
        return -1; // erro
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # Exercício 3: Fila
    story.append(Paragraph("EXERCÍCIO 3: Implementação de Fila Circular", subtitle_style))
    story.append(Paragraph("Implemente uma fila circular usando vetor:", question_style))
    story.append(Paragraph("""
    #define MAX 10
    
    typedef struct {
        int data[MAX];
        int front, rear;
        int size;
    } Queue;
    
    // Inicializar fila
    void initQueue(Queue* q) {
        // COMPLETE AQUI
    }
    
    // Verificar se está vazia
    int isEmpty(Queue* q) {
        // COMPLETE AQUI
    }
    
    // Verificar se está cheia
    int isFull(Queue* q) {
        // COMPLETE AQUI
    }
    
    // Enfileirar
    void enqueue(Queue* q, int value) {
        // COMPLETE AQUI
    }
    
    // Desenfileirar
    int dequeue(Queue* q) {
        // COMPLETE AQUI
    }
    """, code_style))
    
    story.append(Paragraph("RESPOSTA:", question_style))
    story.append(Paragraph("""
    void initQueue(Queue* q) {
        q->front = 0;
        q->rear = -1;
        q->size = 0;
    }
    
    int isEmpty(Queue* q) {
        return q->size == 0;
    }
    
    int isFull(Queue* q) {
        return q->size == MAX;
    }
    
    void enqueue(Queue* q, int value) {
        if (!isFull(q)) {
            q->rear = (q->rear + 1) % MAX;
            q->data[q->rear] = value;
            q->size++;
        }
    }
    
    int dequeue(Queue* q) {
        if (!isEmpty(q)) {
            int value = q->data[q->front];
            q->front = (q->front + 1) % MAX;
            q->size--;
            return value;
        }
        return -1; // fila vazia
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # Exercício 4: Problemas Conceituais
    story.append(Paragraph("EXERCÍCIO 4: Questões Conceituais", subtitle_style))
    
    questions = [
        {
            "q": "Explique a diferença entre LIFO e FIFO com exemplos práticos.",
            "a": "LIFO (Last In, First Out): Último a entrar, primeiro a sair. Exemplo: Pilha de pratos, call stack de funções. FIFO (First In, First Out): Primeiro a entrar, primeiro a sair. Exemplo: Fila de pessoas, fila de impressão."
        },
        {
            "q": "Qual a diferença entre alocação estática e dinâmica de memória?",
            "a": "Estática: Tamanho definido em tempo de compilação, memória alocada na stack. Dinâmica: Tamanho definido em tempo de execução, memória alocada na heap usando malloc/free."
        },
        {
            "q": "Por que listas encadeadas são mais eficientes para inserção/remoção no meio?",
            "a": "Em vetores, inserção/remoção no meio requer deslocar todos os elementos seguintes. Em listas encadeadas, apenas os ponteiros são alterados, sem necessidade de deslocamento."
        },
        {
            "q": "Explique o conceito de ponteiro NULL em listas encadeadas.",
            "a": "NULL indica que não há próximo elemento. É usado para marcar o fim da lista e para indicar que uma lista está vazia (head = NULL)."
        }
    ]
    
    for i, q in enumerate(questions, 1):
        story.append(Paragraph(f"{i}. {q['q']}", question_style))
        story.append(Paragraph(f"<b>Resposta:</b> {q['a']}", question_style))
        story.append(Spacer(1, 10))
    
    story.append(PageBreak())
    
    # Dicas de Implementação
    story.append(Paragraph("DICAS DE IMPLEMENTAÇÃO", subtitle_style))
    story.append(Paragraph("• Sempre verifique se a estrutura está vazia antes de remover elementos", question_style))
    story.append(Paragraph("• Em filas circulares, use módulo (%) para calcular índices", question_style))
    story.append(Paragraph("• Sempre libere memória alocada dinamicamente com free()", question_style))
    story.append(Paragraph("• Use ponteiros para modificar estruturas dentro de funções", question_style))
    story.append(Paragraph("• Teste casos extremos: lista vazia, um elemento, muitos elementos", question_style))
    
    # Gerar PDF
    doc.build(story)
    print("Exercícios práticos gerados com sucesso: Exercicios_Praticos_Estrutura_Dados.pdf")

if __name__ == "__main__":
    criar_exercicios_praticos() 