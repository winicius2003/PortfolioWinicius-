document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function checkVisibility() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    // Execute a função ao carregar a página e ao rolar
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});
// Função para alternar o chat
function toggleChat() {
    var chatBox = document.getElementById('chatBox');
    var chatMinimized = document.getElementById('chatMinimized');
    if (chatBox.style.display === 'none') {
        chatBox.style.display = 'flex';
        chatMinimized.style.display = 'none';
    } else {
        chatBox.style.display = 'none';
        chatMinimized.style.display = 'block';
    }
}

// Função para enviar mensagens no chat
function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    var chatInput = document.getElementById('chatInput');
    var chatMessages = document.getElementById('chatMessages');
    if (chatInput.value.trim() !== '') {
        var message = document.createElement('div');
        message.textContent = chatInput.value;
        chatMessages.appendChild(message);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
