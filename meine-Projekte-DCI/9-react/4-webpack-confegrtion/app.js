
// const validator=require('validator')
import{Article,Category} from './modules/module1'
import validator from 'validator'
document.querySelector('#submitBtn').addEventListener('click', e => {
    e.preventDefault();
    const title = document.querySelector('#titleInp').value;
    const category = document.querySelector('#categorySelect').options[document.querySelector('#categorySelect').selectedIndex].value;
    const description = document.querySelector('#descriptionText').value;
    let categoryObg;
    switch (category) {
        case 'news':
            categoryObg = Category.News();
            break;
        case 'sport':
            categoryObg = Category.Sport();
            break;
        case 'politics':
            categoryObg = Category.Politics();
            break;
        case 'Beauty':
            categoryObg = Category.Beauty();
            break;
    
        default:
            categoryObg = new Category('No Category')
            break;
    }
    // this function geve result true or false 
    let errorMsgs=''
 if(!validator.isLength(title,{ min:2, max:15 })){
     errorMsgs='title should not be empty'
 }
 if (validator.isEmpty(category)) {
    errorMsgs +='category should not be empty\n'
 }
 if (!validator.isLength(description,{ min:10, max:1000 })) {
    errorMsgs +='description should not be empty und not les than 10 character'
 }

 if (!errorMsgs) {
     
    const container = document.querySelector('#container')
    const article = new Article(title, description, categoryObg);
    article.render(container)
 
 } else {
     alert(errorMsgs)
 }
})