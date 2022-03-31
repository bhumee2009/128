song1= "";
song= "";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload(){
    dua_lipa=loadSound("dua_lipa.mp3");
    post_malone=loadSound("post_malone.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded(){
    console.log("PoseNet is initialised!");
}

function draw(){
    image(video, 0, 0, 600, 800);
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("left Wrist X : " + leftWristX + "left Wrist Y : " + leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right Wrist X : " + rightWristX + "right Wrist Y : " + rightWristY);
        
    }
}

function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
}