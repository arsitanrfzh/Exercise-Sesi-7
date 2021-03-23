// soal no.1
// membuat array
let teamIT = ['Front-End', 'Developer', 'Back-End', 'UX Designer', 'Database Administrator'];

document.write("<h3>5 Pekerjaan di Bidang IT:</h3>");
document.write("<ol>");
// menggunakan perulangan untuk mencetak semua isi array
for(let i = 0; i < teamIT.length; i++){
    document.write(`<li>${ teamIT[i] }</li>`);
}
document.write("</ol>");

// soal no.2
const namaTim = [
    'Arsita - Leader',
    'Fajrin - Anggota',
    'Luthfi - Leader',
    'Alvito - Anggota',
  ];
  
  // const timPertama = namaTim.slice(0, 2);
  // const timKedua = namaTim.splice(2);
  
  // console.log(`${timPertama[0]}, ${timPertama[1]}`);
  // console.log(`${timKedua[0]}, ${timKedua[1]}`);
  
  namaTim.forEach((data) => {
    document.write(data);
  })

// 3
let number = [3,5,7,9,11]
number.map(function(number) {
    return number * 5;
});

//4
const arrayPertama = [
    'Math',
    'English',
    'Programming' // nilai yang sama
  ];
  
  const arrayKedua = [
    'Geography',
    'Spanish',
    'Programming' // nilai yang sama
  ];
  
  function cekNilaiYangSamaDariDuaArray(array1, array2) {
    // array1.forEach atau array1.map
    array1.forEach((nilaiDalamArray1, posisiNilaiDalamArray1) => {
      console.log(`Nilai ${nilaiDalamArray1} ada di posisi ${posisiNilaiDalamArray1}`);
  
      const nilaiDalamArray2 = array2[posisiNilaiDalamArray1];
      console.log(`nilai dalam array kedua ${nilaiDalamArray2}`);
  
      if (nilaiDalamArray1 === nilaiDalamArray2) {
        console.log(true);
      } else {
        console.log(false);
      }
    });
  };
  
  cekNilaiYangSamaDariDuaArray(arrayPertama, arrayKedua);
