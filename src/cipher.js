window.cipher = {
  encode: (string, offset) => {
    // mensaje recibido
    let msgCipher = '';
    let character;
    let textChar;
    // Recorreremos cada letra de la frase
    for (let i = 0; i < string.length; i += 1) {
      character = string[i];
      // identificacion de espacios vacios
      if (character.match(/[a-z]/i)) {
        // valida los numeros ascii de las mayusculas que van de 65-90
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          // crea variable donde guarda el numero ASCII encriptado
          // Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
          // eslint-disable-next-line no-mixed-operators
          textChar = (string.charCodeAt(i) - 65 + parseInt(offset, 10)) % 26 + 65;
          msgCipher += String.fromCharCode(textChar);
        }
      } else {
        msgCipher += character;
      }
    }
    return msgCipher;
  },
  decode: (string, offset) => {
    // mensaje recibido
    let msgDecipher = '';
    let textChar;
    let characterD;

    // inicio recorrido de caracteres
    for (let i = 0; i < string.length; i += 1) {
      characterD = string[i];
      // identificacion de espacios vacios
      if (characterD.match(/[a-z]/i)) {
        // console.log(string.charCodeAt(i));

        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          // crea variable donde guarda el numero ASCII encriptado
          // Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
          // eslint-disable-next-line no-mixed-operators
          textChar = (string.charCodeAt(i) + 65 - parseInt(offset, 10)) % 26 + 65;
          // devuelve la cadena de numeros ASCII
          msgDecipher += String.fromCharCode(textChar);
          // eslint-disable-next-line no-console
          console.log('entra');
        }
      } else {
        msgDecipher += characterD;
      }
    }
    // retornar respuesta
    return msgDecipher;
  },
};
