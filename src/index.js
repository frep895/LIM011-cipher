// Declaracion de variables
const pantalla1 = document.getElementById('seccion-uno');
const pantalla2 = document.getElementById('seccion-dos');
const pantalla3 = document.getElementById('seccion-tres');
const pantalla4 = document.getElementById('seccion-cuatro');
const pantalla5 = document.getElementById('seccion-cinco');
const pantalla6 = document.getElementById('seccion-seis');

// INICIO: BLOQUEO DE PANTALLAS
pantalla2.style.display = 'none';
pantalla3.style.display = 'none';
pantalla4.style.display = 'none';
pantalla5.style.display = 'none';
pantalla6.style.display = 'none';

// LOGIN
const loginbtn = document.getElementById('login');

const manejoLogin = () => {
  const nombreUsuario = document.getElementById('username');
  const codigo = document.getElementById('password');
  // eslint-disable-next-line no-mixed-operators
  if (nombreUsuario.value === 'padre' && codigo.value === '12345' || nombreUsuario.value === 'tutor' && codigo.value === '23456') {
    pantalla1.style.display = 'none';
    pantalla2.style.display = 'block';
  // eslint-disable-next-line brace-style
  }
  else {
    // eslint-disable-next-line no-alert
    alert('Porfavor ingrese, nombre de usuario y contraseña correctos.');
  }
};

loginbtn.addEventListener('click', manejoLogin);

// BTN ENVIAR en la bandeja
const enviarmsjbtn = document.getElementById('enviarmsj');

const manejoEnvioBandeja = () => {
  const texto1 = document.getElementById('destinatario').value;
  const texto2 = document.getElementById('asunto').value;
  const texto3 = document.getElementById('mensajeNuevo').value;
  const textEncode = `TO: ${texto1}; SUBJECT: ${texto2}; MESSAGE: ${texto3}`;
  // eslint-disable-next-line camelcase
  const number_offset = document.getElementById('clavemsjNuevo').value;
  // eslint-disable-next-line camelcase
  // eslint-disable-next-line no-alert
  // eslint-disable-next-line camelcase
  if (texto1 === '' || texto2 === '' || texto3 === '' || number_offset === '') { alert('Debes llenar todos los campos.'); } else {
    document.getElementById('msj-cifrado').innerHTML = window.cipher.encode(textEncode, number_offset);
    document.getElementById('mostrarMsj').innerHTML = window.cipher.encode(textEncode, number_offset);
    pantalla5.style.display = 'block';
    pantalla4.style.display = 'none';
  }
};

enviarmsjbtn.addEventListener('click', manejoEnvioBandeja);

// BOTON DECIFRAR
const Decodebtn = document.getElementById('decode');

const manejoDecifrar = () => {
  // eslint-disable-next-line max-len
  // por se un label del que jalo informacion se utiliza .innerHTML y no .value que funciona muy bien en input
  const textDecode = document.getElementById('mostrarMsj').innerHTML;
  // eslint-disable-next-line camelcase
  const number_offset = document.getElementById('clavedecode').value;
  // eslint-disable-next-line camelcase
  // eslint-disable-next-line no-alert
  // eslint-disable-next-line camelcase
  if (number_offset === '') { alert('Debes llenar todos los campos.'); } else {
    document.getElementById('msj-decifrado').innerHTML = window.cipher.decode(textDecode, number_offset);
    pantalla6.style.display = 'block';
    pantalla3.style.display = 'none';
  }
};

Decodebtn.addEventListener('click', manejoDecifrar);

// BTN VER MENSAJES
const vermsjbtn = document.getElementById('vermsj');

const manejoVerMensaje = () => {
  pantalla3.style.display = 'block';
  pantalla2.style.display = 'none';
};

vermsjbtn.addEventListener('click', manejoVerMensaje);

// BTN REDACTAR MENSAJES
const crearmsjbtn = document.getElementById('crearmsj');

const manejoCrearMensaje = () => {
  pantalla4.style.display = 'block';
  pantalla2.style.display = 'none';
};

crearmsjbtn.addEventListener('click', manejoCrearMensaje);

// 4 botones VOLVER: 1 Y 2
const volverbtn = document.getElementById('volver');
const volverbtn2 = document.getElementById('volver2');

const manejoVolver = () => {
  pantalla2.style.display = 'block';
  pantalla3.style.display = 'none';
  pantalla4.style.display = 'none';
  pantalla5.style.display = 'none';
  pantalla6.style.display = 'none';
};
// VOLVER VER MSJ
volverbtn.addEventListener('click', manejoVolver);
// VOLVER REDACTAR MSJ
volverbtn2.addEventListener('click', manejoVolver);

// VOLVER 3
const volverbtn3 = document.getElementById('volver3');

const manejoVolverVerMensaje = () => {
  pantalla2.style.display = 'block';
  pantalla3.style.display = 'none';
  pantalla4.style.display = 'none';
  pantalla5.style.display = 'none';
  pantalla6.style.display = 'none';
  document.getElementById('formularioBandeja').reset();
};
// VOLVER despues de ver el mensaje
volverbtn3.addEventListener('click', manejoVolverVerMensaje);

// VOLVER 4
const volverbtn4 = document.getElementById('volver4');

const manejoVolverDecifrado = () => {
  pantalla2.style.display = 'block';
  pantalla3.style.display = 'none';
  pantalla4.style.display = 'none';
  pantalla5.style.display = 'none';
  pantalla6.style.display = 'none';
  document.getElementById('mostrarBandeja').reset();
};
// VOLVER despues de ver el decifrado
volverbtn4.addEventListener('click', manejoVolverDecifrado);

// 5 botones CERRAR SESION
const cerrarbtn = document.getElementById('cerrar');
const cerrarbanbtn = document.getElementById('cerrarban');
const cerrarcrearbtn = document.getElementById('cerrarcrear');
const cerrarMSJbtn = document.getElementById('cerrarMSJ');
const cerrarMSJDCDbtn = document.getElementById('cerrarMsjdecode');

const manejoCerrar = () => {
  pantalla1.style.display = 'block';
  pantalla2.style.display = 'none';
  pantalla3.style.display = 'none';
  pantalla4.style.display = 'none';
  pantalla5.style.display = 'none';
  pantalla6.style.display = 'none';
  document.getElementById('milogin').reset();
  document.getElementById('formularioBandeja').reset();
  document.getElementById('mostrarBandeja').reset();
};

// CERRAR DEL MENU
cerrarbtn.addEventListener('click', manejoCerrar);
// CERRAR BANDEJA
cerrarbanbtn.addEventListener('click', manejoCerrar);
// CERRAR REDACTAR
cerrarcrearbtn.addEventListener('click', manejoCerrar);
// CERRAR MOSTRAR MENSAJE
cerrarMSJbtn.addEventListener('click', manejoCerrar);
// CERRAR MOSTRAR MENSAJE decifrado
cerrarMSJDCDbtn.addEventListener('click', manejoCerrar);

/* JAVA TIP
console.log(window.cipher.encode);
console.log(window.cipher.encode('ABCDEFGH', 33)); */
/*
DECLARACION DE FUNCIONES
const btnLogin2 = document.getElementById('login2');

const manejoClick = () => {
  window.cipher.encode(textEncode, number_offset)
};

btnLogin.addEventListener('click' , manejoClick);
btnLogin2.addEventListener('click' , manejoClick);
*/

/*
DECLARACION DE VARIABLES
const seccionDos = document.getElementById('seccion-dos');
seccionDos.style.display = 'none';

document.getElementById('seccion-tres').style.display = 'none'
document.getElementById('seccion-cuatro').style.display = 'none'
document.getElementById('seccion-cinco').style.display = 'none'
document.getElementById('seccion-seis').style.display = 'none'
} */
