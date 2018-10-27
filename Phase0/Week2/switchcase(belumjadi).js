var tanggal = 1;
var bulan = 5;
var tahun = 1945;


switch(true) {
  case (tanggal > 0 && tanggal <= 31): tanggal; break;
  default: console.log('Masukkan tanggal dengan benar!')
}

switch(bulan) {
  case 1: 'Januari'; break;
  case 2: 'Februari'; break;
  case 3: 'Maret'; break;
  case 4: 'April'; break;
  case 5: 'Mei'; break;
  case 6: 'Juni'; break;
  case 7: 'Juli'; break;
  case 8: 'Agustus'; break;
  case 9: 'September'; break;
  case 10: 'Oktober'; break;
  case 11: 'November'; break;
  case 12: 'Desember'; break;
  default: console.log('Masukkan bulan dengan benar!')
}

switch(true) {
  case (tahun >= 1900 && tahun <= 2200): tahun; break;
  default: console.log('Masukkan tahun dengan benar!')
}

console.log(tanggal + " " + bulan + " " + tahun);
