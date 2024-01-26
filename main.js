const form = document.getElementById('form-atividade');
const ImgAprovado = '<img src="./img/aprovado.png" alt = "emoji celebrando" />';
const ImgReprovado = '<img src="./img/reprovado.png" alt = "emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = '';



form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();


});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('input-nome');
    const inputNotaAtividade = document.getElementById('input-nota');

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`A atividade: ${inputNomeAtividade.value} já foi inserida.`);
    }
    else{
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? ImgAprovado : ImgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}
function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final').innerHTML = mediaFinal;
    document.getElementById('resultado-final').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}
function calculaMediaFinal(){
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;

}