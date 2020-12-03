"use strict";
let kindnesses = ["cool", "kickin'", "rad", "swagy",
  "mad bro", "nuts", "bril", "jam", "lit", "fire", "cracker"];
let wishes = ['keep it up!', 'stay lit!!', 'stay on!!',
  'keep on!!', 'nicer!'];

alert("You're " +  kindnesses[Math.floor(Math.random() *
  kindnesses.length)]  + ', ' +
  wishes[Math.floor(Math.random() * wishes.length)]);
