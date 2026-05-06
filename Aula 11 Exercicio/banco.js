const numeroConta = 1;
let titular = 'Diego';
let saldo = 10000;
let contaAtiva = true;
let statusConta;
const historico = []

function verExtrato() {
  if (contaAtiva) {
    statusConta = 'Ativa';
  } else {
    statusConta = 'Bloqueado';
  }

  console.log(' ======= BANCO INOVABANK ======= ');
  console.log(`Conta: ${numeroConta}`);
  console.log(`Titular: ${titular}`);
  console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
  console.log(`Status: ${statusConta}`);
}

function depositar(valor) {
  if(!contaAtiva) {
    console.log('\nNão é possível realizar depósitos em uma conta bloqueada.');
    return;
  } else if (valor > 0) {
    saldo += valor;
   historico.push("Depósito: R$ ${valor} | saldo: R$ ${saldo}")
    console.log(
      `\nDepósito de R$ ${valor.toFixed(
        2
      )} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`
    );
  } else {
    console.log(
      '\nValor de depósito inválido. O valor deve ser maior que zero.'
    );
  }
}

function sacar(valor) {
  if(!contaAtiva) {
    console.log('\nNão é possível realizar saques em uma conta bloqueada.');
    return;
  } else if (valor > 0 && valor <= saldo && contaAtiva) {
    saldo -= valor;
    console.log(
      `\nSaque de R$ ${valor.toFixed(
        2
      )} realizado com sucesso! \nNovo saldo: R$ ${saldo.toFixed(2)}`
    );
  } else {
    console.log(
      '\nValor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo.'
    );
  }
}


const num1 = 10;
const num2 = 10;

const resultado = num1 + num2;
const comparacao = num1 == num2;

console.log(resultado); // Saída: "1020"
console.log(comparacao); // Saída: false

function bloquearConta() {
  contaAtiva = false;
  console.log('\nConta bloqueada com sucesso!');
}

 verExtrato()
depositar(500)
sacar(200)
verExtrato() 

depositar(150)
depositar(323)
sacar(1000)
sacar(231)
console.log(historico)

 


function verResumo(){

    let nDepositos = 0
    let nSaques = 0
    let qntdTransacoes = 0 

    for(let i = 0; i < historico.length; i ++){
        if( historico[i].includes("Depósito")){
            nDepositos++
        } else {
            nSaques++

        }
        qntdTransacoes++
    }
    

    console.log("Resumo de transações")
    console.log(`Depósitos: ${nDepositos}`)
    console.log(`Saque: ${nSaques}`)
    console.log(`Total: ${qntdTransacoes}`)
    

  

}
   

verResumo()

function simularTentativasSaque
(valor, maxTentativas){
    let tentativa = 0 
    while(tentativa <
        maxTentativas) {
            
        console.log()
        }
        
}