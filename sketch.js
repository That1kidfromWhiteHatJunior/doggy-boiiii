//Create variables here
var dogImg, dogImg1, dog;
var database;
var foodStock;
var food;
function preload()
{
	//load images here
dogImg = loadImage("images/dogImg.png");
dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250, 300, 150, 150);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize = (20);

}


function draw() {  
 background(46, 139, 87);
 if (keyWentDown (UP_ARROW)) {
   writeStock(food);
   dog.addImage(gogImg1);
 }
  drawSprites();
  //add styles here
fil(255,255,254);
stroke("black");
text("food remaining" + food,170, 200);
textSize(13);
text ("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20 );
}
function readStock(data){
  food = data.val();
  }
  function writeStock(x){ 
    if(x<=0)
    {
     x=0;
     }
  
    else{
       x=x-1;
       } database.ref('/').update({
          Food:x 
        })
  
      }