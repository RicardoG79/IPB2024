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
        <p>Ciclo lectivo 2025 <br> 
            Instituto Privado Superior Pbro. Juan V. Brizuela <br> www.institutobrizuela.edu.ar</p>

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
function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
    } else {
        dropdown.classList.add("show");
    }
}

// Cerrar el dropdown si se hace clic fuera de él
document.addEventListener("click", function(event) {
    var dropdown = document.querySelector(".dropdown-content");
    var button = document.querySelector(".dropdown-button");
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});