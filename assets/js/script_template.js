//crear variable header
let header1= `
<nav>
            <img src="../assets/img/logo1.png" alt="Logo del Curso" class="logo">
            <div class="infraestructura">
                <h4>"A la luz del Evangelio, transformando la cultura."</h4>
            </div>
            
</nav>
<section class="title-section">
            <h1>Web para Docentes <br> Instituto Brizuela</h1>
        </section>
        `
//seleciono el header, y le paso lo que está en la variable header1
document.querySelector("header").innerHTML=header1;

let footer1=`
<div class="icons">
            <div class="floating-icon">
                <a href="https://www.instagram.com/institutobrizuela/" target="_blank">
                    <img src="../assets/img/instagram-6338401__340.ico" alt="Instagram">
                </a>
                <a href="https://app.tulegajo.com/login.htm" target="_blank">
                    <img src="../assets/img/tulegajo.ico" alt="tulegajo.com">
                </a>
            </div>
        </div>
        <p>Ciclo lectivo 2026 <br> 
            Instituto Privado Superior Pbro. Juan V. Brizuela <br> <a href = "https://institutobrizuela.edu.ar/portal/" target="_blank"> www.institutobrizuela.edu.ar </a>  </p> <br>
            <p class="par1">Desarrollado por +Grafito</p>

        `
//selecciono el footer y le paso la variable de footer1
document.querySelector("footer").innerHTML=footer1;

let home= `
<section class="home">
            <a href="../index.html">
            <img src="../assets/img/hogarIII.png" alt="">

`
document.querySelector(".home").innerHTML=home;

//codigo para el botón
function toggleDropdown(menuId) {
    var dropdown = document.getElementById(menuId);
    var allDropdowns = document.querySelectorAll('.dropdown-content');

    allDropdowns.forEach(function(other) {
        if (other.id !== menuId) {
            other.classList.remove('show');
        }
    });

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
}

// Cerrar el dropdown si se hace clic fuera de él
document.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    var buttons = document.querySelectorAll('.dropdown-button');
    var clickedInside = false;

    buttons.forEach(function(button) {
        if (button.contains(event.target)) {
            clickedInside = true;
        }
    });
    dropdowns.forEach(function(dropdown) {
        if (dropdown.contains(event.target)) {
            clickedInside = true;
        }
    });

    if (!clickedInside) {
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('show');
        });
    }
});