// Efecto en las características de la segunda sección
document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll('.feature');
  
    features.forEach((feature) => {
      feature.addEventListener('mouseenter', () => {
        feature.style.backgroundColor = "#6acc0d";
        feature.style.borderRadius = "5px";
      });
      feature.addEventListener('mouseleave', () => {
        feature.style.backgroundColor = "transparent";
      });
    });
  });
  