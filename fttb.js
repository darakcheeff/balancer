eval(httpGet('http://code.jquery.com/jquery-latest.js'));

function normalizeMAC(denormalizedMAC ) {
	
	var seminormalizedMAC = denormalizedMAC.replace(/%3a|:|-|\./g, '');
	var normalizedMAC = [
		seminormalizedMAC.slice(0,2), ":",
		seminormalizedMAC.slice(2,4), ":",
		seminormalizedMAC.slice(4,6), ":", 
		seminormalizedMAC.slice(6,8), ":", 
		seminormalizedMAC.slice(8,10), ":", 
		seminormalizedMAC.slice(10,12)
		].join('');
	return normalizedMAC;

}
try{$.each($(".iptv_mac"), function(i,v){mac=normalizeMAC(v.outerText);var out = "<a href=\"http:\/\/10.68.15.27:8081\/smarttube\/master\/adminui4\/app\/ServiceAccount\/list?info_listMac=%25"+mac+"%25&page_num=1\" target=\"_blank\">pl<\/a>"
     $('.iptv_mac')[i].parentElement.parentElement.innerHTML+=out;})}catch(e){console.log(e);}

try{var a1=[];$.each($('form[action="mac.php"')[0].children, function(i,v){a1[i]=v.name+'='+v.value;})
document.body.innerHTML=document.body.innerHTML+"<tr><td><iframe src='mac.php?"+encodeURI(a1.join('&'))+"' width='100%' height='100%' ></iframe></td></tr>";}catch(e){console.log(e);}
