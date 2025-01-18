// 1 ----------------------------------------------------------------

// var x = 10;
// function foo(){
//     console.log(x);
//     var x = 20;
// }
// foo()

// 2 ----------------------------------------------------------------
// console.log("Start")
// setTimeout(() => {
//     console.log("SetTimeout");
// }, 0);
// console.log("end")

// 3 ----------------------------------------------------------------
// for (var i = 0; i <=3;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// 4 ----------------------------------------------------------------

// foo()
// var foo = 20

// function foo(){
//     console.log("Calling foo");
// }
// foo();

// 5 ----------------------------------------------------------------

// const Counter = () => {
//     let count = 0;
//     return ()=>{
//         return ++count;
//     }
// }

// const counter1 = Counter();
// console.log(counter1());

// 6 ----------------------------------------------------------------

// setTimeout(() => {
//     console.log("SetTimeout");
// }, 0);

// Promise.resolve().then(() => console.log("Promise resolved"));
// console.log("End");

// 7 ----------------------------------------------------------------

// async function foo(){
//     return "Hello world!";
// }

// const result = foo();
// console.log(result);

// Solution
// async function lokesh(){
//     const result = await foo();
//     console.log(result);
// }
// lokesh();

// 8 ----------------------------------------------------------------

// function abc(){
//     console.log("abc");
// }

// const value = new abc();
// console.log(value);

// 9 ----------------------------------------------------------------
// let user = {
//     name: "Lokesh",
//     age: 30,
//     "user-name" : "Lokesh@7695"
// }
// // Destrcuture user-name
// const {name, age, "user-name":nameOfUser} = user;
// console.log(name, age,nameOfUser);

// 10 ----------------------------------------------------------------
// const user = {
//     name: "Lokesh",
//     age: 30,
//     address: {
//         city: "Bangalore",
//         state: "Karnataka"
//     }
// }

// const user2 = user;

// 11 ----------------------------------------------------------------

// function foo() {
//     var x = 10;
//     console.log(x);
// }
// foo();
// console.log(x);

// 12 ----------------------------------------------------------------
// console.log(typeof "5" + 3);
// console.log(typeof "5" - 3);
// console.log("2" + 3 * 4);
// console.log(typeof NaN);
// console.log(NaN === NaN);
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// 13 ----------------------------------------------------------------
console.log(a)
console.log(b)
var a = b = 5;