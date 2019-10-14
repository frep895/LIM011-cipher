document.getElementById('seccion-dos').style.display = 'none'
document.getElementById('seccion-tres').style.display = 'none'
document.getElementById('seccion-cuatro').style.display = 'none'
document.getElementById('seccion-cinco').style.display = 'none'
document.getElementById('seccion-seis').style.display = 'none'
// LOGIN
const loginbtn = document.getElementById('login')
loginbtn.addEventListener('click', () => {
  const nombreUsuario = document.getElementById('username')
  const codigo = document.getElementById('password')
  // eslint-disable-next-line no-mixed-operators
  if (nombreUsuario.value === 'padre' && codigo.value === '12345' || nombreUsuario.value === 'tutor' && codigo.value === '23456') {
    document.getElementById('seccion-uno').style.display = 'none'
    document.getElementById('seccion-dos').style.display = 'block'
  // eslint-disable-next-line brace-style
  }
  /* if (document.getElementById("password").value=='123456' && document.getElementById("username").value=='user'){
        document.form.submit();
    } */
  else {
    alert('Porfavor ingrese, nombre de usuario y contraseña correctos.')
  }
})
// BTN ENVIAR en la bandeja
const enviarmsjbtn = document.getElementById('enviarmsj')
enviarmsjbtn.addEventListener('click', function () {
  const texto1 = document.getElementById('destinatario').value
  const texto2 = document.getElementById('asunto').value
  const texto3 = document.getElementById('mensajeNuevo').value
  const textEncode = 'TO: ' + texto1 + '; SUBJECT: ' + texto2 + '; MESSAGE: ' + texto3
  // eslint-disable-next-line camelcase
  const number_offset = document.getElementById('clavemsjNuevo').value
  // eslint-disable-next-line eqeqeq
  // eslint-disable-next-line camelcase
  if (texto1 === '' || texto2 === '' || texto3 === '' || number_offset === '') { alert('Debes llenar todos los campos.') } else {
    document.getElementById('msj-cifrado').innerHTML = window.cipher.encode(textEncode, number_offset)
    document.getElementById('mostrarMsj').innerHTML = window.cipher.encode(textEncode, number_offset)
    document.getElementById('seccion-cinco').style.display = 'block'
    document.getElementById('seccion-cuatro').style.display = 'none'
  }
})
// BOTON DECIFRAR
const Decodebtn = document.getElementById('decode')
Decodebtn.addEventListener('click', function () {
  // por se un label del que jalo informacion se utiliza .innerHTML y no .value que funciona muy bien en input
  const textDecode = document.getElementById('mostrarMsj').innerHTML
  // eslint-disable-next-line camelcase
  const number_offset = document.getElementById('clavedecode').value
  // eslint-disable-next-line eqeqeq
  // eslint-disable-next-line camelcase
  if (number_offset === '') { alert('Debes llenar todos los campos.') } else {
    document.getElementById('msj-decifrado').innerHTML = window.cipher.decode(textDecode, number_offset)
    document.getElementById('seccion-seis').style.display = 'block'
    document.getElementById('seccion-tres').style.display = 'none'
  }
})
// BTN VER MENSAJES
const vermsjbtn = document.getElementById('vermsj')
vermsjbtn.addEventListener('click', () => {
  document.getElementById('seccion-tres').style.display = 'block'
  document.getElementById('seccion-dos').style.display = 'none'
})
// BTN REDACTAR MENSAJES
const crearmsjbtn = document.getElementById('crearmsj')
crearmsjbtn.addEventListener('click', () => {
  document.getElementById('seccion-cuatro').style.display = 'block'
  document.getElementById('seccion-dos').style.display = 'none'
})
// 3 botones VOLVER
// VOLVER VER MSJ
const volverbtn = document.getElementById('volver')
volverbtn.addEventListener('click', () => {
  document.getElementById('seccion-dos').style.display = 'block'
  document.getElementById('seccion-tres').style.display = 'none'
  document.getElementById('seccion-cuatro').style.display = 'none'
  document.getElementById('seccion-cinco').style.display = 'none'
  document.getElementById('seccion-seis').style.display = 'none'
})
// VOLVER REDACTAR MSJ
const volverbtn2 = document.getElementById('volver2')
volverbtn2.addEventListener('click', () => {
  document.getElementById('seccion-dos').style.display = 'block'
  document.getElementById('seccion-tres').style.display = 'none'
  document.getElementById('seccion-cuatro').style.display = 'none'
  document.getElementById('seccion-cinco').style.display = 'none'
  document.getElementById('seccion-seis').style.display = 'none'
})
// VOLVER despues de ver el mensaje
const volverbtn3 = document.getElementById('volver3')
volverbtn3.addEventListener('click', () => {
  document.getElementById('seccion-dos').style.display = 'block'
  document.getElementById('seccion-tres').style.display = 'none'
  document.getElementById('seccion-cuatro').style.display = 'none'
  document.getElementById('seccion-cinco').style.display = 'none'
  document.getElementById('seccion-seis').style.display = 'none'
  document.getElementById('formularioBandeja').reset()
})
// VOLVER despues de ver el decifrado
const volverbtn4 = document.getElementById('volver4')
volverbtn4.addEventListener('click', () => {
  document.getElementById('seccion-dos').style.display = 'block'
  document.getElementById('seccion-tres').style.display = 'none'
  document.getElementById('seccion-cuatro').style.display = 'none'
  document.getElementById('seccion-cinco').style.display = 'none'
  document.getElementById('seccion-seis').style.display = 'none'
  document.getElementById('mostrarBandeja').reset()
})
// 4 botones CERRAR SESION
// CERRAR DEL MENU
const cerrarbtn = document.getElementById('cerrar')
cerrarbtn.addEventListener('click', () => {
  document.getElementById('seccion-uno').style.display = 'block'
  document.getElementById('seccion-dos').style.display = 'none'
  document.getElementById('seccion-tres').style.display = 'none'
  document.getElementById('seccion-cuatro').style.display = 'none'
  document.getElementById('seccion-cinco').style.display = 'none'
  document.getElementById('seccion-seis').style.display = 'none'
  document.getElementById('milogin').reset()
  document.getElementById('formularioBandeja').reset()
  document.getElementById('mostrarBandeja').reset()
})
// CERRAR BANDEJA
const cerrarbanbtn = document.getElementById('cerrarban')
cerrarbanbtn.addEventListener('click', () => {
  document.getElementById('seccion-uno').style.display = 'block'
  document.getElementById('seccion-dos').style.display = 'none'
  document.getElementById('seccion-tres').style.display = 'none'
  document.getElementById('seccion-cuatro').style.display = 'none'
  document.getElementById('seccion-cinco').style.display = 'none'
  document.getElementById('seccion-seis').style.display = 'none'
  document.getElementById('milogin').reset()
  document.getElementById('formularioBandeja').reset()
  document.getElementById('mostrarBandeja').reset()
})
// CERRAR REDACTAR
const cerrarcrearbtn = document.getElementById('cerrarcrear')
cerrarcrearbtn.addEventListener('click', () => {
  document.getElementById('seccion-uno').style.display = 'block'
  document.getElementById('seccion-dos').style.display = 'none'
  document.getElementById('seccion-tres').style.display = 'none'
  document.getElementById('seccion-cuatro').style.display = 'none'
  document.getElementById('seccion-cinco').style.display = 'none'
  document.getElementById('seccion-seis').style.display = 'none'
  document.getElementById('milogin').reset()
  document.getElementById('formularioBandeja').reset()
  document.getElementById('mostrarBandeja').reset()
})
// CERRAR MOSTRAR MENSAJE
const cerrarMSJbtn = document.getElementById('cerrarMSJ')
cerrarMSJbtn.addEventListener('click', () => {
  document.getElementById('seccion-uno').style.display = 'block'
  document.getElementById('seccion-dos').style.display = 'none'
  document.getElementById('seccion-tres').style.display = 'none'
  document.getElementById('seccion-cuatro').style.display = 'none'
  document.getElementById('seccion-cinco').style.display = 'none'
  document.getElementById('seccion-seis').style.display = 'none'
  document.getElementById('milogin').reset()
  document.getElementById('formularioBandeja').reset()
  document.getElementById('mostrarBandeja').reset()
})
// CERRAR MOSTRAR MENSAJE decifrado
const cerrarMSJDCDbtn = document.getElementById('cerrarMsjdecode')
cerrarMSJDCDbtn.addEventListener('click', () => {
  document.getElementById('seccion-uno').style.display = 'block'
  document.getElementById('seccion-dos').style.display = 'none'
  document.getElementById('seccion-tres').style.display = 'none'
  document.getElementById('seccion-cuatro').style.display = 'none'
  document.getElementById('seccion-cinco').style.display = 'none'
  document.getElementById('seccion-seis').style.display = 'none'
  document.getElementById('milogin').reset()
  document.getElementById('formularioBandeja').reset()
  document.getElementById('mostrarBandeja').reset()
})
