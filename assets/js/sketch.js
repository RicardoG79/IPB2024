let dogX = -50;
let showDog = false;
let animationState = 'waiting';
let frameCounter = 0;
let tailAngle = 0;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(200, 220, 255);
  
  // Esperar 5 segundos (300 frames a 60fps)
  if (frameCounter >= 300 && animationState === 'waiting') {
    showDog = true;
    animationState = 'walking';
  }
  
  if (showDog) {
    // Dibujar perro
    push();
    translate(dogX, height - 100);
    
    // Cuerpo
    fill(139, 69, 19); // Marrón
    ellipse(50, 50, 80, 40);
    
    // Cabeza
    ellipse(90, 30, 40, 40);
    
    // Orejas
    fill(105, 52, 14);
    ellipse(80, 20, 20, 30);
    ellipse(100, 20, 20, 30);
    
    // Patas
    fill(139, 69, 19);
    rect(30, 60, 10, 30);
    rect(60, 60, 10, 30);
    
    // Cola
    push();
    translate(20, 50);
    rotate(sin(tailAngle) * 0.2);
    rect(0, 0, 30, 10);
    pop();
    
    // Ojos
    fill(0);
    ellipse(85, 25, 5, 5);
    ellipse(95, 25, 5, 5);
    
    // Animación de saludo
    if (animationState === 'waving') {
      push();
      translate(80, 50);
      rotate(sin(frameCounter * 0.1) * 0.3);
      fill(139, 69, 19);
      rect(0, 0, 20, 10);
      pop();
    }
    
    pop();
    
    // Lógica de animación
    if (animationState === 'walking') {
      dogX += 2; // Mover a la derecha
      tailAngle += 0.1;
      if (dogX >= width / 2) {
        animationState = 'waving';
        frameCounter = 0;
      }
    } else if (animationState === 'waving') {
      frameCounter++;
      if (frameCounter >= 60) { // Saludar por 1 segundo
        animationState = 'disappearing';
      }
    } else if (animationState === 'disappearing') {
      dogX += 2; // Continúa moviéndose
      if (dogX >= width + 50) {
        showDog = false;
      }
    }
  }
  
  frameCounter++;
}