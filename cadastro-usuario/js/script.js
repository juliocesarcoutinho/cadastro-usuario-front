// const formulario = document.querySelector("#cadastroForm");
// const Inome = document.querySelector("#inputNome");
// const Iemail = document.querySelector("#inputEmail");
// const Isenha = document.querySelector("#inputSenha");
// const Itelfone = document.querySelector("#inputTelefone");
//
// document.getElementById('inputTelefone').addEventListener('input', function (event) {
//     // Remove todos os caracteres não numéricos
//     const input = event.target;
//     const value = input.value.replace(/\D/g, '');
//
//     // Formato (00) 0000-0000 ou (00) 00000-0000
//     if (value.length <= 10) {
//         input.value = value.replace(/(\d{2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
//     } else {
//         input.value = value.replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
//     }
// });
//
//
// document.getElementById('cadastroForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Impede o envio padrão do formulário
//
//     const nome = Inome.value;
//     const email = Iemail.value;
//     const senha = Isenha.value;
//     const telefone = Itelfone.value;
//
//     // Verifica se algum campo está vazio
//     if (nome === '' || email === '' || senha === '' || telefone === '') {
//         appendAlert('Preencha todos os campos antes de enviar o formulário.', 'danger');
//         return;
//     }
//
//     fetch("http://localhost:8080/api/salvarUsuario", {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: 'POST',
//         body: JSON.stringify({
//             nome: nome,
//             email: email,
//             senha: senha,
//             telefone: telefone
//         })
//     })
//         .then(function (response) {
//             if (response.status === 200) {
//                 appendAlert('Cadastro efetuado com sucesso!', 'success');
//             } else {
//                 appendAlert('Ocorreu um erro ao cadastrar o usuário.', 'danger');
//             }
//         })
//         .catch(function (error) {
//             console.log("Erro na requisição:", error);
//             appendAlert('Ocorreu um erro ao cadastrar o usuário.', 'danger');
//         });
//
//     // Limpar os campos após o envio bem-sucedido
//     limpar();
// });
//
// function limpar() {
//     Inome.value = "";
//     Iemail.value = "";
//     Isenha.value = "";
//     Itelfone.value = "";
// }
//
// const alertPlaceholder = document.querySelector('.container');
//
// const appendAlert = (message, type) => {
//     const wrapper = document.createElement('div');
//     wrapper.innerHTML = [
//         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//         `   <div>${message}</div>`,
//         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//         '</div>'
//     ].join('');
//
//     alertPlaceholder.append(wrapper);
// };

const formulario = document.querySelector("#cadastroForm");
const Inome = document.querySelector("#inputNome");
const Iemail = document.querySelector("#inputEmail");
const Isenha = document.querySelector("#inputSenha");
const Itelfone = document.querySelector("#inputTelefone");

document.getElementById('inputTelefone').addEventListener('input', function (event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    if (value.length >= 2) {
        if (value.length <= 10) {
            input.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length <= 11) {
            input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        }
    } else {
        input.value = value;
    }
});

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = Inome.value;
    const email = Iemail.value;
    const senha = Isenha.value;
    const telefone = Itelfone.value;

    // Verifica se algum campo está vazio
    if (nome === '' || email === '' || senha === '' || telefone === '') {
        appendAlert('Preencha todos os campos antes de enviar o formulário.', 'danger');
        setTimeout(hideAlerts, 5000); // Oculta o alerta após 5 segundos
        return;
    }

    fetch("http://localhost:8080/api/salvarUsuario", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone
        })
    })
        .then(function (response) {
            if (response.status === 200) {
                appendAlert('Cadastro efetuado com sucesso!', 'success');
            } else {
                appendAlert('Ocorreu um erro ao cadastrar o usuário.', 'danger');
            }
            setTimeout(hideAlerts, 5000); // Oculta o alerta após 5 segundos
        })
        .catch(function (error) {
            console.log("Erro na requisição:", error);
            appendAlert('Ocorreu um erro ao cadastrar o usuário.', 'danger');
            setTimeout(hideAlerts, 5000); // Oculta o alerta após 5 segundos
        });

    // Limpar os campos após o envio bem-sucedido
    limpar();
});

function limpar() {
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itelfone.value = "";
}

function hideAlerts() {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        alert.style.display = 'none';
    });
}

const alertPlaceholder = document.querySelector('.container');

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
};
