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
  // Datos de ejemplo: tus habilidades
  const skills = ['HTML', 'CSS','JavaScript', 'Angular', 'Python', 'MongoDB', 'Express.js'];

  // Función para mostrar las habilidades en la página
  function mostrarHabilidades() {
      const skillsList = document.getElementById('skills-list');
      // Limpiar lista antes de agregar nuevas habilidades
      skillsList.innerHTML = '';

      // Iterar sobre las habilidades y crear elementos de lista
      skills.forEach(skill => {
          const skillItem = document.createElement('li');
          skillItem.textContent = skill;
          skillItem.classList.add('skill-item');
          skillsList.appendChild(skillItem);
      });
  }

  // Llamar a la función para mostrar habilidades al cargar la página
  mostrarHabilidades();

  //hasta aca,,,
  /// LO QUE viene a continuacion es prueba

  // Función para mostrar las habilidades en la página
function mostrarHabilidades() {
    const skillsList = document.getElementById('skills-list');
    // Limpiar lista antes de agregar nuevas habilidades
    skillsList.innerHTML = '';

    // Iterar sobre el array de habilidades
    skills.forEach(skill => {
        // Crear un elemento de botón para cada habilidad
        const button = document.createElement('button');
        // Establecer el texto del botón como la habilidad actual
        button.textContent = skill;
        // Agregar una clase al botón para estilizarlo si lo deseas
        button.classList.add('skill-button');
        // Agregar un evento de clic al botón que lleve a otro index
        button.addEventListener('click', function() {
            // Redireccionar a otro index
            window.location.href = 'otro-index.html'; // Reemplaza 'otro-index.html' con la ruta de tu otro index
        });

        // Agregar el botón a la lista de habilidades
        skillsList.appendChild(button);
    });
}
