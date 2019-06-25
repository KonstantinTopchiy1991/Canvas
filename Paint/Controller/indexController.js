let lineHorizontal = document.getElementById('lineHorizontal');
let lineVertical = document.getElementById('lineVertical');
let rectangle = document.getElementById('rectangle');
let fill = document.getElementById('fill');
let oblLine = document.getElementById('oblLine');
let bucket = document.getElementById('bucket');

function Canvas() {
    this.model = new Model();
};

Canvas.prototype.init = function () {
    lineHorizontal.addEventListener("click", function (e) {
        this.model.setAction('lineHorizontal');
    }.bind(this), false);
    lineVertical.addEventListener("click", function (e) {
        this.model.setAction('lineVertical');
    }.bind(this), false);
    rectangle.addEventListener("click", function (e) {
        this.model.setAction('rectangle');
    }.bind(this), false);
    fill.addEventListener('click', function (e) {
        this.fillCanvas('fill')
    }.bind(this), false);
    oblLine.addEventListener('click', function (e) {
        this.model.setAction('oblLine')
    }.bind(this), false);
    bucket.addEventListener('click', function (e) {
        this.clearCanvas('bucket')
    }.bind(this), false);

    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = canvas.getContext('2d');
    canvas.onmousedown = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        this.takeAction(x, y);
    }.bind(this);
    canvas.onmouseup = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        this.takeAction(x, y);
    }.bind(this);
};

Canvas.prototype.takeAction = function (x, y) {

    let action = this.model.getAction();
    console.log(2222222222);
    switch (action) {
        case 'lineHorizontal':
            this.drawLineHorizontal(y);
            return y;
        case 'lineVertical':
            this.drawLineVertical(x);
            return x;
        case 'oblLine':
            if (this.model.getDownX() === null) {
                this.model.setDownX(x);
                this.model.setDownY(y);
                return;
            }
            if (this.model.getDownX() !== null) {
                this.model.setOutX(x);
                this.model.setOutY(y);
                this.oblLineDraw(this.model.getDownX(), this.model.getDownY(), this.model.getOutX(), this.model.getOutY());
                this.model.clearAllXY();
                return;
            }
            return;
        case 'rectangle':
            if (this.model.getDownX() === null) {
                this.model.setDownX(x);
                this.model.setDownY(y);
                return;
            }
            if (this.model.getDownX() !== null) {
                this.model.setOutX(x);
                this.model.setOutY(y);
                this.drawRectangle(this.model.getDownX(), this.model.getDownY(), this.model.getOutX(), this.model.getOutY());
                this.model.clearAllXY();
                return;
            }
            return;

    }
};

Canvas.prototype.drawLineHorizontal = function (y) {
    this.ctx.lineWidth = 3;
    let lineColor = document.getElementById("myColor");
    this.ctx.strokeStyle = lineColor.value;
    this.ctx.moveTo(0, y);
    this.ctx.lineTo(1500, y);
    this.ctx.stroke();

};

Canvas.prototype.drawLineVertical = function (x) {
    this.ctx.lineWidth = 3;
    let lineColor = document.getElementById("myColor");
    this.ctx.strokeStyle = lineColor.value;
    this.ctx.moveTo(x, 0);
    this.ctx.lineTo(x, 700);
    this.ctx.stroke();
};

Canvas.prototype.clearCanvas = function (e) {
    window.location.reload();
};

Canvas.prototype.oblLineDraw = function (downX, downY, outX, outY) {
    this.ctx.lineWidth = 3;
    let lineColor = document.getElementById("myColor");
    this.ctx.strokeStyle = lineColor.value;
    this.ctx.moveTo(downX, downY);
    this.ctx.lineTo(outX, outY);
    this.ctx.stroke();
};

Canvas.prototype.fillCanvas = function () {
    console.log(44444);
    this.ctx.beginPath();
    let fillColor = document.getElementById("myColor");
    this.ctx.fillStyle = fillColor.value;
    this.ctx.fill();

};

Canvas.prototype.drawRectangle = function (downX, downY, outX, outY) {
    this.ctx.lineWidth = 3;
    let lineColor = document.getElementById("myColor");
    this.ctx.strokeStyle = lineColor.value;
    this.ctx.moveTo(downX, downY);
    this.ctx.lineTo(outX, downY);

    this.ctx.moveTo(outX, downY);
    this.ctx.lineTo(outX, outY);

    this.ctx.moveTo(outX, outY);
    this.ctx.lineTo(downX, outY);

    this.ctx.moveTo(downX, downY);
    this.ctx.lineTo(downX, outY);
    this.ctx.stroke();

};