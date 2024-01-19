let inicio = document.getElementById('iinicio');
let fim = document.getElementById('ifim');
let passo = document.getElementById('ipasso');
let botao = document.getElementById('iresBtn');
let resultado = document.getElementById('ires');

botao.onclick = function() {
    //Transformando Txt em Numeros
    let inicioValor = Number(inicio.value);
    let fimValor = Number(fim.value);
    let passoValor = Number(passo.value);

    //Tratamento de Erro
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Falta dados')
    } else {
        resultado.innerHTML = 'Contando... '
        
        if (passoValor <= 0) {
            window.alert('Passo Invalido! Considere a partir de 1')
        }
        if (inicioValor < fimValor) {
            //Crescente
            for(let x = inicioValor; x <= fimValor; x += passoValor) {
                resultado.innerHTML += ` ${x} \u{1F449}`
            }
            
        } else {
            //Decrescente
            for(let x = inicioValor; x >= fimValor; x -= passoValor) {
                resultado.innerHTML += ` ${x} \u{1F449} `
            }
            
        }
        resultado.innerHTML += `\u{1F3C1}`
        
    }

}
    