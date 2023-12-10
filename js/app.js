document.addEventListener("DOMContentLoaded", function() {
  // Obtenez l'URL actuelle
  const currentUrl = window.location.href;

  // Sélectionnez tous les liens de navigation
  const navLinks = document.querySelectorAll('.nav__section--link a');

  navLinks.forEach(link => {
    // Supprimez la classe 'active' de tous les liens
    link.querySelector('i').classList.remove('active');

    // Vérifiez si l'URL du lien correspond à l'URL actuelle
    if (link.href === currentUrl) {
      // Ajoutez la classe 'active' à l'icône du lien correspondant
      link.querySelector('i').classList.add('active');
    }
  });
});
/*-------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------  VanillaTilt  --------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

// Initialisation de VanillaTilt sur tous les éléments avec la classe 'box'.
VanillaTilt.init(document.querySelectorAll(".box"), {
  // 'max' définit le maximum d'inclinaison en degrés. Lorsque vous survolez l'élément,
  // il peut s'incliner jusqu'à 25 degrés dans n'importe quelle direction.
  max: 25,

  // 'speed' définit la vitesse de l'effet de tilt. Le nombre représente la durée de la transition
  // en millisecondes. Ici, il faudra 400 ms pour que l'effet de tilt atteigne
  // son inclinaison maximale ou revienne à sa position initiale.
  speed: 400,

  // 'easing' définit la fonction de timing CSS pour l'animation de l'effet de tilt.
  // Cette fonction contrôle la vitesse de l'animation. Ici, une fonction
  // bezier cubique est utilisée pour un effet plus dynamique.
  easing: "cubic-bezier(.03,.98,.52,.99)",

  // 'perspective' définit la distance entre l'élément et l'utilisateur pour l'effet 3D.
  // Plus le nombre est grand, moins l'effet 3D sera perceptible.
  perspective: 500,

  // 'transition': Si activé (true), ajoute une transition douce à l'effet de tilt.
  // L'effet de tilt ne sera pas instantané, mais s'animera de façon fluide.
  transition: true,
});
