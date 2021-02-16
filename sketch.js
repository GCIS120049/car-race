var car;
var database,pos;

function setup(){
    database=firebase.database();

    createCanvas(500,500);

    car = createSprite(250,250,10,10);
    car.shapeColor = "red";
    var carps=database.ref('ball/position');
    carps.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(pos!==undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
     }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
     }
        drawSprites();
   }
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x':pos.x+x,
        'y':pos.y+y
    });
    }

function readPosition(data){
    pos=data.val();
    car.x=pos.x;
    car.y=pos.y;
}
function showError(){
    console.log("error");
}
