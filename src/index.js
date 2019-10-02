document.getElementById('seccion-dos').style.display = 'none';
document.getElementById('seccion-tres').style.display = 'none';
document.getElementById('seccion-cuatro').style.display = 'none';

function go(){
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
}

function bandejamensajes(){
    document.getElementById('seccion-tres').style.display = 'block';
    document.getElementById('seccion-dos').style.display = 'none';
}

function redactarmensajes(){
    document.getElementById('seccion-cuatro').style.display = 'block';
    document.getElementById('seccion-dos').style.display = 'none';
}
function cerrar(){
    document.getElementById('seccion-uno').style.display = 'block';
    document.getElementById('seccion-dos').style.display = 'none';
    document.getElementById('seccion-tres').style.display = 'none';
    document.getElementById('seccion-cuatro').style.display = 'none';
    document.getElementById("milogin").reset();
}
function atras(){
    document.getElementById('seccion-dos').style.display = 'block';
    document.getElementById('seccion-tres').style.display = 'none';
    document.getElementById('seccion-cuatro').style.display = 'none';
}