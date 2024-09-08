// Função para trocar a direção do flex (linha ou coluna)
function changeDirection(id) {
    const container = document.getElementById(id);
    const currentDirection = container.style.flexDirection;

    if (currentDirection === 'column') {
        container.style.flexDirection = 'row';
    } else {
        container.style.flexDirection = 'column';
    }
}

// Função para trocar o alinhamento/justificação
function changeAlignment(id) {
    const container = document.getElementById(id);
    const currentJustify = container.style.justifyContent;

    if (currentJustify === 'space-between') {
        container.style.justifyContent = 'center';
    } else {
        container.style.justifyContent = 'space-between';
    }
}

// Barra de pesquisa básica (filtro por texto nas seções)
document.getElementById("searchBox").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(query)) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
});
