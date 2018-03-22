window.addEventListener('mouseup', wordSelected);

function wordSelected() {
  var words = window.getSelection().toString();
  if (words.length > 0) {
    var message = {text : words};
    chrome.runtime.sendMessage(message);
  }
}
