// Getter and Satters

class Square { 
  constructor (_width) { 
        this.width = _width;
        this.height = _width;
        this.numOfRequestsForArea = 0;
  }

 get area () { 
  this.numOfRequestsForArea++;
 return this.width * this.height;
}
  
}

let square1 = new Square(4);
console.log("Square area is: " , square1.area );
console.log("Square area is: " , square1.area );
console.log("Square area is: " , square1.area );
console.log(square1.numOfRequestsForArea);


// Static methods in classes

class Squary { 
        constructor (_width) { 
          this.width = _width;
          this.h = _width;
        }
      static equals (a, b) { 
        return a.height*a.width === b.height*b.width;
      }  

      static isValidDimension (width, height) { 
        return width === height;
      }
}

let squara1 = new Squary (8);
let square2 = new Squary (8);

console.log(Squary.equals(squara1, square2));
console.log(Squary.isValidDimension(6, 6));

// Inheritance and extends In Classes :- parent and child class

class Person { 
  constructor (_name, _age) { 
     this.name = _name;
     this.age = _age;
  }

  describe () {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}

class Programmer extends Person { 
  constructor (_name, _age, _yearsOfExperience) { 
    super(_name, _age);

    // custom behaviour
    this.yearsOfExperience = _yearsOfExperience;
  }

  code () { 
    console.log(`${this.name} is coding`)
    
  }
}

const programmers = [ 
  new Programmer("domm", 56, 12),
  new Programmer("jeff", 24, 4)
] ;
developSoftware(programmers);

function developSoftware (programmers) { 
   for (let programmer of programmers) { 
    
    programmer.code();

   }
   
};