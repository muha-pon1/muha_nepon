const user = {
    name: "Muha",
    score: 6,
    age: 5
}
localStorage.setItem("user2", JSON.stringify(user))

const keys = Object.keys(user)
console.log(keys)
console.log(window.localStorage)
const localkeys = Object.keys(window.localStorage)
console.log(localkeys)

for (let i = 0; i < localkeys.length; i++) {
    const element = localkeys[i];
    const MyStorage = localStorage.getItem(element)
    const obj = JSON.parse(MyStorage)
    console.log(obj)
}