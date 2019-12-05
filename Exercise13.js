function sorting(arrNumber) {
    // code di sini
    status = false
    while(!status) {
        status = true
        for(var i = 1; i < arrNumber.length; i++) {
            if(arrNumber[i] < arrNumber[i-1]) {
                status = false
                var tmp = arrNumber[i-1] 
                arrNumber[i-1] = arrNumber[i]
                arrNumber[i] = tmp
            }
        }
    }
    return arrNumber

  }
  
  function getTotal(arrNumber) {
    // code di sini
    var data = []
    var num = 0
    var obj = {}
    for(var i = 0; i < arrNumber.length; i++) {
        if (data.length === 0) {
            data.push([arrNumber[i]])
        } else if (data[num][0] === arrNumber[i]) {
            data[num].push(arrNumber[i])
        } else {
            data.push([arrNumber[i]])
            num++
        }
    }
    if (arrNumber.length === 0) {
        return (' ')
    }
    var lastNum = data[data.length-1][0]
    var frequent = data[data.length-1].length
    return (`angka paling besar adalah ${lastNum} dan jumlah kemunculan sebanyak ${frequent} kali`)
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }

  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//   //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  

  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''

