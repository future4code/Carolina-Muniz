function criarAtividade(){
    const nomeDaTarefa = document.getElementById("atividade").value
    document.getElementById("texto").innerHTML="<p>" + nomeDaTarefa + "</p>"
}
criarAtividade()