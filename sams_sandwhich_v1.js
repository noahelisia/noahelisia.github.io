// JavaScript Document
alert("js is attached")

function loopform(form) {
	alert("Check your order please");//test alert
	var sandwhichOrder = []; //defines an empty list
	for ( var i = 0; i < form.elements.length; i++ ) {//for loop through the form 
		if ( form.elements[i].type == "radio"){
			if ( form.elements[i].checked){
				sandwhichOrder.push( form.elements[ i ].value);
				alert(sandwhichOrder);//test alert
			}	
		}
		if ( form.elements[ i ].type == 'Checkbox'){
			if(form.elements[i].checked){
				sandwhichOrder.push(form.elements[i].value + ' ');
				alert(sandwhichOrder);//test alert
			}
		}
		//once the for loop has gone through each element in the form 
		//it will output the list using the DOM
		document.getElementById( "radioResults").innerHTML = sandwhichOrder;
	}
}