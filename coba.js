function changeWords (str) {
    //code di sini
    var huruf = 'aiueo'
    var hupper = huruf.toUpperCase()
    console.log(hupper)
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

  console.log(changeWords('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   'VPNVGBRdJFGRFs'
// fshfjsbhvopw