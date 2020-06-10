let str = "hello world"
console.log(str.search("world"))

// console.log(str.slice(6,11));
// console.log("/////////////////////////////////////////////");


let findIndex = (text) => {
    return text.search(" ")+1


}
console.log(findIndex ("hello world"));
// console.log("////////////////////////////////////////////////////////")


let findIndex2 = (text) => {

  return text.indexOf((" "),text.search(" ")+1)+1


}


 console.log(findIndex2("my name ist bashar"));


let getSecondWorld = (text) => {
    return text.slice(findIndex(text),findIndex2(text)-1)
}
console.log(getSecondWorld("my name ist bashar"))