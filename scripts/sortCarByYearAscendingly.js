function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // 1. membuat looping pertama untuk mengatur seluruh proses sorting 
  for(let i=0; i < result.length; i++) {
    // 2. looping kedua yang digunakan untuk check 1 1 data dalam array
      for(let j = 0; j < result.length-i-1; j++) {
        // 3. membuat variabel untuk menyimpan nilai berdasarkan year dari elemen yang akan dibandingkan
        let x = result[j].year 
        let y = result[j+1].year
          // 4. pemeriksaan kondisi, jika kondisi terpenuhi maka pertukaran akan dilakukan
          if (x > y) {
            // 5. membuat variabel sementara untuk menyimpan elemen pertama
            let temp = result[j];
            // 6. mengganti elemen pertama dengan elemen kedua
              result[j] = result[j+1];
              // 7. mengganti elemen kedua dengan elemen pertama
              // yang sebelumnya disimpan pada variabel sementara
              result[j+1] = temp;
          }
      }
  }
  // 8. mencetak data yang sudah terurut
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].year);
  }
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}



