function attack (damage) {
    // Code disini
    damage -= 2
    return damage
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    
    var damageAttack = attack(damagePerAttack)
    var result = numberOfAttacks * damageAttack
    return result

  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90