// let anmial={
//     eats:true
// };
// console.log("animal")

// let rabit={
//     jumps:true
// };
// console.log("rabit")

// rabit.__proto__ = anmial;

class Animal {
  constructor(name) {
    this.name = name;

    console.log("objects are loading");
  }

  eats() {
    console.log("khana kha rha hu");
  }
  jumps() {
    console.log("khana kha rha hu");
  }
}
class lion extends Animal {
  constructor(name) {
    super(name);
    this.name = name;

    console.log("objects are loading and he is lion......");
  }
  eats() {
    super.eats()
    console.log("khana kha rha hu bol 22");
  }
}
let a = new Animal("bunny");
console.log(a);
let l = new lion("shera");
console.log(l);
