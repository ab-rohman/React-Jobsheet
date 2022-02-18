//Super Class
class Holiday{
    //create class with name Holiday
    constructor(destination, days){
        //methode contructor will create the object of class with the value for attribute from the parameter
        this.destination = destination;
        //asign the first value in parameter as destination
        this.days = days;
        //asign the second value in parameter as days
    }

    info(){
        //methode info in class Holiday
        alert(`${this.destination} will take ${this.days} days`);
        //show the text and value of each attribute
    }
}

//Sub Class
class Expedition extends Holiday{
    //create class with name Expedition that extends Holiday Class (so it mean every attribute in Holiday class will also available in Expedition)
    constructor(destination, days, gear){
        //methode contructor will create the object of class with the value for attribute from the parameter
        super(destination,days);
        //initializing the value of destionation and days with value from parameter
        //using super because both of the attribute are from superclass
        this.gear = gear;
        //asign the third value in parameter as gear
    }

    info() {
        //methode info in class Expedition
        super.info();
        //calling methode info from super class
        alert(`Bring Your ${this.gear.join(' and your ')}`);
        //show the text and the value of every variable
        //using join methode to print every string because the parameter value will be array
    }
}

const tripWithGear = new Expedition('Semeru', 10, ['Sunglasses','Flags','Camera']);
//creating object tripWithGear with typw const from class Expedition
//in this Object Instantiation we give it 3 parameter semeru as destination, 10 as days, and array for the gear
tripWithGear.info();
//calling methode info from object tripWithGear
//this methode will also call methode info in super class because the methode is also declared inside it