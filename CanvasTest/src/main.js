var playerController = require('./PlayerController.js');
var shapeObj = require('./mainStage.js');
var config = require('./config.js');
var enemyController = require('./enemyController.js');

document.onkeydown = function(e){
    if(e.keyCode == 38){
        playerController.MoveUp();
    }else if(e.keyCode == 40){
        playerController.MoveDown();
    }else if(e.keyCode == 37){
        playerController.MoveLeft();
    }else if(e.keyCode == 39){
        playerController.MoveRight();
    }else if(e.keyCode == 32){
        for(var i = 0 ; i<10;i++){
            enemyController.AddShape();
        }
    }
};


setInterval(function(){
    console.log(1);
    enemyController.MoveToPlayer();
    shapeObj.stage.update();
},1000);
