const minimum = function(a, b) {
    switch (true) {
        case a < b:
            return a;
        case b < a:
            return b;
        case a === b:
            console.log('Numbers are equal');
            break;        
        default:
            console.error('Input Error');
            break;
    }
};

console.log(minimum(-10, 1));
console.log(minimum(1, 10));
console.log(minimum(10, 10));
console.log(minimum('f', 4));

// a < b ? a : b