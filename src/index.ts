let button = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo")!;
let soma = document.getElementById("soma")! as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo") as InnerHTML;
let saldoTotal = 0;

function somar(n1: number, n2: number) {
  return n1 + n2;
}

if (button) {
  button.addEventListener("click", () => {
    if (input1 && input2) {
      let res = somar(Number(input1.value), Number(input2.value));
      saldoTotal = res;
      campoSaldo.innerHTML = res.toString();
      limpaInputs();
    }
  });
}

limparSaldo();

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    saldoTotal += soma;
    campoSaldo.innerHTML = saldoTotal.toString();
    limparCampoSoma();
  }
}

function limparCampoSoma() {
  soma.value = "";
  limpaInputs();
}

function limpaInputs() {
  if (input1 && input2) {
    input1.value = "";
    input2.value = "";
  }
}

function limparSaldo() {
  if (campoSaldo) {
    saldoTotal = 0;
    soma.value = "";
    campoSaldo.innerHTML = saldoTotal.toString();
  }
}

if (botaoAtualizar) {
  botaoAtualizar.addEventListener("click", () => {
    somarAoSaldo(Number(soma.value));
  });
}
botaoLimpar.addEventListener("click", () => {
  limparSaldo();
  limpaInputs();
});
