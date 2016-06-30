 // JavaScript Document


var jsonStuff = {
	
	
	getAllImages:function(){
		var x = '';
		x = document.getElementsByTagName("img");
		//alert("There are "+ x.length +" images");
		//if(){
			
		addEventListener("click", jsonStuff.saySomething);
			//}
		},
		saySomething:function(e){
			if(e.target.nodeName == "IMG"){
				var url = "createComment.php";
				var comment = prompt("comment","");
				var ajax = new XMLHttpRequest();
				ajax.open("POST", url ,true);
				ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				ajax.onreadystatechange = function(){
					if(ajax.readyState == 4 & ajax.status == 200){
							//alert(ajax.responseText.lenght);
							//var a = JSON.parse(ajax.responseText);
							var textarea = document.getElementById('textArea');
								textarea.value = ajax.responseText;
								console.log(ajax.responseText);
								//alert(e.target.src);
					}
				}
				//ajax.send("appSettings=true&phoneOnAllPages="+y.value+"&id="+getUserId());
				ajax.send("comment="+comment);
			}
		}

}//end jsonStuff

window.onload = jsonStuff.getAllImages;