const participantes = [
  { nome: "João", sorteado: "Maria" },
  { nome: "Maria", sorteado: "Pedro" },
  { nome: "Pedro", sorteado: "Ana" },
  { nome: "Ana", sorteado: "Carla" },
  { nome: "Carla", sorteado: "João" }
];

function verAmigoSecreto() {
  const nomeDigitado = document.getElementById("nome").value.trim();
  const resultado = document.getElementById("resultado");

  if (!nomeDigitado) {
    resultado.textContent = "Por favor, digite seu nome!";
    resultado.style.color = "red";
    return;
  }

  const participante = participantes.find(p => p.nome.toLowerCase() === nomeDigitado.toLowerCase());

  if (participante) {
    resultado.textContent = `Seu Amigo Secreto é: ${participante.sorteado} 🎉`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Nome não encontrado! Verifique e tente novamente.";
    resultado.style.color = "red";
  }
}
