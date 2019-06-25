// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// let positionX;
// let positionY;
//
// let mouse = false;
//
//
// function Coordinate(x,y) {
//     this.x = x;
//     this.y = y;
// }
//
// function Canvas() {
//     this.savedCoordinates = [];
// }
//
// Canvas.prototype.drawLineHorizontal = function() {
//         let lineColor = document.getElementById("myColor");
//         ctx.strokeStyle = lineColor.value;
//         let self = this;
//         canvas.addEventListener('click', function(e){self.drawLineDownHorizontal(e)});
// };
//
// Canvas.prototype.drawLineDownHorizontal = function (e) {
//     mouse = true;
//     let coordinates = this.getCoordinates(canvas, e);
//     positionX = coordinates.x;
//     positionY = coordinates.y;
//     this.savedCoordinates.push(new Coordinate(positionX, positionY));
//     if (this.savedCoordinates.length === 2) {
//         ctx.beginPath();
//         ctx.moveTo(this.savedCoordinates[0].x, this.savedCoordinates[0].y);
//         ctx.lineTo(1500, this.savedCoordinates[0].y);
//         ctx.stroke();
//         this.savedCoordinates = [];
//     }
// };
//
// Canvas.prototype.drawLineVertical = function() {
//     let lineColor = document.getElementById("myColor");
//     ctx.strokeStyle = lineColor.value;
//     let self = this;
//     canvas.addEventListener('click', function(e){self.drawLineDownVertical(e)});
// };
//
// Canvas.prototype.drawLineDownVertical = function (e) {
//     mouse = true;
//     let coordinates = this.getCoordinates(canvas, e);
//     positionX = coordinates.x;
//     positionY = coordinates.y;
//     this.savedCoordinates.push(new Coordinate(positionX, positionY));
//     if (this.savedCoordinates.length === 2) {
//         ctx.beginPath();
//         ctx.moveTo(this.savedCoordinates[0].x, this.savedCoordinates[0].y);
//         ctx.lineTo(this.savedCoordinates[0].x, 700);
//         ctx.stroke();
//         this.savedCoordinates = [];
//     }
// };
//
// Canvas.prototype.drawObLine = function() {
//
//     let lineColor = document.getElementById("myColor");
//     ctx.strokeStyle = lineColor.value;
//     let self = this;
//     canvas.addEventListener('click', function(e){self.drawObLineDown(e)});
//
// };
//
// Canvas.prototype.drawObLineDown = function (e) {
//     mouse = true;
//     let coordinates = this.getCoordinates(canvas, e);
//     positionX = coordinates.x;
//     positionY = coordinates.y;
//     this.savedCoordinates.push(new Coordinate(positionX, positionY));
//     if (this.savedCoordinates.length === 2) {
//         ctx.beginPath();
//         ctx.moveTo(this.savedCoordinates[0].x, this.savedCoordinates[0].y);
//         ctx.lineTo(this.savedCoordinates[1].x, this.savedCoordinates[1].y);
//         ctx.stroke();
//         this.savedCoordinates = [];
//     }
// };
//
// Canvas.prototype.fillCanvas = function () {
//     let fillColor = document.getElementById("myColor");
//     ctx.fillStyle = fillColor.value;
//     ctx.fill();
//
// };
//
// Canvas.prototype.getCoordinates = function (canvas, e) {
//     let rect = canvas.getBoundingClientRect();
//     return {
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//     };
// };
//
// Canvas.prototype.bucketWindow = function () {
//     window.location.reload();
// };

function Model() {
    this.action = null;
    this.downX = null;
    this.outX = null;
    this.downY = null;
    this.outY = null;
};

Model.prototype.setAction = function (action) {
    this.action = action;
};
Model.prototype.getAction = function () {
    return this.action;
};
Model.prototype.clear = function () {
    this.action = null;
};

Model.prototype.setDownX = function (downX) {
    this.downX = downX;
};
Model.prototype.getDownX = function () {
    return this.downX;
};
Model.prototype.setOutX = function (outX) {
    this.outX = outX;
};
Model.prototype.getOutX = function () {
    return this.outX;
};

Model.prototype.setDownY = function (downY) {
    this.downY = downY;
};
Model.prototype.getDownY = function () {
    return this.downY;
};
Model.prototype.setOutY = function (outY) {
    this.outY = outY;
};
Model.prototype.getOutY = function () {
    return this.outY;
};
Model.prototype.clearAllXY = function () {
    this.downX = null;
    this.downY = null;
    this.outX = null;
    this.outY = null;
}

