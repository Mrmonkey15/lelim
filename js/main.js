//Sidebar

document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.querySelector('.burger-menu');
    let closeSidebarButton = document.querySelector('.close-sidebar');
    let sidebar = document.querySelector('.sidebar');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('open');
        sidebar.classList.toggle('open');
    });

    closeSidebarButton.addEventListener('click', function() {
        burgerMenu.classList.remove('open');
        sidebar.classList.remove('open');
    });
});
// formulário

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('duvidas-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obter o valor do campo de captcha
        const captchaInput = document.getElementById('captcha');
        const captchaValue = parseInt(captchaInput.value);

        // Validar o valor do captcha
        if (captchaValue === 7) { 
            form.submit();
        } else {
            alert('Erro na validação, tente novamente. Digite o resultado correto');
            captchaInput.classList.add('captcha-error');
            captchaInput.value = '';
            captchaInput.focus();
        }
    });
    const captchaInput = document.getElementById('captcha');
    captchaInput.addEventListener('input', function() {
        captchaInput.classList.remove('captcha-error');
    });
});
//limpar formulário
document.getElementById('limpar').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-container').reset();
});


    document.addEventListener('DOMContentLoaded', function () {
        const sidebar = document.querySelector('.sidebar');
        const closeBtn = document.querySelector('.close-sidebar');
        const contactLink = document.querySelector('.contact-link');

        // Função para fechar a sidebar
        function closeSidebar() {
            sidebar.classList.remove('open');
        }

        // Evento de clique para o botão de fechar
        closeBtn.addEventListener('click', closeSidebar);

        // Evento de clique para o link de contato
        contactLink.addEventListener('click', closeSidebar);
    });

