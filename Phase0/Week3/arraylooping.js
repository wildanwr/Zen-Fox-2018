var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(arr) {
  for (var i = 0; i < arr.length; i++) {
    var hasil = 'Nomor ID: ' + arr[i][0] + '\n';
    var nama = 'Nama Lengkap: ' + arr[i][1] + '\n';
    var ttl = 'TTL: ' + arr[i][2] + ' ' + arr[i][3] + '\n';
    var hobi = 'Hobi: ' + arr[i][4] + '\n';
    var dataJadi = hasil + nama + ttl + hobi;
    console.log(dataJadi);
  }
}


console.log(dataHandling(input));

//BULUM JADI!
