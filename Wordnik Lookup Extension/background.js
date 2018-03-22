chrome.runtime.onMessage.addListener(reciever);

var word = " ";

function reciever(request, sender, sendRespond) {
  console.log(request);
  word = request.text;
}
