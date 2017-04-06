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
        enemyController.AddShape();
    }
};
