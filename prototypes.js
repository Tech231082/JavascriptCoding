let Employee=function(name,id){
   this.name=name;
   this.id=id;
};
Employee.prototype.getName=function(){
    return this.name;

};
Employee.prototype.getId=function(){
    return this.id;

};
let emp=new Employee('Amber',33321);
let emp1=new Employee('Alexia',333267);
console.log(emp.getName());
console.log(emp.getId());
console.log(emp1.getName());
console.log(emp1.getId());