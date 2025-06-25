from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def criar_exercicios_completos():
    """Cria exercícios práticos completos incluindo todos os tópicos"""
    
    doc = SimpleDocTemplate("Exercicios_Completos_Estrutura_Dados.pdf", pagesize=A4)
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
    story.append(Paragraph("EXERCÍCIOS PRÁTICOS COMPLETOS - ESTRUTURA DE DADOS", title_style))
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
        if (isFull(s)) {
            printf("Pilha cheia!\\n");
            return;
        }
        s->data[++s->top] = value;
    }
    
    int pop(Stack* s) {
        if (isEmpty(s)) {
            printf("Pilha vazia!\\n");
            return -1;
        }
        return s->data[s->top--];
    }
    
    int peek(Stack* s) {
        if (isEmpty(s)) {
            printf("Pilha vazia!\\n");
            return -1;
        }
        return s->data[s->top];
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # Exercício 3: Fila Circular
    story.append(Paragraph("EXERCÍCIO 3: Implementação de Fila Circular", subtitle_style))
    story.append(Paragraph("Implemente uma fila circular usando vetor com as operações enqueue, dequeue e peek:", question_style))
    story.append(Paragraph("""
    #define MAX 100
    
    typedef struct {
        int data[MAX];
        int front;
        int rear;
        int size;
    } CircularQueue;
    
    // Inicializar fila
    void initQueue(CircularQueue* q) {
        // COMPLETE AQUI
    }
    
    // Verificar se está vazia
    int isEmpty(CircularQueue* q) {
        // COMPLETE AQUI
    }
    
    // Verificar se está cheia
    int isFull(CircularQueue* q) {
        // COMPLETE AQUI
    }
    
    // Inserir elemento
    void enqueue(CircularQueue* q, int value) {
        // COMPLETE AQUI
    }
    
    // Remover elemento
    int dequeue(CircularQueue* q) {
        // COMPLETE AQUI
    }
    
    // Ver primeiro elemento
    int peek(CircularQueue* q) {
        // COMPLETE AQUI
    }
    
    // Imprimir fila
    void printQueue(CircularQueue* q) {
        // COMPLETE AQUI
    }
    """, code_style))
    
    story.append(Paragraph("RESPOSTA:", question_style))
    story.append(Paragraph("""
    void initQueue(CircularQueue* q) {
        q->front = 0;
        q->rear = -1;
        q->size = 0;
    }
    
    int isEmpty(CircularQueue* q) {
        return q->size == 0;
    }
    
    int isFull(CircularQueue* q) {
        return q->size == MAX;
    }
    
    void enqueue(CircularQueue* q, int value) {
        if (isFull(q)) {
            printf("Fila cheia!\\n");
            return;
        }
        q->rear = (q->rear + 1) % MAX;
        q->data[q->rear] = value;
        q->size++;
    }
    
    int dequeue(CircularQueue* q) {
        if (isEmpty(q)) {
            printf("Fila vazia!\\n");
            return -1;
        }
        int value = q->data[q->front];
        q->front = (q->front + 1) % MAX;
        q->size--;
        return value;
    }
    
    int peek(CircularQueue* q) {
        if (isEmpty(q)) {
            printf("Fila vazia!\\n");
            return -1;
        }
        return q->data[q->front];
    }
    
    void printQueue(CircularQueue* q) {
        if (isEmpty(q)) {
            printf("Fila vazia\\n");
            return;
        }
        int i = q->front;
        int count = 0;
        while (count < q->size) {
            printf("%d ", q->data[i]);
            i = (i + 1) % MAX;
            count++;
        }
        printf("\\n");
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # Exercício 4: Árvore Binária
    story.append(Paragraph("EXERCÍCIO 4: Implementação de Árvore Binária", subtitle_style))
    story.append(Paragraph("Implemente uma árvore binária de busca com inserção, busca e percorrimentos:", question_style))
    story.append(Paragraph("""
    #include <stdio.h>
    #include <stdlib.h>
    
    typedef struct Node {
        int data;
        struct Node* left;
        struct Node* right;
    } Node;
    
    // Criar novo nó
    Node* createNode(int value) {
        // COMPLETE AQUI
    }
    
    // Inserir elemento
    Node* insert(Node* root, int value) {
        // COMPLETE AQUI
    }
    
    // Buscar elemento
    Node* search(Node* root, int value) {
        // COMPLETE AQUI
    }
    
    // Percorrimento em ordem (inorder)
    void inorder(Node* root) {
        // COMPLETE AQUI
    }
    
    // Percorrimento pré-ordem (preorder)
    void preorder(Node* root) {
        // COMPLETE AQUI
    }
    
    // Percorrimento pós-ordem (postorder)
    void postorder(Node* root) {
        // COMPLETE AQUI
    }
    
    // Encontrar valor mínimo
    Node* findMin(Node* root) {
        // COMPLETE AQUI
    }
    
    // Remover elemento
    Node* deleteNode(Node* root, int value) {
        // COMPLETE AQUI
    }
    """, code_style))
    
    story.append(Paragraph("RESPOSTA:", question_style))
    story.append(Paragraph("""
    Node* createNode(int value) {
        Node* newNode = (Node*)malloc(sizeof(Node));
        newNode->data = value;
        newNode->left = NULL;
        newNode->right = NULL;
        return newNode;
    }
    
    Node* insert(Node* root, int value) {
        if (root == NULL) {
            return createNode(value);
        }
        
        if (value < root->data) {
            root->left = insert(root->left, value);
        } else if (value > root->data) {
            root->right = insert(root->right, value);
        }
        
        return root;
    }
    
    Node* search(Node* root, int value) {
        if (root == NULL || root->data == value) {
            return root;
        }
        
        if (value < root->data) {
            return search(root->left, value);
        }
        
        return search(root->right, value);
    }
    
    void inorder(Node* root) {
        if (root != NULL) {
            inorder(root->left);
            printf("%d ", root->data);
            inorder(root->right);
        }
    }
    
    void preorder(Node* root) {
        if (root != NULL) {
            printf("%d ", root->data);
            preorder(root->left);
            preorder(root->right);
        }
    }
    
    void postorder(Node* root) {
        if (root != NULL) {
            postorder(root->left);
            postorder(root->right);
            printf("%d ", root->data);
        }
    }
    
    Node* findMin(Node* root) {
        if (root == NULL || root->left == NULL) {
            return root;
        }
        return findMin(root->left);
    }
    
    Node* deleteNode(Node* root, int value) {
        if (root == NULL) {
            return root;
        }
        
        if (value < root->data) {
            root->left = deleteNode(root->left, value);
        } else if (value > root->data) {
            root->right = deleteNode(root->right, value);
        } else {
            // Nó com apenas um filho ou sem filhos
            if (root->left == NULL) {
                Node* temp = root->right;
                free(root);
                return temp;
            } else if (root->right == NULL) {
                Node* temp = root->left;
                free(root);
                return temp;
            }
            
            // Nó com dois filhos
            Node* temp = findMin(root->right);
            root->data = temp->data;
            root->right = deleteNode(root->right, temp->data);
        }
        
        return root;
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # Exercício 5: Grafo
    story.append(Paragraph("EXERCÍCIO 5: Implementação de Grafo", subtitle_style))
    story.append(Paragraph("Implemente um grafo usando matriz de adjacência com busca em largura (BFS) e profundidade (DFS):", question_style))
    story.append(Paragraph("""
    #include <stdio.h>
    #include <stdlib.h>
    #include <stdbool.h>
    
    #define MAX_VERTICES 100
    
    typedef struct {
        int vertices;
        int adjMatrix[MAX_VERTICES][MAX_VERTICES];
    } Graph;
    
    // Inicializar grafo
    void initGraph(Graph* g, int vertices) {
        // COMPLETE AQUI
    }
    
    // Adicionar aresta
    void addEdge(Graph* g, int src, int dest) {
        // COMPLETE AQUI
    }
    
    // Adicionar aresta ponderada
    void addWeightedEdge(Graph* g, int src, int dest, int weight) {
        // COMPLETE AQUI
    }
    
    // Imprimir grafo
    void printGraph(Graph* g) {
        // COMPLETE AQUI
    }
    
    // Busca em Largura (BFS)
    void BFS(Graph* g, int startVertex) {
        // COMPLETE AQUI
    }
    
    // Busca em Profundidade (DFS)
    void DFS(Graph* g, int startVertex) {
        // COMPLETE AQUI
    }
    
    // Função auxiliar para DFS recursivo
    void DFSUtil(Graph* g, int vertex, bool visited[]) {
        // COMPLETE AQUI
    }
    """, code_style))
    
    story.append(Paragraph("RESPOSTA:", question_style))
    story.append(Paragraph("""
    void initGraph(Graph* g, int vertices) {
        g->vertices = vertices;
        for (int i = 0; i < vertices; i++) {
            for (int j = 0; j < vertices; j++) {
                g->adjMatrix[i][j] = 0;
            }
        }
    }
    
    void addEdge(Graph* g, int src, int dest) {
        g->adjMatrix[src][dest] = 1;
        g->adjMatrix[dest][src] = 1; // Para grafo não dirigido
    }
    
    void addWeightedEdge(Graph* g, int src, int dest, int weight) {
        g->adjMatrix[src][dest] = weight;
        g->adjMatrix[dest][src] = weight; // Para grafo não dirigido
    }
    
    void printGraph(Graph* g) {
        for (int i = 0; i < g->vertices; i++) {
            printf("Vértice %d: ", i);
            for (int j = 0; j < g->vertices; j++) {
                if (g->adjMatrix[i][j] != 0) {
                    printf("%d ", j);
                }
            }
            printf("\\n");
        }
    }
    
    void BFS(Graph* g, int startVertex) {
        bool visited[MAX_VERTICES] = {false};
        int queue[MAX_VERTICES];
        int front = 0, rear = 0;
        
        visited[startVertex] = true;
        queue[rear++] = startVertex;
        
        printf("BFS: ");
        while (front < rear) {
            int vertex = queue[front++];
            printf("%d ", vertex);
            
            for (int i = 0; i < g->vertices; i++) {
                if (g->adjMatrix[vertex][i] && !visited[i]) {
                    visited[i] = true;
                    queue[rear++] = i;
                }
            }
        }
        printf("\\n");
    }
    
    void DFS(Graph* g, int startVertex) {
        bool visited[MAX_VERTICES] = {false};
        printf("DFS: ");
        DFSUtil(g, startVertex, visited);
        printf("\\n");
    }
    
    void DFSUtil(Graph* g, int vertex, bool visited[]) {
        visited[vertex] = true;
        printf("%d ", vertex);
        
        for (int i = 0; i < g->vertices; i++) {
            if (g->adjMatrix[vertex][i] && !visited[i]) {
                DFSUtil(g, i, visited);
            }
        }
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # Exercício 6: Algoritmo de Ordenação
    story.append(Paragraph("EXERCÍCIO 6: Algoritmos de Ordenação", subtitle_style))
    story.append(Paragraph("Implemente os algoritmos de ordenação Bubble Sort, Selection Sort e Quick Sort:", question_style))
    story.append(Paragraph("""
    #include <stdio.h>
    #include <stdlib.h>
    
    // Função para trocar elementos
    void swap(int* a, int* b) {
        // COMPLETE AQUI
    }
    
    // Função para imprimir array
    void printArray(int arr[], int size) {
        // COMPLETE AQUI
    }
    
    // Bubble Sort
    void bubbleSort(int arr[], int n) {
        // COMPLETE AQUI
    }
    
    // Selection Sort
    void selectionSort(int arr[], int n) {
        // COMPLETE AQUI
    }
    
    // Quick Sort - Função de partição
    int partition(int arr[], int low, int high) {
        // COMPLETE AQUI
    }
    
    // Quick Sort
    void quickSort(int arr[], int low, int high) {
        // COMPLETE AQUI
    }
    
    // Função principal para testar
    int main() {
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        int n = sizeof(arr) / sizeof(arr[0]);
        
        printf("Array original: ");
        printArray(arr, n);
        
        // Teste Bubble Sort
        int arr1[] = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr1, n);
        printf("Bubble Sort: ");
        printArray(arr1, n);
        
        // Teste Selection Sort
        int arr2[] = {64, 34, 25, 12, 22, 11, 90};
        selectionSort(arr2, n);
        printf("Selection Sort: ");
        printArray(arr2, n);
        
        // Teste Quick Sort
        int arr3[] = {64, 34, 25, 12, 22, 11, 90};
        quickSort(arr3, 0, n-1);
        printf("Quick Sort: ");
        printArray(arr3, n);
        
        return 0;
    }
    """, code_style))
    
    story.append(Paragraph("RESPOSTA:", question_style))
    story.append(Paragraph("""
    void swap(int* a, int* b) {
        int temp = *a;
        *a = *b;
        *b = temp;
    }
    
    void printArray(int arr[], int size) {
        for (int i = 0; i < size; i++) {
            printf("%d ", arr[i]);
        }
        printf("\\n");
    }
    
    void bubbleSort(int arr[], int n) {
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    swap(&arr[j], &arr[j+1]);
                }
            }
        }
    }
    
    void selectionSort(int arr[], int n) {
        for (int i = 0; i < n-1; i++) {
            int min_idx = i;
            for (int j = i+1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {
                    min_idx = j;
                }
            }
            swap(&arr[min_idx], &arr[i]);
        }
    }
    
    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        
        for (int j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(&arr[i], &arr[j]);
            }
        }
        swap(&arr[i + 1], &arr[high]);
        return (i + 1);
    }
    
    void quickSort(int arr[], int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    """, code_style))
    
    story.append(PageBreak())
    
    # Exercício 7: Análise de Complexidade
    story.append(Paragraph("EXERCÍCIO 7: Análise de Complexidade", subtitle_style))
    story.append(Paragraph("Analise a complexidade de tempo e espaço dos algoritmos implementados:", question_style))
    story.append(Paragraph("""
    COMPLEXIDADE DOS ALGORITMOS:
    
    1. LISTA ENCADEADA:
       - Inserção no início: O(1)
       - Inserção no final: O(n)
       - Busca: O(n)
       - Remoção: O(n)
       - Espaço: O(n)
    
    2. PILHA:
       - Push: O(1)
       - Pop: O(1)
       - Peek: O(1)
       - Espaço: O(n)
    
    3. FILA CIRCULAR:
       - Enqueue: O(1)
       - Dequeue: O(1)
       - Peek: O(1)
       - Espaço: O(n)
    
    4. ÁRVORE BINÁRIA:
       - Inserção: O(log n) - média, O(n) - pior caso
       - Busca: O(log n) - média, O(n) - pior caso
       - Remoção: O(log n) - média, O(n) - pior caso
       - Percorrimentos: O(n)
       - Espaço: O(n)
    
    5. GRAFO (Matriz de Adjacência):
       - Adicionar aresta: O(1)
       - Verificar aresta: O(1)
       - BFS: O(V²) onde V = número de vértices
       - DFS: O(V²) onde V = número de vértices
       - Espaço: O(V²)
    
    6. ALGORITMOS DE ORDENAÇÃO:
       - Bubble Sort: O(n²) tempo, O(1) espaço
       - Selection Sort: O(n²) tempo, O(1) espaço
       - Quick Sort: O(n log n) tempo médio, O(n²) pior caso, O(log n) espaço
    """, code_style))
    
    # Construir o PDF
    doc.build(story)
    print("Exercícios completos criados com sucesso!")

if __name__ == "__main__":
    criar_exercicios_completos() 