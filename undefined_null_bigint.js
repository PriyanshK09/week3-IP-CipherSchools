// if you don't assign any value to a variable then the type of that variable is gonna be undefined
// you can do this with let and var but not with const because you HAVE to give a value to const variable otherwise it is going to generate an error

let name1

// null it's like we are intentionally creating an object which is absent and when you check the type of null it will show you an
// 'object' but remember this isn't correct actually this is a bug which will not be fixed because millions of people have wrote the code where null was an object but if this bug is fixed then everyone has to change their code null and object are completely DIFFERENT
let twitter = null
console.log(typeof firstName)

// BigInt
let num = 9007199254740992
console.log(num)    
num = 9007199254740992n
console.log(num)    
// you cannot perform arithmetic operations between bigint and number
console.log(typeof num)
num = 9007199254740990

    