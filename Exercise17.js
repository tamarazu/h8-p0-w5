function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var num = String(angka)
    if (num.length > 1) {
        var result = 1
        for (var i = 0; i < num.length; i++) {
            result *= Number(num[i])
        }        
        return kaliTerusRekursif(result)
    }
    else {
        return num
    }

  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6