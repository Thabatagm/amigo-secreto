const participantes = [
  { nome: "Thabata26", sorteado: "Rodrigo" },
  { nome: "Rodrigo17", sorteado: "Vo Pedro" },
  { nome: "Renam29", sorteado: "Luana" },
  { nome: "Leticia33", sorteado: "Diva" },
  { nome: "Diva56", sorteado: "Kelvin" },
  { nome: "Luana11", sorteado: "Thabata" },
  { nome: "Kelvin21", sorteado: "Leticia" },
  { nome: "Andreia44", sorteado: "Renam" },
  { nome: "Thalita27", sorteado: "Andreia" },
  { nome: "VoPedro50", sorteado: "Cleide" },
  { nome: "Marcio66", sorteado: "Thalita" },
  { nome: "Cleide77", sorteado: "Evanir" },
  { nome: "Evanir88", sorteado: "Marcio" }
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
