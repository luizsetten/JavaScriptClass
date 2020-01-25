function divisivel (num) {
    if(!Number.isNaN(num)){
        if(num%3 === 0 && num%5 === 0) {
            return 'FizzBuzz';
        } else if(num%3 === 0) {
            return 'Fizz';
        } else if (num%5 === 0) {
            return  'Buzz';
        } else {
            return 'Número';
        }

    } else {
        return 'Não é um número';
    }
}
for(let i=0; i<=100; i++)
    console.log(divisivel(i));

function fizzBuzz (num) {
    if(typeof num !== 'number') return NaN;
    if(num%3 === 0 && num%5 ===0) return 'FizzBuzz';
    if(num%3 === 0 ) return 'Fizz';
    if(num%5 ===0) return 'Buzz';
    return num;

}

for(let i2=0; i2<=100; i2++)
    console.log(fizzBuzz(i2));