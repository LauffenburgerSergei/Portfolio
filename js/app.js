// Sélectionne toutes les sections de la page
let sections = document.querySelectorAll("section");

// Sélectionne tous les icônes dans les liens de la barre de navigation
let navIcons = document.querySelectorAll("header nav a i");

// Ajoute un écouteur d'événements de défilement sur la fenêtre
window.onscroll = () => {
  // Parcourt chaque section pour déterminer si elle est actuellement visible
  sections.forEach((section) => {
    // Obtient la position verticale actuelle de défilement de la fenêtre
    let top = window.scrollY;

    // Calcule l'offset (position) de la section actuelle, ajusté de 100 pixels
    let offset = section.offsetTop - 100;

    // Obtient la hauteur de la section actuelle
    let height = section.offsetHeight;

    // Obtient l'ID de la section actuelle
    let id = section.getAttribute("id");

    // Vérifie si la section actuelle est dans la fenêtre d'affichage
    if (top >= offset && top < offset + height) {
      // Parcourt chaque icône dans la barre de navigation
      navIcons.forEach((icon) => {
        // Enlève la classe 'active' de l'icône (pour désactiver les autres sections)
        icon.classList.remove("active");

        // Construit un sélecteur pour trouver l'icône correspondant à la section visible
        let selector = `header nav a[href*=${id}] i`;

        // Utilise le sélecteur pour trouver l'icône correspondante
        let activeIcon = document.querySelector(selector);

        // Si l'icône correspondante est trouvée, ajoute la classe 'active' à cette icône
        if (activeIcon) {
          activeIcon.classList.add("active");
        }
      });
    }
  });
};
