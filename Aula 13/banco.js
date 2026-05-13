// --- ESTADO INICIAL ---
let saldo = 1000;
let contaAtiva = false;
const historico = [];

// --- SELEÇÃO DE ELEMENTOS ---
const elSaldo = document.querySelector('#saldo');
const elTitular = document.querySelector('#titular'); // Onde o nome aparece
const elMensagem = document.querySelector("#mensagem");
const elListaHistorico = document.querySelector("#lista-historico");
const elStatusConta = document.querySelector("#status-conta");

const campValor = document.querySelector("#campo-valor");
const campTitular = document.querySelector("#campo-titular"); // O novo input

const btnDepositar = document.querySelector("#btn-depositar");
const btnSacar = document.querySelector("#btn-sacar");
const btnBloquear = document.querySelector("#btn-bloquear");
const btnLimpar = document.querySelector("#btn-limpar-historico");
const btnAtualizarTitular = document.querySelector("#btn-atualizar-titular"); // O novo botão

const elTotalDepositos = document.querySelector("#total-depositos");
const elTotalSaques = document.querySelector("#total-saques");
const elTotalTransacoes = document.querySelector("#total-transacoes");

// Inicialização
atualizarSaldo();

// --- EVENTOS ---

// Atualizar Titular
btnAtualizarTitular.addEventListener("click", () => {
    const novoNome = campTitular.value;
    if (novoNome.trim() !== "") {
        elTitular.textContent = novoNome; // Troca o nome no card de saldo
        exibirMensagem(`Titular atualizado para: ${novoNome}`, "sucesso");
        campTitular.value = ""; // Limpa o campo
    } else {
        exibirMensagem("Digite um nome válido!", "erro");
    }
});

btnDepositar.addEventListener("click", () => {
    const valor = Number(campValor.value);
    depositar(valor);
    campValor.value = ""; 
});

btnSacar.addEventListener("click", () => {
    const valor = Number(campValor.value);
    sacar(valor);
    campValor.value = "";
});

btnBloquear.addEventListener("click", () => {
    bloquearConta();
});

btnLimpar.addEventListener("click", () => {
    limparHistorico();
});

// --- FUNÇÕES ---

function atualizarSaldo() {
    elSaldo.textContent = `R$ ${saldo.toFixed(2)}`;
}

function exibirMensagem(texto, tipo) {
    elMensagem.textContent = texto;
    elMensagem.style.display = "block";
    elMensagem.className = tipo === "sucesso" ? "msg-sucesso" : "msg-erro";
}

function adicionarAoHistorico(tipo, valor) {
    const elListaVazia = document.querySelector(".historico-vazio");
    if (elListaVazia) elListaVazia.remove();

    const texto = `${tipo}: R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`;
    historico.push(texto);

    const item = document.createElement("li");
    item.textContent = texto;
    elListaHistorico.insertBefore(item, elListaHistorico.firstChild);

    if (elListaHistorico.children.length > 5) {
        elListaHistorico.removeChild(elListaHistorico.lastChild);
    }
}

function verResumo() {
    let dep = 0; let saq = 0;
    for (const item of historico) {
        if (item.includes("Depósito")) dep++;
        if (item.includes("Saque")) saq++;
    }
    elTotalDepositos.textContent = dep;
    elTotalSaques.textContent = saq;
    elTotalTransacoes.textContent = historico.length;
}

function depositar(valor) {
    if (!contaAtiva) return exibirMensagem("Conta bloqueada!", "erro");
    if (valor > 0) {
        saldo += valor;
        atualizarSaldo();
        adicionarAoHistorico("Depósito", valor);
        verResumo();
        exibirMensagem("Depósito realizado!", "sucesso");
    }
}

function sacar(valor) {
    if (!contaAtiva) return exibirMensagem("Conta bloqueada!", "erro");
    if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        atualizarSaldo();
        adicionarAoHistorico("Saque", valor);
        verResumo();
        exibirMensagem("Saque realizado!", "sucesso");
    } else {
        exibirMensagem("Saldo insuficiente!", "erro");
    }
}

function bloquearConta() {
    contaAtiva = !contaAtiva;
    elStatusConta.textContent = contaAtiva ? "Ativa" : "Bloqueada";
    elStatusConta.className = contaAtiva ? "status-ativa" : "status-bloqueada";
    btnBloquear.textContent = contaAtiva ? "🔒 Bloquear Conta" : "🔓 Desbloquear Conta";
}

function limparHistorico() {
    historico.length = 0;
    elListaHistorico.innerHTML = '<li class="historico-vazio">Nenhuma transação ainda.</li>';
    verResumo();
}




