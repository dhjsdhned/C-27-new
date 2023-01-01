
class Tower {
    constructor(x, y, width, height) {
      var options = {
//set the static body(challenge 2)
      isStatic:true
      };
        this.Image=loadImage("assets/tower.png");
        this.width = width;
        this.height = height;
        //write the instruction to create a rectangular tower body
        //add the option inside the rectangular body
        this.body=Bodies.rectangle(x,y,this.width, this.height, options);
        //Add this object to the World
        World .add(world,this.body);
      }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //change the rect as image
    //display the rect function
    image (this.Image,0,0,this.width, this.height);
    pop();
  }
}
