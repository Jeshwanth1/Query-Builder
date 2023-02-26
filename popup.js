window.addEventListener("DOMContentLoaded", () => {
    var form = document.getElementById("Sub");
    form.onclick = returnQuery;
});

function returnQuery(){
    var queryEl = document.getElementById("query");
    var query = document.getElementById("q").value;
    var market = document.getElementById("mkt").value;
    var language = document.getElementById("lang").value;
    var region = document.getElementById("cc").value;
    var viewsrc = document.getElementById("vs");
    var p1aug = document.getElementById("p1aug");
    var pbxml = document.getElementById("pbxml");
    var domain = "www.bing.com";
    var queryText = "https://" + domain + "/search?q=" + query;

    if(market){
        queryText += "&setmkt=" + market;
    }
    if(language){
        queryText += "&setlang=" + language;
    }
    if(region){
        queryText += "&cc=" + region;
    }
    if(viewsrc.checked){
        queryText = "view-source:" + queryText;
    }
    if(p1aug.checked){
        queryText += "&p1=[AppHost WriteAllPluginLogs=\"1\"]";
    }
    if(pbxml.checked){
        queryText += "&format=pbxml";
    }

    queryEl.innerText = queryText;
    navigator.clipboard.writeText(queryText);
}

