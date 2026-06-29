// const log = 'sdfds@sdda.da';
// const pass = 'Adgsdgsqw_2423'

// reg(log, pass);


// function reg(log, pass) {
//     let log1;
//     let pass1;

//   if (log !== 0) {
//       const atSignIndex = log.indexOf('@');
//       const pointIndex = log.indexOf('.');
      
//       if (
//         atSignIndex !== -1 &&
//         pointIndex !== -1 &&
//         log.slice(0, atSignIndex).length > 0
//         && log.slice(atSignIndex + 1, pointIndex).length > 0
//         && log.slice(pointIndex + 1, log.length).length > 0    
//     ){
//         log1 = true;
//      } else log1 = false;
// }


//   const hasNum = /[A-Z]/.test(pass)
//   const upperCase = /\d/.test(pass)
//   const isLengthCorrect = pass.length >= 8? true : false;
//   const isUnderScore = pass.includes("_");

//   if (hasNum && isLengthCorrect && upperCase && isUnderScore) {
//     pass1 = true
//   } else pass1 = false


//     console.log(log1);
//     console.log(pass1);

  
//   return log1 && pass1 ? true : false;

// }





// class User {
//   userDb = [];

//   constructor(login, password) {
//       this.login = login;
//       this.password = password;   

//   }
//   pushToUserDb(log, pass) {
//       const user = {
//         login: log,
//         password: pass
//       };
    
//       this.userDb.push(user)
//   }

//   getUserDb() {
//       return this.userDb;
//   }

// }

// const input = document.getElementById('id');

// function clicker() {
//     const login = input.value;
//     const password = 123;

//     const newUser = new User(login, password);
//      newUser.pushToUserDb(login, password);

//       console.log(newUser.getUserDb());
    

// }





// const arr = [12,9,7,15]


// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
    
//     if (element > 10) {
//         console.log(element);
        
//     }


// }




 
// const family = [
//     { 
//        name: 'sasha',
//        age:12,
//        family: ["mom", "dad", "sis", "bro"]
       
//     },
//        { 
//        name: 'sasha1',
//        age:12,
//        family:["mom", "dad", "sis"]
       
//     },
//        { 
//        name: 'sasha2',
//        age:12,
//        family:["mom", "dad", "bro"]
       
//     },
//        { 
//        name: 'sasha3',
//        age:12,
//        family:["mom", "dad", "bro"]
       
//     },
//        { 
//        name: 'sasha4',
//        age:12,
//        family:["mom", "dad", "sis", "bro"]
       
//     },
//        { 
//        name: 'sasha5',
//        age:12,
//        family:["mom", "dad", "sis", "bro"]
       
//     },
//        { 
//        name: 'sasha6',
//        age:12,
//        family:["mom", "dad", "sis", "bro"]
       
//     }

  
// ];

//     for (let i = 0; i < family.length; i++) {
//         const element = family[i];
          
//         if (element.family.length === 4 ) {
                
//               console.log(element);
              

//             }
//     }





// let num = 1000;

// for ( ; num > 0; ){
//     console.log(`${num} - 7 = ${num - 7}`);
    
//     num -= 7;

// }





// const num = [3,4,7,12,9,10];
// const chet = [];
// const neChet = [];

// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
    
//     if (element % 2 === 0) {
//         chet.push(element)
//     } else
//         neChet.push(element)    
//     }
   
//     console.log(chet);
//     console.log(neChet);





