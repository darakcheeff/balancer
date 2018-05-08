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
