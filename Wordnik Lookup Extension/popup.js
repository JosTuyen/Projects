document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.getBackgroundPage(function (bg) {
        var lookup = bg.word;
        document.getElementById('title').innerHTML = lookup + " mean: "
        var url = "http://api.wordnik.com:80/v4/word.json/"+lookup+"/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
        $.getJSON(url, function (data) {
          document.getElementById('content').innerHTML = data[0].text;
        });
    });
});
