class familieMitglieder {
    constructor (gategorie,dieName,forName){
    this.forName = forName
    this.dieName = dieName
    this.familienStof = gategorie}
    fullName(){
        return this.forName+' '+this.dieName
    } 

}

let Bashar =new familieMitglieder('vater','salman','bashar')
Bashar.job ='programer'
console.log(Bashar);

let Rawan = new familieMitglieder('Muter','Fuddah','rawan')
Rawan.unterscheidungszeichen='kopftoch'

let Nai = new familieMitglieder('töchter','salman','Nai')
Nai.alt = 4

let familieArr= [Bashar,Rawan,Nai]
console.log(familieArr[0].fullName());
