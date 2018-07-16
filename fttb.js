//eval(httpGet('http://code.jquery.com/jquery-latest.js'));

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
localStorage.setItem('saveButton', `getUrl='?access_vlan='+$('select[name="access_vlan"')[0].value;$.each($("input"), function(i,v){if((i<7)&&((v.checked)||(v.type!="radio")&&(v.type!="checkbox"))){getUrl+="&"+v.name+'='+v.value}});document.location.search="?"+getUrl;`);
function saveConfig(){
	getUrl='?access_vlan='+$('select[name="access_vlan"')[0].value;$.each($("input"), function(i,v){if((i<7)&&((v.checked)||(v.type!="radio")&&(v.type!="checkbox"))){getUrl+="&"+v.name+'='+v.value}});document.location.search="?"+getUrl;
}
try{
frames[2].window.saveConfig = function(){
	getUrl='?access_vlan='+$('select[name="access_vlan"')[0].value;$.each($("input"), function(i,v){if((i<7)&&((v.checked)||(v.type!="radio")&&(v.type!="checkbox"))){getUrl+="&"+v.name+'='+v.value}});document.location.search="?"+getUrl;
}}catch(e){console.log(e);}

if((document.location.href!='http://fttb.mts-nn.ru/index_t1.php')&&(document.location.href!='http://fttb.mts-nn.ru/index_l.php')){
	eval(httpGet('http://code.jquery.com/jquery-latest.js'));
try{$.each($(".iptv_mac"), function(i,v){
	mac=normalizeMAC(v.outerText);
	var out = "<a href=\"http:\/\/10.68.15.27:8081\/smarttube\/master\/adminui4\/app\/ServiceAccount\/list?info_listMac=%25"+mac+"%25&page_num=1\" target=\"_blank\">pl<\/a>";
     	$('.iptv_mac')[i].parentElement.parentElement.innerHTML+=out;
	$(".iptv_mac")[i].setAttribute('onclick', 'stb_create_dialog_mac("'+$(".iptv_mac")[i].innerText+'");')
})}catch(e){console.log(e);}
//eval(httpGet('http://fttb.mts-nn.ru/js/jquery-1.9.1.js'));
//eval(httpGet('http://fttb.mts-nn.ru/js/jquery-ui-1.10.3.js'));
eval(httpGet('http://fttb.mts-nn.ru/js/stb.js'));
	   try{ frames[2].window.saveConfig = function(){
	getUrl='?access_vlan='+$('select[name="access_vlan"')[0].value;$.each($("input"), function(i,v){if((i<7)&&((v.checked)||(v.type!="radio")&&(v.type!="checkbox"))){getUrl+="&"+v.name+'='+v.value}});document.location.search="?"+getUrl;
}}catch(e){console.log(e);}
	    function saveConfig(){
	getUrl='?access_vlan='+$('select[name="access_vlan"')[0].value;$.each($("input"), function(i,v){if((i<7)&&((v.checked)||(v.type!="radio")&&(v.type!="checkbox"))){getUrl+="&"+v.name+'='+v.value}});document.location.search="?"+getUrl;
}
		
	    $(".iptv_mac").click(
      function(event){
        var mac = $(this).html();
        stb_create_dialog_mac(mac);

      }
  );}

try{
	if($("input[name='configure_style'")[0]){$('input[value="Сохранить конфигурацию"')[0].setAttribute("onclick", 'eval(localStorage.getItem("saveButton"));');var a1=[];$.each($('form[action="mac.php"')[0].children, function(i,v){a1[i]=v.name+'='+v.value;})
document.body.innerHTML=document.body.innerHTML+"<tr><td><iframe src='mac.php?"+encodeURI(a1.join('&'))+"' width='100%' height='100%' ></iframe></td></tr>";}}catch(e){console.log(e);}
