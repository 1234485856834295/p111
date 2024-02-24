camera=document.getElementById("camera");
Webcam.set({width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach(camera);

function pic(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'">';
    });
}

console.log("ml5version",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pH_CGFASC/model.json',modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

 function speak(){
    var synth=window.speechSynthesis;
    speak1="The first prediction is "+pre;
    var utterthis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterthis);
 }