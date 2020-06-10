let teacher = {}

teacher.name = 'Ahmad'
teacher.lastName = 'Osman'


teacher.fullName = function(){
    return this.name + ' ' + this.lastName
}

let participant = {...teacher}
participant.name = 'Chumky'
participant.lastName = 'Paul'
console.log(participant);

document.write(teacher.fullName() + '<br>')
document.write(participant.fullName() + '<br>')
