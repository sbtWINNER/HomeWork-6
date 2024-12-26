class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    print() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}`);
    }
}


class User extends Person {
    constructor(name, surname, password) {
        super(name, surname);
        this._password = password; 
    }

 print(password) {
 if (password === this._password) {
  super.print();
 } else {
      console.log("ведите пороль");


        }
    }
}




const boy = new User('artur', 'valiev', '2007');
console.log(boy);
boy.print('2008')
