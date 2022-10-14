Webcam.set({

    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){

    Webcam.snap (function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>'

    });

}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jC3vNTAB8/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');

}

function speak(){

    var synth =window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);

}


function check(){

    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);

}

function gotResult(error, results){


    console.log(error);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
   
    prediction_1 = results[0].label;
   

    speak();
    if(results[0].label=="victory"){
        document.getElementById("update_emoji").innerHTML = "&#9996;";
    
    }

    if(results[0].label=="good"){
        document.getElementById("update_emoji").innerHTML = "&#128077;";
    
    }

    if(results[0].label=="awsome"){
        document.getElementById("update_emoji").innerHTML = "&#128076;";
    
    }

  }
