window.onload =function(){
    // my data shuold by shown inthe table 
    let myData ={
        "headings":['product Name','product price','quantity','total'],
        "data":[
            
           
         
           
        ]
    };
console.log("ff");


    let myTable = document.querySelector('#myTable')
    let mydataTable =new DataTable(myTable, {data:myData,
        nextPrev: false,searchable: true,
    });

 let addRow = document.querySelector('#addRowbtn')
    let productNameInput =document.querySelector('#productNameInput')
    let productPriceInput =document.querySelector('#productPriceInput')
    let quantity=document.querySelector('#quantity')
    
   

    
    addRow.addEventListener('click',function(e){
        let result = parseFloat(productPriceInput.value)* parseFloat(quantity.value) +' Euro'
        mydataTable.rows().add([productNameInput.value,productPriceInput.value,quantity.value,result]);
        productNameInput.value=''
        productPriceInput.value=''
        quantity.value=''



   
    
    })
}




