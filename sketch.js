//obstacleg=createGroup()
colorn=0;
color="";
function setup(){
  createCanvas(windowWidth,windowHeight);
}


function draw() {
 background("black")
  if(World.frameCount%2==0){
   createrain();
 }
 drawSprites();
}

       function properties(Sprite){
        Sprite.x=(windowWidth-windowWidth+50)
        Sprite.velocityX=1
        Sprite.shapeColor="GREEN"
       }
       function createrain(theme){
        colorn=Math.round(random(1,6));
        if(colorn==1){
          color="blue"
        } 
        else if(colorn==2){
          color="green"
        } 
        else if(colorn==3){
          color="yellow"
        } 
        else if(colorn==4){
          color="red"
        } 
        else if(colorn==5){
          color="orange"
        } 
        else if(colorn==6){
          color="pink"
        } 
        obstacle=createSprite(Math.round(random(windowWidth+10,windowWidth-windowWidth+10)),windowHeight-windowHeight-10,10,20)
         obstacle.velocityY=4
         obstacle.lifetime=windowWidth/obstacle.velocityY
         obstacle.shapeColor=color
         //obstacleg.add(obstacle);
        }

      