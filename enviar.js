function abrirModal() {
    document.getElementById('emailModal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('emailModal').style.display = 'none';
}

function enviarEmail() {
    const destinatario = document.getElementById('destinatario').value;
    const mensagem = document.getElementById('mensagem').value;
    alert(`E-mail enviado para: ${destinatario}\nMensagem: ${mensagem}`);
    fecharModal();
}

document.querySelector('.open-modal-btn').addEventListener('click', abrirModal);
