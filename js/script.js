// 2.4.1

// let str = "asdasd123asdasd"

// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     console.log(element)
//     if (isNaN(element == false)) {
//         console.log("12 tango u lifestilera", i)
    
//     }
// }

// 2.4.2

// const obj = {
//     qwe: 123,
//     qwe1: 234,
//     qwe3: 345,
//     qwe4: 456
// }

// let arr1 = Object.keys(obj)
// console.log(arr1)
// let arr2 = Object.values(obj)
// console.log(arr2)

// 2.4.3

// let num = 1234567890
// let count = 0

// num = String(num)

// for (let i = 0; i < num.length; i++) {
//     const element = num[i];

//  if ( element % 2 == 0 ) {
//    count+= 1
       
       
//    }
    
//  }
//    console.log(count)

// 2.4.4

let str = "abcde"
let newStr = ""
for (let i = 0; i < str.length; i=i+2) {
    const element = str[i];
    newStr = str.replace(element, element.toUpperCase())   
    str = newStr 
    console.log(newStr)
    // console.log(element.toUpperCase())
    
}






