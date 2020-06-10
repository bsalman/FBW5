let person = {
    // prperty string
    firstName: 'Ahmad',
    lastName : 'Osman',
    // prperty number
    birthyear: 1986,
    job: 'Trainer',
    // prperty boolean
    married: true,
    // method
    name : function(){
        return this.firstName + ' ' + this.lastName
    },
    age: function () {
        let currentDate = new Date()
        console.log(currentDate);
        
        let currentYear = currentDate.getFullYear()
        console.log(currentYear);
        
        return currentYear - this.birthyear
      },
      
      
    // prperty array
    kids: ['Omar', 'Ali'],
    // property object
    wife:{
        firstName: 'Safaa',
        lastName: 'Tahhan',
        birthyear: NaN,
        job: 'Architect',
        name : function(){
            return this.firstName + ' ' + this.lastName
        }
    },
    // property array of objects
    brothers:[{
        firstName: 'Mostafa',
        lastName: 'Othman'
    },{
        firstName: 'Shiar',
        lastName: 'Osman'
    }]
}



document.write(person.kids[0] + '<br>')
document.write(person.age() + '<br>')
document.write(person.brothers[1].lastName + '<br>')