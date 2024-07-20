//crear variable header
let header1= `
<nav>
            <img src="./static/img/logo1.png" alt="Logo del Curso" class="logo">
            <div class="infraestructura">
                <h4>"A la luz del Evangelio, transformaremos la cultura."</h4>
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
                    <img src="../static/img/instagram-6338401__340.ico" alt="Instagram">
                </a>
                <a href="https://app.tulegajo.com/login.htm" target="_blank">
                    <img src="./static/img/tulegajo.ico" alt="Facebook">
                </a>
            </div>
        </div>
        <p>Ciclo lectivo 2024 <br> 
            Instituto Privado Superior Pbro. Juan V. Brizuela</p>
        `
//selecciono el footer y le paso la variable de footer1
document.querySelector("footer").innerHTML=footer1;