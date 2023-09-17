const formulario = document.querySelector("form");
const Inome = document.querySelector("#inputNome");
const Iemail = document.querySelector("#inputEmail")
const Isenha = document.querySelector("#inputSenha")
const Itelfone = document.querySelector("#inputTelefone")

function cadastrar() {
    
    fetch("http://localhost:8080/cadastrar/",

        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                nome: Inome.value,
                email: Iemail.value,
                senha : Isenha.value,
                telefone: Itelfone.value
            })
        })
        .then(function (response) {console.log(response)})
        .catch(function (response) {console.log(response)})
    
}

function limpar() {
    Inome.value ="";
    Iemail.value = "";
    Isenha.value = "";
    Itelfone.value = "";
}

formulario.addEventListener("submit", function (event){
    event.preventDefault();
    
   cadastrar();
   limpar();
   
});