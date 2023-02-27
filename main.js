var altura = document.querySelector('#altura');
var peso = document.querySelector('#peso');
var botao = document.querySelector('button[type=submit]');
var resultado = document.querySelector('.resultado')
var botaoLimpar = document.querySelector('.limpar')
var form = document.querySelector('form');
var linhas = document.querySelectorAll('.linha-tabela')

for(let i = 0; i < linhas.length; i++){
    let linha = linhas[i];

    botao.addEventListener("click", (event) => {
        event.preventDefault()

        resultado.textContent = calcularImc(altura.value, peso.value);
        
        if(resultado.textContent < 18.5){
            linha.style.backgroundColor = 'yellow';
        }else if(resultado.textContent >= 18.5 && resultado.textContent <= 24.9){
            linha.style.backgroundColor = 'yellow';
        }else if(resultado.textContent >= 25.0 && resultado.textContent <= 29.9){
            linha.style.backgroundColor = 'yellow';
        }else if(resultado.textContent >= 30.0 && resultado.textContent <= 39.9){
            linha.style.backgroundColor = 'yellow';
        } else {
            linha.style.backgroundColor = 'yellow';
        }

    })
    
    botaoLimpar.addEventListener("click", () => {
        form.reset();
    })

    
function calcularImc(a, p){
    let dados = validaDados(a, p);
    
    if(dados === true){
        let imc = p / (a * a); 
        return imc.toFixed(2);
    } 
    
    return "Dados inválidos";
}

function validaDados(a, p){
    let dadosSaoValidos = true;
    
    if(a === '' || p === '' || a <= 0 || p <= 0 || a >= 3.0 || p >= 600){
        dadosSaoValidos = false;
    }

    return dadosSaoValidos;
}

}