class Cat {
    constructor(name, age, furColor,) {
        this.name = name
        this.age = age
        this.furColor = furColor
    }
        scratch() {
        console.log("scratch scratch scratch!");
       }
       greeting() {
       console.log("Meow");
       }  
       eat() {
        console.log("Lick Lick")
       }    
   }
   
    const KittyKat = new Cat ("FurBall", 3, "black")
         
//    console.log(KittyKat)
//    KittyKat.scratch()
//    KittyKat.greeting()
//    KittyKat.eat()
//    console.log(KittyKat.furColor)

   const KittyKat2 = new Cat ("Flamer", 7, "orange")
         
//    console.log(KittyKat2)
//    KittyKat2.scratch()
//    KittyKat2.greeting()
//    KittyKat2.eat()
//    console.log(KittyKat2.furColor)


class Pirate { 
    constructor(name, slogan, pet, title) {
        this.name = name
        this.slogan = slogan
        this.pet = pet
        this.title = title
    }
    fight() {
        console.log("Come at me bro")
     }
      eat() {
            console.log("Munch munch")
     } 
      Sleep() {
            console.log("Snore")
    }  
}

const Dre = new Pirate("Dre", "walking the plank", "parrot", "Captain") 
const Michael = new Pirate("Michael", "abandon ship", "sloth", "Driver") 
const Devon = new Pirate("Devon", "clean me booties", "monkey", "Follower") 
const JollyRanger = [Dre, Michael, Devon]

const Sean = new Pirate("Sean", "walking the plank", "Spider", "BlackSmith") 
const George = new Pirate("George", "abandon ship", "Fish", "Enforcer") 
const Karl = new Pirate("Karl", "clean me booties", "Squid", "Lacky") 
const Titanic = [Sean, George, Karl]

// console.log(Titanic)
// console.log(JollyRanger)

JollyRanger.forEach(Pirate => {
    console.log(Pirate.name)
    console.log(Pirate.slogan)
    console.log(Pirate.pet)
    console.log(Pirate.title)
});

Titanic.forEach(Pirate => {
    console.log(Pirate.name)
    console.log(Pirate.slogan)
    console.log(Pirate.pet)
    console.log(Pirate.title)
});
