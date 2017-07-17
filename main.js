//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (color, status, hungry, owner) {
  this.color = color;
  this.status = status;
  this.hungry = hungry;
  this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog("black", "normal", false, Human.mason);
let moonshine = new Dog("brown", "normal", true, Human.julia);
let atticus = new Dog("white", "normal", false )
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool;
  this.feed = function (dog) {
    return dog.hungry = false;
  }
  this.pet = function (dog) {
    return dog.status = "happy";
  }
}


let julia = new Human(true);
let mason = new Human(false);

// Instances of Human
// Needed: mason, julia
