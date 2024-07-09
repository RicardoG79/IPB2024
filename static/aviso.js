document.addEventListener('DOMContentLoaded', function() {
    const specialCards = document.querySelectorAll('.special-card '); // Selecciona todas las tarjetas especiales

    specialCards.forEach(cardLink => {
        cardLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir la acción de navegación inicial

            const notification = document.getElementById('notification');
            notification.textContent = `Debe ingresar con su cuenta institucional`;
            notification.className = "notification show";

            // Retrasar la navegación 2 segundos
            setTimeout(() => {
                notification.className = notification.className.replace(" show", "");
                window.open(cardLink.href, '_blank');
            }, 1000);
        });
    });
});


