let day='Tuesday';
switch(day){
    case 1: console.log('Welcome to case  Sunday');
    break;

    case 2: console.log('Welcome to case 2 Monday');
    break;

    case 3: console.log('Welcome to case 3 Tuesday');
    break;

    case 4: console.log('Welcome to case Wednesday');
    break;

    case 5: console.log('Welcome to case Thursday');
    break;

    default : console.log('Welcome to case default Friday');
    
}


console.log('@@@@@@@@@@@@@ loop@@@@@@@@@@@@');
let sum=0;
for(let i=1;i<=5;i++){
   
    console.log(sum=sum+i);
}

let col=['blue','green','yellow','red'];
for(c in col){
    console.log(col[c]);
}
for(c of col){
console.log(c);
}

console.log('!!!!!!!!do while!!!!!!!');

let count=0;
while(count<4){
    console.log(count);
    count++;
}

do{
    count++;
}while(count<8){
    console.log(count);
}