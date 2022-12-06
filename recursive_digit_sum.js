
function superDigit(n, k) {
  // Write your code here
    let arr = n.split('').map(Number);
    let sum = 0;
    for(let i = 0;i < arr.length; i++){
        sum += arr[i];
    }
    let sup = sum *k;


    let super_digit = (n)=>{
        if(n < 10) return n;
        let digit = 0;
        while(n){
            digit += n %10;
            n = parseInt(n / 10);
        }
        return super_digit(digit);
    }
    
    let res = super_digit(sup);
    return res
}

console.log(superDigit("9875",4));