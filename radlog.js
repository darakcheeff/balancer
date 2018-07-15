eval(httpGet('http://code.jquery.com/jquery-latest.js'));
setTimeout(function(){
if(document.location.pathname=="\/page1.php")
{
    document.f1.getElementsByTagName('p')[1].getElementsByTagName('input')[0].checked=true;//set RADIUS 1
    document.f1.getElementsByTagName('p')[2].getElementsByTagName('input')[0].checked=true;//set all dates
    document.f1.getElementsByTagName('p')[2].getElementsByTagName('input')[1].checked=true;
    document.f1.getElementsByTagName('p')[2].getElementsByTagName('input')[2].checked=true;
}

if(document.location.pathname=="\/index1.php")
{
    console.log($('form').childNodes);
    $('form').childNodes[7].children[1].checked=true; //set RADIUS 1
    $('form').childNodes[11].checked=true;
    $('form').childNodes[13].checked=true;
    $('form').childNodes[15].checked=true;
}
// see sessions by login auto checks
if(document.URL=="http:\/\/radlog.billing.mts-nn.ru\/index.php") //radlog by login
{
    document.getElementById('idstart').checked=true;
    document.getElementById('idstop').checked=true;
    document.getElementById('idall').checked=true;
    document.getElementById('idstart').disabled=false;
    document.getElementById('idstop').disabled=false;
    document.getElementById('idall').disabled=false;
    document.getElementsByName('r1')[0].checked=true
    document.getElementsByName('z1')[1].checked=true
    document.getElementsByName('ch1')[0].checked=true;
    document.getElementsByName('ch2')[0].checked=true;
    document.getElementsByName('ch3')[0].checked=true;
}

if(document.location.pathname=="\/page.php") //radlog by login
{
    document.getElementById('idstart').checked=true;
    document.getElementById('idstop').checked=true;
    document.getElementById('idall').checked=true;
    document.getElementById('idstart').disabled=false;
    document.getElementById('idstop').disabled=false;
    document.getElementById('idall').disabled=false;
    document.getElementsByName('r1')[0].checked=true
    document.getElementsByName('z1')[1].checked=true
    document.getElementsByName('ch1')[0].checked=true;
    document.getElementsByName('ch2')[0].checked=true;
    document.getElementsByName('ch3')[0].checked=true;
}
if(document.getElementsByTagName('table').length){
    var lentable=document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr').length;
    for(var i=0;i<lentable;i++){
       document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[i].getElementsByTagName('th')[3].firstChild.color="#008800";       
        
       var uplogin=document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[i].getElementsByTagName('th')[3].firstChild.firstChild.textContent;
       var login= uplogin.substr(1,uplogin.length-2);
       document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[i].getElementsByTagName('th')[3].firstChild.innerHTML+=createLinks(login);
    }
}
if(document.location.pathname=="\/script.php")
{
    alert(1);
}
function createLinks(txt)
{
    var string= txt;
    var log=string.substr(0,string.indexOf('@'));
    var rilm=string.substr(string.indexOf('@'),string.length);
    var rl=0;
    //alert(rilm);
    if(rilm=='@mts-nn.ru'){
        rl=1;
    }else if(rilm=='@jay'){
        rl=2;
    }else if(rilm=='@open64'){
        rl=3;
    }else if(rilm=='@fly128'){
        rl=4;
    }else if(rilm=='@fly256'){
        rl=5;
    }else if(rilm=='@dhcp'){
        rl=6;
    }
    if(rl==0)
    {
        var out='errlogin';
        return out;
    }else{
        var out='<form style=\"border:0\;padding:0;border-spacing:0;display: inline;margin: 0;" id=\"formr1\" name="\frad\" action=\".\/page.php" method=\"post\" target=\"_blank\" >'+
                '<input type=\"hidden\"" name=\"login\"  value=\"'+log+'\">'+
                '<input type=\"hidden\"" name=\"rilm\"  value=\"'+rl+'\">'+
                '<input type=\"hidden\"" name=\"r1\"  value=\"'+1+'\">'+
                '<input type=\"hidden\"" name=\"z1\"  value=\"'+2+'\">'+
                '<input type=\"hidden\"" name=\"start\"  value=\"'+1+'\">'+
                '<input type=\"hidden\"" name=\"stop\"  value=\"'+1+'\">'+       
                '<input type=\"hidden\"" name=\"all\"  value=\"'+1+'\">'+     
                '<input type=\"hidden\"" name=\"ch1\"  value=\"'+1+'\">'+
                '<input type=\"hidden\"" name=\"ch2\"  value=\"'+1+'\">'+
                '<input type=\"hidden\"" name=\"ch3\"  value=\"'+1+'\">'+
              '<input style=\"border:0\;padding:0;border-spacing:0;" type=\"submit\"" name=\"submit\" value=\"1\" class=\"link\">'+
                '<\/form>';
      var out2='<form id=\"formr2\" style=\"border:0\;padding:0;border-spacing:0;display: inline;margin: 0;"  name="\frad\" style=\"form{white-space:nowrap;}\" action=\".\/page.php" method=\"post\" target=\"_blank\" >'+
                '<input type=\"hidden\"" name=\"login\"  value=\"'+log+'\">'+
                '<input type=\"hidden\"" name=\"rilm\"  value=\"'+rl+'\">'+
                '<input type=\"hidden\"" name=\"r1\"  value=\"'+2+'\">'+
                '<input type=\"hidden\"" name=\"z1\"  value=\"'+2+'\">'+
                '<input type=\"hidden\"" name=\"start\"  value=\"'+1+'\">'+
                '<input type=\"hidden\"" name=\"stop\"  value=\"'+1+'\">'+       
                '<input type=\"hidden\"" name=\"all\"  value=\"'+1+'\">'+     
                '<input type=\"hidden\"" name=\"ch1\"  value=\"'+1+'\">'+
                '<input type=\"hidden\"" name=\"ch2\"  value=\"'+1+'\">'+
                '<input type=\"hidden\"" name=\"ch3\"  value=\"'+1+'\">'+
                '<input style=\"border:0\;padding:0;border-spacing:0;display: inline;margin: 0;" type=\"submit\"" name=\"submit\" value=\"2\" class=\"link\">'+
                '<\/form>';
    return out+out2;
    }
}
}, 2000);
