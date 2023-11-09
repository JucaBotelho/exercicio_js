const form = document.getElementById("form-numero");

form.addEventListener('submit', function(e) { //Toda vez que clicado em submit, será disparado a função
    e.preventDefault();

    const num1 = Number(document.getElementById("num1").value)
    const num2 = Number(document.getElementById("num2").value)
    const MensagemSucesso = `Correto! O número <b>${num2}</b> é maior que o número <b>${num1}</b>`;

    if (num2 <= num1) {
        document.querySelector(".error_message").style.display = "block"
        document.getElementById("num2").style.border = "2px solid red";
        document.querySelector(".success_message").style.display = "none";
        document.getElementById("num2").classList.add('error');


    } else {
        const container_mensagem_sucesso = document.querySelector(".success_message");
        container_mensagem_sucesso.innerHTML = MensagemSucesso;
        container_mensagem_sucesso.style.display = "block";
        document.getElementById("num1").value = '';
        document.getElementById("num2").value = '';
        document.querySelector(".error_message").style.display = "none";
        document.getElementById("num2").style.border = "";
        document.getElementById("num2").classList.remove('error');
    }
})
