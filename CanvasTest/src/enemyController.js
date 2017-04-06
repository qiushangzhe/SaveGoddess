var config = require('./config.js');
var shapeObj = require('./mainStage.js');
var stageObj = require('./mainStage.js');
var enemyList = [];

module.exports.AddShape = function (){
    // 5-495
    console.log(1);
    var x = parseInt(Math.random()*config.stageInfo.width - config.gameInfo.obj_size/2);
    var y = parseInt(Math.random()*config.stageInfo.width - config.gameInfo.obj_size/2);
    var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0,0,config.gameInfo.obj_size,config.gameInfo.obj_size);
    var shape = new createjs.Shape(graphics);
    shape.x = x;
    shape.y = y;
    shape.setBounds(shape.x,shape.y,config.gameInfo.obj_size,config.gameInfo.obj_size);
    enemyList.push(shape);
    shapeObj.stage.addChild(shape);
    shapeObj.stage.update();
}

module.exports.MoveToPlayer = function(){
    var obj = stageObj.stage.getChildByName('userObj');
    for(var i in enemyList){
        check(enemyList[i],obj);
    }
}

function check(enemy,player){
    var delta = 5;
    if(enemy.x < player.x){
        var buffer = enemy.x + delta;
        move(enemy,buffer,enemy.y);
    }
    if(enemy.x > player.x){
        var buffer = enemy.x - delta;
        move(enemy,buffer,enemy.y);
    }
    if(enemy.y < player.y){
        var buffer = enemy.y + delta;
        move(enemy,enemy.x,buffer);
    }
    if(enemy.y > player.y){
        var buffer = enemy.y - delta;
        move(enemy,enemy.x,buffer);
    }
}


function move(enemy,x,y){
    enemy.x = x;
    enemy.y = y;
    enemy.setBounds(x,y,config.gameInfo.obj_size,config.gameInfo.obj_size);
}
module.exports.enemyList = enemyList;
