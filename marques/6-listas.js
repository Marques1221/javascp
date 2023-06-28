console.log (`Trabalhando com listas`)
// const salvador = `Salvador` ;
// const saoPaulo =`São Paulo `;
// const rioDeJaneiro = `Rio de Janeiro` ;

const ListaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
    
    );

    ListaDeDestinos.push (`Curitiba`) //adicionando um item na listem
console.log ("Destinos possiveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(ListaDeDestinos);

ListaDeDestinos.splice(2,1);
console.log(ListaDeDestinos);
console.log(ListaDeDestinos[1]);
