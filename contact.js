let btnSubmit  =  document.getElementById("submit"); 
btnSubmit.addEventListener('click', check); 

let txtEmail  =  document.getElementById("email"); 
txtEmail.addEventListener("blur", validateEmail);