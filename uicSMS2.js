$('document').ready(function() {
	$(".cuesHeaderLink").last()[0].outerHTML = '<a class="cuesHeaderLink uicSMS2" id="uicSMS2click" style="color: white;">Свод СПС</a>';
	$("#uicSMS2click").click(function() {
		if ($(".cuesSelectedDrawerItem").text() == "СПС_день") {
			//function SMS2Table(){
			window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML += "<hr><div>New table</div><hr>";
			window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML += "<table text-align='center'><thead><tr style='background-color: #fce4d6;'><th></th><th>Обработано</th><th>Потеряно</th><th>Отвечено за 20с</th><th>SL</th><th>LCR</th><th>ASA</th></tr></thead><tbody></tbody></table>";
			aa = '';
			a1 = 0;
			a2 = 0;
			a3 = 0;
			ktp_aa = '';
			ktp_a1 = 0;
			ktp_a2 = 0;
			ktp_a3 = 0;
			$("#tbody tr", window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer")).each(function(i, v) {
				if ((v.children[0].innerText != "KTP2_vozobn_VLG_SG") && (v.children[0].innerText != "KTP_2LTP_B2C_RM_VLG_SG") && (v.children[0].innerText != "KTP_2LTP_B2C_UDM_VLG_SG") && (v.children[0].innerText != "KTP_2LTP_B2C_UL_VLG_SG")) {
					if ((v.children[0].innerText != "B2B_NN_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_NN_2LTP_VIP_VLG_SG")) {
						a1 += parseInt(v.children[4].innerText);
						a2 += parseInt(v.children[6].innerText);
						a3 += parseInt(v.children[5].innerText);
					}
					aa += "<tr><td  style='background-color:  #fce4d6;'>" + v.children[0].innerText + '</td><td>' +
						v.children[4].innerText + '</td><td>' +
						v.children[6].innerText + '</td><td>' +
						(v.children[5].innerText + '</td><td class="slBotnetClassSbs2">' + parseInt(parseInt(v.children[5].innerText) * 100 / (parseInt(v.children[4].innerText) + parseInt(v.children[6].innerText))) || 0) + '%</td><td class="lcrBotnetClassSbs2">' +
						(parseInt(parseInt(v.children[6].innerText) * 100 / (parseInt(v.children[4].innerText)+parseInt(v.children[6].innerText)) || 0)) + '%</td><td>'+v.children[13].innerText+'</td></tr>'
				}
				else if ((v.children[0].innerText != "B2C_CH_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_KAZ_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_KR_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_ML_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_MR_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_NN_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_OR_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_PN_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_SAR_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_SM_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_UD_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_UL_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_BIS_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_noFilial_2LTP_VLG_SG")) {
					if ((v.children[0].innerText != "B2B_NN_2LTP_VLG_SG") && (v.children[0].innerText != "B2C_NN_2LTP_VIP_VLG_SG")) {
						ktp_a1 += parseInt(v.children[4].innerText);
						ktp_a2 += parseInt(v.children[6].innerText);
						ktp_a3 += parseInt(v.children[5].innerText);
					}
					ktp_aa += "<tr><td  style='background-color:  #fce4d6;'>" + v.children[0].innerText + '</td><td>' +
						v.children[4].innerText + '</td><td>' +
						v.children[6].innerText + '</td><td>' +
						(v.children[5].innerText + '</td><td class="slBotnetClassSbs2">' + parseInt(parseInt(v.children[5].innerText) * 100 / (parseInt(v.children[4].innerText) + parseInt(v.children[6].innerText))) || 0) + '%</td><td class="lcrBotnetClassSbs2">' +
						(parseInt(parseInt(v.children[6].innerText) * 100 / (parseInt(v.children[4].innerText)+parseInt(v.children[6].innerText)) || 0)) + '%</td><td>'+v.children[13].innerText+'</td></tr>'
				}
			})
			a4 = parseInt(a3 * 100 / (a1 + a2));
			a5 = parseInt(a2 * 100 / a1);
			ktp_a4 = parseInt(ktp_a3 * 100 / (ktp_a1 + ktp_a2));
			ktp_a5 = parseInt(ktp_a2 * 100 / ktp_a1);
			window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML = window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").innerHTML.replace('<tbody></tbody>', '<tbody style="text-align: center;">' + aa + '<tr  style="background-color:  #fce4d6;"><td>Итого:</td><td>' + a1 + '</td><td>' + a2 + '</td><td>' + a3 + '</td><td  class="slBotnetClassSbs2">' + a4 + '%</td><td class="lcrBotnetClassSbs2">' + a5 + '%</td></tr></tbody>'+'<tbody style="text-align: center;">' + ktp_aa + '<tr  style="background-color:  #fce4d6;"><td>Итого:</td><td>' + ktp_a1 + '</td><td>' + ktp_a2 + '</td><td>' + ktp_a3 + '</td><td  class="slBotnetClassSbs2">' + ktp_a4 + '%</td><td class="lcrBotnetClassSbs2">' + ktp_a5 + '%</td></tr></tbody>').split("NaN").join("0");

			if (window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild.firstChild.firstChild.innerText.indexOf("B2B") > -1) {
				window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild.lastChild.outerHTML += window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild.firstChild.outerHTML;
				window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild.firstChild.outerHTML = '';
			}
			window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild.innerHTML = window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild.innerHTML.replace("B2C_CH_2LTP_VLG_SG", "Респ. Чувашия").replace("B2C_KAZ_2LTP_VLG_SG", "Респ. Татарстан").replace("B2C_KR_2LTP_VLG_SG", "Кировская обл.").replace("B2C_ML_2LTP_VLG_SG", "Респ. Марий Эл").replace("B2C_MR_2LTP_VLG_SG", "Респ. Мордовия").replace("B2C_NN_2LTP_VLG_SG", "Нижегородская обл.").replace("B2C_OR_2LTP_VLG_SG", "Оренбургская обл.").replace("B2C_PN_2LTP_VLG_SG", "Пензенская обл.").replace("B2C_SAR_2LTP_VLG_SG", "Саратовская обл.").replace("B2C_SM_2LTP_VLG_SG", "Самарская обл.").replace("B2C_UD_2LTP_VLG_SG", "Респ. Удмуртия").replace("B2C_UL_2LTP_VLG_SG", "Ульяновская обл.").replace("B2C_BIS_2LTP_VLG_SG", "Башкортостан").replace("B2C_noFilial_2LTP_VLG_SG", "Нераспознанные").replace("KTP2_vozobn_VLG_SG", "КТП Возобновленные").replace("KTP_2LTP_B2C_RM_VLG_SG", "КТП Респ. Мордовия").replace("KTP_2LTP_B2C_UDM_VLG_SG", "КТП Респ. Удмуртия").replace("KTP_2LTP_B2C_UL_VLG_SG", "КТП Ульяновская обл.");
			$.each(window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild.children, function(i, v) {
				if (($(v).text().indexOf("VIP") > 1)) {
					$(window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild).append(v);
					//console.log(v);
					//$(window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild.children[i]).remove();
					return false;
				}
			})
			if ((window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("dataTable").innerText.indexOf("B2B_NN_2LTP_VLG_SG") > 1) && (window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("dataTable").innerText.indexOf("B2C_NN_2LTP_VIP_VLG_SG") > 1)) {
				uTable = window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer").lastChild.lastChild;
				$(uTable).append('<tr  style="background-color:  #fce4d6;"><td>Итого:</td><td>' + parseInt(parseInt(uTable.children[uTable.children.length - 1].children[1].innerText) + parseInt(uTable.children[uTable.children.length - 2].children[1].innerText)) + '</td><td>' + parseInt(parseInt(uTable.children[uTable.children.length - 1].children[2].innerText) + parseInt(uTable.children[uTable.children.length - 2].children[2].innerText)) + '</td><td>' + parseInt(parseInt(uTable.children[uTable.children.length - 1].children[3].innerText) + parseInt(uTable.children[uTable.children.length - 2].children[3].innerText)) + '</td><td  class="slBotnetClassSbs2">vrd18%</td><td class="lcrBotnetClassSbs2">vrd19%</td></tr></tbody>');
				uTable.innerHTML = uTable.innerHTML.replace('vrd18', parseInt(parseInt(uTable.children[uTable.children.length - 1].children[3].innerText) * 100 / (parseInt(uTable.children[uTable.children.length - 1].children[1].innerText) + parseInt(uTable.children[uTable.children.length - 1].children[2].innerText)))).replace('vrd19', parseInt(parseInt(uTable.children[uTable.children.length - 1].children[2].innerText) * 100 / parseInt(uTable.children[uTable.children.length - 1].children[1].innerText)));
			}
			$(".slBotnetClassSbs2", window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer")).each(function(i, v) {
				if (parseInt(v.innerText) >= 80) {
					$(v).css('background-color', 'lightgreen');
				} else {
					$(v).css('background-color', 'pink');
				}
			})
			$(".lcrBotnetClassSbs2", window.frames['СПС_день'].contentWindow.frames['view1_iframe'].frames['viewframe'].contentDocument.getElementById("scrollTableContainer")).each(function(i, v) {
				if (parseInt(v.innerText) > 2) {
					$(v).css('background-color', 'pink');
				} else {
					$(v).css('background-color', 'lightgreen');
				}
			})
		}
	})


});
