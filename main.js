prediction_1 = "";
prediction_2 = "";

Webcam.set({
    image_quality: 100,
    image_format: 'png',
    height: 300,
    width: 350
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture(){
    console.log("clicked");
    //Webcam.snap(function(data_uri){document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>'});
    Webcam.snap(function(data_uri) { console.log("inside snap"); document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; });
}
console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/m0ZyZFP-7/model.json", modelLoaded);

function modelLoaded(){
    console.log("modelLoaded!!!!!");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is"+prediction_1;
    speak_data_2 = "The second prediction is"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}