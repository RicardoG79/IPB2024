document.addEventListener('DOMContentLoaded', function() {
    const specialCards = document.querySelectorAll('.special-card '); // Selecciona todas las tarjetas especiales

    specialCards.forEach(cardLink => {
        cardLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir la acción de navegación inicial

            const notification = document.getElementById('notification');
                    notification.className = "notification show";

            // Retrasar la navegación 2 segundos
            setTimeout(() => {
                notification.className = notification.className.replace(" show", "");
                window.open(cardLink.href, '_blank');
            }, 1000);
        });
    });
});

//Aviso de enlaces en construcción
document.querySelectorAll('.enlace-construccion').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault(); // Previene la navegación al enlace
        alert('¡Enlace en construcción!\nGracias por tu paciencia, pronto estará disponible.');
    });
});

