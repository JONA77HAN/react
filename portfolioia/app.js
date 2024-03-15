document.getElementById('change-color-btn').addEventListener('click', function() {
    // Cambiar el color de fondo del body al hacer clic en el botón
    document.body.style.backgroundColor = getRandomColor();
});

// Función para obtener un color hexadecimal aleatorio
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
