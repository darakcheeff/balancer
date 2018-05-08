function writeData(name, value)
{
        localStorage.setItem(name, value);
}

function readData(name)
{
        return localStorage.getItem(name);
}

function isLogged()
{
        if(localStorage.getItem("balancerSess"))
        {
                $('#alertid').removeClass().toggleClass('alert-success').toggleClass('alert')[0].innerHTML='<strong>Вход выполнен.</strong> Онлайн';
                $('#dozvon')[0].disabled=false;
                $('#mail')[0].disabled=false;
                $('#exit')[0].disabled=false;

        }else{
                $('#enter')[0].disabled=false;
                $('#alertid').removeClass().toggleClass('alert-danger').toggleClass('alert')[0].innerHTML='<strong>Требуется вход.</strong>Для авторизации требуется открыть <a target="_blank" href="http://10.78.16.120:8080/argus/">Argus</a> и войти в него, далее нажать Войти на этой форме';
        }
}

function login()
{

}

function get_tabs()
{ chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
      //collect all of the urls here, I will just log them instead
      console.log(tab);
    });
  });
});

}

function messGet(mode){
                mess=JSON.parse(httpGet('http://10.68.100.60/botnet/do.php?messGet='+localStorage.getItem("balancerSess")));
                $('#mail .badge')[0].innerHTML=mess.length;
                if(mode=="full"){
                        $('#main_table')[0].hidden=false;
                        $('#table_head_id')[0].innerHTML="<thead> <tr><th>Время</th><th>Сообщение</th><th>Действие</th> </tr></thead>";
                        table='';
                        $.each(mess, function(index, value){
                        //if(value.type=="alert"){alert("["+value.created+"]: \n"+value.value);}
                        table=table+'<tr><td>'+value.created+'</td><td>'+value.value+'</td><td><button class="btn dropdown-toggle btn-warning mailread" id="mailread" value="'+value.id+'">Прочитано</button></td></tr>';
                        })
                        document.getElementById('tbody_id').innerHTML=table;
                        $(".mailread").click(function() {
                        httpGet('http://10.68.100.60/botnet/do.php?mailread='+$(this)[0].value+'&hash='+localStorage.getItem("balancerSess"));
                        $(this).prop( "disabled", true );
                //messGet();
                });}
}

function dozvon(){
        dozvony=JSON.parse(httpGet('http://10.68.100.60/mng/do.php?userDozvon='+localStorage.getItem("username")));
        $('#dozvon .badge')[0].innerHTML=dozvony.length;
        $('#main_table')[0].hidden=false;
        $('#table_head_id')[0].innerHTML="<thead> <tr><th>CRM</th><th>Время</th> </tr></thead>";
        table='';
        var  argusLink='http://10.78.16.120:8080/argus/views/supportservice/incident/IncidentView.xhtml?businessInteraction=Incident-';
         $.each(dozvony, function(index, value) {
     table=table+'<tr><td><a target="_blank" href="'+argusLink+value.shortLink+'">'+value.incident+'</a></td><td>'+value.postponed_date+'</td><td>'+'</td></tr>';
     })
     document.getElementById('tbody_id').innerHTML=table;
    };




function online(){
                httpGet('http://10.68.100.60/botnet/do.php?online=1&hash='+localStorage.getItem("balancerSess"));
        }


//chrome.alarms.onAlarm.addListener(function (){messGet()});

var alarmClock = {

        onHandler : function(e) {
            chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.2} );
                    window.close();
        },

        offHandler : function(e) {
            chrome.alarms.clear("myAlarm");
                    window.close();
        },

        setup: function() {
            var a = document.getElementById('alarmOn');
            a.addEventListener('click',  alarmClock.onHandler );
            var a = document.getElementById('alarmOff');
            a.addEventListener('click',  alarmClock.offHandler );
        }
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
});

$("#exit").click(function() {
httpGet('http://10.68.100.60/botnet/do.php?exit=1&hash='+localStorage.getItem("balancerSess"));
localStorage.setItem("balancerSess", "");
alert( "Выход выполнен" );
isLogged;
});

