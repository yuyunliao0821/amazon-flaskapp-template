function predict_sentiment() {
  
  var inputText = document.getElementById("textbox").value;
  var selectedModel = document.getElementById('ml-model').value;
  var predictionContainer = document.getElementById("prediction");
  var predictionText = document.getElementById("prediction-text");
  var originalText = document.getElementById("original-text")

  predictionContainer.style.display = 'flex';
  predictionText.style.display= 'None'

  var server_data=[{
    'text':inputText,
    'mlmodel':selectedModel
  }]

  $.post({
    url:"/predict", 
    data:JSON.stringify(server_data), 
    contentType:'application/json'}).done(function (data){
      predictionText.style.display = 'flex';
      predictionText.innerHTML = data;
      originalText.innerHTML = inputText;
    }
    );

  //  $.get("/predict?"+"text="+inputText+"&"+"mlmodel="+selectedModel).done(function (data) {
  //    predictionText.innerHTML = data;
  //  })

}