var getRandCoord = function(size) {
  return Math.floor(Math.random() * size)
};
var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
var getDistanceHint = function (distance) {
  if (distance < 50)
    return "He's hiding in some bush! Very close!!";
  else if (distance < 100)
    return "Close! I hear him laughing";
  else if (distance < 200)
    return "He must be near...";
  else if (distance < 300)
    return "Maybe take a bit to the north?";
  else if (distance < 400)
    return "He might've been there some time ago";
  else if (distance < 800)
    return "No, he's not here ;^)";
  else
    return "They're some distant lands here.. ";
};

var clicks = 0;
var width = 1020;
var height = 1020;

var target = {
  x:getRandCoord(width),
  y:getRandCoord(height)
};

$("#MAP").click(function (event) {
  clicks++;
  var distance = getDistance(event, target);
  var distanceHint = getDistanceHint(distance);

  $("#DISTANCE").text(distanceHint);

  if (clicks === 30) {
    alert("Oops! You haven't found Link! He ran away ;-;");

    // Обновляем расположение Линка и счетчик кликов
    clicks = 0;
    target = {
      x:getRandCoord(width),
      y:getRandCoord(height)
    }
  }

  if (distance < 50) {
    alert("Great job! You've found Link!! You tried " + clicks + " times ;^D");
  }
});
