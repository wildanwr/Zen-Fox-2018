
function balikString(arr) {
  var hasil = "";
  for (var i = arr[0].length - 1; i >= 0; i--) {
    hasil = hasil + arr[0][i];
  }
  return hasil;
}

//test cases
console.log(balikString(['Hello World!']));
