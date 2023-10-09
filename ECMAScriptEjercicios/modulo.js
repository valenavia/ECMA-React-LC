// modulo.js
module.exports = function elevarAlCuadrado(numero) {
    return new Promise((resolve, reject) => {
      if (typeof numero !== 'number') {
        reject('El parámetro no es un número');
      } else {
        const resultado = numero ** 2;
        resolve(resultado);
      }
    });
  };
  