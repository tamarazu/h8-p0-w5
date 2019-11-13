function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var ambil = 0
    
    // var status = true
    // while (waktu > 0) {
    //     // status = true        
    //     ambil += 1 
    //     waktu -= 15
    //     console.log(waktu)
    //     if (waktu >= 0 && waktu < 15) {
    //         ambil += 1
    //         status = false
    //     }        
    // }

    if ( waktu <= 0) {
        return ambil
    } else {
        ambil += 1
        waktu -= 15
        return ambil + makanTerusRekursif(waktu)
    }

  }
  
  // TEST CASES

  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0