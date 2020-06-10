window.onload=()=>{
let lastBrowsDate=localStorage.getItem('browseDate')
// console.log(lastBrowsDate);
if(lastBrowsDate){
    document.querySelector('#browserDateElement').innerText=lastBrowsDate
}

}
