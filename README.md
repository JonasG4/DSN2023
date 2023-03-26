# 💻 Desarrollo de Software en la Nube ☁️
## Modulo 2
Entrar a la carpeta del módulo 2
```shell
cd '.\modulo 2\'
```
### Semana 1
Entrar a la carpeta de la semana 2 y ejecutar el script llamado [naveNamek](https://github.com/JonasG4/DSN2023/tree/master/modulo%202/semana%201)
```shell
cd '.\semana 1\'
node naveNamek.js
```
__Enunciado del ejercicio__

En el año tijiri tres, una colonia de terricolas que se encuentran en el planeta Namek desean regresar a su planeta de origen la tierra, existe por cada terricola igual numero de naves espaciales con energia infinita, pero se sabe que:
- Las naves no pueden viajar directo al planeta tierra, la manera de operarla es que se debe de ingresar un numero0 mayor a 10000 y automaticamente la nave se dirigira al planeta correspondiente a ese numero.
- Automaticamente la nave espacial seguirá la siguiente trayectoria después del primer viaje: si el numero inicial seleccionado es par se divide entre 2 y si es impar se multiplica por 3 y se le suma 1 y el numero resultante sera el proximo planeta de destino.
- El planeta Tierra es el planeta 1
- Se deben de contar el numero total de saltos antes de llegar a la tierra por cada planeta visitado.

__Estructura del ejercicio__
```javascript
function calcularNumeroSaltos(idPlanetaDestino) {
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

```
__Resultado__
```javascript
console.log(calcularNumeroSaltos(10000)); // Output => Error
console.log(calcularNumeroSaltos(21050)); // Output => 193
console.log(calcularNumeroSaltos(15555)); // Output => 84
console.log(calcularNumeroSaltos(12500)); // Output => 125
```
