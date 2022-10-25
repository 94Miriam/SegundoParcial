document.getElementById("txtusuario").focus();
document.getElementById("ingresar").addEventListener("click", function(e){
    e.preventDefault();
    var usuario = document.getElementById("txtusuario");
    if(usuario.value==""){
        //console.log("Ingrese usuario");
        var mensaje = "Ingrese usuario.";
        document.getElementById('mensaje').innerHTML=mensaje;
        var alerta = document.getElementById('alert');
        alerta.style.display = "block";
        usuario.focus();
        return false;
    }
    else
    {
        var smsstrong = "Éxito";
        var strong = document.getElementById('strong').innerHTML=smsstrong;
        var mensaje = "usuario aceptado.";
        document.getElementById('mensaje').innerHTML=mensaje;
        var alerta = document.getElementById('alert');
        alerta.style.backgroundColor = "#04AA6D";
        alerta.style.display = "block";
        var newuser = document.getElementById("txtusuario");
        document.getElementById("usuario").innerHTML=newuser.value;
    }
});
function ConversorDolares(valor , evento)
{
    if (evento.key === 'Enter' || evento.keyCode === 13) {
        var bolivianos = parseFloat(valor.value);
        var dolares = bolivianos / 6.96;
        document.getElementById("txtdolares").value=dolares.toFixed(2)+" DOLARES";
        console.log(dolares);
    }
}
function ConversorBolivianos(valor , evento){
    if (evento.key === 'Enter' || evento.keyCode === 13) {
        var dolares = parseFloat(valor.value);
        var bolivianos = dolares * 6.96;
        document.getElementById("txtbolivianos").value=bolivianos.toFixed(2)+" BOLIVIANOS";
        console.log(bolivianos);
    }
}
document.getElementById("convertir").addEventListener("click", function(e){
    e.preventDefault();
    var bolivianos = document.getElementById('txtbolivianos');
    var dolares = document.getElementById('txtdolares');
    
});