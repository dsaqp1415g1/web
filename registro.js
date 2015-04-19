$("#button").click(function(e) {
    var str1 = $("#contraseña").val()
    var str2 = $("#confirmarContraseña").val()
    var n = str1.localeCompare(str2)
    var nombre = $("#nombre").val()
    var apellidos = $("#apellidos").val()
    var email = $("#email").val()
    if (nombre==0 && apellidos==0 && email==0){
        alert("Rellene todos los campos y acepte los terminos y condiciones.");
    }
    else{
        if (str1==0 || str2==0)
            alert("Introduzca una contraseña valida.");
        else if(n==0){
            alert("OK");
            window.top.location.href = "Webprincipal.html";
        }
        else
            alert("Las contraseñas no coinciden.");
    }
}

);
function marcado(){
if (document.form.chk.checked) {
document.form.submit(); 
     }
	 else{
	 alert("Debes aceptar los términos y condiciones");
	
       return 0; 
	 }

}
<script language="JavaScript">

