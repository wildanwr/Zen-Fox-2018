function bandingkanAngka(angka1, angka2) {
  if (angka1 < angka2) {
      return true;
  } else if (angka1 > angka2) {
      return false;
  } else {
      return "-1";
  }
}

function bandingkanAngka2(angka1, angka2) {
  var stringAngka1 = String(angka1)
  var stringAngka2 = String(angka2)

  if (stringAngka1.length > stringAngka2.length) {
    return true
  } else if (stringAngka1.length < stringAngka2.length) {
    return false
  } else {
    return -1
  }
}

// TEST CASES
console.log(bandingkanAngka2(5, 8)); // true
console.log(bandingkanAngka2(5, 3)); // false
console.log(bandingkanAngka2(4, 4)); // -1
console.log(bandingkanAngka2(3, 3)); // -1
console.log(bandingkanAngka2(17, 2)); // false
