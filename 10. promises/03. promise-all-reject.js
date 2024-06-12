const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000); // Se resuelve después de 1 segundo
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error en promesa2");
  }, 2000); // Se rechaza después de 2 segundos
});

Promise.all([promise1, promise2])
  .then((results) => {
    const [result1, result2] = results;
    const sum = result1 + result2;
    console.log(`La suma de los resultados es: ${sum}`);
  })
  .catch((error) => {
    console.error(`Se produjo un error: ${error}`); // Se producirá un error: Error en promesa2
  });
