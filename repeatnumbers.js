const tempFunc = function (array) {
    let outPut = '';
    for (let i = 0; i < array[1]; i++) {
        outPut += array[0];

    }
    return outPut;
};
const repeatNumbers = function (data) {
    let finaloutPut = '';
    for (let i = 0; i < data.length; i++) {
        finaloutPut += tempFunc(data[i]);
        if (i < data.length - 1) {
            finaloutPut += ', ';
        }
    }
    return finaloutPut;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
