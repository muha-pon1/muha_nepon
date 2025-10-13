// 2.4.5

// let str = " aaa bbb ccc"
// let newstr = str

// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (element == " " || !str[i-1]) {    
//         newstr = str.replace(str[i+1], str[i+1].toUpperCase())
//         str = newstr
//         console.log(newstr)
//     }
// }
// console.log(newstr)

// 2.5.1

// let str = '023m0dfg0'
// let array = []

// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (element == 0) {
//         console.log(element, i)
//         array.push(i)


//     }
// }
// console.log(array)

// 2.5.2

// let str = 'abcdefg'
// let newstr = ''
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (i==2 || i==5) {
//         continue
//     }
//      newstr +=element
// }
// console.log(newstr)

// 2.5.3

// const arr = [1,2,3,4,5,6,7,8,9,10]
// let sumeven = 0
// let sumodd = 0



// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (i%2==0) {
//         console.log(element)
//         sumeven += element

// }else{
//     sumodd += element
// }


// }
// console.log(sumeven/sumodd)

// 2.6.1

// let str = "a1a2a3a4a5"
// const arr = []

// for (let i = 0; i <  str.length; i++) {
//     const element = str[i];
//     if (Number(element) ) {
//         console.log(element, i)
//         arr.push(i)
//     }
// }
// console.log(arr)

// 2.6.2

const arr = ["123", "456", "789"]
const arr1 = []
let anew = ''
for (let i = 0; i < 3; i++) {
    for (let j = arr[i].length-1; j >= 0; j--) {
        const element = arr[i][j];
        console.log(element)
        anew += element
    }

arr1[i] = (anew)
anew = ''   
}
console.log(arr1)

