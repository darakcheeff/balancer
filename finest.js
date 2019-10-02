function finestAutoEnable(){
   $.each($("span.state-icon-red",frames['finesse_gadget_2'].document), function(i,v){
    if((v.innerText=="Не готов - Поствызывное состояние")&&(v.parentElement.parentElement.children[2].innerText>"00:02:00"))  {
        console.log(v.parentElement.parentElement.children[0].innerText);
		console.log(v.parentElement.parentElement.parentElement);
        v.parentElement.parentElement.parentElement.click();
		$("span #mrButtonId", frames['finesse_gadget_2'].document)[0].parentElement.click();
		console.log($("#mrButtonId", frames['finesse_gadget_2']));
      
     
    }
  })
}
setTimeout(function() {
$("div[id='teamRoster']",frames['finesse_gadget_2'].document).bind("DOMSubtreeModified",function(){
	setTimeout(function() {finestAutoEnable(); }, 3000);
	});
}, 15000);
