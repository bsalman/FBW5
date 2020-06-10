let tim = {
    firstName: 'Tim',
    lastName: 'Breuel',
    fullName: function() {
        return this.firstName + '-' + this.lastName
    },
    tattoos: true
}

let safa = {
    firstName : 'Safa',
    lastName: 'Bouhlel',
    fullName: function() {
        return this.firstName + '-' + this.lastName
    },
    hijab: true
}

let shirin = {
    firstName : 'Shirin',
    lastName: 'Valizadeh',
    fullName: function() {
        return this.firstName + '-' + this.lastName
    },
    nice_hair: true
}
let belal = {
    firstName: 'Belal',
    lastName: 'Sukari',
    fullName: function(){
        return this.firstName + '-' + this.lastName
    },
    hair: false
}
document.write(tim.fullName() + '<br>')
document.write(safa.fullName() + '<br>')
document.write(shirin.fullName() + '<br>')

let parArr = [tim, safa, shirin, belal]
// function to print first name of each element inside parArr
// first solution 'direct print'
function firstNamePrinter1(arr) {
    arr.forEach(item => {
         document.write(item.firstName + ' '+item.tattoos + '<br>')
    })
  }

  firstNamePrinter1(parArr)

  // second solution 'return a storage'
  function firstNamePrinter2(arr) {
      let storage = ''
        arr.forEach(item => {
             storage += item.firstName + '<br>'
        })
        return storage
      }

      document.write(firstNamePrinter2(parArr))