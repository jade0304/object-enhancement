const createInstructor = (firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

// computed property name
const instructor = { 
    firstName: "Colt",
    [favoriteNum]: "That is my favorite!"
}


var instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
  }

//   var instructor = {
//     firstName: "Colt",
//     const sayHi = () => "Hi!",
//     const sayBye = () => [firstName] + " says bye!"
//   }

function createAnimal(species, verb, noise){
return {
    species: "dog", 
    [verb]()  {
return noise;
    }
}
}