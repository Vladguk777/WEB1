class Button 
{
    constructor(height, width, text)
    {
    this.height = height;
    this.width = width;
    this.text = text; 
    }
showBtn()
    {
    document.write(`<button style="height: ${this.height}px; width: ${this.width}px;">${this.text}</button>`);     
    }
}
class BootstrapButton extends Button 
{
    constructor(height, width, text, background, color)
    {
        super(height, width, text);
        this.background = background;
        this.color = color;
    }
    showBtn()
    {
        document.write(`<button style="height: ${this.height}px; width: ${this.width}px; background: ${this.background}; color: ${this.color}">${this.text}</button>`);
    }
}
new BootstrapButton(100, 100, "TEXT", "blue", "white").showBtn();
