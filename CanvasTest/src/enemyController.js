var config = require('./config.js');
var shapeObj = require('./mainStage.js');
module.exports.AddShape = function (){
    // 5-495
    var x = Math.random()*config.stageInfo.width - config.gameInfo.obj_size/2;
    var y = Math.random()*config.stageInfo.width - config.gameInfo.obj_size/2;
    var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0,0,config.gameInfo.obj_size,config.gameInfo.obj_size);
    var shape = new createjs.Shape(graphics);
    shape.x = x;
    shape.y = y;
    shapeObj.stage.addChild(shape);
    shapeObj.stage.update();
}
