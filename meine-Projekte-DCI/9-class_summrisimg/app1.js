// how to use (statics )

class User {
    constructor(fname, lname, email, address, role){
        this.fName = fname;
        this.lName = lname;
        this.email = email; 
        this.address = address;
        this.role = role
    }
}
// this is will be the value of role
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
//
const ahmad = new User('Ahmad', 'Osman', 'ahmad@ahmad-osman.com', 'blablabla', UserRole.getTeacherRole() )
console.log(ahmad);