// const names = ['abul', 'babul', 'kamal', 'shakib', 'abul', 'gabul', 'babul', 'tabul', 'jabul', 'patla', 'kamal', 'shakib', 'abul', 'gabul', 'babul', 'tabul', 'jabul', 'patla'];
// function removeDuplicate(names) {
//     const unique = []; /*empty arrry uniuqe name gula store korbe*/

//     // for (let i = 0; i < names.length; i++) {
//     //     const element = names[i];
//     //     console.log(element);
//     // }
//     for (const element of names) {
//         console.log(element);
//         if (unique.indexOf(element) == -1) {

//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const uniqueNams = removeDuplicate(names);
// console.log(uniqueNams);


const number = [2, 3, 45, 6, 2, 2, 5, 66, 666, 7, 10, 7, 4, 3, 7, 3, 77, 66, 5, 66, 666, 7, 10, 7, 4, 3, 7, 3, 77, 66,];
function removeDuplicateNum(number) {
    const uniqueNumber = [];
    for (let element of number) {
        console.log(element);
        if (uniqueNumber.indexOf(element) == -1) {
            uniqueNumber.push(element);
        }

    }
    return uniqueNumber;
}

const uniqueNum = removeDuplicateNum(number);
console.log(uniqueNum);