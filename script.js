alert ('hola sneakerss') 

function algoritmoCondicional(numero) {
    if (numero > 0) {
      console.log("El número es positivo.");
    } else if (numero < 0) {
      console.log("El número es negativo.");
    } else {
      console.log("El número es cero.");
    }
  }
  
  function algoritmoCiclo() {
    for (let i = 1; i <= 5; i++) {
      console.log("Iteración " + i);
    }
  }
  
  function simuladorInteractivo() {
    let nombre = prompt("Ingrese su nombre:");
    let edad = prompt("Ingrese su edad:");
  
    if (edad >= 18) {
      alert("Hola " + nombre + ", eres mayor de edad.");
    } else {
      alert("Hola " + nombre + ", eres menor de edad.");
    }
  }
  

  algoritmoCondicional(10);
  algoritmoCiclo();
  simuladorInteractivo();
  