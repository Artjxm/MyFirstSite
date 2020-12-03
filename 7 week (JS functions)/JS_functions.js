var drawCats = function (howManyTimes, whatToDraw) {

  for (var i = 0; i < howManyTimes; ++i) {
    console.log(i + 1 + "." + whatToDraw);
  }
}

var double = function (num1) {
  return num1 * 2;
}

"use strict";

var RandomBodyParts = ["глаза", "рот", "голова", "ухо", "пятка", "сосок", "подмышка"];
var RandomAdjectives = ["сутулая","вонючая", "потная", "мирэашная", "липкая","отвратительная"];
var RandomWords = ["крыса", "вобла", "плотва", "мышь", "псина", "выдра"];
var pickRandWords = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

var Result = "У тебя "+pickRandWords(RandomBodyParts)+" будто "+pickRandWords(RandomAdjectives)+ " "+pickRandWords(RandomWords);

var generateRusult = function () {
  var RandomBodyParts = ["глаза", "рот", "голова", "ухо", "пятка", "сосок", "подмышка"];
  var RandomAdjectives = ["сутулая","вонючая", "потная", "мирэашная", "липкая","отвратительная"];
  var RandomWords = ["крыса", "вобла", "плотва", "мышь", "псина", "выдра"];
  return "У тебя " + pickRandWords(RandomBodyParts) + " будто " + pickRandWords(RandomAdjectives) + " " + pickRandWords(RandomWords);
}
var ChosenBodyPart = RandomBodyParts[Math.floor(Math.random()RandomBodyParts.length)];
var ChosenAdjective = RandomAdjectives[Math.floor(Math.random()RandomAdjectives.length)];
var ChosenWord = RandomWords[Math.floor(Math.random()*RandomWords.length)];
alert("У тебя "+ChosenBodyPart+" будто "+ChosenAdjective+ " "+ChosenWord);


var fifthLetter = function (name) {
  if (name.length < 5) {
    return
  }
  return "Fifth letter is " + name[4];
}

var medalOfHonor = function (score) {
  if (score < 3)
    return "You've got a bronze medal! Congrats :^)";
  if (score < 7)
    return "You've got a silver medal! Good job :^)";
  return "GOLDEN MEDAL!!!! NICE";
}

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function sameArrays(arr1, arr2) {
  if (arr1.length != arr2.length)
    return false;
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] != arr2[i])
      return false;
  }
  return true;
}

