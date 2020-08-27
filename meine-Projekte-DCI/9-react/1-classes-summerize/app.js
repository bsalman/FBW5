
class Auto {
    constructor (seatsNum, maxSpeed, color) {
        this.seats = seatsNum;
        this.speed = maxSpeed;
        this.color = color;
    }
    wheals = 4;
    showDescription () {
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed}`);
      }
      static showGenerlaDescription() {
          console.log('this is Auto so it has wheels and you can drive it');
    
      }
}
//let x = 'test'
let car1 = new Auto(5, 280, 'red' );
let car2 = new Auto(8, 240, 'blue' );


car2.wheals = 6
//console.log(car2.wheals);
//car2.showDescription()
car1.showGenerlaDescription()

class User {
    constructor(fname, lname, email, adress, role){
        this.fName = fname;
        this.lName = lname;
        this.email = email; 
        this.adress = adress;
        this.role = role
    }
}

class UserRole {
    constructor(roleName, privileges) {
        this.roleName = roleName;
        this.privileges = privileges;
    }
    static getAdminRole() {
        return new UserRole('Admin', ['add teacher', 'delete teacher', 'edit teacher', 'add student', 'delete student', 'edit student' ])
    }
    static getTeacherRole() {
        return new UserRole('Teacher', ['add student', 'delete student', 'edit student' ])
    }
    static getStudentRole() {
        return new UserRole('Student', ['view course'])
    }
}

const ahmad = new User('Ahmad', 'Osman', 'ahmad@ahmad-osman.com', 'blablabla', UserRole.getTeacherRole() )
console.log(ahmad);