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

/* crtanje linije */
/* ova metoda zepocinje novu putanju */
ctx.beginPath();

/* postavlja pocetnu poziciju */
ctx.moveTo(50,50);

/* definira liniju od pocetne pozicije do zadane tocke */
ctx.lineTo(300,200);

/* Iscrtava putanju */ 
ctx.stroke();

/* Sad radimo vise povezanih crta */
ctx.beginPath();
ctx.moveTo(100,300);
ctx.lineTo(200,200);
ctx.lineTo(300,300);

/* Zatvara putanju */
ctx.closePath();

ctx.fillStyle="red";
ctx.fill();

ctx.strokeStyle="purple";
ctx.stroke();

/* Crtanje kruga */

ctx.beginPath();

/* Metoda arc sluzi za crtanje kruga */

    /* 300 je x koordinate, 200 je y koordinata, 80 polumjer, 0 početni kut, 2*Math.PI, predstavlja završni kut*/
ctx.arc(300,200,80,0,2*Math.PI);

ctx.fillStyle="purple";
ctx.fill();

ctx.strokeStyle="cyan";
ctx.stroke();

/* Polukrug */
/* Za polukrug je sintaksa identicna samo umjesto 2*Math.PI stavimo Math.Pi */

ctx.beginPath();
ctx.arc(500,300,80,0,Math.PI);
ctx.strokeStyle="Brown";
ctx.stroke();

ctx.fillStyle="darkblue";
ctx.fill();

/* Dodavanje teksta */
/* Odreduje velicinu i izgled teksta */
ctx.font = "30px Arial";
ctx.fillStyle = "lime";

/* Koristi se za ispis teksta na canvasu */
ctx.fillText("Karlo Benjak",250,250);


