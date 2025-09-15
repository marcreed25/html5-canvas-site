var initPage = undefined;
var drawPage = undefined;

function onInitPage(func) {
    initPage = func;
}

function onDrawPage(func) {
    drawPage = func;
}

function calculateTextDimensions(font, text) {
    let element = document.createElement('canvas');
    let ctx = element.getContext("2d");

    ctx.font = font;
    // This relies on the font size being set
    let textDimensions = ctx.measureText(text);
    let width = textDimensions.width;
    let height = textDimensions.fontBoundingBoxAscent + textDimensions.fontBoundingBoxDescent;
    
    element.remove();

    return [width, height];
}

function calculateButtonBoundsBasedOnText(textWidth, textHeight) {
    // Calculate button dimensions based on text dimensions
    let width = textWidth + 20;
    let height = textHeight + 20;

    // Position button based on canvas and button dimensions
    let x = (canvas.width / 2) - (width / 2);
    let y = (canvas.height / 2) - (height / 2);

    return [x, y, width, height];
}

class Button {

    constructor(ctx, text, font, textWidth, textHeight, x, y, width, height,
            hue, saturation, lightness) {
        this.ctx = ctx;
        ctx.textBaseline = 'top';
        this.text = text;
        this.font = font;
        this.textWidth = textWidth;
        this.textHeight = textHeight;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    draw() {
        // Draw the button
        this.ctx.fillStyle = `hsl(${this.hue}, ${this.saturation}, ${this.lightness})`;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

        // Draw the text inside the button
        this.ctx.fillStyle = "white";
        this.ctx.font = this.font;
        let textX = this.x + (this.width / 2) - (this.textWidth / 2);
        let textY = this.y + (this.height / 2) - (this.textHeight / 2);

        this.ctx.fillText(this.text, textX, textY);
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

export {
    onInitPage, onDrawPage, initPage, drawPage, calculateTextDimensions,
    calculateButtonBoundsBasedOnText, Button, isCursorInsideButton
};