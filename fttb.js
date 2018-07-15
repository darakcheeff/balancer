eval(httpGet('http://code.jquery.com/jquery-latest.js'));
$.each($(".iptv_mac"), function(i,v){mac=normalizeMAC(v.outerText);var out = "<a href=\"http:\/\/10.68.15.27:8081\/smarttube\/master\/adminui4\/app\/ServiceAccount\/list?info_listMac=%25"+mac+"%25&page_num=1\" target=\"_blank\">pl<\/a>"
     $('.iptv_mac')[i].parentElement.parentElement.innerHTML+=out;})
