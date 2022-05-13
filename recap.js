function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

let large = largestElement([33, 44, 2, 55, 3,]);
console.log(large);


function minElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

let minimum = minElement([33, 44, 2, 55, 3,]);
console.log(minimum);