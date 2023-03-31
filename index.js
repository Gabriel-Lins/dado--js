const gerarNumeroBtn = document.getElementById('gerar-numero');
const numeroGeradoH1 = document.getElementById('numero-gerado');

gerarNumeroBtn.addEventListener('click', () => {
  const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
  numeroGeradoH1.innerText = `Número Gerado: ${numeroAleatorio}`;
});
