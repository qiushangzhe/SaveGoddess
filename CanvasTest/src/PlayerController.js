

var config = require('./config.js');
var stageObj = require('./mainStage.js');
function MoveUp(){
    var obj = stageObj.stage.getChildByName('userObj');
    if(obj.y - config.gameInfo.move_delta < 0) {return;}
    obj.y-=config.gameInfo.move_delta;
    stageObj.stage.update();
}

function MoveDown(){
    var obj = stageObj.stage.getChildByName('userObj');
    if(obj.y + config.gameInfo.move_delta > config.stageInfo.height - config.gameInfo.obj_size) {return;}
    obj.y+=config.gameInfo.move_delta;
    stageObj.stage.update();
}

function MoveLeft(){
    var obj = stageObj.stage.getChildByName('userObj');
    if(obj.x - config.gameInfo.move_delta < 0) {return;}
    obj.x-=config.gameInfo.move_delta;
    stageObj.stage.update();
}

function MoveRight(){
    var obj = stageObj.stage.getChildByName('userObj');
    if(obj.x + config.gameInfo.move_delta > config.stageInfo.width - config.gameInfo.obj_size) {return;}
    obj.x+=config.gameInfo.move_delta;
    stageObj.stage.update();
}

var userObj = new createjs.Graphics().beginFill("blue").drawRect(0,0, config.gameInfo.obj_size ,config.gameInfo.obj_size);
var shape = new createjs.Shape(userObj);
shape.name = 'userObj';
shape.x = config.stageInfo.width/2-config.gameInfo.obj_size/2;
shape.y = config.stageInfo.height/2-config.gameInfo.obj_size/2;
stageObj.stage.addChild(shape);
stageObj.stage.update();


module.exports = {
    MoveUp:MoveUp,
    MoveDown:MoveDown,
    MoveLeft:MoveLeft,
    MoveRight:MoveRight
}
