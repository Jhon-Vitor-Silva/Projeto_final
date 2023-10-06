const button = document.getElementById('cadastra')

button.addEventListener("click", function(event) {
    event.preventDefault();
    salvarInformacoes();
    window.location.href = "../cadastramento/cadastro.html";
});