let users = ["Pedro","Ana", "Joana","Diego","Davi Messias","Cristiam"];

let searchUser = prompt("digite o nome do usuário que deseja buscar:")

    // lembrando que meu usuário adm não pode mandar busca em branco. chamamos isso dde tratativa de erros.

if(searchUser === ""){
    console.log("Não pode mandar em branco");
}
else{
    //retorna o usuário que for encontrado
let user = users.filter(user => user.toLowerCase().includes(searchUser.toLowerCase().trim()));
    //devemos tratar também caso a busca nõ retorn nenhum resultado

if(user.length === 0){
    // usuario não encontrado
console.log("user not found");
users.push(searchUser);
console.log(users)
}
else{
console.group("usuario encontrado:".concat(user));
//buscar indice de usuario
let index = user.indexOf(user);
console.log(index)


users[index] = "novo valor"
console.log(users) 

user.push("julia")
console.log(users)


//alterar o elemento
//users[index] = "novo elemento";
//console.log(users)

users.forEach(Element =>{
//read
console.log(user)
        })

    };
  }
