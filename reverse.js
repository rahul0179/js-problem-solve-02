const greeting = 'hello,how r u ?';
function reverseString(text) {
    let reverse = '';
    for (const latter of text) {
        console.log(latter);
        reverse = latter + reverse;

    }
    return reverse;
}
let reversingLatter = reverseString(greeting);
console.log(reversingLatter); 
