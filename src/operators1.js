let x=10
let y='string';
let z=true;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

console.log(y instanceof String);
y=new String();
console.log(y instanceof String);

console.log(typeof 12345);
console.log(typeof "My");
console.log(typeof false);
console.log(typeof NaN);
console.log(typeof {name:'y'});
console.log(typeof [1,2,3]);
console.log(typeof 23.23);

console.log('bitwise');
let s=3,s1=2;

console.log(s & s1);
console.log(s | s1);
console.log(~ s1);
console.log(s ^ s1);
console.log(2<<1);//left shift
console.log(3<<1);//right shift
