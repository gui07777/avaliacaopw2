const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senhaConfirmacao = document.getElementById("confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkForm();

    
})
function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Este campo não pode ficar vazio!")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Este campo não pode ficar vazio!")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword() {
    const senhaValue = senha.value

    if (senhaValue === "") {
        errorInput(senha, "Este campo é obrigatório!")
    } else if (senhaValue.length > 8) {
        errorInput(senha, "A senha deve ter pelo menos 8 caracteres!")
    } else {
        const formItem = senha.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputConfirmation() {
    const senhaValue = senha.value
    const confirmationValue = confirmation.value;

    if (confirmationValue === "") {
        errorInput(confirmation, "Esta campo é obrigatório!")
    } else if (confirmationValue !== senhaValue) {
        errorInput(confirmation, "As senhas devem ser iguais!")
    } else {
        const formItem = confirmation.parentElement
        formItem.className = "form-content"
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error"
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputConfirmation();

    const formItems = form.querySelectorAll(".form-content")
    
    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    })

   

}