let person = {
    name: "Mareks",
    age: 16,
    isStudent: true
}

let person2 = {
    name: "Mareks2",
    age: 16,
    isStudent: true
}

console.log(person.name)
console.log(person2['name'])

if(person.age >= 18){
    console.log("Pilngadīgs")
}
if(person.age < 18){
    console.log("nepilngadīgs")
}


if(person.isStudent == true){
    console.log("Ir students")
}
if(person.isStudent == false){
    console.log("Nav students")
}