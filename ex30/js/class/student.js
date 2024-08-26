export class Student {

    constructor(firstname, lastname){
        this.firstname = firstname; 
        this.lastname = lastname; 
    }

    toString(){
        return `${this.firstname} ${this.lastname.toUpperCase()}`
    }
}

