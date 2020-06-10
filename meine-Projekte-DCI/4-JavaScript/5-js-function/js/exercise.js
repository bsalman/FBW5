function operation (op ,num1,num2)
{
    
    if (op == '+')
    {return (num1+num2)}

     else { 
        if (op == '-')
        {return (num1-num2)}
            else {
                if (op == '*')
        {return (num1*num2)}
            else{
                if (op =='/')
                {return(num1/num2)}
            }
            }
    }
    
}

let finelResult = operation ("*",6,3)
console.log (finelResult)
console.log("/////////////////////////////////////////////////////////")
 let oddnum = function(num){
     if(num%2!=0){
         return(num)
     }
 };
 console.log (oddnum (7))
