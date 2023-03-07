function busquedaLineal(nums, value){
    let counter;
    nums.forEach(num => {
      counter += 1;
      if(num === value){
        return nums[counter];
      }
    });
    return -1;
  }
  // Inputs
  const values = [1,2,3,4,5,6,7];
  const valueToFind = 8;
  
  console.log(busquedaLineal(values, valueToFind));