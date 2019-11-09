var titulo = (document.querySelector("h1"));

titulo.textContent = "Aparecida32";
var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");

  var peso = tdPeso.textContent;

  tdImc = paciente.querySelector(".info-imc")
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var imc = calculaImc(peso, altura);

if (peso<=0 || peso>200) {
  tdImc.textContent = "Peso invalido"
  paciente.classList.add("paciente-invalido");
}else if (altura<=0 || altura>=5.0) {
  tdImc.textContent = "Altura invalida"
  paciente.style.color = "red";

}else {
  tdImc.textContent = imc;
}
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura*altura);
  return imc.toFixed(1);
}
