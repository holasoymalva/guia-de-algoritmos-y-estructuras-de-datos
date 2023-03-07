function busquedaLineal(nums, value){
    let index = 0
    for (index; index < nums.length; index++) {
      let num = nums[index]
      if(num === value){
        return index;
      }
    }
    return -1;
  }
  // Inputs
  const values = [1,2,3,4,5,6,7];
  const valueToFind = 6;
  // OutPut
  const indice = busquedaLineal(values, valueToFind)
  // test
  console.log(values[indice] == valueToFind);