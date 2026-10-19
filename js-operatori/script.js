// Operator je znak ili skup znakova kojim se izovdi određena operacija nad jednom ili više vrijednosti. //

// Izraz je kombinacija vrijednosti, varijabli i operatora koja se izvršavanjem svodi na određenu vrijednost. //

// U JS razlikujemo ARITMETICKE, RELACIJSKE I LOGICKE operatore. //

// Aritmeticki operatori koriste se za izvođenje matematickih operacija nad brojcanim vrijednostima //

let x = 10;
let y = 3;

console.log(x+y); // zbrajanje //

console.log(x-y); // oduzimanje //

console.log(x*y); // množenje //

console.log(x/y); // dijeljenje //

console.log(x%y); // modul (ostatak pri dijeljenju) //

console.log(x**y); // potenciranje //

console.log(5+3*2); // 11
console.log((5+3)*2); // 16

// Relacijski operatori koriste se za usporedivanje dviju vrijednosti - rezultat true (1) ili false (0) //

let prvi = 10;
let drugi = 5;

console.log(prvi>drugi); // true //
console.log(prvi<drugi); // false //

console.log(prvi>=drugi); // true //
console.log(prvi<=drugi); // false //

console.log(prvi==drugi); // false //

console.log(prvi===drugi); // STROGO JEDNAKO //

console.log(prvi!=drugi); // true //

// Logicki operatori koriste se za povezivanje ili negiranje logickih uvjeta //

let dob = 18;
let vozacka = true;

console.log(dob >= 18 && vozacka); // logicko I -> true * true = true //

let osobna = false;
let putovnica = true;

console.log(osobna || putovnica); // logicko ili -> true //

let prijava = false;
console.log(!prijava); // logicko NE -> true //