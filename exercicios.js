// const arr = [1, 3, 4, 5, 8, 9];

// const newArr = arr.map(function(item, index) {
//   return item + index;
// });
// console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//   return total + next;
// });
// console.log(sum);

// const filter = arr.filter(function(item) {
//   return item % 2 === 0;
// });
// console.log(filter);

// // Encontra apenas a primeira ocorrencia
// const find = arr.find(function(item) {
//   return item === 3;
// });
// console.log(find);

// const arr = [1, 3, 4, 5, 6];

// const newArr = arr.map(item => item * 2);
// console.log(newArr);

// const teste = () => ({
//   nome: "diego"
// });

// console.log(teste());

// const soma = (a = 3, b = 6) => a + b;

// console.log(soma(1));
// console.log(soma());

// //desestruturacao de objetos
// const usuario = {
//   nome: "Victor",
//   idade: 28,
//   endereco: {
//     cidade: "São Paulo",
//     estado: "SP"
//   }
// };

// const {
//   nome,
//   idadem,
//   endereco: { cidade }
// } = usuario;

// function mostraNome({ nome, idade }) {
//   console.log(nome, idade);
// }

// mostraNome(usuario);

//REST ...
// pega o resto das propriedades

// const usuario = {
//   nome: "Victor",
//   idade: 28,
//   empresa: "VFS"
// };

// const { nome, ...resto } = usuario;

// const arr = [1, 2, 3, 4];
// const [a, b, ...c] = arr;

// function soma(...params) {
//   return params.reduce((total, next) => total + next);
// }

//SPREAD
// Rest pega o resto, spread propaga as informações para outra estrutura de dados

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// const usuario1 = {
//   nome: "Victor",
//   idade: 28,
//   empresa: "VFS"
// };

// const usuario2 = { ...usuario1, nome: "Gabriel" };

// ======================

// const nome = "Victor";
// const idade = 28;

// console.log("Meu nome é " + nome + "e tenho" + idade + " anos.");
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// ====
//OBject Short Syntax

// const nome = "Victor";
// const idade = 23;

// const usuario = {
//   nome,
//   idade,
//   empresa: "VFS"
// };

// = = = = = = = = =
// Modulo 01 - Ex 1

// class Usuario {
//   constructor(email, senha) {
//     this.email = email;
//     this.senha = senha;
//   }

//   isAdmin() {
//     return this.admin === true;
//   }
// }

// class Admin extends Usuario {
//   constructor() {
//     super();
//     this.admin = true;
//   }
// }

// const User1 = new Usuario("amor@amor.com", "asdasd");
// console.log(User1.isAdmin());
// const User2 = new Admin("amor@amor.com", "asdasd");
// console.log(User2.isAdmin());

// = = = = = = = = =
// Modulo 01 - Ex 2
// const usuarios = [
//   { nome: "Diego", idade: 23, empresa: "Rocketseat" },
//   { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
//   { nome: "Lucas", idade: 30, empresa: "Facebook" }
// ];

// const idades = usuarios.map(item => item.idade);
// const empresas18 = usuarios.filter(
//   item => item.idade > 18 && item.empresa === "Rocketseat"
// );

// const googlers = usuarios.find(item => item.empresa === "Google");

// const calculo = usuarios
//   .map(usuario => ({
//     ...usuario,
//     idade: usuario.idade * 2
//   }))
//   .filter(usuario => usuario.idade <= 50);

// = = = = = = = = =
// Modulo 01 - Ex 3

// const arr = [1, 2, 3, 4, 5];
// console.log(
//   arr.map(function(item) {
//     return item + 10;
//   })
// );
// console.log(arr.map(item => item + 10));

// const usuario = { nome: "Diego", idade: 23 };
// function mostraIdade(usuario) {
//   return usuario.idade;
// }
// console.log(mostraIdade(usuario));

// const mostraIdadeA = usuario => usuario.idade;
// console.log(mostraIdadeA(usuario));

// const nome = "Diego";
// const idade = 23;

// function mostraUsuario(nome = "Diego", idade = 18) {
//   return { nome, idade };
// }
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario());

// const mostraUsuarioA = (nome = "Diego", idade = 18) => ({ nome, idade });
// console.log(mostraUsuarioA(nome, idade));
// console.log(mostraUsuarioA());

// const promise = function() {
//   return new Promise(function(resolve, reject) {
//     return resolve();
//   });
// };

// const promiseA = () => new Promise((resolve, reject) => resolve());

// = = = = = = = = =
// Modulo 01 - Ex 4
// const empresa = {
//   nome: "Rocketseat",
//   endereco: {
//     cidade: "Rio do Sul",
//     estado: "SC"
//   }
// };

// // const {
// //   nome,
// //   endereco: { cidade, estado }
// // } = empresa;

// // console.log(nome);
// // console.log(cidade);
// // console.log(estado);

// function mostraInfo({ nome, idade }) {
//   // return `${usuario.nome} tem ${usuario.idade} anos`;
//   return `${nome} tem ${idade} anos`;
// }
// console.log(mostraInfo({ nome: "Diego", idade: 23 }));

// = = = = = = = = =
// Modulo 01 - Ex 5
// const arr = [1, 2, 3, 4, 5, 6];

// const [x, ...y] = arr;
// console.log(x);
// console.log(y);

// function soma(...params) {
//   return params.reduce((item, next) => item + next);
// }
// console.log(soma(1, 2, 3, 4, 5, 6));
// console.log(soma(1, 2));

// const usuario = {
//   nome: "Diego",
//   idade: 23,
//   endereco: {
//     cidade: "Rio do Sul",
//     uf: "SC",
//     pais: "Brasil"
//   }
// };

// const usuario2 = { ...usuario, nome: "Gabriel" };
// console.log(usuario2);

// const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: "lontras" } };

// console.log(usuario3);

// = = = = = = = = =
// Modulo 01 - Ex 6
// const usuario = "Diego";
// const idade = 23;

// console.log(`O usuário ${usuario} possui ${idade} anos.`);

// = = = = = = = = =
// Modulo 01 - Ex 7
// const nome = "Diego";
// const idade = 23;

// const usuario = {
//   nome,
//   idade,
//   cidade: "Rio do Sul"
// };
// console.log(usuario);

import { soma } from "./funcoes";
console.log(soma(1, 2));

