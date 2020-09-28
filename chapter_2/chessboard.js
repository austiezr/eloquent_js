const makeBoard = function(size = 8) {
    if (size % 2 != 0) {
        var out = ' #'.repeat(size/2) + ' ';
        var out_alt = '# '.repeat(size/2) + '#';
    }
    else {
        var out = ' #'.repeat(size/2);
        var out_alt = '# '.repeat(size/2);
    }
    for (let index = 0; index < size; index++) {
        if (index % 2 === 0) {
            console.log(out);
        }
        else {
            console.log(out_alt);
        }
    }
};

console.log(makeBoard(9));