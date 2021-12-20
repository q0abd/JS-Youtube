// Data types!

// Data types = 7 xil data turlari mavjud

// Number , string , undefined , null ,
// boolean , object , array

// 1 Number - sonlar ...
let num = 10;
let num2 = 2;
let result = (num + num2) * 2;
// console.log(result);

// 2 String - / '' / "" / `` /
let name = `Abdulloh`;
let surname = "Kiyomov";
// let output = `Salom , mening ismim ${name} , familiyam esa ${surname}`
// console.log(output);

// 3 Boolean - true , false
let isStudent = false;
if (isStudent === true) {
  // console.log('Ha u student');
} else {
  // console.log('Yoq, u student emas');
}

// 4 Undefined - kiritilmagan qiymat, topilmagan qiymat
let age;
// console.log(age);

// 5 Null - hech narsa , yoq qiymat
let money = null;
// console.log(money);

// 6 Object - { key:value }
const student = {
  name: "Abdulloh",
  surname: "Kiyomov",
  age: 18,
  status: "Developer",
};
// console.log(student);

// 7 Array - [true,12,'asda',undefined,null,{},[]]
var ombor = [
  true,
  12,
  "asda",
  undefined,
  null,
  { name: "Abdulloh", surname: "Kiyomov", age: 18, status: "Developer" },
  [],
];
 console.log(ombor[5].name);