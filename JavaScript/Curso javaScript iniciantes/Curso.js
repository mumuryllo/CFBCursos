/*let idade=5
console.log(idade)
let altura=1.68
console.log(altura)
let nome="Muryllo"
console.log(nome)
*/

//Aula 2 Objetos

/*let pessoa={
 nome:'Muryllo',
 sobrenome:'Soares',
 idade:21,
 altura:1.68,
 estarAprovado:true   
};
console.log(pessoa)
typeof pessoa.nome*/

//Aula 3 Arrays
//length é o tamanho do array
/*let familia=['Marli','Muryllo','Mattheus','Michell','Marianne'];
console.log(familia)
console.log(familia[2])*/

// Aula 4 Funções

/*let corSite='Azul'
function resetaCor (cor){
corSite= cor;//vazio
};
resetaCor('Vermelho');
console.log(corSite);*/

// Aula 5 if e else, Switch e Case

/*let hora=22
if (hora >6 && hora <12){
    console.log("Bom Dia!");
}
else if (hora >12 && hora < 18){
    console.log("Boa Tarde!");
}
else{
console.log("Boa Noite!");
}*/

/*let permissao='gerente'; // comum gerente diretor
switch(permissao){
  case 'comum' :
    console.log("Usuário Comum")    
    break
    case 'gerente' :
    console.log("Usuário Gerente")    
    break
    case 'diretor' :
    console.log("Usuário Diretor")    
    break
    default:
        console.log('Usuário Inexistente')
}*/

// Aula 6 Laços de repetição


//For
//for (let i=1; i <= 5; i++){
  //  console.log("Estou Aprendendo", i)
//}


// While
//let i=5
//while ( i>=1){
  //  if(i % 2 !== 0){
  //  console.log( i)
// }
// i--;
//}

//Do While

/*let i=0

do {
  console.log("Digitando!");
  i++
} while (i <10);
*/

//For of

/*const familia=["Muryllo","Mattheus","Michell","Marriane","Heloisa","Gabriel"]

for(let indice of familia){
  console.log(indice)
}*/

//Aula 7 Factory Functions {Funções de fabrica}

/*function criarCelular(marcaCelular,preco,tamanhoMemoria){
  return{
    marcaCelular,
    preco,
    tamanhoMemoria,
    ligar(){
      console.log("Fazendo ligação!")
    }
  }
}
const celular1= criarCelular('Motorola G5', 350.00, 64)
console.log(celular1);*/

//Clonando objetos

/*let pessoa={
  nome:'Muryllo',
  sobrenome:'Soares',
  idade:21,
  altura:1.68,
  Peso:58.500   
 };
 const novoObjeto = Object.assign({
  mes:"Fevereiro" 
 },
 pessoa);
 console.log(novoObjeto);*/

 // Função Math

 /*Math.random()
 Math.max(30,27,24,21)
 Math.min(21,24,27,30)*/

 //Aula 9 Arrays
 
 // ADD elementios

 /*familia.unshift('Heloisa') //inicio
 console.log(familia)
 familia.splice(1,0,'Gabriel') //meio // 3 parametros indice,o que vc quer remover dentro do array e o que vc vai add
 console.log(familia)
 familia.push('Grazi') //final
 console.log(familia)*/

 //Encontrando Elementos
 //console.log(familia.includes('Muryllo')) //indexof Retorna o indíce // includes ve se é verdadeiro ou falso
 //Arrow Functions

/*const marcas= [
{id:1, nome:'a'},
{id:2, nome:'b'}  
] ;*/

//console.log(marcas.find((marca) => marca.nome === 'a'));
//Remover elementos do array

/*familia.shift('Muryllo') //inicio
 console.log(familia)
 familia.splice(1,2) //meio // 3 parametros indice,o que vc quer remover dentro do array e o que vc vai add
 console.log(familia)
 familia.pop(1) //final
 console.log(familia)*/

 //Esvaziando um array
 //familia.length=0 //length reduz os elementos da lista do array
 //console.log(familia)

 //Combinando um array Spread...

 /*const familia=["Muryllo","Mattheus","Michell","Marriane","Heloisa","Gabriel"];
 const idades=[21,24,30,27,5,12];
 const combinandoArrays = [familia ,...idades]
 console.log(combinandoArrays)*/

 //forEach
 const numeros=[1,2,3,4,5];
numeros.forEach((numero,indice)=> console.log(numero,indice))
// Recebendo Dados
//if (idade >=18)
//{alert ("Ok você pode acessar os dados")} 
//else {('Você não tem a permissão necessaria')}
 //console.log(idade);

 //eventos
 
