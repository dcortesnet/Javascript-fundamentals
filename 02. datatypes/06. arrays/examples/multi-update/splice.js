const users = ["Diego", "Pedro", "Franco"];

users.splice(0, 2); // Eliminación de los dos primeros elementos 

console.log(users); // ["Franco"]

users.splice(0, 1, "Diego"); // Eliminar y remplazar el elemento en la posición 0

console.log(users); // ["Diego"]