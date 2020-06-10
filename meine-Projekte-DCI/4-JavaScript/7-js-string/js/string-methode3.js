let str ="hello World"
console.log(str.slice(-11,-6))
// substring like slice but it don't tack negative valuse
console.log(str.substring(0,5))
console.log(str.substr(5,3))
//replace only first found result
console.log(str.replace('o','a'))
str2 = "I love life , I love programming"
console.log(str2.replace(/love/g,'hate'))

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(
    str.concat("", str2)
)
let str3 = " basharQ@bashar-salman.com "
console.log (str3.trim())
console.log(str3.charAt(2))
console.log(str3.charCodeAt(2))
