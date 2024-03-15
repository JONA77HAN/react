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