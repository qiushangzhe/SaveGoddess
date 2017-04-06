/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var playerController = __webpack_require__(1);
	var shapeObj = __webpack_require__(3);
	var config = __webpack_require__(2);
	var enemyController = __webpack_require__(4);

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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(2);
	var stageObj = __webpack_require__(3);
	var enemyController = __webpack_require__(4);
	function MoveUp(){
	    var obj = stageObj.stage.getChildByName('userObj');
	    if(obj.y - config.gameInfo.move_delta < 0) {return;}
	    obj.y-=config.gameInfo.move_delta;
	    shape.setBounds(shape.x,obj.y,config.gameInfo.obj_size,config.gameInfo.obj_size);
	    CheckEnemyPos();
	    stageObj.stage.update();

	}

	function MoveDown(){
	    var obj = stageObj.stage.getChildByName('userObj');
	    if(obj.y + config.gameInfo.move_delta > config.stageInfo.height - config.gameInfo.obj_size) {return;}
	    obj.y+=config.gameInfo.move_delta;
	    shape.setBounds(shape.x,obj.y,config.gameInfo.obj_size,config.gameInfo.obj_size);
	    CheckEnemyPos();
	    stageObj.stage.update();
	}

	function MoveLeft(){
	    var obj = stageObj.stage.getChildByName('userObj');
	    if(obj.x - config.gameInfo.move_delta < 0) {return;}
	    obj.x-=config.gameInfo.move_delta;
	    shape.setBounds(obj.x,shape.y,config.gameInfo.obj_size,config.gameInfo.obj_size);
	    CheckEnemyPos();
	    stageObj.stage.update();
	}

	function MoveRight(){
	    var obj = stageObj.stage.getChildByName('userObj');
	    if(obj.x + config.gameInfo.move_delta > config.stageInfo.width - config.gameInfo.obj_size) {return;}
	    obj.x+=config.gameInfo.move_delta;
	    shape.setBounds(obj.x,shape.y,config.gameInfo.obj_size,config.gameInfo.obj_size);
	    CheckEnemyPos();
	    stageObj.stage.update();
	}

	function CheckEnemyPos(){
	    var playerBox = stageObj.stage.getChildByName('userObj').getBounds();
	    for(var i in enemyController.enemyList){
	        if(enemyController.enemyList[i].getBounds().intersects(playerBox)){
	            var tag = enemyController.enemyList[i];
	            tag.parent.removeChild(tag);
	            enemyController.enemyList.splice(i,1);
	            return;
	        }
	    }
	}


	var userObj = new createjs.Graphics().beginFill("blue").drawRect(0,0, config.gameInfo.obj_size ,config.gameInfo.obj_size);
	var shape = new createjs.Shape(userObj);
	shape.name = 'userObj';

	shape.x = config.stageInfo.width/2-config.gameInfo.obj_size/2;
	shape.y = config.stageInfo.height/2-config.gameInfo.obj_size/2;
	shape.setBounds(shape.x,shape.y,config.gameInfo.obj_size,config.gameInfo.obj_size);
	stageObj.stage.addChild(shape);

	stageObj.stage.update();


	module.exports = {
	    MoveUp:MoveUp,
	    MoveDown:MoveDown,
	    MoveLeft:MoveLeft,
	    MoveRight:MoveRight
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	var gameInfo = {
	    obj_size : 10,
	    move_delta : 10
	}

	var stageInfo = {
	    width : 500,
	    height: 500
	}

	module.exports = {
	    gameInfo : gameInfo,
	    stageInfo : stageInfo
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(2);
	var stage = new createjs.Stage("canvas");
	stage.canvas.width = config.stageInfo.width;
	stage.canvas.height = config.stageInfo.height;

	module.exports = {
	    stage : stage
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(2);
	var shapeObj = __webpack_require__(3);
	var enemyList = [];

	module.exports.AddShape = function (){
	    // 5-495
	    console.log(1);
	    var x = Math.random()*config.stageInfo.width - config.gameInfo.obj_size/2;
	    var y = Math.random()*config.stageInfo.width - config.gameInfo.obj_size/2;
	    var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0,0,config.gameInfo.obj_size,config.gameInfo.obj_size);
	    var shape = new createjs.Shape(graphics);
	    shape.x = x;
	    shape.y = y;
	    shape.setBounds(shape.x,shape.y,config.gameInfo.obj_size,config.gameInfo.obj_size);
	    enemyList.push(shape);
	    shapeObj.stage.addChild(shape);
	    shapeObj.stage.update();
	}

	module.exports.enemyList = enemyList;


/***/ }
/******/ ]);