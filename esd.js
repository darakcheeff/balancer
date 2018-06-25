function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}




function hexToDec(hex) {
    var result = 0, digitValue;
    hex = hex.toLowerCase();
    for (var i = 0; i < hex.length; i++) {
        digitValue = '0123456789abcdefgh'.indexOf(hex[i]);
        result = result * 16 + digitValue;
    }
    return result;
}

jobs=[];diag={};tu={};ss={};typejob=[];

eval(httpGet('https://esd.pr.rt.ru/assets/8e82586a/jquery.js'));

$( document ).ready(function() {
   starrt();
});


function starrt(){

	$('#panel-main').attr("hidden", "");
	setTimeout(
  function() 
  {
    $('.navbar-left')[0].innerText=region=$('.col-md-1')[0].title; //"Кировский филиал"
	aa=$('#navbar-loading');
	
	/*aa.parent()[0].innerHTML=aa.parent()[0].innerHTML.replace('</p>', '</p>'+httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/lpindex.html').replace('<a hone></a>', $('.navbar-right')[0].innerHTML)+'</iframe>');
	$('.navbar-right').attr('style', "display:none");
	$('#nolink').click(function(){nolink(); });$('#flap').click(function(){   flap(); });$('#lowspeed').click(function(){   lowspeed(); });$('#settings').click(function(){   settings(); });$('#crash').click(function(){   crash(); });
	*/
	$('#panel-main').removeAttr('hidden');
	$('.task-panel').bind("DOMSubtreeModified",function(){
	a1=this.children[0].children[2].children[1].children[1].innerText.split(':')[1];
	b1=this.children[0].getAttribute("data-task-id");
	//console.log(a1+'-'+b1);
	if(true){panelChanged(b1, a1);}})
		
	
	$('.order-row-value').bind("DOMSubtreeModified",function(){
	location.reload();
	});
	
	window.addEventListener("hashchange",function(){if(localStorage.getItem('lasturl')!=location.href)localStorage.setItem('lasturl', location.href);location.reload();}, false);
	
	$('a[data-task-id="22001"')[0].click();
	$('a[data-task-id="22006"')[0].click();

	 //блокировки
	}, 3000);
}

function getJobs(){
	jobs=[];
	$.each($('.task-jobs'), function( index, value ) {
	  jobs[jobs.length]= httpGet(value.innerText.replace('ESDJ:', 'https://esd.pr.rt.ru/jobs/list-read?job_id=') );
	});
}

function writeError(text){
	$(".footer")[0].innerHTML='<div style=" color: #e04156;font-size: 24px;"><center>'+text+'</center></div>';
}

function getJob(id){
	return httpGet("https://esd.pr.rt.ru/jobs/list-read?job_id="+id);
}

function panelChanged(type, job){//контролирует изменение панели с заданием
	if((type>100)&&(job>100)){
		if(typejob[type]!=job){
			typejob[type]=job;
			//console.log(typejob);
			if(type==11002){getDiag(getJob(job));} //HPSA: Диагностика оборудования
			if(type==11004){} //HPSA: Диагностика кабеля
			if(type==31001){getTU(getJob(job));} //СЛТУ: Данные технического учёта
			if(type==52001){} //SmartSpy: Журнал STB
			if(type==22003){} //АСР Старт: Баланс лицевого счёта
			if(type==22002){} //АСР Старт: Тарифный план
			if(type==22001){if(getJob(job).indexOf('&mdash;')>0){writeError('Обнаружены блокировки, проверьте внимательно их актуальность');}} //АСР Старт: Блокировки АСР
			if(type==22005){} //АСР Старт: SMS-уведомление
			if(type==22004){} //АСР Старт: Привязка к порту оборудования
			if(type==22006){} //АСР Старт: Активная сессия
			if(type==22008){} //АСР Старт: IPTV подписки VoD
			if(type==41001){getSess(getJob(job));} //RADIUS: PPPoE сессии клиента
		}
	}
}

function getBlock(){
	url='https://esd.pr.rt.ru/jobs/list-read?job_id='+$('a[data-task-id="22001"')[0].parentElement.parentElement.parentElement.children[2].innerHTML.split('J:')[1].split('<')[0];
	blocks=httpGet(url);
	if(blocks.indexOf('&mdash;')>0){writeError('Обнаружены блокировки, проверьте внимательно их актуальность');}
}

function nolink(){
	$('#panel-main')[0].innerHTML=httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/lpnolink.html')+$('#panel-main')[0].innerHTML;
	console.log(tu.ip);
	setTimeout(
		function() 	{
			if(ss.ip){$("input[name=ip")[0].value=ss.ip;}else{$("input[name=ip")[0].value=tu.ip;}
			if(ss.port){
				$("input[name=port")[0].value=ss.port;
				$("input[name=slot")[0].value=ss.slot;
				$("input[name=flaps")[0].value=ss.lostCar;
			}else{
				$("input[name=port")[0].value=tu.port;
				$("input[name=slot")[0].value=tu.slot;
				$("input[name=flaps")[0].value=0;
				}
		$("input[name=lut")[0].value=diag.lut;
		$("input[name=ldt")[0].value=diag.ldt;
		if(diag.portState){$("select[name=link")[0].value=diag.portState;}if(diag.line_state){$("select[name=link")[0].value=diag.line_state;}
		
			}, 2000);
}

function flap(){
	$('#panel-main')[0].innerHTML=httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/lpattempts.html')+$('#panel-main')[0].innerHTML;
	console.log(tu.ip);
	setTimeout(
		function() 	{
			if(ss.ip){$("input[name=ip")[0].value=ss.ip;}else{$("input[name=ip")[0].value=tu.ip;}
			if(ss.port){
				$("input[name=port")[0].value=ss.port;
				$("input[name=slot")[0].value=ss.slot;
				$("input[name=flaps")[0].value=ss.lostCar;
			}else{
				$("input[name=port")[0].value=tu.port;
				$("input[name=slot")[0].value=tu.slot;
				$("input[name=flaps")[0].value=0;
				}
		$("input[name=lut")[0].value=diag.lut;
		$("input[name=ldt")[0].value=diag.ldt;
		$("input[name=proD")[0].value=diag.atuc_att_rate;
		$("input[name=proU")[0].value=diag.atur_att_rate;
		$("input[name=speedD")[0].value=diag.atuc_rate;
		$("input[name=DpeedU")[0].value=diag.atur_rate;
		$("input[name=snrD")[0].value=diag.atuc_snr;
		$("input[name=snrU")[0].value=diag.atur_snr;
		$("input[name=attD")[0].value=diag.atuc_attenuation;
		$("input[name=attU")[0].value=diag.atur_attenuation;
		$("input[name=atuc")[0].value=diag.atuc_blocks_transmitted;
		$("input[name=atuce")[0].value=diag.atuc_uncorrectable_errors;
		$("input[name=atur")[0].value=diag.atur_blocks_transmitted;
		$("input[name=ature")[0].value=diag.atur_uncorrectable_errors;
		if(diag.portState){$("select[name=link")[0].value=diag.portState;}if(diag.line_state){$("select[name=link")[0].value=diag.line_state;}
		
			}, 2000);
}

function lowspeed(){
	$('#panel-main')[0].innerHTML=httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/lpspeed.html')+$('#panel-main')[0].innerHTML;
	setTimeout(
		function() 	{
			if(ss.ip){$("input[name=ip")[0].value=ss.ip;}else{$("input[name=ip")[0].value=tu.ip;}
			if(ss.port){
				$("input[name=port")[0].value=ss.port;
				$("input[name=slot")[0].value=ss.slot;
				$("input[name=flaps")[0].value=ss.lostCar;
			}else{
				$("input[name=port")[0].value=tu.port;
				$("input[name=slot")[0].value=tu.slot;
				$("input[name=flaps")[0].value=0;
				}
		$("input[name=lut")[0].value=diag.lut;
		$("input[name=ldt")[0].value=diag.ldt;
		$("input[name=proD")[0].value=diag.atuc_att_rate;
		$("input[name=proU")[0].value=diag.atur_att_rate;
		$("input[name=speedD")[0].value=diag.atuc_rate;
		$("input[name=DpeedU")[0].value=diag.atur_rate;
		$("input[name=snrD")[0].value=diag.atuc_snr;
		$("input[name=snrU")[0].value=diag.atur_snr;
		$("input[name=attD")[0].value=diag.atuc_attenuation;
		$("input[name=attU")[0].value=diag.atur_attenuation;
		$("input[name=atuc")[0].value=diag.atuc_blocks_transmitted;
		$("input[name=atuce")[0].value=diag.atuc_uncorrectable_errors;
		$("input[name=atur")[0].value=diag.atur_blocks_transmitted;
		$("input[name=ature")[0].value=diag.atur_uncorrectable_errors;
		if(diag.portState){$("select[name=link")[0].value=diag.portState;}if(diag.line_state){$("select[name=link")[0].value=diag.line_state;}
		
		
			}, 2000);

}

function lspsave(){
	$("textarea ")[0].value=$("textarea ")[0].placeholder+"\nПодключение по ТУ: "+$("input[name=ip")[0].value+'/'+$("input[name=slot")[0].value+'/'+$("input[name=port")[0].value+'\nLink: '+$("select[name=link")[0].value+'\nLast uptime/downtime: '+$("input[name=lut")[0].value+'/'+$("input[name=ldt")[0].value+'\nКоличество разрывов:: '+$("input[name=flaps")[0].value+'\nСхема включения: '+$("select[name=split")[0].selectedOptions[0].innerText+'\nProfile (down/up): '+$("input[name=proD")[0].value+'/'+$("input[name=proU")[0].value+'\nФакт.скорость (down/up): '+$("input[name=speedD")[0].value+'/'+$("input[name=DpeedU")[0].value+'\nSNR (down/up): '+$("input[name=snrD")[0].value+'/'+$("input[name=snrD")[0].value+'\nЗатухание (down/up) '+$("input[name=attD")[0].value+'/'+$("input[name=attD")[0].value+'\nБлоки переданные atu-c: '+$("input[name=atuc")[0].value+'\nошибки atu-с: '+$("input[name=atuce")[0].value+'\nБлоки переданные atu-r: '+$("input[name=atur")[0].value+'\nошибки atu-r: '+$("input[name=ature")[0].value+'\nЗамер скорости с клиентом: '+$("input[name=speed")[0].value+'\nПриставка IPTV:'+$("select[name=stb")[0].selectedOptions[0].innerText;
}

function settings(){
	$('#panel-main')[0].innerHTML=httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/lpsettings.html')+$('#panel-main')[0].innerHTML;
	setTimeout(
		function() 	{
			if(ss.ip){$("input[name=ip")[0].value=ss.ip;}else{$("input[name=ip")[0].value=tu.ip;}
			if(ss.port){
				$("input[name=port")[0].value=ss.port;
				$("input[name=slot")[0].value=ss.slot;
				$("input[name=flaps")[0].value=ss.lostCar;
			}else{
				$("input[name=port")[0].value=tu.port;
				$("input[name=slot")[0].value=tu.slot;
				$("input[name=flaps")[0].value=0;
				}
		$("input[name=lut")[0].value=diag.lut;
		$("input[name=ldt")[0].value=diag.ldt;
		$("input[name=proD")[0].value=diag.atuc_att_rate;
		$("input[name=proU")[0].value=diag.atur_att_rate;
		$("input[name=speedD")[0].value=diag.atuc_rate;
		$("input[name=DpeedU")[0].value=diag.atur_rate;
		$("input[name=snrD")[0].value=diag.atuc_snr;
		$("input[name=snrU")[0].value=diag.atur_snr;
		$("input[name=attD")[0].value=diag.atuc_attenuation;
		$("input[name=attU")[0].value=diag.atur_attenuation;
		
		if(diag.portState){$("select[name=link")[0].value=diag.portState;}if(diag.line_state){$("select[name=link")[0].value=diag.line_state;}
		
			}, 2000);

}

function crash(){
	$('#panel-main')[0].innerHTML=httpGet('https://raw.githubusercontent.com/darakcheeff/balancer/master/lpcrash.html')+$('#panel-main')[0].innerHTML;
	setTimeout(
		function() 	{
			if(ss.ip){$("input[name=ip")[0].value=ss.ip;}else{$("input[name=ip")[0].value=tu.ip;}
			if(ss.port){
				$("input[name=port")[0].value=ss.port;
				$("input[name=slot")[0].value=ss.slot;
				$("input[name=flaps")[0].value=ss.lostCar;
			}else{
				$("input[name=port")[0].value=tu.port;
				$("input[name=slot")[0].value=tu.slot;
				$("input[name=flaps")[0].value=0;
				}
		$("input[name=lut")[0].value=diag.lut;
		$("input[name=ldt")[0].value=diag.ldt;
		$("input[name=proD")[0].value=diag.atuc_att_rate;
		$("input[name=proU")[0].value=diag.atur_att_rate;
		$("input[name=speedD")[0].value=diag.atuc_rate;
		$("input[name=DpeedU")[0].value=diag.atur_rate;
		$("input[name=snrD")[0].value=diag.atuc_snr;
		$("input[name=snrU")[0].value=diag.atur_snr;
		$("input[name=attD")[0].value=diag.atuc_attenuation;
		$("input[name=attU")[0].value=diag.atur_attenuation;
		$("input[name=atuc")[0].value=diag.atuc_blocks_transmitted;
		$("input[name=atuce")[0].value=diag.atuc_uncorrectable_errors;
		$("input[name=atur")[0].value=diag.atur_blocks_transmitted;
		$("input[name=ature")[0].value=diag.atur_uncorrectable_errors;
		if(diag.portState){$("select[name=link")[0].value=diag.portState;}if(diag.line_state){$("select[name=link")[0].value=diag.line_state;}
		
			}, 2000);

}


function getTU(jobcontent){
	
	if(jobcontent.indexOf('Ошибка: ESD')==-1){
		if(jobcontent.indexOf('	коммутатор FTTx')==-1){
			if(jobcontent.indexOf('IP-адрес')!=-1){tu.ip=jobcontent.split('IP-адрес')[1].split('</td><td>')[1].split('<')[0];}
			if(jobcontent.indexOf('Порт')!=-1){tu.port=jobcontent.split('Порт')[1].split('</td><td>')[1].split('<')[0];}
			if(jobcontent.indexOf('Слот')!=-1){slot1=jobcontent.split('Слот')[1].split('</td><td>')[1].split('<')[0];}
			if(jobcontent.indexOf('Полка')!=-1){slot2=jobcontent.split('Полка')[1].split('</td><td>')[1].split('<')[0].split(' ')[1];}
			if(slot1<slot2){tu.slot=slot2;}else{tu.slot=slot1;}
			if(tu.slot==''){tu.slot=jobcontent.split('Полка')[1].split('</td><td>')[1].split('<')[0];}
			if(jobcontent.indexOf('Производитель')!=-1){tu.vendor=jobcontent.split('Производитель')[1].split('</td><td>')[1].split('<')[0];}
			if(jobcontent.indexOf('Модель')!=-1){tu.device=jobcontent.split('Модель')[1].split('</td><td>')[1].split('<')[0];}
			if((tu.vendor=="mBan")&&(tu.device=="si2000")){tu.slot=jobcontent.split('Слот')[1].split('</td><td>')[1].split('<')[0];}
			if(tu.vendor=="ZyXEL"){if(jobcontent.indexOf('Полка')!=-1){tu.slot=jobcontent.split('Полка')[1].split('</td><td>')[1].split('<')[0];}}
			if(tu.vendor=="Alcatel"){if(jobcontent.indexOf('Полка')!=-1){tu.slot=jobcontent.split('Полка')[1].split('</td><td>')[1].split('<')[0];}} //7302 ISAM
			
			if((tu.vendor=="Huawei")&&($('.col-md-1')[0].title=="Нижегородский филиал")){
				if(jobcontent.split('Полка</td>')[1].split('</td>')[0].indexOf(')')!=-1){tu.slot=jobcontent.split('Полка')[1].split(') ')[1].split('<')[0];}else
					{if(jobcontent.split('Полка</td>')[1].indexOf(' ')!=-1){tu.slot=jobcontent.split('Полка')[1].split('<td>')[1].split(' ')[1].split('<')[0];}}
			}
			if((tu.vendor=="Huawei")&&($('.col-md-1')[0].title=="Ульяновский филиал")){tu.slot=jobcontent.split('Полка')[1].split('<td>')[1].split('<')[0]}
			if((tu.vendor=="Huawei")&&($('.col-md-1')[0].title=="Пензенский филиал")){
				tmp1=jobcontent.split('Слот')[1].split('<td>')[1].split('<')[0];
				tmp2=jobcontent.split('Полка')[1].split('<td>')[1].split('<')[0];
				if(tmp1.indexOf(')')!=-1){tu.slot=tmp1.split(')')[0].split('(')[1];}
				if(tmp2.indexOf(')')!=-1){tu.slot=tmp2.split(')')[0].split('(')[1];}
				}
			if((tu.vendor=="Huawei")&&($('.col-md-1')[0].title=="Филиал в Республике Марий Эл")){tu.slot=jobcontent.split('Полка')[1].split('<td>')[1].split('<')[0]}
		//if(jobs[2].indexOf('Нет информации о PPPoE сессиях клиента')>1){		writeError('Нет сессий, возможно, данные некорректны. Требуется ручная проверка');}else{writeError("ESD не может получить всю информацию. Требуется ручное заполнение");}
		if(tu.ip&&tu.port&&tu.vendor&&tu.device&&tu.slot){}else{writeError('Проблема получения ТУ, потребуется ручное заполнение');}
	}}else{
		//не dslam
		
	}
	console.log(tu);
}

function getDiag(jobcontent){
	//console.log(jobcontent);
	//if(jobcontent.indexOf('Ошибка: ESD')==-1){
	if(jobcontent.indexOf('Ошибка: ESD')==-1){
		if(jobcontent.indexOf('vendor')!=-1){diag.vendor=jobcontent.split('vendor')[1].split('</td><td>')[1].split('<')[0];}
		if(jobcontent.indexOf('port_state')!=-1){	diag.portState=jobcontent.split('port_state')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('line_state')!=-1){	diag.lineState=jobcontent.split('line_state')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('admin_state')!=-1){diag.adminState=jobcontent.split('admin_state')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('Last_down_time')!=-1){diag.ldt=jobcontent.split('Last_down_time')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('Last_up_time')!=-1){diag.lut=jobcontent.split('Last_up_time')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atur_rate')!=-1){diag.atur_rate=jobcontent.split('atur_rate')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atuc_snr')!=-1){diag.atuc_snr=jobcontent.split('atuc_snr')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atur_att_rate')!=-1){diag.atur_att_rate=jobcontent.split('atur_att_rate')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atuc_rate')!=-1){diag.atuc_rate=jobcontent.split('atuc_rate')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atuc_attenuation')!=-1){diag.atuc_attenuation=jobcontent.split('atuc_attenuation')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atur_attenuation')!=-1){diag.atur_attenuation=jobcontent.split('atur_attenuation')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atuc_att_rate')!=-1){diag.atuc_att_rate=jobcontent.split('atuc_att_rate')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atur_snr')!=-1){diag.atur_snr=jobcontent.split('atur_snr')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atuc_correctable_errors')!=-1){diag.atuc_correctable_errors=jobcontent.split('atuc_correctable_errors')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atur_correctable_errors')!=-1){diag.atur_correctable_errors=jobcontent.split('atur_correctable_errors')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atur_uncorrectable_errors')!=-1){diag.atur_uncorrectable_errors=jobcontent.split('atur_uncorrectable_errors')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atuc_blocks_received')!=-1){diag.atuc_blocks_received=jobcontent.split('atuc_blocks_received')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atur_blocks_received')!=-1){diag.atur_blocks_received=jobcontent.split('atur_blocks_received')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atuc_uncorrectable_errors')!=-1){diag.atuc_uncorrectable_errors=jobcontent.split('atuc_uncorrectable_errors')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atuc_blocks_transmitted')!=-1){diag.atuc_blocks_transmitted=jobcontent.split('atuc_blocks_transmitted')[1].split('</td><td>')[1].split('<')[0];}
	if(jobcontent.indexOf('atur_blocks_transmitted')!=-1){diag.atur_blocks_transmitted=jobcontent.split('atur_blocks_transmitted')[1].split('</td><td>')[1].split('<')[0];}
	if(diag.vendor.indexOf('Alcatel')>-1){diag.atuc_snr=diag.atuc_snr/10;diag.atur_snr=diag.atur_snr/10;diag.atuc_attenuation=diag.atuc_attenuation/10;diag.atur_attenuation=diag.atur_attenuation/10;}
	if(diag.portState=='active'){diag.portState='up'};if((diag.portState=='activating')||(diag.portState=='Activating')){diag.portState='down'};
	console.log(diag);
	}else{writeError("ESD не может получить всю информацию. Требуется ручное заполнение");}
	//console.log(diag);

}

function getSess(jobcontent){
	console.log(jobcontent);
	if((jobcontent.indexOf('Ошибка: ESD')==-1)&&(jobcontent.indexOf('BRAS')==-1)){
	if($('.col-md-1')[0].title=="Кировский филиал"){
		tmp=(((jobcontent.split('lanid=')[1].split(';')[0]-1000)/100)+'.').replace('.0', '.').split('.');
		ss.port=tmp[1];
		ss.slot=tmp[0];
	}
	ss.lostCar=jobcontent.split('Lost Carrier').length-1;
	if($('.col-md-1')[0].title=="Саратовский филиал"){
		ss.port=jobcontent.split('atm ')[1].split(':')[0].split('/')[3];
		if(jobcontent.split('atm ')[1].split(':')[0].split('/')[2]<11){ss.slot=jobcontent.split('atm ')[1].split(':')[0].split('/')[2]-2;}else{ss.slot=jobcontent.split('atm ')[1].split(':')[0].split('/')[2]*2/2+1;}
		tmp=jobcontent.split(' atm ')[0].split('<br/>')[((jobcontent.split(' atm ')[0].split('<br/>')).length-1)]; //5D42 
		ss.ip='10.64.'+hexToDec(tmp.replace(tmp.substring(2), ''))+'.'+hexToDec(tmp.substring(2));
		
	}
	
	if(($('.col-md-1')[0].title=="Нижегородский филиал")||($('.col-md-1')[0].title=="Ульяновский филиал")||($('.col-md-1')[0].title=="Филиал в Республике Мордовия")||($('.col-md-1')[0].title=="Филиал в Республике Марий Эл")){
		ss.port=jobcontent.split('atm ')[1].split(':')[0].split('/')[3];
		ss.slot=jobcontent.split('atm ')[1].split(':')[0].split('/')[1];
		
	}
	
	if($('.col-md-1')[0].title=="Филиал в Чувашской Республике"){
		
		ss.port=jobcontent.split('inet')[1].split('br')[1].split('>')[1].split('/')[0];
		ss.slot=jobcontent.split('inet')[1].split('br')[1].split('>')[1].split('/')[1];
		
	}
	
	if($('.col-md-1')[0].title=="Филиал в Удмуртской Республике"){
		ss.port=jobcontent.split('lanid=')[1].split(';')[0].substr(-2);
		ss.slot=jobcontent.split('lanid=')[1].split(';')[0].replace(jobcontent.split('lanid=')[1].split(';')[0].substr(-2), '');
	}}else{writeError("ESD не может получить всю информацию. Требуется ручное заполнение");}
	console.log(ss);
}

