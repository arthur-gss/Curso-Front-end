const numeroConta = 1
let titular = "Alexandre"
let saldo = 1000
let contaAtiva = false
let statusConta
const historico = []
const elSaldo = document.querySelector('#saldo')
const elMensagem = document.querySelector("#mensagem")
const btnDepositar = document.querySelector("#btn-depositar")
const btnSacar = document.querySelector("#btn-sacar")
const btnBloquear = document.querySelector("#btn-bloquear")
const campValor = document.querySelector("#campo-valor")
const elTotalDepositos = document.querySelector("#total-depositos")
const elTotalSaques = document.querySelector("#total-saques")
const elTotalTransacoes = document.querySelector("#total-transacoes")



btnDepositar.addEventListener("click", () => {
 const valor = Number(campValor.value)
 depositar(valor)
})

btnSacar.addEventListener("click", () => {
    const valor = Number(campValor.value)
    sacar(valor)
 })

 btnBloquear.addEventListener("click", () => {
    bloquearConta()
 })



function verExtrato() {

}


function verExtrato() {
    if (contaAtiva) {
        statusConta = "Ativa"
    } else {
        statusConta = "Bloqueado"
    }

    console.log(" ======= BANDO INOVABANK =======")
    console.log(`conta: ${numeroConta}`)
    console.log(`Titular: ${titular}`)
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
    console.log(`Status: ${statusConta}`)
}


function depositar(valor) {
    if(!contaAtiva) {
        exibirMensagem("Conta bloqueada. Não é possível realizar depósitos.", "erro")
        return
    }
    if (valor > 0) {
        saldo = saldo + valor
        historico.push(`Depósito: R$ ${valor}  | Saldo: R$ ${saldo}`)
        /* console.log(`\nDepósito de R$ ${valor.
            toFixed(2)} realizado com sucesso!.`)
        console.log(`Novo saldo: R$ ${saldo.
            toFixed(2)}`) */
            atualizarSaldo()
          
    } else {
        exibirMensagem("\nValor de depósito inválido. O valor deve ser maior que zero.")
    }
}


function sacar(valor) {
    if(!contaAtiva) {
        exibirMensagem("Conta bloqueada. Não é possível realizar sacar.", "erro")
        return
    }
    else if (valor > 0 && valor <= saldo) {
        saldo -= valor
        historico.push(`sacar: R$ ${valor}  | Saldo: R$ ${saldo}`)
        atualizarSaldo()
        exibirMensagem(`Saque de ${valor} realizado com sucesso! , sucesso`)
        
    } else {
        exibirMensagem(`saque invalido`)
        exibirMensagem("\nValor de saque inválido. o valor deve ser maior que zero e menor ou igual ao saldo.")

    }
}

function bloquearConta(){
    if(contaAtiva){
    contaAtiva = false;
    exibirMensagem("\nConta bloqueada com sucesso!" , "sucesso")
    btnBloquear.textContent = "Desbloquear Conta"
 } else {
       contaAtiva = true;
       exibirMensagem("\nConta desbloqueada com sucesso!" , "sucesso")
       btnBloquear.textContent = "Bloquear Conta"
    }
}






depositar(400)
depositar(200)
sacar(1000)
sacar(231)

console.log(historico)

verExtrato()

for (let i = historico.length - 1; i >= 0; i--) {
    console.log(` ${i}: ${historico[i]}`)

}

for (let i = 1; i < 6; i++) {
    const indiceAtual = historico.length - i
    console.log(`${[i]}. ${historico[indiceAtual]}`)
}

function verResumo() {
    let nDepositos, nSaques, qtdTransacoes

    for (let i = 0; i < historico.lenght; i++) {
        if (historico[i].includes("Depósito")) {
            nDepositos++
        } else {
            nSaques++
        }
        qtdTransacoes++
    }
    console.log("\n ====== Resumo das Transações ======")
    console.log(`Depósitos: ${nDepositos}`)
    console.log(`Saques: ${nSaques}`)
    console.log(`Total : ${qtdTransacoes} transações`)
}


/* function simularTentativasSaque(valor, maxTentativas) {
    let tentativa = 0
    while (tentativa < maxTentativas) {
        if(valor <) {

        }
    }
} */

("mensagem")

function atualizarSaldo(){
    elSaldo.textContent = `R$ ${saldo.toFixed(2)}`
}

function exibirMensagem(texto, tipo){
    elMensagem.textContent = texto
    elMensagem.style.display = "block"
    elMensagem.className = tipo === !"sucesso" ? "mensagem=sucesso" : "msg-erro"


}

function verResumo(){
    let totalDepositos = 0;
    let totalSaques = 0;
    let totalTransacoes = 0;

    for(const transacoes of historico){
        if(transacoes.includes("Depósito")) {
            totalDepositos++
        } else {
            totalSaques++
        }
        totalTransacoes++
    }

    elTotalDepositos.textContent = totalDepositos
    elTotalSaques.textContent = totalSaques
    elTotalTransacoes.textContent = totalTransacoes
}
