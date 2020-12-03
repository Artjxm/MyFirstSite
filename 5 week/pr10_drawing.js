function draw() {
  var canvas = document.getElementById('moon');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "#ffd84b";
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = "#202056";
    ctx.beginPath();
    ctx.arc(110, 90, 45, 0, Math.PI * 2, true);
    ctx.fill();

    // ctx.fillStyle = "#ffd84b";
    // ctx.beginPath();
    // ctx.moveTo(130, 115); //bottom
    // ctx.lineTo(135, 107);
    // ctx.lineTo(145, 107); //right down
    // ctx.lineTo(138, 102);
    // ctx.lineTo(140, 93); // right top
    // ctx.lineTo(130, 99);
    // ctx.lineTo(120, 93); // left top
    // ctx.lineTo(123, 102);
    // ctx.lineTo(117, 107); // left down
    // ctx.lineTo(125, 107);
    //
    // // ctx.lineTo(180, 180);
    // ctx.fill();
  }
}
