const fizzBuzz = function() {
    for (let current = 1; current <= 100; current++) {
        switch (true) {
            case current % 3 === 0 && current % 5 != 0:
                console.log('Fizz');
                break;
            case current % 5 === 0 && current % 3 != 0:
                console.log('Buzz');
                break;
            case current % 3 === 0 && current % 5 === 0:
                console.log('FizzBuzz');
                break;
            default:
                console.log(current);
                break;
        }
    }
};

console.log(fizzBuzz())