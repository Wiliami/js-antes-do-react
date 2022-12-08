// Nullish Coalescing Operator
// const idade = 0;

// document.body.innerHTML = 'Sua idade é: ' + (idade ?? 'Idade não informada');



// Objeto
// const user = {
//     name: 'Wiliamis',
//     idade: 25,   
//     adress: {
//         street: 'Rua teste',
//         number: 175
//     },
// };



// document.body.innerText = JSON.stringify(user);
// document.body.innerHTML = JSON.stringify(Object.values(user))

// JSON.stringify() =serve para ler objetos em tela
// Object.keys('nome do objeto') = retorna as chaves do meu objeto
// Object.values('nome do objeto') = retorna os valores do meu objeto
// Object.entries('nome do objeto') = retorna vetores





// Desestruturação

// const { adress } = user;

// document.body.innerText = JSON.stringify({  adress });

// function mostraIdade(user) {
//     return user.idade;
// }

// document.body.innerText = mostraIdade(user);






// Rest operator

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [first, second, ...rest] = array;

// // const { name, ...rest } = user;

// document.body.innerText = JSON.stringify( {first, second, rest} );








// Short Syntax
// const name = 'Wiliamis';
// const age = 25;

// const user = {
//     name,
//     age
// }

// document.body.innerText = JSON.stringify(user)





// Optional Chaining = ? antes da propriedade que não pode vir a existir

// const user = {
//     name: 'Wiliamsia ',
//     age: 25,
//     adress: {
//         street: 'Rua teste',
//         number: 176,
//         // zip: {
//         //     code: '89160000',
//         //     city: 'Manaus'
//         // }
//     }
// };


// document.body.innerText = user.adress?.zip?.code ?? 'Não informado';





// Métodos de array

const array = [1, 2, 3, 4, 5];


// for (const i of array) {
//     document.body.innerText += i;
// }

// array.forEach(item => {
//     document.body.innerText += item; 
// })


// map
// const novoArray = array.map(item => {
//     if(item % 2 === 0) {
//         return item * 10;
//     }

//     return item;
// });





// filter
// const novoArray = array
//     .filter(item => item % 2 === 0)
//     .map(item => item * 10)
// document.body.innerText = JSON.stringify(novoArray)



// every
 const todosItensSaoNumeros = array.every(item => {
    return typeof item === 'number';
});
//  document.body.innerText = JSON.stringify(todosItensSaoNumeros)




 // some
 const pelosMenosUmItemNaoEUmNumero = array.some(item => {
    return typeof item !== 'number'; 
});
//  document.body.innerText = JSON.stringify(todosItensSaoNumeros)




 // find = encontra o valor
// const par = array.find(item => item % 2 === 0);
//  document.body.innerText = JSON.stringify(par);


// findIndex = encontra o index do array e não o valor
 const par = array.findIndex(item => item % 2 === 0);
//  document.body.innerText = JSON.stringify(par);


// reduce = criar algo novo
const soma = array.reduce((acc, item) => {
    // document.body.innerText += acc + ',' + item + ' --- ';
    return acc + item;
}, 0);

//  document.body.innerText = JSON.stringify(soma);







// Templates Literalsb = tagged template

const name = null;
const message = `Bem-vindo, ${name ? name :  'visitante'}`;

// document.body.innerText = message;




// Promisses


 