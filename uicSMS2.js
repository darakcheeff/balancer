$(".cuesHeaderLink").last()[0].outerHTML='<a onclick="SMS2Table();" class="cuesHeaderLink uicSMS2" style="color: white;">Перехуярить</a>';

function SMS2Table(){
if($(".cuesSelectedDrawerItem").text()=="СПС_День2"){
window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML+="<hr><div>New table</div><hr>";
window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML+="<table text-align='center'><thead><tr style='background-color: #fce4d6;'><th></th><th>Обработано</th><th>Потеряно</th><th>Отвечено за 30с</th><th>SL</th><th>LCR</th></tr></thead><tbody></tbody></table>";
aa='';a1=0;a2=0;a3=0;
$("#tbody tr", window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer")).each(function(i,v){
a1+=parseInt(v.children[4].innerText);
a2+=parseInt(v.children[6].innerText);
a3+=parseInt(v.children[5].innerText);
aa+="<tr><td  style='background-color:  #fce4d6;'>"+v.children[0].innerText+'</td><td>'+
v.children[4].innerText+'</td><td>'+
v.children[6].innerText+'</td><td>'+ 
(v.children[5].innerText+'</td><td class="slBotnetClassSbs2">'+ parseInt(parseInt(v.children[5].innerText)*100/(parseInt(v.children[4].innerText)+parseInt(v.children[6].innerText))) || 0)+'%</td><td class="lcrBotnetClassSbs2">'+
(parseInt(parseInt(v.children[6].innerText)*100/parseInt(v.children[4].innerText))|| 0) +'%</td></tr>'})
a4=parseInt(a3*100/(a1+a2));
a5=parseInt(a2*100/a1);
window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML=window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML.replace('<tbody></tbody>', '<tbody style="text-align: center;">'+aa+'<tr  style="background-color:  #fce4d6;"><td>Итого:</td><td>'+a1+'</td><td>'+a2+'</td><td>'+a3+'</td><td  class="slBotnetClassSbs2">'+a4+'%</td><td class="lcrBotnetClassSbs2">'+a5+'%</td></tr></tbody>').split("NaN").join("0");
$(".slBotnetClassSbs2", window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer")).each(function(i,v){if(parseInt(v.innerText)>=80){$(v).css('background-color', 'lightgreen');}else{$(v).css('background-color', 'pink');}})
$(".lcrBotnetClassSbs2", window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer")).each(function(i,v){if(parseInt(v.innerText)>0){$(v).css('background-color', 'pink');}else{$(v).css('background-color', 'lightgreen');}})
}}

$(".uicSMS2").click(){if($(".cuesSelectedDrawerItem").text()=="СПС_День2"){
window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML+="<hr><div>New table</div><hr>";
window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML+="<table text-align='center'><thead><tr style='background-color: #fce4d6;'><th></th><th>Обработано</th><th>Потеряно</th><th>Отвечено за 30с</th><th>SL</th><th>LCR</th></tr></thead><tbody></tbody></table>";
aa='';a1=0;a2=0;a3=0;
$("#tbody tr", window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer")).each(function(i,v){
a1+=parseInt(v.children[4].innerText);
a2+=parseInt(v.children[6].innerText);
a3+=parseInt(v.children[5].innerText);
aa+="<tr><td  style='background-color:  #fce4d6;'>"+v.children[0].innerText+'</td><td>'+
v.children[4].innerText+'</td><td>'+
v.children[6].innerText+'</td><td>'+ 
(v.children[5].innerText+'</td><td class="slBotnetClassSbs2">'+ parseInt(parseInt(v.children[5].innerText)*100/(parseInt(v.children[4].innerText)+parseInt(v.children[6].innerText))) || 0)+'%</td><td class="lcrBotnetClassSbs2">'+
(parseInt(parseInt(v.children[6].innerText)*100/parseInt(v.children[4].innerText))|| 0) +'%</td></tr>'})
a4=parseInt(a3*100/(a1+a2));
a5=parseInt(a2*100/a1);
window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML=window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML.replace('<tbody></tbody>', '<tbody style="text-align: center;">'+aa+'<tr  style="background-color:  #fce4d6;"><td>Итого:</td><td>'+a1+'</td><td>'+a2+'</td><td>'+a3+'</td><td  class="slBotnetClassSbs2">'+a4+'%</td><td class="lcrBotnetClassSbs2">'+a5+'%</td></tr></tbody>').split("NaN").join("0");
$(".slBotnetClassSbs2", window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer")).each(function(i,v){if(parseInt(v.innerText)>=80){$(v).css('background-color', 'lightgreen');}else{$(v).css('background-color', 'pink');}})
$(".lcrBotnetClassSbs2", window.frames['СПС_День2'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer")).each(function(i,v){if(parseInt(v.innerText)>0){$(v).css('background-color', 'pink');}else{$(v).css('background-color', 'lightgreen');}})
}}
