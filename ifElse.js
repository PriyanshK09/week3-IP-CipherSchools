let age = 16
if (age>=18){
    console.log("you can play GTA")

}
else{
    console.log("elli thokkudubilla aadukomma ")
}
// ternary operator
let age = 5
let canDrink = (age>=21) ? "Alcohol":"Milk" // condition ? value1:value2
console.log(canDrink)

let age = 17
let name = "Harsha"
// and
if (name[0] == "H" && age>=18){
    console.log("Major")
}
else{
    console.log("Minor")
}
//or
if (name[0] == "H" || age>=18){
    console.log("Major")
}
else{
    console.log("Minor")
}