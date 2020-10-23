const btnAgregar = document.querySelector('form')
btnAgregar.addEventListener('submit', function(e) {
    e.preventDefault()
    const ownerName = document.querySelector('#propietario').value
    const ownerPhone = document.querySelector('#telefono').value
    const ownerAdress = document.querySelector('#direccion').value
    const petName = document.querySelector('#nombreMascota').value
    const petType = document.querySelector('#tipo').value
    const petSymptoms = document.querySelector('#enfermedad').value

    let currentAnimal = {}

    switch (petType) {
        case 'perro':
            currentAnimal = new Dog(petName,petType,petSymptoms)
            break;
    
        case 'gato':
            currentAnimal = new Cat(petName,petType,petSymptoms)
            break;
        case 'conejo':
            currentAnimal = new Rabbit(petName,petType,petSymptoms)
            break;
    }
    const owner = new Owner(ownerName,ownerPhone,ownerAdress,currentAnimal)

    console.log(owner)
})

class Animal{
    constructor(name, type){
        this._name = name
        this.type = type
    }
    info(){
        return `El nombre del animal es: ${this._name}, y este es un: ${thistype}` 
    }
}

class Dog extends Animal{
    constructor(name, type, symptoms){
        super(name,type)
        this._symptoms = symptoms
    }
    get symptoms(){
        return this._symptoms
    }
    set symptoms(newSymptoms){
        this._symptoms = this.newSymptoms   
    }      
}
class Cat extends Animal{
    constructor(name, type, symptoms){
        super(name,type)
        this._symptoms = symptoms
    }
    get symptoms(){
        return this._symptoms
    }
    set symptoms(newSymptoms){
        this._symptoms = this.newSymptoms
    }      
}
class Rabbit extends Animal{
    constructor(name, type, symptoms){
        super(name,type)
        this._symptoms = symptoms
    }
    get symptoms(){
        return this._symptoms
    }
    set symptoms(newSymptoms){
        this._symptoms = this.newSymptoms
    }      
}
class Owner{
    constructor(name, phone, address, animal = {}){
        this.name = name
        this.address = address
        this.phone = phone
        this.animal = animal
    }
    info(){
        return `El Dueño es: ${this.name}, su direccion es: ${this.address}, su telefono es: ${this.phone} y su mascota es: ${this.animal.info}`
    }
}

