//alert("JavaScript ativo e rodando");

function adicao(val1, val2) {
    return val1 + val2;
}

function subtracao(val1, val2) {
    return val1 - val2;
}

function mutiplicacao(val1, val2) {
    return val1 * val2;
}

function divasao(val1, val2) {
    return val1 / val2;
}

function clique() {
    // alert("O botão foi clicado");
    document.getElementById("h3-text").innerHTML = "Obrigado por clicar";
}

function redir() {
    window.open("http://buscarlojas.com.br/");//nova aba
    window.location.href = "http://buscarlojas.com.br/";//mesma aba
}

function trocar(e) {
    // alert("teste");
    e.innerHTML = "O mouse passou por aqui.";
}

function voltar(e) {
    e.innerHTML = "Passe o mouse.";
}

function Load() {
    alert("Pagina carregada com sucesso.");
}

function Change(e) {
    console.log(e.value);

}