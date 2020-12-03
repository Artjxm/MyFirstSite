var Car = function (x, y) {
  this.x = x;
  this.y = y;
}
Car.prototype.draw = function () {
  var carHTML = "<img src='autoIcon.webp' alt='broke'>";
  this.carElement = $(carHTML);

  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
  });
  $("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
  this.x += 5;
  this.carElement.css({
    left: this.x,
    top: this.y
  })
};

Car.prototype.moveTop = function () {
  this.y -= 5;
  this.carElement.css({
    left: this.x,
    top: this.y
  })
};

Car.prototype.moveDown = function () {
  this.y += 5;
  this.carElement.css({
    left: this.x,
    top: this.y
  })
};

Car.prototype.moveLeft = function () {
  this.x -= 5;
  this.carElement.css({
    left: this.x,
    top: this.y
  })
}

var Tesla = new Car(50, 60);
var Honda = new Car(150, 200);

Tesla.draw();
Honda.draw();

Tesla.moveRight();

