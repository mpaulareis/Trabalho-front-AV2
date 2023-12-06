// Adicionando event listener ao botão de aumento de fonte
document.addEventListener('DOMContentLoaded', () => {
    const increaseFontBtn = document.getElementById('increaseFontBtn');
    const decreaseFontBtn = document.getElementById('decreaseFontBtn');

    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', () => increaseFontSize('aumentar'));
    }


    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', () => increaseFontSize('diminuir'));
    }
});

// Função para aumentar a fonte
function increaseFontSize(acao) {
    const main = document.querySelector('*')
    const currentSize = window.getComputedStyle(main).getPropertyValue('font-size');

    let newSize;
    if (acao == 'aumentar') {
        newSize = parseFloat(currentSize) * 1.2;
    } else {
        newSize = parseFloat(currentSize) / 1.2;
    }
    
    console.log(parseFloat(currentSize));
    main.style.fontSize = newSize + 'px';
}

function showInfo(card) {
    card.classList.add('show-info');
}

function hideInfo(card) {
    card.classList.remove('show-info');
}
