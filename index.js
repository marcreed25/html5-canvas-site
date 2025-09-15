var canvas = document.getElementById("canvas");

// Match resolution of canvas to window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Button {

    constructor(text, x, y, width, height) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        ctx.textBaseline = 'top';
    }

    draw() {
        ctx.fillStyle = "pink";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.font = "50px Arial";
        ctx.fillText(this.text, this.x + 5, this.y + 5);
    }

}

let btnWidth = 300;
let btnHeight = 100;
let btnX = (canvas.width / 2) - (btnWidth / 2);
let btnY = (canvas.height / 2) - (btnHeight / 2);
var btn = new Button('Hello world!', btnX, btnY, btnWidth, btnHeight);
btn.draw();

function isCursorInsideButton(mx, my, btnX, btnY, btnWidth, btnHeight) {
    return mx >= btnX && mx <= btnX + btnWidth &&
            my >= btnY && my <= btnY + btnHeight;
}

canvas.addEventListener('mousedown', function(e) {
    let mx = e.clientX;
    let my = e.clientY;

    console.log('x: ' + mx);
    console.log('y: ' + my);

    if (isCursorInsideButton(mx, my, btn.x, btn.y, btn.width, btn.height)) {
        alert('Inside!');
    }
})