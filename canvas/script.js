/* const stvara spremmnik podataka; canvas je ime naše konstante; document.getel... je metoda pomoću
koje pristupamo elementu iz html dokumenta */

const canvas = document.getElementById("platno");

/* 2D OZNACAVA DVODIMENZIONALNO CRTANJE */
const ctx = canvas.getContext("2d");


/* nije metoda jer nema (); svojstvo koje mjenja ispunu oblika */
ctx.fillStyle = "pink";


/* mjenja obrub oblika */
ctx.strokeStyle = "purple";

/* postavlja debljinu obruba */
ctx.lineWidth = 5;

/* Ova metoda kreira pravokutnik ali bez ispune */
ctx.strokeRect(50,60,50,50);


/* metoda koja kreira crni pravokutniik; 50 je X, 60 je Y, 200 je širina, 150 je visina*/
ctx.fillRect(50,60,50,50);
ctx.fillRect(200,100,50,50);

ctx.fillStyle ="red";
ctx.fillRect(300,150,50,50);
