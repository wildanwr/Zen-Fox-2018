// 1. Melakukan Looping Menggunakan While
console.log("LOOPING PERTAMA");
var counterPertama = 0;
while (counterPertama < 20) {
  counterPertama = counterPertama + 2;
  console.log(counterPertama + " - I love coding");
}


console.log("LOOPING KEDUA");
var counterKedua = 20;
var angkaPengurang = 2;
while (counterKedua >= 2) {
  console.log(counterKedua + " - I will become fullstack developer");
  counterKedua = counterKedua - angkaPengurang;
}


console.log("\n");


// 2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for(var i = 1; i <= 20; i++) {
  console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
for(var j = 20; j > 0; j--) {
  console.log(j + " - I will become fullstack developer");
}


console.log("\n");


// 3. Angka Ganjil dan Genap
for(var counterGG = 1; counterGG <= 100; counterGG++) {
  if (counterGG % 2 === 0) {
    console.log("GENAP");
  } else {
    console.log("GANJIL");
  }
}


console.log("\n");


for (var counterpenambahan2 = 1; counterpenambahan2 <= 100; counterpenambahan2 = counterpenambahan2 + 2) {
  if (counterpenambahan2 % 3 === 0) {
    console.log(counterpenambahan2 + " kelipatan 3");
  } else {
    console.log("");
  }
}

for (var counterpenambahan5 = 1; counterpenambahan5 <= 100; counterpenambahan5 = counterpenambahan5 + 5) {
  if (counterpenambahan5 % 6 === 0) {
    console.log(counterpenambahan5+ " kelipatan 6");
  } else {
    console.log("");
  }
}

for (var counterpenambahan9 = 1; counterpenambahan9 <= 100; counterpenambahan9 = counterpenambahan9 + 9) {
  if (counterpenambahan9 % 10 === 0) {
    console.log(counterpenambahan9 + " kelipatan 10");
  } else {
    console.log("");
  }
}
