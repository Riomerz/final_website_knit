
var session_token;
var ph_number;
var code;
var fname;
var gender;

var now;
var later;
var x1;


function hide_alert(e){
    var id = event.target.id;
    if(id!="alerts"){
		return;
	}
else
 $("#alerts").fadeOut(100);
}

window.onload = function(){
	$('#alert_details').hide();
	var hide = document.getElementById("for-email");
	hide.style.display = "none";
}


function start_login(){
	
										toggleSlider();
									
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");
										var back = document.getElementById("back");									
									/*	var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										//var img =document.getElementById("add_alert_info");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										//img.src="icons/info.png";
										//img.style.display="block";
										/*sel_number.style.display="block";
										sel_email.style.display="block";
										sel_email.innerHTML ="Email";
										sel_number.innerHTML ="Mobile No.";
										input1.style.display ="none";
									    input2.style.display ="none";
										prefix.style.display ="none";*/
										back.style.display = "none";
									    next.innerHTML = "DISMISS";
										next.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="LOGIN";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPElEQVQYV2NkIA4YMxKhzpiBgeEsIYVgRSDD8CmEK8KnEEURLoUYirApxKoIXSFORcgK8SqCKSSoCKQQALilCT6rrB3mAAAAAElFTkSuQmCC) repeat";
									    //msg.innerHTML = "Select a login option<br><br>If you have registered using mobile number choose Mobile number option<br>(mobile number verification will be required).<br><br><br>else choose Email option <br>(enter your Email Id	and Password to log in).<br><br><br><br><br><br>";
										$('#alert_details').show();
										$('#code_text').hide();
										$('#enter_code').hide();
										$('#login').show();
										$('#add_alert_info').hide();
										$('#msg').hide();
										document.getElementById('alert_msg').innerHTML = "";
										next.setAttribute("onclick","toggleSlider()");
										//sel_email.setAttribute("onclick","check_login_email()");
										//sel_number.setAttribute("onclick","check_login_number()");
	
}
function check_login_number(){

										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										img.style.display="block";
										input1.style.display ="block";
										input1.placeholder = "Mobile No.";
										prefix.style.display = "block";
										input1.value = "";
										input2.value = "";
										input2.style.display ="none";
										back.style.display = "block";
										next.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="LOGIN";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPElEQVQYV2NkIA4YMxKhzpiBgeEsIYVgRSDD8CmEK8KnEEURLoUYirApxKoIXSFORcgK8SqCKSSoCKQQALilCT6rrB3mAAAAAElFTkSuQmCC) repeat";
									    msg.innerHTML = "";
										next.innerHTML ="DISMISS";
										//back.innerHTML ="DISMISS";
										next.setAttribute("onclick","toggleSlider()");
										//back.setAttribute("onclick","toggleSlider()");


}
function check_login_email(){
	


										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										img.style.display="block";
										input1.style.display ="block";
										input1.placeholder = "Email";
										next.style.display = "block";
										prefix.style.display = "none";
										input1.value = "";
										input2.value = "";
										input2.style.display ="block";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="EMAIL LOGIN";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPElEQVQYV2NkIA4YMxKhzpiBgeEsIYVgRSDD8CmEK8KnEEURLoUYirApxKoIXSFORcgK8SqCKSSoCKQQALilCT6rrB3mAAAAAElFTkSuQmCC) repeat";
									     msg.innerHTML = "";
										next.innerHTML ="LOGIN";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","login_verify()");
										back.setAttribute("onclick","toggleSlider()");


}


function verify_number(){
	x1 = document.getElementById("enter_number").value;

	ph_number = x1;
	if(x1==""){
										/*var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										prefix.style.display = "none";
										back.style.display = "block";
										//document.getElementById("alert_msg").innerHTML ="*EMPTY FIELD";*/
										document.getElementById('alert_msg').innerHTML = "*EMPTY FIELD";
										setTimeout(function(){$('#alert_msg').hide();},3000);
										//document.getElementById('alert_msg').innerHTML = "*EMPTY FIELD";
										/*document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Some field are empty.";
										next.innerHTML ="LOGIN";
										next.style.display = "block";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","verify_number()");
										back.setAttribute("onclick","toggleSlider()");*/
	
}
else if(x1.length==10){
	
	
		
	if(Number(x1)==NaN)
	{
				
			/*	var modal_class=  document.getElementById("alerts");
				modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										next.style.display = "block";
										back.style.display = "block";
										prefix.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please check your number again";
										next.innerHTML ="LOGIN";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","verify_number()");
										back.setAttribute("onclick","toggleSlider()");*/
										document.getElementById("alert_msg").innerHTML ="*INVALID* Please check your number again";
										setTimeout(function(){$('#alert_msg').hide();},3000);
	}
	else{generate_code_login(x1);
		document.getElementById("alert_title_text").innerHTML ="LOGIN";
		document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPElEQVQYV2NkIA4YMxKhzpiBgeEsIYVgRSDD8CmEK8KnEEURLoUYirApxKoIXSFORcgK8SqCKSSoCKQQALilCT6rrB3mAAAAAElFTkSuQmCC) repeat";
		$('#add_alert_info').hide();
		}
		


}
else{
		var modal_class=  document.getElementById("alerts");
		modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");
										document.getElementById('enter_number').value= "";
										document.getElementById('alert_msg').innerHTML = "";
										//var msg =  document.getElementById("alert_details");
										//var input1 =document.getElementById("enter_email");
										//var input2 =document.getElementById("enter_password");
										//var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										//var sel_number = document.getElementById("select_number");
										//var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										next.style.display = "block";
										//input1.style.display ="block";
										//sel_number.style.display ="none";
									    //sel_email.style.display ="none";
										//prefix.style.display = "none";
										//back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAP0lEQVQYV2NkIAL8P8j+n5GQOrAi+5+MeBXCFIEMw6kQWRFOheiKsCrEpghDIS5FKArxKYIrJKQIrJAYRSCFACC1JtEjjo+nAAAAAElFTkSuQmCC) repeat";
									    //msg.innerHTML = "Please check your number again";
										//next.innerHTML ="LOGIN";
										next.innerHTML ="DISMISS";
										$('#add_alert_info').show();										
										//next.setAttribute("onclick","verify_number()");
										next.setAttribute("onclick","toggleSlider()");
										//setTimeout(document.getElementById("alert_msg").innerHTML ="*INVALID* Please check your number again",1000);
									
	
}
	
}

	
function login_verify(){
var  x1 = document.getElementById("email_id").value;
var  x2 =document.getElementById("password").value;	
	
	
Parse.User.logIn(x1, x2, {
  success: function(user) {
			var currentUser = Parse.User.current();
			if (currentUser) {
				var role = currentUser.get("role");
				
				if(role=="teacher"){
					window.location = "dashboard.html";
					
				}
				else{
										
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										//var msg =  document.getElementById("alert_details");
										//var input1 =document.getElementById("enter_email");
										//var input2 =document.getElementById("enter_password");
										//var prefix =document.getElementById("fixed");
										//var img =document.getElementById("add_alert_info");
										//var back = document.getElementById("back");
										//var sel_number = document.getElementById("select_number");
										//var sel_email = document.getElementById("select_email");
										//img.src="icons/error.png";
										//img.style.display="block";
										//input1.style.display ="none";
										//next.style.display = "block";
										//input2.style.display ="none";
										//prefix.style.display = "none";
										//sel_number.style.display ="none";
									    //sel_email.style.display ="none";
										//back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="TEACHER LOGIN ONLY";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAP0lEQVQYV2NkIAL8P8j+n5GQOrAi+5+MeBXCFIEMw6kQWRFOheiKsCrEpghDIS5FKArxKYIrJKQIrJAYRSCFACC1JtEjjo+nAAAAAElFTkSuQmCC) repeat";
									    document.getElementById("code_text").innerHTML = "Login facility is available for teachers only. <br> Please use our app to login as parent or student";
										$("#code_text").show();
										setTimeout(function(){$('#code_text').hide();
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPElEQVQYV2NkIA4YMxKhzpiBgeEsIYVgRSDD8CmEK8KnEEURLoUYirApxKoIXSFORcgK8SqCKSSoCKQQALilCT6rrB3mAAAAAElFTkSuQmCC) repeat";
										document.getElementById("alert_title_text").innerHTML ="LOGIN";
										$("#add_alert_info").hide();
										$("#code_text").hide();
										},7000);
										next.innerHTML ="DISMISS";
										//back.innerHTML ="BACK";
										next.setAttribute("onclick","toggleSlider()");
										//back.setAttribute("onclick","");
					
				}
			}
			
  },
  error: function(user, error) {
   
									var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										//var msg =  document.getElementById("alert_details");
										//var input1 =document.getElementById("enter_email");
										//var input2 =document.getElementById("enter_password");
										//var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										//var back = document.getElementById("back");
										//var sel_number = document.getElementById("select_number");
										//var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										//input1.style.display ="none";
										//input2.style.display ="none";
										//prefix.style.display = "none";
										//sel_number.style.display ="none";
										next.style.display = "block";
									    //sel_email.style.display ="none";
										//back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAP0lEQVQYV2NkIAL8P8j+n5GQOrAi+5+MeBXCFIEMw6kQWRFOheiKsCrEpghDIS5FKArxKYIrJKQIrJAYRSCFACC1JtEjjo+nAAAAAElFTkSuQmCC) repeat";
									    $('#email_alert').html("Your email or password was incorrect.");
										$('#email_alert').show();
										//msg.innerHTML = "Your email or password was incorrect.";
										next.innerHTML ="DISMISS";
										//back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										//back.setAttribute("onclick","toggleSlider()");
										setTimeout(function(){$('#email_alert').hide();
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPElEQVQYV2NkIA4YMxKhzpiBgeEsIYVgRSDD8CmEK8KnEEURLoUYirApxKoIXSFORcgK8SqCKSSoCKQQALilCT6rrB3mAAAAAElFTkSuQmCC) repeat";
										document.getElementById("alert_title_text").innerHTML ="LOGIN";
										$("#add_alert_info").hide();},7000);
  }
});
}


function toggleSlider() {
    if ($("#alerts").is(":visible")) {
        $("#inner_alerts").animate(
		 
            {
                opacity: "0"
            },
            10,
			function(){
				$("#alert_title").slideUp(0);
                $("#alerts").fadeOut(100);
				
            }
           
        );
    }
    else {
        $("#alerts").fadeIn(10, function(){
            $("#inner_alerts").animate(
                {
                    opacity: "1"
                },
                100
            );
			$("#alert_title").slideDown(200);
        });
    }   
}
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
function checkemail(str){

var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if (filter.test(str))
return true;
else{

return false;
}

}
function generate_code_login(num){
	
	
	Parse.Cloud.run('genCode',{number:num},{
	    success:function(results){ 
			if(results){				
										
										$('#login').hide();
										$('#code_text').show();
										$('#enter_code').show();
										$('#alert_msg_code').hide();
										document.getElementById("enter_code").value = "";
										document.getElementById("alert_title_text").innerHTML ="VERIFY YOURSELF";
										
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										//var msg =  document.getElementById("alert_details");
										//var input1 =document.getElementById("enter_email");
										//var input2 =document.getElementById("enter_password");
										//var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										//var sel_number = document.getElementById("select_number");
										//var sel_email = document.getElementById("select_email");
										//img.src="icons/info.png";
										img.style.display="none";
										//input1.style.display ="block";
										//sel_number.style.display ="none";
										next.style.display = "block";
									    //sel_email.style.display ="none";
										//input1.value = "";
										//input1.placeholder = "Code";
										//input2.style.display ="none";
										//prefix.style.display = "none";
										back.style.display = "block";
										
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPElEQVQYV2NkIA4YMxKhzpiBgeEsIYVgRSDD8CmEK8KnEEURLoUYirApxKoIXSFORcgK8SqCKSSoCKQQALilCT6rrB3mAAAAAElFTkSuQmCC) repeat";
									    //msg.innerHTML = "Enter the verification code sent to your number.";
										next.innerHTML ="NEXT";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","logged_in_login()");
										back.setAttribute("onclick","toggleSlider()");
			}
			
		},
		error: function(error){console.log(error.code);
		
			
										$('#login').hide();
										$('#code_text').hide();
										$('#enter_code').hide();
										$('#alert_msg_code').hide();
									var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										img.src="icons/error.png";
										img.style.display="block";
										next.style.display = "block";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAP0lEQVQYV2NkIAL8P8j+n5GQOrAi+5+MeBXCFIEMw6kQWRFOheiKsCrEpghDIS5FKArxKYIrJKQIrJAYRSCFACC1JtEjjo+nAAAAAElFTkSuQmCC) repeat";
										
									    $('#msg').html("Connection Failed");
										$('#msg').show();
										next.innerHTML ="DISMISS";
										next.setAttribute("onclick","toggleSlider()");
		}
});
}

function generate_code(num){
	
	Parse.Cloud.run('genCode',{number:num},{
	    success:function(results){
			if(results){				toggleSlider();
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="block";
										input1.value = "";
										input1.placeholder = "Code";
										prefix.style.display = "none";
										sel_number.style.display ="none";
										next.style.display = "block";
									    sel_email.style.display ="none";
										input2.style.display ="none";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="VERIFY YOURSELF";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPElEQVQYV2NkIA4YMxKhzpiBgeEsIYVgRSDD8CmEK8KnEEURLoUYirApxKoIXSFORcgK8SqCKSSoCKQQALilCT6rrB3mAAAAAElFTkSuQmCC) repeat";
									    msg.innerHTML = "Enter the verification code sent to your number.";
										next.innerHTML ="NEXT";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","logged_in()");
										back.setAttribute("onclick","toggleSlider()");
										
			}
			
		},
		error: function(error){console.log(error.code);
			
		toggleSlider();
			var modal_class=  document.getElementById("alerts");
			modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input2.style.display ="none";
										sel_number.style.display ="none";
										prefix.style.display = "none";
										next.style.display = "block";
									    sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="ERROR";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Server not available please try later...";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		}
});
}
function logged_in_login(){
code = document.getElementById("enter_code").value;
code=parseInt(code);

Parse.Cloud.run('verifyCod',{number:ph_number,code:code},{
  success: function(results) {
			if(results){
			

				session_token = results.sessionToken;
				//console.log(session_token); 
				if(session_token == ""){
					console.log("session expired");
					var back =  document.getElementById("back");
					var next =  document.getElementById("next");	
					var img =document.getElementById("add_alert_info");
					img.src="icons/error.png";
					img.style.display="block";
					back.style.display = "block";
					next.style.display = "none";
					$('#alert_msg_code').html('Incorrect Code Entered/Session Expired');
					$('#alert_msg_code').show();
					document.getElementById("alert_title_text").innerHTML ="VERIFY YOURSELF";
					document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAP0lEQVQYV2NkIAL8P8j+n5GQOrAi+5+MeBXCFIEMw6kQWRFOheiKsCrEpghDIS5FKArxKYIrJKQIrJAYRSCFACC1JtEjjo+nAAAAAElFTkSuQmCC) repeat";
					back.innerHTML ="RESEND CODE";
					back.setAttribute("onclick","generate_code_login(x1)");
				}
				else if(session_token != ""){
					load_logged_in();
				}
				
			}
			else{
									
									alert("error1");
									var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										//var msg =  document.getElementById("alert_details");
										//var input1 =document.getElementById("enter_email");
										//var input2 =document.getElementById("enter_password");
										//var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										//var back = document.getElementById("back");
										//var sel_number = document.getElementById("select_number");
										//var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										//input1.style.display ="none";
										//prefix.style.display = "none";
										next.style.display = "block";
										//sel_number.style.display ="none";
									    //sel_email.style.display ="none";
										//input2.style.display ="none";
										//back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="CONNECTION LOST";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please try again later";
										next.innerHTML ="DISMISS";
										//back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										//back.setAttribute("onclick","toggleSlider()");
			}
			
  },
  error: function(error) { console.log(error.code);
								
									if(error.message == "USER_DOESNOT_EXISTS")
									{console.log("error2");
										$('#login').hide();
										$('#code_text').hide();
										$('#enter_code').hide();
										$('#alert_msg_code').hide();
									//alert(error.code + " " + error.message);
									var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										//var msg =  document.getElementById("alert_details");
										//var input1 =document.getElementById("enter_email");
										//var input2 =document.getElementById("enter_password");
										//var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										//var sel_number = document.getElementById("select_number");
										//var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										next.style.display = "block";
										//input1.style.display ="none";
										//input2.style.display ="none";
										//prefix.style.display = "none";
										//sel_number.style.display ="none";
									    //sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAP0lEQVQYV2NkIAL8P8j+n5GQOrAi+5+MeBXCFIEMw6kQWRFOheiKsCrEpghDIS5FKArxKYIrJKQIrJAYRSCFACC1JtEjjo+nAAAAAElFTkSuQmCC) repeat";
										
									    $('#msg').html("User does not exists");
										next.innerHTML ="DISMISS";
										//back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										//back.setAttribute("onclick","toggleSlider()");
  }
  else{ console.log("error3");
									
										$('#login').hide();
										$('#code_text').hide();
										$('#enter_code').hide();
										$('#alert_msg_code').hide();
									var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										img.src="icons/error.png";
										img.style.display="block";
										next.style.display = "block";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAP0lEQVQYV2NkIAL8P8j+n5GQOrAi+5+MeBXCFIEMw6kQWRFOheiKsCrEpghDIS5FKArxKYIrJKQIrJAYRSCFACC1JtEjjo+nAAAAAElFTkSuQmCC) repeat";
										
									    $('#msg').html("Connection Failed");
										$('#msg').show();
										next.innerHTML ="DISMISS";
										next.setAttribute("onclick","toggleSlider()");
								
  }
  
  }
});
	
}
function load_logged_in(){

					Parse.User.become(session_token).then(function (user) {		
					var fname = document.getElementsByClassName("name-input")[0].value;
					console.log(fname);
					if(fname != ""){	
						var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="none";
										input2.style.display ="none";
										prefix.style.display = "none";
										next.style.display = "block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SUCCESS";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "You have Successfully Signed Up.<br>Click Next to start using knit.";
										next.innerHTML ="NEXT";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","load_logged_in()");
										back.setAttribute("onclick","toggleSlider()");
					}
						
					
						
						
var currentUser = Parse.User.current();	
if (currentUser) {
	window.location = "dashboard.html";	
	
}
			}, function (error) { console.log(error.code);
			
			
			
				var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										next.style.display = "block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.style.display ="none";
										prefix.style.display = "none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="ERROR";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please try later";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
			
			
				});

	}
	
	
function logged_in(){
code = document.getElementById("enter_email").value;
code=parseInt(code);
if(Number(code))
var fname = document.getElementsByClassName("name-input")[0].value;
console.log(fname);
Parse.Cloud.run('verifyCod',{number:ph_number, code:code, name:fname, role:"teacher"},{
  success: function(results) {
			if(results){ load_logged_in();
							/*
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="none";
										input2.style.display ="none";
										prefix.style.display = "none";
										next.style.display = "block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SUCCESS";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "You have Successfully Signed Up.<br>Click Next to start using knit.";
										next.innerHTML ="NEXT";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","load_logged_in()");
										back.setAttribute("onclick","toggleSlider()");
										*/

				
			}
			
			
  },
  error: function(error) {
	 
										if(error.code == 141){
											var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										next.style.display = "block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Code verification failed. <br>User already exist.<br> If this Problem persists please contact us at 8080809449.";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
										}
									
								else{	var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										next.style.display = "block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Code verification failed. This can be due to<br>1).Code you enter is incorrect.<br>2).Server may not be responding.<br> If this Problem persists please contact us at 8080809449.";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
								}
  }
});
	
}
function signup(){
	//var salt = document.getElementsByClassf("select-option")[0].value;

	//if(salt=="Mr.")
		//gender = "male";
	//else gender = "female";
	var fname = document.getElementsByClassName("name-input")[0].value;
	console.log(fname);
	var number = document.getElementsByClassName("mobile-input")[0].value;
	ph_number=number;
	//fname = salt+name;
	
	if(fname==""){
		 document.getElementsByClassName("number-alerts")[0].innerHTML="*Enter your name";
	}
	else if(number == ""){
		document.getElementsByClassName("number-alerts")[0].innerHTML="*Enter your phone number";
	}		
	else if(number.length<10 && number.lenghth>10){
	  	  document.getElementsByClassName("number-alerts")[0].innerHTML="*Enter a proper phone number";
	}
	else if(Number(number)==NaN){
		 document.getElementsByClassName("number-alerts")[0].innerHTML="*Enter a proper phone number";
		 
		}
		
		else{/*
			var user = Parse.Object.extend("User");
				var query = new Parse.Query(user);
				query.equalTo("phone", ph_number);
				query.first({
				  success: function(results) {
					  console.log(results);
					  if(typeof results != 'undefined'){
					  document.getElementsByClassName("number-alerts")[0].innerHTML="*User Already Exists";}
				  },
				  error: function(error) {
					generate_code(number);
				  }
				});*/
		generate_code(number);	
		}
		
}
function signup_to_class(){

code = document.getElementById("class_code").value;
code = code.toUpperCase();
var class_name ;

	if (code.length!=7)
	{
		 document.getElementsByClassName("number-alerts")[1].innerHTML = "*Enter a proper Class Code";
	}
	else{
		
Parse.Cloud.run('findClass ',{code:code},{
  success: function(results) {
	  if(results.length==0){toggleSlider();
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
										var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input1.value = "";
										input1.placeholder = "";
										input2.style.display ="none";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.type="text";
										input2.value = "";
										back.style.display = "none";
										next.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="CLASS NOT FOUND";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "No class with this class code exists";
										next.innerHTML ="DISMISS";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","toggleSlider()");
                                    	back.setAttribute("onclick","toggleSlider()");
	 
		
		 }
		 else{
			
	  class_name = results[0].get("name");
	   toggleSlider();	
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
										var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="block";
										next.style.display = "block";
										input1.value = "";
										input1.placeholder = "Enter Your Name";
										input2.style.display ="block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.type="text";
										input2.value = "";
										input2.placeholder = "Enter Your Mobile Number to subscribe";
										prefix.style.display ="block";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="Subscribe";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "<center><strong>"+class_name+"</strong></center><br>Once you subscribe you will start receiving messages from the teacher";
										next.innerHTML ="DONE";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","smssubscribe()");
                                    	back.setAttribute("onclick","toggleSlider()");
	 
		 }
	  
  },
  
error: function(error){
	 toggleSlider();
	var modal_class=  document.getElementById("alerts");
	modal_class.addEventListener("click", function(){hide_alert()}, false);
										var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input1.value = "";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input1.placeholder = "";
										input2.style.display ="none";
										input2.type="text";
										next.style.display = "block";
										input2.value = "";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="ERROR";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please try later..";
										next.innerHTML ="DISMISS";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","toggleSlider()");
                                    	back.setAttribute("onclick","toggleSlider()");
	
	
}

});

	
	 
                                       

}
}

function smssubscribe(){
ph_number = document.getElementById("enter_email").value;
fname = document.getElementById("enter_password").value;
Parse.Cloud.run('smsSubscribe ',{number:fname,classcode:code ,subscriber:ph_number},{
  success: function(results) {
	  if(results)
	  {
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="none";
										input2.style.display ="none";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										next.style.display = "block";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SUCCESS";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "Subscribed successfully";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		  
	  }
  },
  
error: function(error){

										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
										var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input1.value = "";
										input1.placeholder = "";
										input2.style.display ="none";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										next.style.display = "block";
										input2.type="text";
										input2.value = "";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="ERROR";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please try later..";
										next.innerHTML ="DISMISS";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","toggleSlider()");
                                    	back.setAttribute("onclick","toggleSlider()");
	
}

});
	
}