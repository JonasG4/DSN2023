/*
Crear una funcion que permita a una colonia de terricolas que se encuentran en el planeta Namek regresar al planeta Tierra
en naves espaciales con energia infinita.

 Se debe tener en consideración qué:
    ✅ La forma de operar la nave espacial es ingresando el número del planeta donde la nave viajará. No se puede viajar 
    directamente al planeta tierra, el número de planeta ingresado debe ser superior a 10,000. 
    
    ✅ Si el número ingresado es par, se dividirá en 2; si el número ingresado es inpar se multiplicará por 3
    y se le sumará 1, el número resultante será el siguiente planeta de destino. 

    ✅ La funcion debe retornar el número de saltos que le tomó a la nava llegar al planeta tierra que corresponde 
    al planeta 1. 
*/

function cantidadSaltos(idPlanetaDestino) {
  const idTierra = 1;
  const minIdPlaneta = 10000;
  let contadorSaltos = 0;

  if (idPlanetaDestino <= minIdPlaneta) {
    return -1;
  }

  while (idPlanetaDestino > idTierra) {
    const esNumeroPar = idPlanetaDestino % 2 == 0;

    if (esNumeroPar) {
      idPlanetaDestino = idPlanetaDestino / 2;
    } else {
      idPlanetaDestino = idPlanetaDestino * 3 + 1;
    }

    contadorSaltos++;
  }

  return contadorSaltos;
}

console.log(cantidadSaltos(10000)); // Output => Error
console.log(cantidadSaltos(21050)); // Output => 193
console.log(cantidadSaltos(15555)); // Output => 84
console.log(cantidadSaltos(12500)); // Output => 125
