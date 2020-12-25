class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,70,70);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 2){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     console.log(this.Visibility);
     console.log("Hi!");
     image(this.image, this.body.position.x, this.body.position.y, 70, 70);
     pop();
   }
   
 }

 score()
 {
    if(this.Visibility<0 && this.Visibility>(-1005))
    {
      score = score + 1;
      console.log("score function")
      console.log(score);
      console.log(this.Visibility);  
    }

 }



}