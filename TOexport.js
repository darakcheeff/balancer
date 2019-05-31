b=JSON.parse('[{"id":1,"start":"07:00:00","end":"07:14:59"},{"id":2,"start":"07:15:00","end":"07:29:59"},{"id":3,"start":"07:30:00","end":"07:44:59"},{"id":4,"start":"07:45:00","end":"07:59:59"},{"id":5,"start":"08:00:00","end":"08:14:59"},{"id":6,"start":"08:15:00","end":"08:29:59"},{"id":7,"start":"08:30:00","end":"08:44:59"},{"id":8,"start":"08:45:00","end":"08:59:59"},{"id":9,"start":"09:00:00","end":"09:14:59"},{"id":10,"start":"09:15:00","end":"09:29:59"},{"id":11,"start":"09:30:00","end":"09:44:59"},{"id":12,"start":"09:45:00","end":"09:59:59"},{"id":13,"start":"10:00:00","end":"10:14:59"},{"id":14,"start":"10:15:00","end":"10:29:59"},{"id":15,"start":"10:30:00","end":"10:44:59"},{"id":16,"start":"10:45:00","end":"10:59:59"},{"id":17,"start":"11:00:00","end":"11:14:59"},{"id":18,"start":"11:15:00","end":"11:29:59"},{"id":19,"start":"11:30:00","end":"11:44:59"},{"id":20,"start":"11:45:00","end":"11:59:59"},{"id":21,"start":"12:00:00","end":"12:14:59"},{"id":22,"start":"12:15:00","end":"12:29:59"},{"id":23,"start":"12:30:00","end":"12:44:59"},{"id":24,"start":"12:45:00","end":"12:59:59"},{"id":25,"start":"13:00:00","end":"13:14:59"},{"id":26,"start":"13:15:00","end":"13:29:59"},{"id":27,"start":"13:30:00","end":"13:44:59"},{"id":28,"start":"13:45:00","end":"13:59:59"},{"id":29,"start":"14:00:00","end":"14:14:59"},{"id":30,"start":"14:15:00","end":"14:29:59"},{"id":31,"start":"14:30:00","end":"14:44:59"},{"id":32,"start":"14:45:00","end":"14:59:59"},{"id":33,"start":"15:00:00","end":"15:14:59"},{"id":34,"start":"15:15:00","end":"15:29:59"},{"id":35,"start":"15:30:00","end":"15:44:59"},{"id":36,"start":"15:45:00","end":"15:59:59"},{"id":37,"start":"16:00:00","end":"16:14:59"},{"id":38,"start":"16:15:00","end":"16:29:59"},{"id":39,"start":"16:30:00","end":"16:44:59"},{"id":40,"start":"16:45:00","end":"16:59:59"},{"id":41,"start":"17:00:00","end":"17:14:59"},{"id":42,"start":"17:15:00","end":"17:29:59"},{"id":43,"start":"17:30:00","end":"17:44:59"},{"id":44,"start":"17:45:00","end":"17:59:59"},{"id":45,"start":"18:00:00","end":"18:14:59"},{"id":46,"start":"18:15:00","end":"18:29:59"},{"id":47,"start":"18:30:00","end":"18:44:59"},{"id":48,"start":"18:45:00","end":"18:59:59"},{"id":49,"start":"19:00:00","end":"19:14:59"},{"id":50,"start":"19:15:00","end":"19:29:59"},{"id":51,"start":"19:30:00","end":"19:44:59"},{"id":52,"start":"19:45:00","end":"19:59:59"},{"id":53,"start":"20:00:00","end":"20:14:59"},{"id":54,"start":"20:15:00","end":"20:29:59"},{"id":55,"start":"20:30:00","end":"20:44:59"},{"id":56,"start":"20:45:00","end":"20:59:59"},{"id":57,"start":"21:00:00","end":"21:14:59"},{"id":58,"start":"21:15:00","end":"21:29:59"},{"id":59,"start":"21:30:00","end":"21:44:59"},{"id":60,"start":"21:45:00","end":"21:59:59"},{"id":61,"start":"22:00:00","end":"22:14:59"},{"id":62,"start":"22:15:00","end":"22:29:59"},{"id":63,"start":"22:30:00","end":"22:44:59"},{"id":64,"start":"22:45:00","end":"22:59:59"},{"id":65,"start":"23:00:00","end":"23:14:59"},{"id":66,"start":"23:15:00","end":"23:29:59"},{"id":67,"start":"23:30:00","end":"23:44:59"},{"id":68,"start":"23:45:00","end":"23:59:59"},{"id":69,"start":"00:00:00","end":"00:14:59"},{"id":70,"start":"00:15:00","end":"00:29:59"},{"id":71,"start":"00:30:00","end":"00:44:59"},{"id":72,"start":"00:45:00","end":"00:59:59"},{"id":73,"start":"01:00:00","end":"01:14:59"},{"id":74,"start":"01:15:00","end":"01:29:59"},{"id":75,"start":"01:30:00","end":"01:44:59"},{"id":76,"start":"01:45:00","end":"01:59:59"},{"id":77,"start":"02:00:00","end":"02:14:59"},{"id":78,"start":"02:15:00","end":"02:29:59"},{"id":79,"start":"02:30:00","end":"02:44:59"},{"id":80,"start":"02:45:00","end":"02:59:59"},{"id":81,"start":"03:00:00","end":"03:14:59"},{"id":82,"start":"03:15:00","end":"03:29:59"},{"id":83,"start":"03:30:00","end":"03:44:59"},{"id":84,"start":"03:45:00","end":"03:59:59"},{"id":85,"start":"04:00:00","end":"04:14:59"},{"id":86,"start":"04:15:00","end":"04:29:59"},{"id":87,"start":"04:30:00","end":"04:44:59"},{"id":88,"start":"04:45:00","end":"04:59:59"},{"id":89,"start":"05:00:00","end":"05:14:59"},{"id":90,"start":"05:15:00","end":"05:29:59"},{"id":91,"start":"05:30:00","end":"05:44:59"},{"id":92,"start":"05:45:00","end":"05:59:59"},{"id":93,"start":"06:00:00","end":"06:14:59"},{"id":94,"start":"06:15:00","end":"06:29:59"},{"id":95,"start":"06:30:00","end":"06:44:59"},{"id":96,"start":"06:45:00","end":"06:59:59"}]');
Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          '-'+(mm>9 ? '' : '0')+ mm + '-',
          (dd>9 ? '' : '0') + dd
         ].join('');
};

var date = new Date();
ddd=date.yyyymmdd();


var d = new Date();var r=[];
d = (d.getDate().toString.length==1?'0'+d.getDate():d.getDate()) + "." + ((d.getMonth()+1).toString.length==1?'0'+(d.getMonth()+1):d.getMonth()+1) + "." + d.getFullYear();

var b1 = Object.keys(b).map(function(key) {
  return [Number(key), b[key]];
});


$.ajax({
  url:'http://dc1-srv-wfm-01.ipcc.local/TeleoptiWFM/Web/api/TeamSchedule/TeamScheduleOld',
  type:"POST",
  data:'{"SelectedDate":ddd,"ScheduleFilter":{"teamIds":"eec7c963-0f59-41d2-87d6-a8aa007603bf","filteredStartTimes":"","filteredEndTimes":"","isDayOff":false,"TimeSortOrder":null},"Paging":{"Take":500,"Skip":0}}',
  contentType:"application/json; charset=utf-8",
  dataType:"json",
  success: function(data){a=data.AgentSchedules;





$.each(a, function(i,v){
	if((v.IsDayOff==false)&&(v.ShiftCategory!=null)){
		user=v.Name.split(' ')[0]+' '+v.Name.split(' ')[1];
		//console.log(user+' '+v.ShiftCategory.Name);
		var ints=[]; r1={};
		$.each(v.ScheduleLayers, function(ii,vv){
			if((vv.TitleHeader=="ЦТП_готов")||(vv.TitleHeader=="ЦТП_заявки")){
				start=vv.Start.split("T")[1]; 
				end=vv.End.split("T")[1];
				//console.log(start, '-', end);
				$.each(b, function(iii,vvv){
					if(end<start){
						if((start<=vvv.start)&&(vvv.end<"23:60:60")){ints.push(vvv.id)}
						if(("00:00:00"<=vvv.start)&&(vvv.end<end)){ints.push(vvv.id)}
					}else{
						if((start<=vvv.start)&&(vvv.end<end)){ints.push(vvv.id)}
					}
				})
			}
		})
		//console.log(ints.join(','));console.log(b1[ints[ints.length-1]==96?0:ints[ints.length-1]][1].start);
		r1.user=user;r1.times=[];//r1.times=
		r1.times.push({"date":d, "startTime":b[ints[0]-1].start, "endTime":b1[ints[ints.length-1]==96?0:ints[ints.length-1]][1].start, "intervals": ints});
		r.push(r1);
    }

})
//JSON.stringify(r);
$("footer")[0].innerHTML='<textarea readonly="" id="textArea4Botnet">'+JSON.stringify(r);+'</textarea>';
$("#textArea4Botnet").select();
document.execCommand('copy');
alert('Данные скопированы в буфер обмена');
}
})
