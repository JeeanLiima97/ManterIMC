var botao = document.querySelector("#buscar-paciente");
botao.addEventListener("click", function () {
  console.log("buscando paciente");

 var xhr = new XMLHttpRequest();
 xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
 xhr.send();

 xhr.addEventListener("load", function () {
  var resposta = xhr.responseText;
  console.log(typeof resposta);
  var pacientes = JSON.parse(resposta);

  pacientes.forEach(function(paciente) {
             adicionaPacienteNaTabela(paciente);
         });

 })


});
