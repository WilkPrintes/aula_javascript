//Variais e Arreys

// let nome = "Wilk Printes";
// let idade = 18;
// let idade2 = 10;
// let frase = "Japão é o melhor time do mundo";
// // alert(nome + " tem " + idade + " anos");

// console.log(`${nome} tem ${idade + idade2} anos`);
// console.log(frase.replace("Japão", "Brasil").toUpperCase());
// console.error("Deu ruim irmão");

// let lista = ["maçã", "pêra", "laranja"];
// lista.push("Uva");
// // lista.pop();
// // let lista2 = lista.reverse();
// // console.log(lista2);
// // console.log(lista2.toString());
// // console.log(lista2.join(" | "));

// let fruta = {nome:"maça", cor:"vermelho"};
// console.log(fruta.cor);

// let frutas = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxo"}];
// console.log(frutas[0].nome + " " + frutas[0].cor + " | " + frutas[1].nome + " " + frutas[1].cor) ;

//Conficionais

// let idade = prompt("Qual sua idade?");
// if (idade >= 18){
//     console.log("Maior de Idade");
// }else{
//     console.log("Menor de Idade");
// }

//Estrutura de Repetição

// let count = 0;

// while(count <= 5)
// {
//     console.log(count);
//     count++;
// }

// for (let count = 0; count <= 5; count++)
// {
//     console.log(count);
// }

// Data
// let date = new Date();

// console.log(date.getHours());

// Funções 

// function soma(n1,n2){
//     return (n1+n2);
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

// console.log(soma(15,10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"))

// function validaIdade(idade){
//     if (idade >= 18){
//          return true;
//     }else{
//         return false;
//     }
// }

// var idade = prompt("Qual sua idade? ")

// if (validaIdade(idade)){
//     alert("Maior de idade!");
// }else{
//     alert("Menor de Idade!");
// }

function clicou() {
   var h2Element = document.getElementById("agradecimento")
   h2Element.innerHTML = "<b>Obrigado por Clicar</b>";
}

function redirecionar(){
    // window.open("http://google.com/");
    window.location.href = "http://google.com/";
}

function trocar(element){
    element.innerHTML = "Obrigado por passar o mouse";
}

function voltar(element){
    element.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}
function functionChange(element){
    console.log(element.value);
}