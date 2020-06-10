class Participant {
    constructor(blalastName, blafirstName){
        this.firstName = blafirstName
        this.lastName = blalastName
    }
    fullName() {
        return this.firstName + '-' + this.lastName
      }
}



let tim = new Participant('Breuel','Tim')
tim.tattoos = true
document.write( tim.fullName() + '<br>')

let safa = new Participant('Bouhlel', 'Safa')
document.write( safa.fullName() + '<br>')


let shirin = new Participant('Valizadeh', 'Shirin')
document.write( shirin.fullName() + '<br>')
let belal = new Participant('Sukari', 'Belal')

let parArr = [tim, safa, shirin, belal]

// parArr.forEach(blaItem => {
//     document.write( blaItem.firstName + '<br>')
// })

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
//hard way

function hardFunction(arr,chr) {
  let resultArr=[]
  arr.forEach(item =>{
    if(item.lastName.indexOf(chr)>-1 ){
      resultArr.push(item)
    }
  })
  return resultArr
}
console.log(hardFunction(parArr,'a'))





//solution with easy way
      document.write(firstNamePrinter2(parArr))
      document.write('///////////////////////////////////////////////<br>')
      function easyWay(array,chr) {
        return array.filter(item => item.lastName.indexOf(chr)!=-1)
        
      }
      // document.write(fchrprinter(parArr,'a'))
      console.log(easyWay(parArr,'a'))
      easyWay(parArr,'a').forEach(blaItem => {
        document.write(blaItem.firstName + '<br>')
      })