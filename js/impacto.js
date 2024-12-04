const steps = document.querySelectorAll('.step');

    // Agrega un evento "click" a cada paso
    steps.forEach(step => {
      step.addEventListener('click', () => {
        // Alterna la clase "active" para mostrar/ocultar la información
        step.classList.toggle('active');
      });
    });