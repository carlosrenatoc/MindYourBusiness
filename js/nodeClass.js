class Node{

  static ctx;
  initialWidth = 150;
  initialHeight = 100;

  constructor(position, text){

    this.position = position;
    this.text = text;
    this.RectWidth = this.initialWidth;
    this.RectHeight = this.initialHeight;
    this.draw();
  }

  static setCtx(ctx){
    Node.ctx = ctx;
  }

  draw(){
    var textWidth  = this.measureText();
    if(textWidth > this.RectWidth)
      this.RectWidth = textWidth + 5;
    else if (textWidth < this.RectWidth && this.RectWidth > this.initialWidth)
      this.RectWidth = textWidth + 5;
    Node.ctx.strokeRect(this.position['x'], this.position['y'], this.RectWidth, this.RectHeight);
    Node.ctx.textAlign="center"; 
    Node.ctx.textBaseline = "middle";
    Node.ctx.fillStyle = "#000000";
    Node.ctx.fillText(this.text,this.position['x']+(this.RectWidth/2),this.position['y']+(this.RectHeight/2));
  }

  clear(){
    Node.ctx.clearRect(this.position['x']-1, this.position['y']-1, this.RectWidth+2, this.RectHeight+2);
  }

  updateText(text){
    console.log("hi");
    this.text = text;
    this.clear();
    this.draw();
  }

  measureText(){
    return Node.ctx.measureText(this.text).width
  }
}