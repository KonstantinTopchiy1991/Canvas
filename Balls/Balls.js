let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let count = 1;
let speed = [-3, 3, 5, -5, 2, -2, 4, -4, 1, -1];
let balls = [];
let color = ['grey'];
canvas.width = screen.availWidth;
canvas.height = screen.availHeight - 70;

function Ball(event) {
    this.radius = 30;
    this.x = event.pageX;
    this.y = event.pageY;
    this.start = 0;
    this.end = Math.PI * 2;
    this.vX = speed[Math.floor(Math.random() * speed.length)];
    this.vY = speed[Math.floor(Math.random() * speed.length)];
    this.color = color[Math.floor(Math.random() * color.length)];
}

Ball.prototype.draw = function () {
    let radGradient = context.createRadialGradient(this.x - 5, this.y - 10, 8, this.x, this.y, this.radius);
    radGradient.addColorStop(0, this.color);
    context.fillStyle = radGradient;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.start, this.end, true);
    context.fill();

    if (this.x < this.radius) {
        this.x = this.radius;
    }
    if (this.y < this.radius) {
        this.y = this.radius;
    }
    if (this.x > canvas.width - this.radius) {
        this.x = canvas.width - this.radius;

    }
    if (this.y > canvas.height - this.radius) {
        this.y = canvas.height - this.radius;
    }
};

Ball.prototype.move = function () {
    this.x = this.x + this.vX;
    this.y = this.y + this.vY;
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
        this.vX = -this.vX;
        this.color = color[Math.floor(Math.random() * color.length)];
    }
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
        this.vY = -this.vY;
        this.color = color[Math.floor(Math.random() * color.length)];
    }
};


function backgroundDraw(event) {
    let lineGrad = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    context.fillStyle = lineGrad;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);
}

function moveBall() {
    requestAnimationFrame(moveBall);
    context.clearRect(0, 0, canvas.width, canvas.height);
    backgroundDraw();
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].draw();
    }
}

function createBall(event) {
    if (count > 100) {
        return;
    } else {
        let ball = new Ball(event);
        ball.draw();
        balls.push(ball);
        count++;
    }
}

backgroundDraw();
canvas.addEventListener('click', function (event) {
    createBall(event);
}, true);
moveBall();