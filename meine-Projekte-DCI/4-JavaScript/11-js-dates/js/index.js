let x = new Date()
document.write(typeof(x) +'<br>')
document.write(x+'<br>')
console.log(x.getDay());




let y = new Date(1984,5,4)
document.write(y+'<br>')


document.write(y.getFullYear()+'<br>')//year
document.write(y.getMonth()+'<br>')//month from 0-11
document.write(y.getDate()+'<br>') //dayfrom 1-31
document.write(y.getDay()+'<br>')// from 1-7
document.write(Date.now()+'<br>')// 



let date =new Date('06.04.1984')
document.write(date +'<br>')

let date2 =new Date('02.17.2020')
document.write(date2 +'<br>')

document.write((date2-date)/1000/60/60/24/365 +'<br>');

document.write('///////////////////////////////////////////////////<br>')


let date3 =new Date(1983,5,4,12,00)
document.write(date3 +'<br>')

let date4 =new Date(2020,1,17,13,45)
document.write(date4 +'<br>')

document.write((date4-date3)/1000/60 +'<br>')