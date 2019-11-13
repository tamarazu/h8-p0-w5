function changeVocals (str) {
    //code di sini
    var huruf = 'aiueo'
    var hupper = huruf.toUpperCase()
    var change = 'bjvfp'
    var cupper = change.toUpperCase()
    var word = ''
    for ( var i = 0; i < str.length; i++) {
        var tmp = str[i]
        for (var j = 0; j < huruf.length; j++) {
            if (hupper[j] === tmp) {
                tmp = cupper[j]
            } else if (huruf[j] === tmp) {
                tmp = change[j]                
            } 
        }
        word += tmp
    }
    return word 
  }
  
  function reverseWord (str) {
    //code di sini
    var word = ''
    for (var i = str.length - 1; i >= 0; i--) {
        word += str[i]
    }
    return word
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var upper = str.toUpperCase()
    var lower = str.toLowerCase() 
    var word = ''
    for ( var i = 0; i < str.length; i++) {
        if(str[i] === upper[i]) {
            word += lower[i]
        } else if (str[i] === lower[i])  {
            word += upper[i]
        }
    }
    return word
  }
  
  function removeSpaces (str) {
    //code di sini
    var noSpace = ''
    for ( var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            delete str[i]
        } else {
            noSpace += str[i]
        }
    }
    return noSpace
  }
  
  function passwordGenerator (name) {
    //code di sini
    var change = changeVocals (name)
    var reverse = reverseWord (change)
    var upLow = setLowerUpperCase (reverse)
    var direct = removeSpaces (upLow)
    return direct
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'