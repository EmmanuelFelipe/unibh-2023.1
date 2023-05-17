class Calculadora {
    calcular(conta) {
        try {
            let resultado = eval(conta);
            return resultado;
        } catch {
            return null;
        }
    }
}

let calculadora = new Calculadora();

function calcular() {
    let conta = document.getElementById('entrada').value;
    let resultado = calculadora.calcular(conta);

    if  (resultado == null) {
        document.getElementById('display').textContent = conta;
    }
    else {
        document.getElementById('display').textContent = conta + ' = ' + resultado;
        document.getElementById('entrada').value = '';
    }
}

function addOperador(valor) {
    let entrada = document.getElementById('entrada');
    entrada.value += valor;
    entrada.focus();
}