function predictSentiment() {
  
  // get elements from html DOM
  var inputText = document.getElementById("textbox").value;
  var selectedModel = document.getElementById('ml-model').value;
  var predictionContainer = document.getElementById("prediction");
  var predictionText = document.getElementById("prediction-text");
  var originalText = document.getElementById("original-text")

  predictionContainer.style.display = 'flex';
  predictionText.style.display= 'None'

  // Create variable for sending request to python
  var serverData=[{
    'text':inputText,
    'mlmodel':selectedModel
  }]

  //Define ajax request here:
  


  //=======================================
 

  //  $.get("/predict?"+"text="+inputText+"&"+"mlmodel="+selectedModel).done(function (data) {
  //    predictionText.innerHTML = data;
  //  })

}