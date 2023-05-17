var contraseña1 = document.getElementById("contraseña1");
var contraseña2 = document.getElementById("contraseña2");
var parrafo = document.getElementById("warnings");
var form = document.getElementById("form");
var nombreU = document.getElementById("nombre");
var email =document.getElementById("email");

form.addEventListener("submit1" ,e=> {
    e.preventDefault(); // Evita el envío del formulario por defecto
    let warnings= "";
    let entrar = false
    var regexContraseña1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    var regexContraseña2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    //Expresiones regulares...
    parrafo.innerHTML = "" //para que se reinicie
    if(!regexContraseña1.test(contraseña1.value) && !regexContraseña2.test(contraseña2.value)){
        warnings += 'la contraseña es falsa porque debe tener 8 digitos una mayuscula y almenos una letra.. <br>';
        entrar = true
    }
    if (contraseña1.value !== contraseña2.value){
        warnings += 'las contraseñas deben ser iguales <br>'
        entrar = true
    }

    if(!regexEmail.test(email.value)){
      warnings += `El email no es valido <br>`
      entrar = true
    }
    if(entrar){
      parrafo.innerHTML = warnings
    }
    else{
      parrafo.innerHTML = "Enviado"
    }
    

})


form.addEventListener("submit" ,e=> {
  e.preventDefault(); 
  let warnings= "";
  let entrar = false
  var regexContraseña1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
  var regexContraseña2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
  var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML = "" 
  if(!regexContraseña1.test(contraseña1.value) && !regexContraseña2.test(contraseña2.value)){
      warnings += 'la contraseña es falsa porque debe tener 8 digitos una mayuscula y almenos una letra.. <br>';
      entrar = true
  }
  if (contraseña1.value !== contraseña2.value){
      warnings += 'las contraseñas deben ser iguales <br>'
      entrar = true
  }

  
  if(!regexEmail.test(email.value)){
    warnings += `El email no es valido <br>`
    entrar = true
  }



  if(entrar){
    parrafo.innerHTML = warnings
  }
  else{
    parrafo.innerHTML = "Enviado"
  }
  

})
