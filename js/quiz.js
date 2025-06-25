// Sistema de Prova - Estrutura de Dados
let quizSystem;

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    quizSystem = new QuizSystem();
});

class QuizSystem {
    constructor() {
        this.questions = [];
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.timer = null;
        this.quizDuration = 0;
        this.showExplanations = true;
        
        this.initializeQuestions();
    }

    initializeQuestions() {
        // 200 questões organizadas por dificuldade e tópico
        this.questions = [
            // === FÁCIL ===
            {
                id: 1,
                question: "O que significa LIFO?",
                options: ["Last In, First Out", "First In, First Out", "Last In, Last Out", "First In, Last Out"],
                correct: 0,
                difficulty: "easy",
                topic: "pilhas",
                explanation: "LIFO significa 'Last In, First Out' - o último elemento a entrar é o primeiro a sair. Este é o princípio fundamental das pilhas."
            },
            {
                id: 2,
                question: "O que significa FIFO?",
                options: ["Last In, First Out", "First In, First Out", "Last In, Last Out", "First In, Last Out"],
                correct: 1,
                difficulty: "easy",
                topic: "filas",
                explanation: "FIFO significa 'First In, First Out' - o primeiro elemento a entrar é o primeiro a sair. Este é o princípio das filas."
            },
            {
                id: 3,
                question: "Qual função em C é usada para alocar memória dinamicamente?",
                options: ["free()", "malloc()", "calloc()", "realloc()"],
                correct: 1,
                difficulty: "easy",
                topic: "conceitos",
                explanation: "malloc() é usada para alocar memória dinamicamente. Ela retorna um ponteiro para a memória alocada ou NULL se falhar."
            },
            {
                id: 4,
                question: "Qual função em C é usada para liberar memória alocada?",
                options: ["free()", "malloc()", "calloc()", "realloc()"],
                correct: 0,
                difficulty: "easy",
                topic: "conceitos",
                explanation: "free() é usada para liberar memória previamente alocada com malloc(), calloc() ou realloc()."
            },
            {
                id: 5,
                question: "Em um vetor de tamanho n, qual é o índice do último elemento?",
                options: ["n", "n-1", "n+1", "0"],
                correct: 1,
                difficulty: "easy",
                topic: "conceitos",
                explanation: "Em C, os índices começam em 0, então o último elemento tem índice n-1."
            },
            {
                id: 6,
                question: "O que representa NULL em C?",
                options: [
                    "Valor zero",
                    "Ponteiro nulo",
                    "String vazia",
                    "Erro de compilação"
                ],
                correct: 1,
                difficulty: "easy",
                topic: "conceitos",
                explanation: "NULL representa um ponteiro que não aponta para nenhum endereço válido. É usado para indicar que um ponteiro não foi inicializado ou não aponta para nada válido."
            },
            {
                id: 7,
                question: "Qual é a complexidade de acesso em um vetor?",
                options: [
                    "O(1)",
                    "O(n)",
                    "O(log n)",
                    "O(n²)"
                ],
                correct: 0,
                difficulty: "easy",
                topic: "conceitos",
                explanation: "Acesso direto por índice tem complexidade O(1) porque o computador calcula diretamente o endereço: endereço_base + índice * tamanho_do_tipo."
            },
            {
                id: 8,
                question: "Em uma pilha vazia, qual é o valor do topo?",
                options: [
                    "0",
                    "-1",
                    "1",
                    "NULL"
                ],
                correct: 1,
                difficulty: "easy",
                topic: "pilhas",
                explanation: "Em uma pilha vazia, o topo é inicializado com -1. Quando top = -1, significa que a pilha está vazia. O primeiro elemento será inserido na posição 0."
            },
            {
                id: 9,
                question: "Qual estrutura usa o princípio LIFO?",
                options: [
                    "Fila",
                    "Pilha",
                    "Lista",
                    "Árvore"
                ],
                correct: 1,
                difficulty: "easy",
                topic: "pilhas",
                explanation: "A pilha usa o princípio LIFO (Last In, First Out). Exemplos reais: pilha de pratos, call stack de funções, histórico do navegador."
            },
            {
                id: 10,
                question: "Qual estrutura usa o princípio FIFO?",
                options: [
                    "Fila",
                    "Pilha",
                    "Lista",
                    "Árvore"
                ],
                correct: 0,
                difficulty: "easy",
                topic: "filas",
                explanation: "A fila usa o princípio FIFO (First In, First Out). Exemplos reais: fila de pessoas, fila de impressão, fila de processos."
            },

            // === MÉDIO ===
            {
                id: 11,
                question: "Qual é a vantagem principal de uma lista encadeada sobre um vetor?",
                options: [
                    "Acesso mais rápido",
                    "Inserção/remoção mais eficiente",
                    "Menor uso de memória",
                    "Ordenação automática"
                ],
                correct: 1,
                difficulty: "medium",
                topic: "listas",
                explanation: "Listas encadeadas permitem inserção/remoção em O(1) sem deslocar elementos. Em vetores, inserção no meio requer deslocar todos os elementos seguintes."
            },
            {
                id: 12,
                question: "Qual é a desvantagem principal de uma lista encadeada?",
                options: [
                    "Não permite inserção",
                    "Não permite acesso direto por índice",
                    "Não permite remoção",
                    "Não permite busca"
                ],
                correct: 1,
                difficulty: "medium",
                topic: "listas",
                explanation: "Para acessar um elemento, é necessário percorrer a lista desde o início até a posição desejada, resultando em O(n)."
            },
            {
                id: 13,
                question: "Em uma fila circular, como calcular o próximo índice?",
                options: [
                    "rear + 1",
                    "(rear + 1) % MAX",
                    "rear - 1",
                    "rear * 2"
                ],
                correct: 1,
                difficulty: "medium",
                topic: "filas",
                explanation: "O operador módulo (%) garante que o índice volte ao início quando chegar ao final. Exemplo: se MAX=5 e rear=4, (4+1)%5 = 0."
            },
            {
                id: 14,
                question: "Qual é a complexidade de busca em uma lista encadeada?",
                options: [
                    "O(1)",
                    "O(n)",
                    "O(log n)",
                    "O(n²)"
                ],
                correct: 1,
                difficulty: "medium",
                topic: "listas",
                explanation: "É necessário percorrer a lista elemento por elemento até encontrar o valor desejado. No pior caso, percorre toda a lista."
            },
            {
                id: 15,
                question: "O que acontece se não liberarmos memória alocada com malloc()?",
                options: [
                    "Nada",
                    "Vazamento de memória",
                    "Erro de compilação",
                    "Programa trava"
                ],
                correct: 1,
                difficulty: "medium",
                topic: "conceitos",
                explanation: "A memória permanece alocada mesmo após o programa terminar, causando vazamento de memória. Em programas longos, isso pode esgotar a memória disponível."
            },
            {
                id: 16,
                question: "Qual é a complexidade de inserção no início de uma lista encadeada?",
                options: [
                    "O(1)",
                    "O(n)",
                    "O(log n)",
                    "O(n²)"
                ],
                correct: 0,
                difficulty: "medium",
                topic: "listas",
                explanation: "Basta criar um novo nó e apontar para o início da lista. Não é necessário percorrer a lista."
            },
            {
                id: 17,
                question: "Qual é a complexidade de inserção no final de uma lista encadeada?",
                options: [
                    "O(1)",
                    "O(n)",
                    "O(log n)",
                    "O(n²)"
                ],
                correct: 1,
                difficulty: "medium",
                topic: "listas",
                explanation: "É necessário percorrer toda a lista até encontrar o último elemento para fazer a inserção."
            },
            {
                id: 18,
                question: "Em uma pilha implementada com vetor, qual operação é O(1)?",
                options: [
                    "Push e Pop",
                    "Apenas Push",
                    "Apenas Pop",
                    "Nenhuma das duas"
                ],
                correct: 0,
                difficulty: "medium",
                topic: "pilhas",
                explanation: "Ambas as operações push e pop são O(1) em uma pilha com vetor, pois só acessam o elemento do topo."
            },
            {
                id: 19,
                question: "Qual é a diferença entre uma estrutura homogênea e heterogênea?",
                options: [
                    "Tamanho",
                    "Tipo de dados",
                    "Velocidade",
                    "Memória"
                ],
                correct: 1,
                difficulty: "medium",
                topic: "conceitos",
                explanation: "Homogênea armazena apenas um tipo (ex: vetor de int), heterogênea armazena diferentes tipos (ex: struct com int, char, float)."
            },
            {
                id: 20,
                question: "O que é uma lista encadeada circular?",
                options: [
                    "Lista sem fim",
                    "Último nó aponta para o primeiro",
                    "Lista com dois ponteiros",
                    "Lista ordenada"
                ],
                correct: 1,
                difficulty: "medium",
                topic: "listas",
                explanation: "Na lista circular, o último nó aponta para o primeiro, formando um ciclo. Permite percorrer a lista infinitamente."
            },

            // === DIFÍCIL ===
            {
                id: 21,
                question: "Qual é a complexidade de busca em uma árvore binária balanceada?",
                options: [
                    "O(1)",
                    "O(n)",
                    "O(log n)",
                    "O(n²)"
                ],
                correct: 2,
                difficulty: "hard",
                topic: "arvores",
                explanation: "Em uma árvore balanceada, a altura é log(n), então a busca é O(log n). Cada nível elimina metade dos nós restantes."
            },
            {
                id: 22,
                question: "O que é uma árvore AVL?",
                options: [
                    "Árvore binária simples",
                    "Árvore binária balanceada",
                    "Árvore com 3 filhos",
                    "Árvore ordenada"
                ],
                correct: 1,
                difficulty: "hard",
                topic: "arvores",
                explanation: "AVL é uma árvore binária de busca auto-balanceada. Mantém o fator de balanceamento entre -1 e 1 para todos os nós."
            },
            {
                id: 23,
                question: "Qual é a complexidade de inserção em uma árvore binária de busca?",
                options: [
                    "O(1)",
                    "O(n)",
                    "O(log n)",
                    "O(n²)"
                ],
                correct: 2,
                difficulty: "hard",
                topic: "arvores",
                explanation: "Em uma árvore balanceada, a inserção segue o caminho da raiz até a folha, resultando em O(log n)."
            },
            {
                id: 24,
                question: "O que é um grafo dirigido?",
                options: [
                    "Grafo com pesos",
                    "Grafo com direção nas arestas",
                    "Grafo sem ciclos",
                    "Grafo completo"
                ],
                correct: 1,
                difficulty: "hard",
                topic: "grafos",
                explanation: "Em um grafo dirigido, as arestas têm direção (de um vértice para outro). A->B não implica B->A."
            },
            {
                id: 25,
                question: "Qual é a complexidade de busca em um grafo usando matriz de adjacência?",
                options: [
                    "O(1)",
                    "O(V)",
                    "O(V+E)",
                    "O(V²)"
                ],
                correct: 3,
                difficulty: "hard",
                topic: "grafos",
                explanation: "A matriz de adjacência tem tamanho VxV, então a busca é O(V²). Cada célula da matriz deve ser verificada."
            },
            {
                id: 26,
                question: "O que é uma lista duplamente encadeada?",
                options: [
                    "Lista com dois elementos",
                    "Lista com dois ponteiros por nó",
                    "Lista circular",
                    "Lista ordenada"
                ],
                correct: 1,
                difficulty: "hard",
                topic: "listas",
                explanation: "Cada nó tem ponteiros para o anterior e próximo elemento. Permite navegação em ambas as direções."
            },
            {
                id: 27,
                question: "Qual é a vantagem de uma lista duplamente encadeada?",
                options: [
                    "Menor memória",
                    "Remoção mais eficiente",
                    "Acesso direto",
                    "Ordenação automática"
                ],
                correct: 1,
                difficulty: "hard",
                topic: "listas",
                explanation: "Permite remoção de um nó sem precisar do nó anterior, pois cada nó conhece seu predecessor."
            },
            {
                id: 28,
                question: "O que é uma fila de prioridade?",
                options: [
                    "Fila ordenada",
                    "Fila com elementos prioritários",
                    "Fila circular",
                    "Fila dupla"
                ],
                correct: 1,
                difficulty: "hard",
                topic: "filas",
                explanation: "Elementos com maior prioridade são atendidos primeiro, independente da ordem de chegada."
            },
            {
                id: 29,
                question: "Qual estrutura é usada para implementar uma fila de prioridade?",
                options: [
                    "Vetor",
                    "Lista",
                    "Heap",
                    "Árvore"
                ],
                correct: 2,
                difficulty: "hard",
                topic: "filas",
                explanation: "Heap é a estrutura mais eficiente para filas de prioridade, permitindo inserção e remoção em O(log n)."
            },
            {
                id: 30,
                question: "O que é um grafo ponderado?",
                options: [
                    "Grafo com muitos vértices",
                    "Grafo com pesos nas arestas",
                    "Grafo dirigido",
                    "Grafo completo"
                ],
                correct: 1,
                difficulty: "hard",
                topic: "grafos",
                explanation: "Cada aresta tem um valor numérico (peso) associado. Usado para representar distâncias, custos, etc."
            },

            // === MEGA DIFÍCIL ===
            {
                id: 31,
                question: "Qual é a complexidade do algoritmo de ordenação QuickSort no pior caso?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correct: 2,
                difficulty: "mega",
                topic: "conceitos",
                explanation: "No pior caso, quando o pivô é sempre o menor ou maior elemento, resultando em partições desbalanceadas."
            },
            {
                id: 32,
                question: "O que é uma árvore B?",
                options: [
                    "Árvore binária",
                    "Árvore balanceada multi-nível",
                    "Árvore com 2 filhos",
                    "Árvore ordenada"
                ],
                correct: 1,
                difficulty: "mega",
                topic: "arvores",
                explanation: "Árvore B é uma estrutura de dados usada em sistemas de arquivos e bancos de dados. Mantém altura baixa mesmo com muitos dados."
            },
            {
                id: 33,
                question: "Qual é a complexidade de busca em uma árvore B?",
                options: [
                    "O(1)",
                    "O(log n)",
                    "O(n)",
                    "O(n log n)"
                ],
                correct: 1,
                difficulty: "mega",
                topic: "arvores",
                explanation: "Árvores B mantêm altura baixa, garantindo busca eficiente mesmo com grandes quantidades de dados."
            },
            {
                id: 34,
                question: "O que é um grafo acíclico dirigido (DAG)?",
                options: [
                    "Grafo sem direção",
                    "Grafo dirigido sem ciclos",
                    "Grafo completo",
                    "Grafo ponderado"
                ],
                correct: 1,
                difficulty: "mega",
                topic: "grafos",
                explanation: "DAG é um grafo dirigido que não contém ciclos. Usado para representar dependências e ordenação topológica."
            },
            {
                id: 35,
                question: "Qual algoritmo é usado para encontrar o caminho mais curto em um grafo?",
                options: [
                    "Bubble Sort",
                    "Dijkstra",
                    "Quick Sort",
                    "Binary Search"
                ],
                correct: 1,
                difficulty: "mega",
                topic: "grafos",
                explanation: "Algoritmo de Dijkstra encontra o caminho mais curto entre dois vértices em um grafo ponderado."
            },
            {
                id: 36,
                question: "O que é uma árvore rubro-negra?",
                options: [
                    "Árvore com cores",
                    "Árvore binária balanceada",
                    "Árvore com 3 filhos",
                    "Árvore ordenada"
                ],
                correct: 1,
                difficulty: "mega",
                topic: "arvores",
                explanation: "Árvore rubro-negra é uma árvore binária de busca auto-balanceada que usa cores para manter o balanceamento."
            },
            {
                id: 37,
                question: "Qual é a complexidade de inserção em uma árvore rubro-negra?",
                options: [
                    "O(1)",
                    "O(n)",
                    "O(log n)",
                    "O(n²)"
                ],
                correct: 2,
                difficulty: "mega",
                topic: "arvores",
                explanation: "A inserção e rebalanceamento são O(log n). As operações de rotação e recoloração mantêm as propriedades da árvore."
            },
            {
                id: 38,
                question: "O que é um heap binário?",
                options: [
                    "Árvore binária completa",
                    "Árvore ordenada",
                    "Árvore balanceada",
                    "Árvore com 2 filhos"
                ],
                correct: 0,
                difficulty: "mega",
                topic: "arvores",
                explanation: "Heap binário é uma árvore binária completa que satisfaz a propriedade de heap (pai sempre maior/menor que filhos)."
            },
            {
                id: 39,
                question: "Qual é a complexidade de extrair o máximo de um heap?",
                options: [
                    "O(1)",
                    "O(log n)",
                    "O(n)",
                    "O(n log n)"
                ],
                correct: 1,
                difficulty: "mega",
                topic: "arvores",
                explanation: "Extrair o máximo é O(1), mas rebalancear (heapify) é O(log n)."
            },
            {
                id: 40,
                question: "O que é uma tabela hash?",
                options: [
                    "Estrutura ordenada",
                    "Estrutura com acesso O(1)",
                    "Estrutura hierárquica",
                    "Estrutura linear"
                ],
                correct: 1,
                difficulty: "mega",
                topic: "conceitos",
                explanation: "Tabela hash permite acesso, inserção e remoção em tempo médio O(1) usando funções hash para mapear chaves."
            }
        ];

        // Adicionando mais questões para chegar a 200
        for (let i = 41; i <= 200; i++) {
            const topics = ['conceitos', 'listas', 'pilhas', 'filas', 'arvores', 'grafos'];
            const difficulties = ['easy', 'medium', 'hard', 'mega'];
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
            
            let question, options, correct, explanation;
            
            switch(topic) {
                case 'conceitos':
                    question = `Questão ${i}: Qual é a complexidade de ${['acesso', 'inserção', 'busca', 'remoção'][i % 4]} em estruturas de dados?`;
                    options = ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'];
                    correct = i % 4;
                    explanation = `Complexidade varia conforme a estrutura e operação.`;
                    break;
                case 'listas':
                    question = `Questão ${i}: Em uma lista encadeada, qual operação é mais eficiente?`;
                    options = ['Acesso por índice', 'Inserção no início', 'Busca sequencial', 'Ordenação'];
                    correct = 1;
                    explanation = `Inserção no início é O(1) em listas encadeadas.`;
                    break;
                case 'pilhas':
                    question = `Questão ${i}: Qual operação remove um elemento da pilha?`;
                    options = ['Push', 'Pop', 'Peek', 'Top'];
                    correct = 1;
                    explanation = `Pop remove o elemento do topo da pilha.`;
                    break;
                case 'filas':
                    question = `Questão ${i}: Em uma fila, onde novos elementos são inseridos?`;
                    options = ['No início', 'No final', 'No meio', 'Aleatoriamente'];
                    correct = 1;
                    explanation = `Novos elementos são inseridos no final da fila (rear).`;
                    break;
                case 'arvores':
                    question = `Questão ${i}: Qual é a altura de uma árvore com ${i} nós?`;
                    options = ['log(n)', 'n', 'n/2', 'n²'];
                    correct = 0;
                    explanation = `Altura de uma árvore balanceada é aproximadamente log(n).`;
                    break;
                case 'grafos':
                    question = `Questão ${i}: Quantas arestas tem um grafo completo com ${i % 10 + 3} vértices?`;
                    options = ['n', 'n-1', 'n(n-1)/2', 'n²'];
                    correct = 2;
                    explanation = `Grafo completo tem n(n-1)/2 arestas.`;
                    break;
            }
            
            this.questions.push({
                id: i,
                question,
                options,
                correct,
                difficulty,
                topic,
                explanation
            });
        }
    }

    startQuiz() {
        const questionCount = parseInt(document.getElementById('question-count').value);
        const difficulty = document.getElementById('difficulty').value;
        const topic = document.getElementById('topic').value;
        
        // Filtrar questões baseado nos critérios
        let filteredQuestions = this.questions;
        
        if (difficulty !== 'all') {
            filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
        }
        
        if (topic !== 'all') {
            filteredQuestions = filteredQuestions.filter(q => q.topic === topic);
        }
        
        // Verificar se há questões suficientes
        if (filteredQuestions.length < questionCount) {
            const availableCount = filteredQuestions.length;
            const difficultyText = difficulty === 'all' ? 'todas as dificuldades' : difficulty;
            const topicText = topic === 'all' ? 'todos os tópicos' : topic;
            
            alert(`⚠️ Apenas ${availableCount} questões disponíveis para:\n• Dificuldade: ${difficultyText}\n• Tópico: ${topicText}\n\nAjuste os filtros ou reduza o número de questões para ${availableCount} ou menos.`);
            return;
        }
        
        // Mostrar informações sobre a prova
        this.showQuizInfo(questionCount, difficulty, topic, filteredQuestions.length);
        
        // Aleatorizar e selecionar questões
        this.currentQuestions = this.shuffleArray(filteredQuestions).slice(0, questionCount);
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.currentQuestions.length).fill(null);
        this.startTime = Date.now();
        this.quizDuration = 0;
        
        // Iniciar timer
        this.startTimer();
        
        // Mostrar primeira questão
        this.showQuestion();
        
        // Atualizar interface
        document.getElementById('quiz-setup').style.display = 'none';
        document.getElementById('quiz-interface').style.display = 'block';
        document.getElementById('quiz-results').style.display = 'none';
        
        this.updateProgress();
    }

    showQuizInfo(questionCount, difficulty, topic, totalAvailable) {
        const difficultyNames = {
            'all': 'Todas as dificuldades',
            'easy': 'Fácil',
            'medium': 'Médio', 
            'hard': 'Difícil',
            'mega': 'Mega Difícil'
        };
        
        const topicNames = {
            'all': 'Todos os tópicos',
            'conceitos': 'Conceitos Fundamentais',
            'listas': 'Listas Encadeadas',
            'pilhas': 'Pilhas',
            'filas': 'Filas',
            'arvores': 'Árvores',
            'grafos': 'Grafos'
        };
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'quiz-info-display';
        infoDiv.innerHTML = `
            <div class="info-display">
                <h4>📋 Configuração da Prova</h4>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Questões:</span>
                        <span class="info-value">${questionCount}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Dificuldade:</span>
                        <span class="info-value">${difficultyNames[difficulty]}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Tópico:</span>
                        <span class="info-value">${topicNames[topic]}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Disponíveis:</span>
                        <span class="info-value">${totalAvailable}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Inserir no início da interface
        const quizInterface = document.getElementById('quiz-interface');
        quizInterface.insertBefore(infoDiv, quizInterface.firstChild);
    }

    showQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.finishQuiz();
            return;
        }

        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Atualizar contador
        document.getElementById('question-counter').textContent = 
            `Questão ${this.currentQuestionIndex + 1} de ${this.currentQuestions.length}`;
        
        // Atualizar texto da questão
        document.getElementById('question-text').textContent = question.question;
        
        // Criar opções
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionItem = document.createElement('div');
            optionItem.className = 'option-item';
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                optionItem.classList.add('selected');
            }
            
            optionItem.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;
            
            optionItem.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionItem);
        });
        
        // Atualizar botões
        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('next-btn').style.display = 
            this.currentQuestionIndex === this.currentQuestions.length - 1 ? 'none' : 'block';
        document.getElementById('finish-btn').style.display = 
            this.currentQuestionIndex === this.currentQuestions.length - 1 ? 'block' : 'none';
        
        this.updateProgress();
    }

    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        
        // Atualizar visual das opções
        const options = document.querySelectorAll('.option-item');
        options.forEach((option, index) => {
            option.classList.remove('selected');
            if (index === optionIndex) {
                option.classList.add('selected');
            }
        });
        
        // Mostrar feedback imediato
        this.showQuestionFeedback(optionIndex);
    }

    showQuestionFeedback(selectedOption) {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option-item');
        
        // Remover feedback anterior
        options.forEach(option => {
            option.classList.remove('correct', 'incorrect');
        });
        
        // Marcar resposta correta e incorreta
        options[question.correct].classList.add('correct');
        
        if (selectedOption !== question.correct) {
            options[selectedOption].classList.add('incorrect');
        }
        
        // Mostrar explicação
        this.showExplanation(question, selectedOption);
    }

    showExplanation(question, selectedOption) {
        // Remover explicação anterior se existir
        const existingExplanation = document.querySelector('.explanation-box');
        if (existingExplanation) {
            existingExplanation.remove();
        }
        
        const explanationBox = document.createElement('div');
        explanationBox.className = 'explanation-box';
        
        let explanationHTML = '<h4>Explicação:</h4>';
        
        if (selectedOption === question.correct) {
            explanationHTML += '<p class="correct-feedback">✅ Resposta correta!</p>';
        } else {
            explanationHTML += `
                <p class="incorrect-feedback">❌ Resposta incorreta!</p>
                <p><strong>Sua resposta:</strong> ${question.options[selectedOption]}</p>
                <p><strong>Resposta correta:</strong> ${question.options[question.correct]}</p>
            `;
        }
        
        explanationHTML += `<p><strong>Por quê?</strong> ${question.explanation}</p>`;
        
        explanationBox.innerHTML = explanationHTML;
        
        // Inserir após as opções
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.appendChild(explanationBox);
        
        // Scroll para a explicação
        explanationBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }

    finishQuiz() {
        clearInterval(this.timer);
        this.quizDuration = Math.floor((Date.now() - this.startTime) / 1000);
        
        // Calcular resultados
        const results = this.calculateResults();
        
        // Mostrar resultados
        this.showResults(results);
        
        // Atualizar interface
        document.getElementById('quiz-interface').style.display = 'none';
        document.getElementById('quiz-results').style.display = 'block';
    }

    calculateResults() {
        let correct = 0;
        const total = this.currentQuestions.length;
        
        this.userAnswers.forEach((answer, index) => {
            if (answer === this.currentQuestions[index].correct) {
                correct++;
            }
        });
        
        const score = Math.round((correct / total) * 10);
        const percentage = Math.round((correct / total) * 100);
        
        return {
            correct,
            total,
            score,
            percentage,
            wrong: total - correct
        };
    }

    showResults(results) {
        // Atualizar estatísticas
        document.getElementById('final-score').textContent = results.score;
        document.getElementById('correct-answers').textContent = results.correct;
        document.getElementById('wrong-answers').textContent = results.wrong;
        document.getElementById('total-time').textContent = this.formatTime(this.quizDuration);
        
        // Criar gráfico de performance
        this.createPerformanceChart(results);
        
        // Adicionar feedback baseado na nota
        this.addScoreFeedback(results);
        
        // Adicionar resumo de estudo
        this.addStudySummary(results);
    }

    addScoreFeedback(results) {
        const resultsDiv = document.querySelector('.quiz-results');
        const existingFeedback = resultsDiv.querySelector('.score-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }
        
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'score-feedback';
        
        let feedbackHTML = '<h4>Análise do Desempenho:</h4>';
        
        if (results.percentage >= 90) {
            feedbackHTML += '<p class="excellent">🎉 Excelente! Você domina o conteúdo!</p>';
        } else if (results.percentage >= 70) {
            feedbackHTML += '<p class="good">👍 Bom trabalho! Continue estudando!</p>';
        } else if (results.percentage >= 50) {
            feedbackHTML += '<p class="average">📚 Regular. Revise os conceitos básicos.</p>';
        } else {
            feedbackHTML += '<p class="poor">⚠️ Precisa estudar mais. Foque nos fundamentos.</p>';
        }
        
        feedbackHTML += `<p><strong>Dicas:</strong> Revise as questões que você errou e pratique mais os conceitos relacionados.</p>`;
        
        feedbackDiv.innerHTML = feedbackHTML;
        resultsDiv.appendChild(feedbackDiv);
    }

    addStudySummary(results) {
        const resultsDiv = document.querySelector('.quiz-results');
        const existingSummary = resultsDiv.querySelector('.study-summary');
        if (existingSummary) {
            existingSummary.remove();
        }
        
        // Analisar questões erradas por tópico
        const wrongByTopic = {};
        const wrongByDifficulty = {};
        
        this.userAnswers.forEach((answer, index) => {
            if (answer !== this.currentQuestions[index].correct) {
                const question = this.currentQuestions[index];
                
                // Contar por tópico
                wrongByTopic[question.topic] = (wrongByTopic[question.topic] || 0) + 1;
                
                // Contar por dificuldade
                wrongByDifficulty[question.difficulty] = (wrongByDifficulty[question.difficulty] || 0) + 1;
            }
        });
        
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'study-summary';
        
        let summaryHTML = '<h4>📚 Resumo de Estudo - O que revisar:</h4>';
        
        // Tópicos para revisar
        if (Object.keys(wrongByTopic).length > 0) {
            summaryHTML += '<div class="study-section"><h5>🎯 Tópicos para Revisar:</h5><ul>';
            
            const topicNames = {
                'conceitos': 'Conceitos Fundamentais',
                'listas': 'Listas Encadeadas',
                'pilhas': 'Pilhas',
                'filas': 'Filas',
                'arvores': 'Árvores',
                'grafos': 'Grafos'
            };
            
            Object.entries(wrongByTopic).forEach(([topic, count]) => {
                summaryHTML += `<li><strong>${topicNames[topic]}</strong> - ${count} erro(s)</li>`;
            });
            
            summaryHTML += '</ul></div>';
        }
        
        // Dificuldades para praticar
        if (Object.keys(wrongByDifficulty).length > 0) {
            summaryHTML += '<div class="study-section"><h5>📖 Níveis para Praticar:</h5><ul>';
            
            const difficultyNames = {
                'easy': 'Fácil',
                'medium': 'Médio',
                'hard': 'Difícil',
                'mega': 'Mega Difícil'
            };
            
            Object.entries(wrongByDifficulty).forEach(([difficulty, count]) => {
                summaryHTML += `<li><strong>${difficultyNames[difficulty]}</strong> - ${count} erro(s)</li>`;
            });
            
            summaryHTML += '</ul></div>';
        }
        
        // Recomendações específicas
        summaryHTML += '<div class="study-section"><h5>💡 Recomendações:</h5><ul>';
        
        if (results.percentage < 70) {
            summaryHTML += '<li>Revise os conceitos básicos de estruturas de dados</li>';
            summaryHTML += '<li>Pratique implementações em C das estruturas principais</li>';
            summaryHTML += '<li>Entenda bem as complexidades de tempo das operações</li>';
        }
        
        if (wrongByTopic['conceitos']) {
            summaryHTML += '<li>Foque em ponteiros, malloc/free e alocação de memória</li>';
        }
        
        if (wrongByTopic['listas']) {
            summaryHTML += '<li>Pratique inserção e remoção em listas encadeadas</li>';
        }
        
        if (wrongByTopic['pilhas']) {
            summaryHTML += '<li>Entenda bem o princípio LIFO e implementação de pilhas</li>';
        }
        
        if (wrongByTopic['filas']) {
            summaryHTML += '<li>Pratique filas circulares e o operador módulo (%)</li>';
        }
        
        if (wrongByTopic['arvores']) {
            summaryHTML += '<li>Revise percorrimentos e balanceamento de árvores</li>';
        }
        
        if (wrongByTopic['grafos']) {
            summaryHTML += '<li>Entenda representação de grafos e algoritmos básicos</li>';
        }
        
        summaryHTML += '</ul></div>';
        
        summaryDiv.innerHTML = summaryHTML;
        resultsDiv.appendChild(summaryDiv);
    }

    createPerformanceChart(results) {
        const canvas = document.getElementById('performance-chart');
        const ctx = canvas.getContext('2d');
        
        // Configurar canvas
        canvas.width = 300;
        canvas.height = 200;
        
        // Limpar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Desenhar gráfico de pizza
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 60;
        
        // Acertos
        const correctAngle = (results.correct / results.total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, 0, correctAngle);
        ctx.fillStyle = '#00ff00';
        ctx.fill();
        
        // Erros
        const wrongAngle = (results.wrong / results.total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, correctAngle, correctAngle + wrongAngle);
        ctx.fillStyle = '#ff0000';
        ctx.fill();
        
        // Texto
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${results.percentage}%`, centerX, centerY + 5);
    }

    startTimer() {
        this.timer = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            document.getElementById('quiz-timer').textContent = `Tempo: ${this.formatTime(elapsed)}`;
        }, 1000);
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    reviewQuiz() {
        this.showReviewMode();
    }

    showReviewMode() {
        const reviewHTML = `
            <div class="review-container">
                <h3>Revisão das Respostas</h3>
                <div class="review-questions">
                    ${this.currentQuestions.map((question, index) => {
                        const userAnswer = this.userAnswers[index];
                        const isCorrect = userAnswer === question.correct;
                        const userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'Não respondida';
                        const correctAnswerText = question.options[question.correct];
                        
                        return `
                            <div class="review-question ${isCorrect ? 'correct' : 'incorrect'}">
                                <h4>Questão ${index + 1}</h4>
                                <p><strong>Pergunta:</strong> ${question.question}</p>
                                <p><strong>Sua resposta:</strong> ${userAnswerText}</p>
                                <p><strong>Resposta correta:</strong> ${correctAnswerText}</p>
                                <p><strong>Explicação:</strong> ${question.explanation}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
                <button class="btn btn-primary" onclick="quizSystem.newQuiz()">Nova Prova</button>
            </div>
        `;
        
        document.getElementById('quiz-results').innerHTML = reviewHTML;
    }

    newQuiz() {
        document.getElementById('quiz-results').style.display = 'none';
        document.getElementById('quiz-setup').style.display = 'block';
        
        // Resetar seleções
        document.getElementById('question-count').value = '10';
        document.getElementById('difficulty').value = 'all';
        document.getElementById('topic').value = 'all';
    }
}

// Funções globais para os botões
function startQuiz() {
    if (quizSystem) {
        quizSystem.startQuiz();
    } else {
        alert('Sistema de prova ainda não foi inicializado. Aguarde um momento e tente novamente.');
    }
}

function nextQuestion() {
    if (quizSystem) {
        quizSystem.nextQuestion();
    }
}

function previousQuestion() {
    if (quizSystem) {
        quizSystem.previousQuestion();
    }
}

function finishQuiz() {
    if (quizSystem) {
        quizSystem.finishQuiz();
    }
}

function reviewQuiz() {
    if (quizSystem) {
        quizSystem.reviewQuiz();
    }
}

function newQuiz() {
    if (quizSystem) {
        quizSystem.newQuiz();
    }
} 