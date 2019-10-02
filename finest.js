function finestAutoEnable(){
  $.each($("span.state-icon-red"), function(i,v){
    if((v.innerText=="Не готов - Поствызывное состояние")&&(v.parentElement.parentElement.children[2].innerText>"00:02:00"))  {
      console.log(v.parentElement.parentElement.children[0].innerText);
      setTimeout(function() {
        v.parentElement.parentElement.click();
        setTimeout(function() {
          $("#mrButtonId_label").click();
        }, 1000);
      }, 1000);
    }
  })
}

$('body').bind("DOMSubtreeModified",function(){
	setTimeout(function() {finestAutoEnable(); }, 3000);
	});
