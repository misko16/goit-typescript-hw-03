class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    };
    getSignature(): number{
        return this.signature;
    };
}

class Person {
    private key: Key;

    constructor(key: Key){
        this.key = key;
    };
    getKey():Key {
        return this.key;
    };
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenats: Person[] = [];

    constructor(key: Key){
        this.key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person:Person):void{
        if(this.door){
            this.tenats.push(person);
            console.log(`You come in`);
        }else{
            console.log(`Oops, door are not open`)
        }
    }
};

class MyHouse extends House {
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()){
            this.door = true;
            console.log(`Door are already open`);
        }else{
            console.log(`Oops door are close`);
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};