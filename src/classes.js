class Myclass{
     constructor(name,id){
         this.name=name;
         this.id=id;
     }

     
}
let my=new Myclass('Nyra',1001);
console.log(my.name);
console.log(my.id);


class Employee{
    empData(name,id){
        this.name=name;
        this.id=id;
    }
}
let emp=new Employee();
emp.empData('Sean',2002);
console.log(emp.name);
console.log(emp.id);