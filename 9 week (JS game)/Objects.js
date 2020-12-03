var dog = {
  name: "Björk",
  legs: 4,
  weight: 6,
  isAGoodBoy: true,
  sound: "Woof",
  speak:speak
}
dog.name;
dog.age = 2;
function bark(){

}
dog.bark =  function () {
  console.log("woof woof! I'm " + this.name + " i mean woof woof!");
}
var speak = function () {
  console.log(this.sound + "! Name's " + this.name + "!");
};

var cow = {
  sound: "Moo",
  name: "Milkfactory",
  speak:speak
};

var cat = {
  sound: "Mew",
  name: "Cleocatra",
  speak:speak
};

var snake = {
  sound: "Zzz...",
  name: "Znake",
  speak:speak
};

cow.speak();
dog.speak();
cat.speak();
snake.speak();

var car = new Car(arg1, arg2)
