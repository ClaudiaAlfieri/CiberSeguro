// ==================== MODAL ====================

const cards = document.querySelectorAll(".ameaca-card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

function openModal(title, text) {
    modalTitle.textContent = title;
    modalText.textContent = text;
    modal.classList.add("open");
}

function closeModal() {
    modal.classList.remove("open");
}

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        const title = card.dataset.modalTitle;
        const text = card.dataset.modalText;
        openModal(title, text);
    });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
    }
});

// ==================== QUIZ ====================

let pontuacao = 0;
let perguntaAtual = 1;
const totalPerguntas = 10;

const respostasCorretas = {
    1: "nao",
    2: "nao",
    3: "sim",
    4: "nao",
    5: "sim",
    6: "sim",
    7: "nao",
    8: "sim",
    9: "nao",
    10: "sim"
};

function responder(numeroPergunta, resposta) {
    if (resposta === respostasCorretas[numeroPergunta]) {
        pontuacao++;
    }

    document.getElementById("pergunta-" + numeroPergunta).style.display = "none";
    perguntaAtual++;

    if (perguntaAtual <= totalPerguntas) {
        document.getElementById("pergunta-" + perguntaAtual).style.display = "block";
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const texto = document.getElementById("resultado-texto");
    let mensagem;

    switch (true) {
        case (pontuacao === 10):
            mensagem = "🏆 Perfeito! Tiraste " + pontuacao + "/10. És um verdadeiro especialista em segurança digital!";
            break;
        case (pontuacao >= 8):
            mensagem = "👍 Muito bom! Tiraste " + pontuacao + "/10. Estás bem protegido, só alguns detalhes a melhorar.";
            break;
        case (pontuacao >= 6):
            mensagem = "😐 Razoável. Tiraste " + pontuacao + "/10. Estás no bom caminho mas há hábitos a corrigir.";
            break;
        case (pontuacao >= 3):
            mensagem = "⚠️ Atenção! Tiraste " + pontuacao + "/10. Os teus hábitos digitais precisam de uma revisão urgente.";
            break;
        default:
            mensagem = "🚨 Risco elevado! Tiraste " + pontuacao + "/10. Explora o site para aprenderes a protegeres-te!";
    }

    texto.textContent = mensagem;
    document.getElementById("quiz-resultado").style.display = "block";
}

function reiniciarQuiz() {
    pontuacao = 0;
    perguntaAtual = 1;

    document.getElementById("quiz-resultado").style.display = "none";

    for (let i = 1; i <= totalPerguntas; i++) {
        document.getElementById("pergunta-" + i).style.display = "none";
    }

    document.getElementById("pergunta-1").style.display = "block";
}

// ==================== DICAS ====================

function mostrarTab(categoria, botao) {
    document.querySelectorAll(".tab-conteudo").forEach(function(conteudo) {
        conteudo.style.display = "none";
    });

    document.querySelectorAll(".tab").forEach(function(tab) {
        tab.classList.remove("ativa");
    });

    document.getElementById(categoria).style.display = "block";
    botao.classList.add("ativa");
}

// ==================== FORMULÁRIO DE CONTACTO ====================

function submeterContacto() {
    const nome = document.getElementById("contacto-nome").value;
    const email = document.getElementById("contacto-email").value;

    if (nome === "" || email === "") {
        alert("Por favor preenche o nome e o email!");
        return;
    }

    const mensagem = document.getElementById("sucesso-mensagem");
    mensagem.textContent = "Obrigado, " + nome + "! Em breve vais começar a receber dicas de segurança digital em " + email + ".";

    document.getElementById("formulario-contacto").style.display = "none";
    document.getElementById("resultado-contacto").style.display = "block";
}

function reiniciarContacto() {
    document.getElementById("contacto-nome").value = "";
    document.getElementById("contacto-email").value = "";
    document.getElementById("contacto-mensagem").value = "";

    document.getElementById("resultado-contacto").style.display = "none";
    document.getElementById("formulario-contacto").style.display = "block";
}