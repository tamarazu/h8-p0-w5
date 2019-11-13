function totalDigitRekursif(angka) {
    // you can only write your code here!
    var result = 0
    if (angka.length === 0) {
        return result
    } else {
        var num = String(angka)
        result += Number(num[0])
        var sisaAngka = num.slice(1,num.length)
        return result + totalDigitRekursif(sisaAngka)        
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12s
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5