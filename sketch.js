//variables globales

let x1 = 1;
let y1 = 200
let dir1 = 1;
let vel1 = 1;

let x2 = 50;
let y2 = 300;
let dir2 = 1;
let vel2 = 2;

let x3 = 500;
let y3 = 300;
let dir3 = 1;
let vel3 = 1;

let x4 = 450;
let y4 = 300;
let dir4 = 1;
let vel4 = 2;

let colorRect1 = 0;
let colorRect2 = 0;
let colorRect3 = 0;
let colorRect4 = 0;

let fondo = 0;
let fondoc1 = 0;
let fondoc2 = 0;
let fondoc3 = 0;
let fondoc4 = 0;
let fondoe1 = 0;
let fondoe2 = 0;

let maluma;
function preload() {
  maluma = loadImage("images/CaraMaluma.png");
}



//setup

function setup() {

  createCanvas(1000, 600);
  background(0, 0, 0);
  stroke(255);


  colorRect1 = color(255, 0, 255); //azul oscuro
  colorRect2 = color(0, 0, 0); //negro
  colorRect3 = color(255, 124, 0); //naranja
  colorRect4 = color(243, 255, 0); //amarillo
  fondoe1 = color(0, 0, 0); //negro
  fondoe2 = color(0, 0, 0); //negro
  fondo = color(0, 0, 0);
  fondoc1 = color(0, 255, 0); //verde
  fondoc2 = color(228, 0, 255); // rosado
  fondoc3 = color(255, 0, 0); //rojo
  fondoc4 = color(0, 255, 251); //azul claro

  //Mensaje que activa audio

  const div = document.getElementById("div1");
  div.onclick = function () {
    div.style.display = "none";

  }
  //música  // muy buen descubrimiento para mi saber que esto, que es propio de JavaScript, funciona metiendolo directamente en el setup

  var audio1 = new Audio("audio/4babys.mp3");


  window.onkeyup = function (e) {
    if (e.key == "1") {
      audio1.play();
      audio1.volume = 1;
    }

    if (e.key == "q") {
      audio1.volume = 0;

    }

    if (e.key == "a") {
      audio1.volume = 1;

    }
  }


}


//draw

function draw() {


  background(fondo);



  //cuadrado fondo 1
  fill(fondoc1);
  stroke(255);
  rect(0, 0, 500, 300)

  //cuadrado fondo 2
  fill(fondoc2);
  stroke(255);
  rect(500, 0, 500, 300)

  //cuadrado fondo 3
  fill(fondoc3);
  stroke(255);
  rect(500, 300, 500, 300);

  //cuadrado fondo 4
  fill(fondoc4);
  stroke(255);
  rect(0, 300, 500, 300);

  //elipse fondo 1
  fill(fondoe1);
  stroke(255);
  ellipse(500, 0, 300, 300);

  //elipse fondo 2
  fill(fondoe2);
  stroke(255);
  ellipse(500, 600, 300, 300);


  //circulo grande mouse
  noFill();
  stroke(255);
  ellipse(mouseX, mouseY, 120, 120);

  //cuadrado 1
  fill(colorRect1);
  stroke(255);
  rect(x1, y1, 50, 50)

  //cuadrado 2
  fill(colorRect2);
  stroke(255);
  rect(x2, y2, 50, 50)

  //cuadrado 3
  fill(colorRect3);
  stroke(255);
  rect(x3, y3, 50, 50)

  //cuadrado 4
  fill(colorRect4);
  stroke(255);
  rect(x4, y4, 50, 50)

  //imagen
  image(maluma, mouseX, mouseY);

  // puedes encapsular varias secciones dentro de funciones personalizadas para que dentro del draw tengas menos lineas de código. Es una cuestión qiue puede servir para varias cosas, una de ellas, para simplificar visualmente la lectura, pero no solo para eso.
  movimientoCuadrados();

  // condición cambio de color del rect 1
  if (dist(mouseX, mouseY, x1, y1) < 100) {
    colorRect1 = color(0, 255, 0); // se asigna verde
  }
  else {
    colorRect1 = color(0, 0, 255) // se asigna azul oscuro
  }

  // condición cambio de color del rect 2
  if (dist(mouseX, mouseY, x2, y2) < 100) {
    colorRect2 = color(0, 255, 251); // se asigna azul claro
  }
  else {
    colorRect2 = color(0, 0, 0) // se asigna negro
  }

  // condición cambio de color del rect 3
  if (dist(mouseX, mouseY, x4, y4) < 100) {
    colorRect4 = color(228, 0, 255); // se asigna rosado
  }
  else {
    colorRect4 = color(243, 255, 0) // se asigna amarillo
  }

  // condición cambio de color del rect 4
  if (dist(mouseX, mouseY, x3, y3) < 100) {
    colorRect3 = color(255, 0, 0); // se asigna rojo
  }
  else {
    colorRect3 = color(255, 124, 0) // se asigna naranja
  }


  //cambio de fondo grande - ya no va
  if (dist(mouseX, mouseY, x2, y2) < 100 && dist(mouseX, mouseY, x1, y1) < 100) {
    fondo = color(0, 0, 0)
  } // se asigna negro
  else {
    fondo = color(255, 0, 0) // se asigna rojo
  }

  //fondo cuadrado 1 cambio de color
  if (dist(mouseX, mouseY, x1, y1) < 100 && dist(mouseX, mouseY, x3, y3) < 100) {
    fondoc1 = color(0, 0, 255)
  } // se asigna azul
  else {
    fondoc1 = color(0, 255, 0) // se asigna verde
  }

  //fondo cuadrado 2 cambio de color
  if (dist(mouseX, mouseY, x2, y2) < 100 && dist(mouseX, mouseY, x4, y4) < 100) {
    fondoc2 = color(243, 255, 0)
  } // se asigna amarillo
  else {
    fondoc2 = color(228, 0, 255) // se asigna rosado
  }

  //fondo cuadrado 4 cambio de color
  if (dist(mouseX, mouseY, x3, y3) < 100 && dist(mouseX, mouseY, x4, y4) < 100) {
    fondoc3 = color(0, 0, 0)
  } // se asigna negro
  else {
    fondoc3 = color(0, 255, 251) // se asigna azul claro
  }
  255, 124, 0
  //fondo cuadrado 3 cambio de color
  if (dist(mouseX, mouseY, x2, y2) < 100 && dist(mouseX, mouseY, x1, y1) < 100) {
    fondoc4 = color(255, 124, 0)
  } // se asigna naranja
  else {
    fondoc4 = color(255, 0, 0) // se asigna rojo
  }

  //fondo elipse 1 cambio de color
  if (dist(mouseX, mouseY, x2, y2) < 100 && dist(mouseX, mouseY, x3, y3) < 100) {
    fondoe1 = color(255, 255, 255)
  } // se asigna blanco
  else {
    fondoe1 = color(0, 0, 0) // se asigna negro
  }

  //fondo elipse 2 cambio de color
  if (dist(mouseX, mouseY, x1, y1) < 100 && dist(mouseX, mouseY, x4, y4) < 100) {
    fondoe2 = color(255, 255, 255)
  } // se asigna blanco
  else {
    fondoe2 = color(0, 0, 0) // se asigna negro
  }


}

function movimientoCuadrados() {
  //movimiento cuadrado 1
  x1 = x1 + (vel1 * dir1);
  if (x1 > width) {
    dir1 = -1
  }
  if (x1 < 0) {
    dir1 = 1
  }

  //movimiento cuadrado 2
  x2 = x2 + (vel2 * dir2);
  if (x2 > width) {
    dir2 = -1
  }
  if (x2 < 0) {
    dir2 = 1
  }

  //movimiento cuadrado 3
  y3 = y3 + (vel3 * dir3);
  if (y3 > height) {
    dir3 = -1
  }
  if (y3 < 0) {
    dir3 = 1
  }

  //movimiento cuadrado 4
  y4 = y4 + (vel4 * dir4);
  if (y4 > height) {
    dir4 = -1
  }
  if (y4 < 0) {
    dir4 = 1
  }
}

