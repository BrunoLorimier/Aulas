function fatorial(n){
    if(n<0) return Promise.reject("Valor não pode ser negativo");
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return Promise.resolve(res);
}
// function chamadaComThenCatch(){
//     fatorial(5)
//     .then((res) => console.log(res))
//     .catch((res) => console.log(res));

//     fatorial(-1)
//     .then((res) => console.log(res))
//     .catch((res) => console.log(res));
// }
// chamadaComThenCatch();

async function chamadaComAwait() {
    try{
        const f1 = await fatorial(5);
        console.log(f1);
        const f2 = await fatorial(-1);
        console.log(f2);
    }
    catch (e){
        console.log("Deu erro (usando try/catch)" + e)
    }
}
chamadaComAwait();

// async function hello(nome){
//     return "Oi, " + nome;
// }
// const boasVindas = hello("João");
// console.log(boasVindas);
// boasVindas.then((res) => console.log(res))

// function calculoRapidinho(numero){
//     return numero >=0
//     ? Promise.resolve((numero * (numero + 1))/ 2)
//     : Promise.reject("Somente valores positivos, por favor");
// }
// calculoRapidinho(10)
//     .then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// calculoRapidinho(-1)
//     .then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// console.log("esperando...");

// function calculoRapidinho (numero){
//     return Promise.resolve((numero * (numero + 1))/ 2);
// }
// calculoRapidinho(10).then(resutado => {
//     console.log(resutado)
// })
// //Executa primeiro, mesmo que a promise já esteja fullfilled
// console.log('Esperando')
// function calculoDemorado(numero){
//     return new Promise(function (resolve, reject){
//         let res = 0;
//         for (let i = 1; i <= numero; i++){
//             res += i;
//         }
//         resolve(res)
//     });
// }
// calculoDemorado(10).then( (resultado) => {
//     console.log(resultado)
// })

// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//             const dobro = +conteudo.toString() * 2;
//             const finalizar = function (erro){
//                 if(erro){
//                     console.log('Deu erro tentando salvar o dobro')
//                 }
//                 else{
//                     console.log("Salvou o dobro com sucesso");
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar);
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// };
// abrirArquivo("arquivo.txt");