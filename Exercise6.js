function meleeRangedGrouping (str) {
  //your code here
  var arr = []

  var hasil = ''

  //memisahkan data tanpa split
  for (let i = 0; i < str.length; i++){
      if ( str[i] === ','){
          arr.push(hasil)
          hasil = ''
      } else {
          hasil += str[i]
      }
  }
  arr.push(hasil);


  var hero= [[], []]
  var posisi = ''
  var nama = ''
  for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < arr[i].length; j++){
        if(arr[i][j-1] === '-'){
            posisi = arr[i].slice(j);
            nama = arr[i].slice(0, j-1);
        }
      }


      if(posisi === 'Ranged'){
          hero[0].push(nama);
      }else if(posisi === 'Melee'){
          hero[1].push(nama);
      }else{
          hero.splice(0,2);
      }
  }

  return hero;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []