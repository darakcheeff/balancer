chrome.runtime.sendMessage({'openid':true}, function(response) {
  console.log(response);
});//$("h2 center")[0].innerText=localStorage.getItem("username");
chrome.runtime.sendMessage(debug, function(response) {
  console.log(rr=response);
