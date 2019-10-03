document.getElementById('seccion-dos').style.display = 'none';
document.getElementById('seccion-tres').style.display = 'none';
document.getElementById('seccion-cuatro').style.display = 'none';

const loginbtn = document.getElementById('login');
loginbtn.addEventListener('click',()=>{
   const nombreUsuario = document.getElementById("username");
    const codigo= document.getElementById("password");
    if (nombreUsuario.value=='padre' && codigo.value=='12345'||nombreUsuario.value=='tutor' && codigo.value=='23456'){  
        document.getElementById('seccion-uno').style.display = 'none';
        document.getElementById('seccion-dos').style.display = 'block';
    }
    /*if (document.getElementById("password").value=='123456' && document.getElementById("username").value=='user'){  
        document.form.submit(); 
    }*/
    else{ 
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    }     
});

const enviarmsjbtn = document.getElementById("enviarmsj");
enviarmsjbtn.addEventListener("click", function() {
        let textEncode = document.getElementById("mensajeNuevo").value;
        let number_offset = document.getElementById("clavemsjNuevo").value;
        document.getElementById("msg-encode-check").innerHTML = window.cipher.encode(textEncode, number_offset);
});

const Decodebtn = document.getElementById("decode");
Decodebtn.addEventListener("click", function() {
        let textDecode = document.getElementById("msg-encode-check").value;
        let number_offset = document.getElementById("clavedecode").value;
        document.getElementById("msg-decode-check").innerHTML = window.cipher.decode(textDecode, number_offset);
    });

const vermsjbtn = document.getElementById('vermsj');
vermsjbtn.addEventListener('click',()=>{
    document.getElementById('seccion-tres').style.display = 'block';
    document.getElementById('seccion-dos').style.display = 'none';
});

const crearmsjbtn = document.getElementById('crearmsj');
crearmsjbtn.addEventListener('click',()=>{
    document.getElementById('seccion-cuatro').style.display = 'block';
    document.getElementById('seccion-dos').style.display = 'none';
});
// 2 botones VOLVER
const volverbtn = document.getElementById('volver');
volverbtn.addEventListener('click',()=>{
    document.getElementById('seccion-dos').style.display = 'block';
    document.getElementById('seccion-tres').style.display = 'none';
    document.getElementById('seccion-cuatro').style.display = 'none';
});
const volverbtn2 = document.getElementById('volver2');
volverbtn2.addEventListener('click',()=>{
    document.getElementById('seccion-dos').style.display = 'block';
    document.getElementById('seccion-tres').style.display = 'none';
    document.getElementById('seccion-cuatro').style.display = 'none';
});
// 3 botones CERRAR SESION
const cerrarbtn = document.getElementById('cerrar');
cerrarbtn.addEventListener('click',()=>{
    document.getElementById('seccion-uno').style.display = 'block';
    document.getElementById('seccion-dos').style.display = 'none';
    document.getElementById('seccion-tres').style.display = 'none';
    document.getElementById('seccion-cuatro').style.display = 'none';
    document.getElementById("milogin").reset();
});
const cerrarbanbtn = document.getElementById('cerrarban');
cerrarbanbtn.addEventListener('click',()=>{
    document.getElementById('seccion-uno').style.display = 'block';
    document.getElementById('seccion-dos').style.display = 'none';
    document.getElementById('seccion-tres').style.display = 'none';
    document.getElementById('seccion-cuatro').style.display = 'none';
    document.getElementById("milogin").reset();
});
const cerrarcrearbtn = document.getElementById('cerrarcrear');
cerrarcrearbtn.addEventListener('click',()=>{
    document.getElementById('seccion-uno').style.display = 'block';
    document.getElementById('seccion-dos').style.display = 'none';
    document.getElementById('seccion-tres').style.display = 'none';
    document.getElementById('seccion-cuatro').style.display = 'none';
    document.getElementById("milogin").reset();
});