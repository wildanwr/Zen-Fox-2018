function palindrome(kata) {
  var hasil = ""
  for (var i = kata.length - 1; i >= 0; i--) {
    hasil += kata[i]
  }
  if (hasil === kata) {
    return true
  } else {
    return false
  }
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
