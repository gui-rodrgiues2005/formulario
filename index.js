
function prencherNome(){ 
    var nome = prompt("Por favor, digite seu nome:");
    if(nome !== null){ 
    window.alert("Bem vindo ao meu formulário "+nome);
    }
    if (nome !== null) {
        document.getElementById("name").value = nome;
    }
}

function senhaForte(){
    var senha = document.getElementById("senha").value;
    var forcaSenhaElement = document.getElementById("forcaSenha");

    var tamanhoMinimo = 8;
    var contemNumeros = /\d/.test(senha);
    var contemCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    if (senha.length < tamanhoMinimo) {
        forcaSenhaElement.textContent = "Fraca: A senha deve ter pelo menos " + tamanhoMinimo + " caracteres.";
    } else if (!contemNumeros || !contemCaracterEspecial) {
        forcaSenhaElement.textContent = "Média: A senha deve conter números e caracteres especiais.";
    } else {
        forcaSenhaElement.textContent = "Forte: A senha atende aos nossos critérios de segurança.";
    }
}

function VisualizarSenha(senha) {
    var senhaInput = document.getElementById("senha");
    var toggleIcon = document.getElementById("Versenha");

    if (senhaInput.type === "password"){
        senhaInput.type = "text";
        toggleIcon.textContent = "😐"; 
    } else {
        senhaInput.type = "password";
        toggleIcon.textContent = "😑";  
    }
}

function validarIdade() {
    var idadeInput = document.getElementById("idade");
    var idadeError = document.getElementById("idadeError");

    var idade = parseInt(idadeInput.value, 10);

    var idadeMinima = 18;
    var idadeMaxima = 100;

    if (isNaN(idade)) {
        idadeError.textContent = "Insira uma idade válida.";
    } else if (idade < idadeMinima) {
        idadeError.textContent = "A idade deve estar acima de " +idadeMinima+ ".";
    }else if(idade > idadeMaxima){
        idadeError.textContent = "A idade deve estar menor que " +idadeMaxima+ ".";  
    } else {
        idadeError.textContent = "";
    }
}

function verificarCampos(){ 
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var idade = document.getElementById('idade').value;

    if(nome !== '' && email !== '' && senha !== '' && idade !== ''){
        enviar();
    } 
    else {
        mesagem.innerHTML = 'Complete todos os campos do Formulário !'
    }
}

function enviar() {
   exibirMensagemSucesso();
}

function exibirMensagemSucesso() {

    var mensagemSucesso = document.getElementById('mensagemSucesso');
    mensagemSucesso.innerHTML = 'Formulário enviado com sucesso!';

    limparFormulario();
}


