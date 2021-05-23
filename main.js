left_Wrist_x=0;

right_wrist_X=0;

diffrence=0;

function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(550,500);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model is Initalizied");
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        left_Wrist_x=results[0].pose.leftWrist.x;
        right_wrist_X=results[0].pose.rightWrist.x;
        diffrence=floor(left_Wrist_x-right_wrist_X);
        console.log("Left wrist x = "+left_Wrist_x+". Right wrist x ="+right_wrist_X);
    }
}

function draw(){
    background('#808080');
    document.getElementById("size").innerHTML=diffrence+"px";
    fill('yellow');
    stroke('black');
    textSize(diffrence);
    text("Yuvraj Thakrar",20,300);
}