let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let clockWidth;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

function setupClock(cw) {
    clockWidth = cw;

    tick();
    window.setInterval(tick, 1000);
}

function tick() {
    let date = new Date();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawStatElements();

    let hour = date.getHours();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    drawHand(clockWidth / 3, hour * 30);

    let minutes = date.getMinutes();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    drawHand(clockWidth / 2, minutes * 6);

    let second = date.getSeconds();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    drawHand(clockWidth / 2, second * 6);
}

function drawStatElements() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, clockWidth / 2, 0, 2 * Math.PI, false);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
    ctx.strokeStyle = 'black';
    ctx.fill();
    ctx.closePath();

    drawNumbers();
}

function drawNumbers() {
    let i = 12;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    while (i > 0){
        ctx.save();
        ctx.beginPath();
        ctx.translate(centerX, centerY);
        let angle = (i * 30) * Math.PI / 180;
        ctx.rotate(angle);
        ctx.translate(0, -clockWidth / 2);

        ctx.save();
        ctx.translate(0, -10);
        ctx.rotate(-angle);

        ctx.fillText(i, -3, 0);
        ctx.restore();

        ctx.moveTo(0, 0);
        ctx.lineTo(0, 10);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        i--;
    }
}

function drawHand(length, angle) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(centerX, centerY);
    ctx.rotate(-180 * Math.PI / 180);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, length);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

window.onload = function () {
    setupClock(360);
};

