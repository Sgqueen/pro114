lipstickX=0;
lipstickY=0;


function preload(){

    lipstick = loadImage('https://i.postimg.cc/fT3G8vxv/l1.png')
}
      
function setup() {

    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {

    image(video,0,0,300,300);
    
    image(lipstick, lipstickX, lipstickY, 30, 30);
     
}

function take_snapshot(){

    save('Yourfilteredphoto.png');
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        lipstickX = results[0].pose.nose.x-15;
        lipstickY = results[0].pose.nose.y+15;
        console.log("lipstick x = " +lipstickX);
        console.log("lipstick y =" +lipstickY);
       
      
    }
}