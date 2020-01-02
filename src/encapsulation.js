class Employee{
    setData(firstname,lastname,id,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.id=id;
        this.age=age;


    }

    getFirstname(){
        return this.firstname;
    }
    getlastname(){
        return this.lastname;
    }
    getId(){
        return this.id;
    }
    getAge(){
        return this.age;
    }
}

let emp=new Employee();
emp.setData('John','Deere',1900,34);
console.log(emp.firstname);
console.log(emp.lastname);
console.log(emp.id);
console.log(emp.age);