// JavaScript Document
// JavaScript Document
//global variables
var database = firebase.database();//creating the link to your database
var orderRef = database.ref('order');//creates a referene point to firebase, users node 




function loopForm(form){
	submit_button.enable;
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
	}
	checkInputs(sandwhichOrder);
	}
		//once the for loop has gone through each element in the form 
		//it will output the list using the DOM
		function checkInputs(sandwhichOrder){
			var customer_name = customer_name.value;
			var customer_number = customer_number.value;
			alert("in check name function");
			if(document.getElementById("userName").validity.patternMismatch){
				alert("please enter a valid name")
				return;
			}
			if(document.getElementById("usercellPhone").validity.patternMismatch){
				alert("please enter a valid number");
				return;
			}else{
				alert(customer_name + customer_number);
				document.getElementById("radioResults").innerHTML="name: " + customer_name+""+"phone_number"+customer_number;
				document.getElementById("radioResults").innerHTML="sandWhich order:" + sandwhichOrder;
				sendData(customer_name,customer_number,sandwhichOrder);
			}
		}
		function sendData(user_name,usercellPhone,sandwhichOrder){
		var data={
			sandwhich:sandwhichOrder,
			name:user_name,
			cell_phone:usercellPhone
			}
		orderRef.push(data);
			alert("data has been pushed");
			document.getElementById('confirmOverlay').style.height="100%";
			setTimeout(function(){
				location.reload();
			},3000);
			submit_button.disable
		
		}
	
