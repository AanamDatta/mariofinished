noseX= 0
noseY = 0
function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_jump = loadSound("jump.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();

	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400)
	video.parent("game_console")
	poseNet = ml5.poseNet(video, modeloaded)
	poseNet.on('pose', gotResult)
}
function modeloaded() {
	console.log("modeloaded")
}
function gotResult( results) {
	
		if (results.length > 0) {
			noseX = results[0].pose.nose.x
		noseY= results[0].pose.nose.y
		}
		
	}


function draw() {
	game()
}






