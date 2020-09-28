const writeTriangle = function() {
    let out = '#';
    while (out.length <= 7) {
        console.log(out);
        out += '#';
    }
};

console.log(writeTriangle())