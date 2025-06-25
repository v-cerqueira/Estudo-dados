// Main JavaScript File
class EstruturaDadosApp {
    constructor() {
        this.currentSection = 'home';
        this.isLoading = true;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.createParticles();
        this.handleLoading();
        this.setupScrollEffects();
        this.setupTabSystem();
        this.setupModalSystem();
        this.setupNavigation();
    }

    setupEventListeners() {
        // Navigation
        document.getElementById('nav-toggle').addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Window resize handler
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Scroll handler
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    handleLoading() {
        // Simulate loading time
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                this.isLoading = false;
                this.animateHeroSection();
            }, 500);
        }, 2000);
    }

    animateHeroSection() {
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    createParticles() {
        const particlesContainer = document.querySelector('.hero-particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    setupScrollEffects() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-delay');
                }
            });
        }, observerOptions);

        // Observe all concept cards and exercise cards
        document.querySelectorAll('.concept-card, .exercise-card').forEach(card => {
            observer.observe(card);
        });
    }

    setupTabSystem() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and panes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                // Add active class to clicked button and corresponding pane
                button.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });
    }

    setupModalSystem() {
        const modal = document.getElementById('exercise-modal');
        const closeBtn = document.querySelector('.close');

        // Close modal when clicking on X
        closeBtn.addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    setupNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    toggleMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    }

    handleResize() {
        if (window.innerWidth > 768) {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('active');
        }
    }

    handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    }

    showExercise(type) {
        const modal = document.getElementById('exercise-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        const exercises = {
            lista: {
                title: 'Implementação de Lista Encadeada',
                content: `
                    <div class="exercise-content">
                        <h4>Exercício:</h4>
                        <p>Complete o código abaixo para implementar uma lista encadeada simples:</p>
                        <div class="code-block">
                            <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

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
}</code></pre>
                        </div>
                        
                        <div class="solution-toggle">
                            <button class="btn btn-outline" onclick="toggleSolution('lista-solution')">
                                Ver Solução
                            </button>
                        </div>
                        
                        <div id="lista-solution" class="solution" style="display: none;">
                            <h4>Solução:</h4>
                            <div class="code-block">
                                <pre><code>Node* createNode(int value) {
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
}</code></pre>
                            </div>
                        </div>
                    </div>
                `
            },
            pilha: {
                title: 'Implementação de Pilha',
                content: `
                    <div class="exercise-content">
                        <h4>Exercício:</h4>
                        <p>Implemente uma pilha usando vetor com as operações push, pop e peek:</p>
                        <div class="code-block">
                            <pre><code>#define MAX 100

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
}</code></pre>
                        </div>
                        
                        <div class="solution-toggle">
                            <button class="btn btn-outline" onclick="toggleSolution('pilha-solution')">
                                Ver Solução
                            </button>
                        </div>
                        
                        <div id="pilha-solution" class="solution" style="display: none;">
                            <h4>Solução:</h4>
                            <div class="code-block">
                                <pre><code>void initStack(Stack* s) {
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
}</code></pre>
                            </div>
                        </div>
                    </div>
                `
            },
            fila: {
                title: 'Implementação de Fila Circular',
                content: `
                    <div class="exercise-content">
                        <h4>Exercício:</h4>
                        <p>Implemente uma fila circular usando vetor:</p>
                        <div class="code-block">
                            <pre><code>#define MAX 10

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
}</code></pre>
                        </div>
                        
                        <div class="solution-toggle">
                            <button class="btn btn-outline" onclick="toggleSolution('fila-solution')">
                                Ver Solução
                            </button>
                        </div>
                        
                        <div id="fila-solution" class="solution" style="display: none;">
                            <h4>Solução:</h4>
                            <div class="code-block">
                                <pre><code>void initQueue(Queue* q) {
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
}</code></pre>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        if (exercises[type]) {
            modalTitle.textContent = exercises[type].title;
            modalBody.innerHTML = exercises[type].content;
            modal.style.display = 'block';
        }
    }

    closeModal() {
        const modal = document.getElementById('exercise-modal');
        modal.style.display = 'none';
    }
}

// Global functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function showExercise(type) {
    app.showExercise(type);
}

function toggleSolution(solutionId) {
    const solution = document.getElementById(solutionId);
    const button = event.target;
    
    if (solution.style.display === 'none') {
        solution.style.display = 'block';
        button.textContent = 'Ocultar Solução';
    } else {
        solution.style.display = 'none';
        button.textContent = 'Ver Solução';
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new EstruturaDadosApp();
});

// Add some additional utility functions
function addGlowEffect(element) {
    element.classList.add('glow');
    setTimeout(() => {
        element.classList.remove('glow');
    }, 1000);
}

function createTypingEffect(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    element.classList.add('typing-effect');
    
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// Add smooth reveal animations for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll); 