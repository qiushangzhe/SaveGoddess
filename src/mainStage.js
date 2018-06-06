var config = require('./config.js');
var stage = new createjs.Stage("canvas");
stage.canvas.width = config.stageInfo.width;
stage.canvas.height = config.stageInfo.height;

module.exports = {
    stage : stage
}
