
function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }

  function copiarTexto() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    document.execCommand('paste');
    alert("El texto se copio correctamente");
  }
  
// function encriptar(){
//  var btnEncriptar = document.querySelector(".btn-encriptar")
//  var titulo = document.querySelector(".texto");
//  btnEncriptar.onclick = encriptar;