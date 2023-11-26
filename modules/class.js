



class User {
   
    
    constructor(name, age, deposit) {
        this.name = name;
        this.age = age;
        this.deposit = deposit;
    }

     sayHi() {

          console.log(`hello ${yourName} nice to meat you, may name is ${this.name}, 
          i am ${this.age} yrars old, my deposit is ${this.deposit} rubles`.toUpperCase())
     }

}



class Admin extends User {

  

    sayBuy() {
        console.log('good buy')
    }

}






export default Admin