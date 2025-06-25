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
            'lista': {
                title: 'Lista Encadeada',
                content: `
                    <h4>Implemente uma lista encadeada simples</h4>
                    <p>Complete as funções para criar, inserir e remover elementos de uma lista encadeada.</p>
                    <div class="code-exercise">
                        <pre><code>typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* createNode(int value);
void insertAtBeginning(Node** head, int value);
void insertAtEnd(Node** head, int value);
void deleteNode(Node** head, int value);
void printList(Node* head);</code></pre>
                    </div>
                `
            },
            'pilha': {
                title: 'Pilha',
                content: `
                    <h4>Implemente uma pilha usando vetor</h4>
                    <p>Complete as funções push, pop e peek para uma pilha.</p>
                    <div class="code-exercise">
                        <pre><code>typedef struct {
    int data[MAX];
    int top;
} Stack;

void push(Stack* s, int value);
int pop(Stack* s);
int peek(Stack* s);</code></pre>
                    </div>
                `
            },
            'fila': {
                title: 'Fila Circular',
                content: `
                    <h4>Implemente uma fila circular</h4>
                    <p>Complete as funções enqueue, dequeue e peek para uma fila circular.</p>
                    <div class="code-exercise">
                        <pre><code>typedef struct {
    int data[MAX];
    int front, rear;
    int size;
} CircularQueue;

void enqueue(CircularQueue* q, int value);
int dequeue(CircularQueue* q);
int peek(CircularQueue* q);</code></pre>
                    </div>
                `
            },
            'arvore': {
                title: 'Árvore Binária',
                content: `
                    <h4>Implemente uma árvore binária de busca</h4>
                    <p>Complete as funções para inserir, buscar e percorrer uma árvore binária.</p>
                    <div class="code-exercise">
                        <pre><code>typedef struct Node {
    int data;
    struct Node* left, *right;
} Node;

Node* insert(Node* root, int value);
Node* search(Node* root, int value);
void inorder(Node* root);</code></pre>
                    </div>
                `
            },
            'grafo': {
                title: 'Grafo',
                content: `
                    <h4>Implemente um grafo com matriz de adjacência</h4>
                    <p>Complete as funções para criar grafo e implementar BFS/DFS.</p>
                    <div class="code-exercise">
                        <pre><code>typedef struct {
    int vertices;
    int adjMatrix[MAX][MAX];
} Graph;

void addEdge(Graph* g, int src, int dest);
void BFS(Graph* g, int start);
void DFS(Graph* g, int start);</code></pre>
                    </div>
                `
            },
            'ordenacao': {
                title: 'Algoritmos de Ordenação',
                content: `
                    <h4>Implemente algoritmos de ordenação</h4>
                    <p>Complete as funções para bubble sort, selection sort e quick sort.</p>
                    <div class="code-exercise">
                        <pre><code>void bubbleSort(int arr[], int n);
void selectionSort(int arr[], int n);
void quickSort(int arr[], int low, int high);</code></pre>
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

    // Função para mostrar modais específicos dos exercícios
    showSpecificExercise(exerciseType) {
        const modalId = `${exerciseType}-modal`;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // Função para fechar modais específicos
    closeSpecificModal(exerciseType) {
        const modalId = `${exerciseType}-modal`;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Função para alternar solução
    toggleSolution(solutionId) {
        const solution = document.getElementById(solutionId);
        if (solution) {
            if (solution.style.display === 'none' || solution.style.display === '') {
                solution.style.display = 'block';
            } else {
                solution.style.display = 'none';
            }
        }
    }
}

// Global functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function showExercise(exerciseType) {
    const modalId = `${exerciseType}-modal`;
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

function toggleSolution(solutionId) {
    const solution = document.getElementById(solutionId);
    if (solution) {
        if (solution.style.display === 'none' || solution.style.display === '') {
            solution.style.display = 'block';
        } else {
            solution.style.display = 'none';
        }
    }
}

// Setup modal event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close modals when clicking on X
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    });

    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

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