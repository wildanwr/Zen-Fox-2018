//1.
var rows1 = 5;
while (rows1 > 0) {
  console.log("*");
  rows1 = rows1 - 1;
}



console.log("\n");



//2.
var rows2 = 5;
var counter = 0

while (rows2 > counter) {
  var kolom = "";
  var counterkolom = 0;
  while (counterkolom <= rows2) {
    kolom = kolom + "*";
    counterkolom = counterkolom + 1;
  }
  counter = counter + 1;
  console.log(kolom);
}



console.log("\n");



//3.
var rows3 = 5;
var counter = 0;
while (counter < rows3) {
  var temp = "";
  var counterDalam = 0;
  while (counterDalam <= counter) {
    temp = temp + "*";
    counterDalam = counterDalam + 1;
  }
  console.log(temp);
  counter = counter + 1;
}
