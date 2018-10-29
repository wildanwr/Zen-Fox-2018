var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]


function dataHandling2(arr) {
  arr.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
  console.log(arr);
  var date = arr[3].split("/")
  var bulan = arr[3].split("/")[1]
  switch (bulan) {
    case "01":
      bulan = 'Januari';
      break;
    case "02":
      bulan = 'Februari';
      break;
    case "03":
      bulan = 'Maret';
      break;
    case "04":
      bulan = 'April';
      break;
    case "05":
      bulan = 'Mei';
      break;
    case "06":
      bulan = 'Juni';
      break;
    case "07":
      bulan = 'Juli';
      break;
    case "08":
      bulan = 'Agustus';
      break;
    case "09":
      bulan = 'September';
      break;
    case "10":
      bulan = 'Oktober';
      break;
    case "11":
      bulan = 'November';
      break;
    case "12":
      bulan = 'Desember';
      break;
  }
  console.log(bulan);
  console.log(date.sort(function(value1, value2) {
    return value2 - value1
  }));
  console.log(date.sort(function(value1, value2) {
    return value1 - value2
  }).join("/"));
  var nama = arr[1]
  console.log(nama.slice(0, 14));
}
console.log(dataHandling2(input));

//BULUM JADI!
