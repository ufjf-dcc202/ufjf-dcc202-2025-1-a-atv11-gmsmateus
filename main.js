//main.js
// Uma coisa, nos slides não tinha como implementar o botão "adicionar", mas acho que teria sentido pra atividade, então tentei implimentar eu mesmo
import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector('#itens');
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click', limpaItensDaLista);
btnAdicionar.addEventListener('click', adicionaItemNaLista);

atualizarLista();

function atualizarLista() {
    olItens.innerHTML= "";
    let lista = getLista();
    for(let i=0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

function limpaItensDaLista(){
    limpaLista();
    atualizarLista();
}

function adicionaItemNaLista(){
    const item = pEntrada.textContent.trim();
    adicionaNaLista(item);
    pEntrada.textContent="";
    atualizarLista();
}