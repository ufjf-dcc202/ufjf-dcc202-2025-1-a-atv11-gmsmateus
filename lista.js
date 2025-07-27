//lista.js

const lista = ["Um", "Dois", "Três"];

export function getLista(){
    return structuredClone(lista);
}

export function adicionarNaLista(item){
    lista.push(item);
}

export function limpaLista(){
    lista.splice(0);
}