import {onInitPage, onDrawPage, initPage, drawPage, Button, isCursorInsideButton}
from './common.js';

var canvas = document.getElementById("canvas");

// Match resolution of canvas to window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var btn = undefined;

onInitPage(() => {
    let btnWidth = 300;
    let btnHeight = 100;
    let btnX = (canvas.width / 2) - (btnWidth / 2);
    let btnY = (canvas.height / 2) - (btnHeight / 2);
    btn = new Button(ctx, 'Hello world!', btnX, btnY, btnWidth, btnHeight,
        '0', '0%', '50%'
    );
});

onDrawPage(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    btn.draw();
});

initPage();
drawPage();

canvas.addEventListener('mousedown', function(e) {
    let mx = e.clientX;
    let my = e.clientY;

    if (isCursorInsideButton(mx, my, btn.x, btn.y, btn.width, btn.height)) {
        btn.lightness = '26.7%';
        drawPage();

        setTimeout(function () {
            btn.lightness = '50%';
            drawPage();

            setTimeout(function () {
                window.location.href = 'other.html';
            }, 100);
        }, 100);
    }
})