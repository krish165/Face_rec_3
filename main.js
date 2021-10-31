Webcam.set(
    {
        width:400,
        height:250,
        image_format:"png",
        png_quality:90
    });
    
    camera=document.getElementById("cam");
    Webcam.attach("#cam");
    
    function capture()
    {
        Webcam.snap(function(data_uri)
        {
            document.getElementById("output").innerHTML='<img id="Capturedimage" src="'+data_uri+'">';
    
        });
    }
    
    console.log("ml5 version:",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l9chLrj26/model.json",modelLoaded);
    
    function modelLoaded()
    {
        console.log("Model is Loading.....");
    }
    function identify()
    {
        img=document.getElementById("Capturedimage");
        classifier.classify(img,gotResult);
    }
    
    function gotResult(error,results)
    {
        if(error)
        {
            console.log(error);
            
        }
        else
        {
           console.log(results);
           document.getElementById("result_object_name").innerHTML=results[0].label;
           document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
           
        }
    }