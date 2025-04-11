// Ejercicio POO 1:

// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por consola las propiedades de la persona.

class Person {
    constructor(name, age, genre) {
        this.name = name
        this.age = age
        this.genre = genre
    }

    obtDetails = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Genre: ${this.genre}`)
    }
}

const neo = new Person('Neo', 28, 'male')

neo.obtDetails()


// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por consola el resultado.

class Student extends Person {
    constructor(name, age, genre, course, group) {
        super(name, age, genre)
        this.course = course
        this.group = group
    }

    register = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Genre: ${this.genre}, Course: ${this.course}, Group: ${this.group}`)
    }
}


const harry = new Student('Harry', 19, 'male', 'first grade', 'A');

harry.register()

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por consola el resultado.

class Teacher extends Person {
    constructor(name, age, genre, subject, level) {
        super(name, age, genre)
        this.subject = subject
        this.level = level
    }

    assign = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Genre: ${this.genre}, Subject: ${this.subject}, Level: ${this.level}`)
    }
}

const dumbledore = new Teacher('Dunbledore', 66, 'male', 'Magic', 'Expert')

dumbledore.assign()



///////////
// Extras:

/////////////////////////////////////////
// Ejercicio POO 2 - kata Mayas y aztecas
// kata mayas y aztecas

// 1. Construye las siguientes clases:

// Warrior:
// constructor(life, power): Establece el valor de las propiedades life y power
// attack: Devuelve el valor de power del guerrero
// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

class Warrior {
    constructor(life, power) {
        this.life = life
        this.power = power
    }

    attack = () => {
        console.log(this.power);
        return this.power;
    }  
    
    defend = (damage) => {
        this.life -= damage;
        console.log(this.life);
    }
}


// Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
// drinkColaCao: Suma 10 al poder.

class Maya extends Warrior {
    drinkColaCao = () => {
        this.power += 10;
    }
}


// Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
// drinkNesquik: Suma 10 a la vida.

class Aztec extends Warrior {
    drinkNesquik = () => {
        this.life += 10;
    }
}


// 2. Realiza la siguiente cadena de intercambio de golpes.

const azteca = new Aztec(100, 55);
// console.log(azteca)
// azteca.defend(30)
// azteca.drinkNesquik()
// console.log(azteca.life)

const maya = new Maya(100, 30);
// maya.drinkColaCao()
// console.log(maya)

// Azteca bebe nesquik
azteca.drinkNesquik();

// Maya bebe Cola Cao
maya.drinkColaCao();

// Maya ataca a azteca. Azteca defiende.
// maya.attack()
azteca.defend(maya.attack());

// Azteca ataca a maya. Maya defiende.
maya.defend(azteca.attack());



////////////////////////////////////////
// Ejercicio POO 3 - Il sogno di volare

// POO - Il sogno di volare
