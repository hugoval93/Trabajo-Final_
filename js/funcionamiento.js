
//Esto es de la pagina de como funciona
document.addEventListener("DOMContentLoaded", () => {    // Este comando permite que se ejecute SOLO si todas las lineas de HTML estan totalmente cargadas
    const sections = document.querySelectorAll('.section');  //Con esta constante hace que todo lo que este marcado como .section funcione con el mismo evento
    const infoBox = document.getElementById('info-box');//todo lo marcado como "info-bix" solo mostrara informacion cuando se pase el mouse por encima de el

    sections.forEach((section) => { //con el sections estamos seleccionando todo lo marcado como sections, y con forEach  para decir que interacciones con todo lo marcado como secction
     
        section.addEventListener('mouseenter', () => { //con el evento mousenter se le dice que cada que pase por section se active
            const info = section.getAttribute('data-info'); //Al seleccionar "data info" como costante le decimos que debe mostrar al momento de pasar por encima de la section
            infoBox.textContent = info;
            infoBox.style.display = 'block'; // Esto asegura que cuando el mouse pase, se muestre la info
        });


        section.addEventListener('mouseleave', () => { //Con el mouseleave me indica que al momento de mover la imagen debe hacer algo
            infoBox.style.display = 'none';  //Con esto hace que el cuadro de informacion se oculte con el comiando "display :none"
        });
    });
});
