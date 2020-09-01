class User {
    #privatePassword
    constructor(fname, lname, email, password){
        this.email = email;
        this.fName = fname;
        this.#privatePassword = password;
        this.lName = lname;
    }

    set password(value){
        console.log('you can not change the password from her, you need to use /changePassword/ method');
    }
    get password(){
        return this.#privatePassword
    }

    fullName(){
        return this.fName + ' ' + this.lName;
    }

    changePassword(newPassword){
        this.#privatePassword = newPassword
    }
    static description(){
        return 'I am a static method'
    }
    
}

 let someUser = new User('Tim', 'Breuel', 'tim@breuel.com', '12345678');
 let someUser1 = new User('Safa', 'Bohlel', 'safa@bohlel.com', '14785296');

// add new method to the class User which gonna reflect on all
// objects that have been created from this class
 User.prototype.checkUser = function (email, password) {
     if(email === this.email && password === this.password){
         return true
     } else {
         return false
     }
   }

   //override fullName method from class User and also it will reflect on all
   // object that have been created from this class

   User.prototype.fullName = function () {
    return 'I am ' + this.fName + ' ' + this.lName;
     }




 // static object
// let someUser = {
//     email: 'tim@breuel.com',
//     fName: 'Tim',
//     lName: 'Breuel',
//     password: '12345678',
//     fullName: function() {
//         return this.fName + ' ' + this.lName;
//     }
// }

//console.log(someUser.fullName());

class Employee extends User{
    constructor(lname, fname, email, password, officeNum, department){
        // we must call the constructure of the parent class using super
        super(fname, lname, email, password)
        this.officeNum = officeNum
        this.department = department
    }
    showDetails(){
        return `I am an employee and my name is ${this.fName}, I am working in ${this.department}`
    }
    static employeeDescription(){
        return 'this a static method on Employee class'
    }
}

const someEmployee = new Employee('Osman', 'Ahmad', 'ahmad@osman.com', '12345698', 'fbw5', 'web-dev');
console.log(someEmployee.fullName());
console.log(someEmployee.showDetails());

// prototype User to add a new method called chanePassword
// which will take one parameter 'newPassword' and it should change the password property for the user

// User.prototype.changePassword = function(newPassword){
//     this.#privatePassword = newPassword
// }
someEmployee.password = 'qwerasdf'
someEmployee.changePassword('qwerasdf')

console.log(Employee.employeeDescription());

let user1 = new User('user1', 'luser1', 'eee@dd.cc', '123456')
let user2 = new User('user1', 'luser1', 'eee@dd.cc', '123456')

let user3 = {...user1}
user1.lName = 'bla'
console.log(user3.lName);
if (user1 === user3){
    console.log('equal');
} else{
    console.log('not equal');
}



