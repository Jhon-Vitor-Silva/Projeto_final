function salvarInformacoes() {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const dataNascimento = document.getElementById("data_nascimento").value;

    const informacoes = {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        dataNascimento: dataNascimento
    };

    const informacoesJSON = JSON.stringify(informacoes);

    localStorage.setItem("fichaInformacoes", informacoesJSON);
}

document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    salvarInformacoes();
    window.location.href = "../cortes/cortes.html";
});