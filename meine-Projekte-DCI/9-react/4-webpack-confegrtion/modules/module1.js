// function sayHello() {
//     return 'Hello Wrold'
// }
class Article {
    constructor(title, descrption, category){
        this.title = title;
        this.descrption = descrption;
        this.category = category;
    }
   // this is hte method and there is parameter in it (container)
    render(container){
        const titleElement = document.createElement('h2');
        titleElement.innerText = this.title;

        const categoryElement = document.createElement('h4');
        categoryElement.innerText = this.category.name;

        const descriptionElement = document.createElement('p')
        descriptionElement.innerText = this.descrption;

        container.append(titleElement)
        container.append(categoryElement)
        container.append(descriptionElement)
    }
}

class Category {
    constructor(categoryName){
        this.name = categoryName;
    }
    static News(){
        return new Category('News')
    }
    static Sport(){
        return new Category('Sport')
    }
    
    static Politics(){
        return new Category('Politics')
    }
    static Beauty(){
        return new Category('Beauty')
    }

}
export{Article,Category}