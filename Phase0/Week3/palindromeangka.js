function angkaPalindrome(num) {
  var stringNum = String(num);
  var hasil = "";
  for (var i = stringNum.length - 1; i >= 0; i--) {
    hasil = hasil + stringNum[i];
  }
  return hasil
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

//BULUM JADI!
