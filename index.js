let name='MyName';
for(let i=0;i<4;i++){
    console.log("Hello Javascript!!!!!!!");
}
let age=22;
console.log(name+' '+age);
const s='3009';
console.log(s);
let ob=null;
let employee={name:"Peter",job:"HR"};
console.log(employee.name);
console.log(employee.job);
console.log(employee);
employee['name']="Beth";
console.log(employee.name);
let arr=[1,2,2,3,4,5,6,9,0];
console.log(arr.length);

function getName(name){
  return name;
}
console.log(getName('jivi'));

let sum=function add(num1,num2){
    return num1+num2;
}
console.log(sum(2,6));