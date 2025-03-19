var minhavar = "Gilliard"
let meulet = "Gilliard"
const meuconst = "Gilliard"

if (true) {
    var minhavar2 = "Almeida"
    let meulet2 = "Carvalho"
}
console.log(minhavar2)
//console.log(meulet2)
let meulet3 = "oi"
console.log(meulet3)

meulet3 = "tchau"
console.log(meulet3)

const meuconst2 = "eu"
console.log(meuconst2)
//meuconst2 = "nos"
console.log(meuconst2)

function minhafuncao(){
    console.log("Olá, Mundo")
}

let variavelundefined;
const variavelnull = null;
const variavelstring = "ola";
const variavelinteiro = 10;
const variaveldecimal = 10.5;
const variavelbooleano = true;
const variavellista = [1,2,3];
const variavelobjeto = {};
console.log("variavelundefined", variavelundefined, typeof variavelundefined)
console.log("variavelnull", variavelnull, typeof variavelnull)
console.log("variavelstring", variavelstring, typeof variavelstring)
console.log("ariavelinteiro", variavelinteiro, typeof variavelinteiro)
console.log("variaveldecimal", variaveldecimal, typeof variaveldecimal)
console.log("variavelbooleano",variavelbooleano, typeof variavelbooleano)
console.log("variavellista", variavellista, typeof variavellista)
console.log("variavelobjeto", variavelobjeto, typeof variavelobjeto)
console.log("minhafuncao", minhafuncao, typeof minhafuncao)

let array = [
    "meuvalor1",
    "meuvalor2",
    10,
    variavelstring,
    variaveldecimal,
    variavellista,
    variavelobjeto,
    minhafuncao,
]
console.log(array)

let objeto = {
    nome:"Gilliard",
    sobrenome:"Almeida",
    idade:26,
    caracteristicas:["alto","camisapreta"],
    lista: array,
    funcao: minhafuncao,
}
console.log(objeto)

for (let i=0;i<array.length;i++){
    console.log("meufor",i,array[i])
}


let listapessoas = []
function enviarformulario(){
    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)
    if(idade<18){
        alert("É necessário que a pessoa seja maior de idade");
        return
    }
    let pessoa = {nome:nome,idade:idade}
    listapessoas.push(pessoa);
    console.log(listapessoas)
    imprimirlistapessoas()
}

function imprimirlistapessoas(){
    const divlista = document.getElementById("Listadepessoas")
    divlista.innerHTML = "";
    for(let i=0;i<listapessoas.length;i++){
        const divpessoa = document.createElement("div")
        divpessoa.innerText = listapessoas[i].nome + " - " + listapessoas[i].idade
        divlista.appendChild(divpessoa)
    }
}