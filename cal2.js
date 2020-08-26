chrome.runtime.sendMessage({'openid':true}, function(response) {
  console.log(response);
});//$("h2 center")[0].innerText=localStorage.getItem("username");
chrome.runtime.sendMessage(debug, function(response) {
  console.log(rr=response.sess);
  document.getElementById("usernameid").value=response.sess;
  setTimeout(function(){
    $.get("http://10.68.100.60/cal2/do.php?getUserNameBySession="+document.getElementById("usernameid").value, function(ee){
      if(ee=="noNeedElection"){
        $("h2 center")[0].innerText="Для вашего пользователя выбор не требуется";
        alert("Для вашего пользователя выбор не требуется");exit;
      }else{
        e=JSON.parse(ee);
      }
      document.getElementById("useridid").value=document.getElementById("usernameid").value;
      document.getElementById("usernameid").value=e;
      $("h2 center")[0].innerText=e;
      $(".btn-primary").show();
      $("td .day-content").click(function(){console.log(this.outerHTML);
if(this.outerHTML.indexOf('background-color: limegreen;')>0){this.style='';}else{$(this).attr("style", 'background-color: limegreen;')}});
    }
   )}, 2000)
  });
