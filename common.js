var initPage = undefined;
var drawPage = undefined;

function onInitPage(func) {
    initPage = func;
}

function onDrawPage(func) {
    drawPage = func;
}

class Button {

    constructor(ctx, text, x, y, width, height, hue, saturation,
            lightness) {
        this.ctx = ctx;
        ctx.textBaseline = 'top';
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    draw() {
        this.ctx.fillStyle = `hsl(${this.hue}, ${this.saturation}, ${this.lightness})`;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = "white";
        this.ctx.font = "50px Arial";
        this.ctx.fillText(this.text, this.x + 5, this.y + 5);
    }

}

function isCursorInsideButton(mx, my, btnX, btnY, btnWidth, btnHeight) {
    return mx >= btnX && mx <= btnX + btnWidth &&
            my >= btnY && my <= btnY + btnHeight;
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initPage();
    drawPage();
});

//alert('Hi'); // TODO remove

export {onInitPage, onDrawPage, initPage, drawPage, Button, isCursorInsideButton};