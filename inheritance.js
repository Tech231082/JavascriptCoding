class Animal{
    setData(name){
     this.name=name;
    }
    bark(){
        console.log('This dog '+this.name+' can bark');
    }

    eat(){
        console.log('This dog '+this.name+' can eat');
    }
}
class Dog extends Animal{
    run(){
        console.log('This dog named '+this.name+' can run fast');
    }
}
let dog=new Dog();
dog.setData('Chichibua');
dog.bark();
dog.eat();
dog.run();