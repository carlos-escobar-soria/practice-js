function convert(nums){
    const stringN = nums.join("");
    const numero = parseInt(stringN,2);
    return numero;
}

console.log(convert([1, 1, 1, 1]));