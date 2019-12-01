chrome.runtime.sendMessage({'openid':true}, function(response) {
  console.log(response);
});//$("h2 center")[0].innerText=localStorage.getItem("username");
chrome.runtime.sendMessage(debug, function(response) {
  console.log(rr=response.sess);
  document.getElementById("usernameid").value=response.sess;
  setTimeout(function(){
    $.get("http://10.68.100.60/cal/do.php?getUserNameBySession="+document.getElementById("usernameid").value, function(ee){
      e=JSON.parse(ee);
      document.getElementById("useridid").value=document.getElementById("usernameid").value;
      document.getElementById("usernameid").value=e;
      $("h2 center")[0].innerText=e;
      $(".btn-primary").show();
    }
   )}, 2000)
  });
