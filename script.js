let fruits= ["Apple","Banana","Orange","Mango"]
console.log(fruits[0])
fruits.push("Grapes")
console.log(fruits)
fruits.pop()
fruits.splice(1,1)
console.log(fruits)
let person= {
    firstName:"Sudem",
    lastName:"Sezgin",
    age:20,
    hobbies:["Reading","Traveling"],
    address:{
        street:"123 Main St.",
        city:"İstanbul",
        country:"Türkiye"
    }
}
console.log(person)
console.log(person.firstName)
console.log(person.address.city)
person.age=21;
person.hobbies.push("Cooking")
console.log(person)

for(let i=0;i<5;i++) {
    console.log(i);
}

for(let i=0; i<fruits.length;i++) {
    console.log(fruits[i])
}
for(let key in person) {
    console.log(key+":"+person[key])
}
let x=10;
if(x>5) {console.log("Hello")}
else {console.log("Bye")}

let temperature=25;
if(temperature>20) {console.log("Sicak bir gün.")}

let hour=18;
if(hour<12) {
    console.log("Good Morning!");
}
else{
    console.log("Good Afternoon!")
}
let age=25;
if(age>=18) {
    if (age<21) {console.log ("Yetişkinsin ama içemezsin.");
    } else {console.log ("Yetişkinsin içebilirsin.");
    }
}
else{
    console.log("You are a minor.")
}
