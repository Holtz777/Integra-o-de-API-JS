function criarEndpoint() {
  let nome = document.getElementById("nome").value;
  let url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`;
  return url;
}
function getNome() {
  let nome = document.getElementById("nome").value;
  return nome
}

document.querySelector("form").addEventListener("submit", async function calcFrequencia(event) {
  event.preventDefault();
  let url = criarEndpoint();
  let resposta = await fetch(url);
  let dados = await resposta.json();
  let i = 0
  let frequencia = 0
  while(i < 9){
    frequencia += dados[0].res[i].frequencia
    i++
    console.log(`loop ${i} = ${frequencia}`)}
  nome = await getNome()
  let frase = document.getElementById("frase")
  frase.innerHTML = `
  <h4 class="frase">
  Frequencia do nome ${(nome)} entre 1930 até 2010: ${(frequencia)} 
  </h4>
  `
});
