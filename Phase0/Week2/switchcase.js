var tanggal = 1;
var bulan = 5;
var tahun = 1945;


switch(true) {
  case (tanggal > 0 && tanggal <= 31): tanggal; break;
  default: console.log('Masukkan tanggal dengan benar!');
}

switch(bulan) {
  case 1: bulan = 'Januari'; break;
  case 2: bulan = 'Februari'; break;
  case 3: bulan = 'Maret'; break;
  case 4: bulan = 'April'; break;
  case 5: bulan = 'Mei'; break;
  case 6: bulan = 'Juni'; break;
  case 7: bulan = 'Juli'; break;
  case 8: bulan = 'Agustus'; break;
  case 9: bulan = 'September'; break;
  case 10: bulan = 'Oktober'; break;
  case 11: bulan = 'November'; break;
  case 12: bulan = 'Desember'; break;
  default: console.log('Masukkan bulan dengan benar!');
}

switch(true) {
  case (tahun >= 1900 && tahun <= 2200): tahun; break;
  default: console.log('Masukkan tahun dengan benar!');
}

console.log(tanggal + " " + bulan + " " + tahun);
