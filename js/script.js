	$(document).ready(function() {
		$('#hide').hide();
    $('#imageGallery').lightSlider({
        gallery:false,
        auto:true,
        item:1,
        pause: 4000,
        loop:true,
        thumbItem:9,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }   
    });
    var testi_slider = $('#testi-slider').lightSlider({            
        auto:true,
        item:1,
        pause: 200,
        loop:true,        
        slideMargin:0,
        enableDrag: false,
        controls:false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }   
    });

    setInterval(function(){
    	testi_slider.goToNextSlide();
    }, 3000);

    $('#featured-gallery').lightSlider({
        item:3,
        loop:true,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        enableDrag:false,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  

    $('#home-reg .choose-type').click(function(){
        $('#home-reg .choose-type').removeClass('active');    
        $('#home-reg .choose-type').addClass('inactive');   
        $('#home-reg .home-reg-content').hide();
        var show_id = $(this).data('show');        
        $('#'+show_id).show(); 
        $(this).removeClass('inactive');
        $(this).addClass('active');
    });
	
	 $('#login .choose-type').click(function(){
        $('#login .choose-type').removeClass('active');    
        $('#login .choose-type').addClass('inactive');   
        $('#login .home-reg-content').hide();
        var show_id = $(this).data('show');        
        $('#'+show_id).show(); 
        $(this).removeClass('inactive');
        $(this).addClass('active');
    });

    $('#login-modal-reg .choose-type').click(function(){
        $('#login-modal-reg .choose-type').removeClass('active');    
        $('#login-modal-reg .choose-type').addClass('inactive');    

        $(this).removeClass('inactive');
        $(this).addClass('active');
    });

    $('#parent-signup-modal .choose-type').click(function(){
        $('#parent-signup-modal .choose-type').removeClass('active');    
        $('#parent-signup-modal .choose-type').addClass('inactive');  
        $('#parent-signup-modal .signup-content').hide();
        var show_id = $(this).data('show');        
        $('#'+show_id).show();
        $(this).removeClass('inactive');
        $(this).addClass('active');
    });

    $(function () {
                    $('#login-btn').magnificPopup({
                        type: 'inline',
                        preloader: false,
                        focus: '#username',
                        modal: true
                    });

                    $('#parent-signup').magnificPopup({
                        type: 'inline',
                        preloader: false,
                        focus: '#username',
                        modal: true
                    });


                    $(document).on('click', '.popup-modal-dismiss', function (e) {
                        e.preventDefault();
                        $.magnificPopup.close();
                    });
                });

  });

  
/*creaing the application form*/  
  
function apply(){
	var application_form_div = document.createElement("div");
	application_form_div.setAttribute("id","application_form_div");
	//title1.innerHTML = "Send invite via sms"
	
	var application_form = document.createElement("form");
	application_form.setAttribute("form","application_form");
	application_form.setAttribute("onsubmit","return false");
	
	var fieldset = document.createElement("fieldset");
	fieldset.setAttribute("id","fieldset");
	
	var div_1 = document.createElement("div");
	div_1.setAttribute("id","firstname");
	
	var label = document.createElement("label");
	label.innerHTML = "First Name";
	
	var div_2 = document.createElement("div");
	var input1 = document.createElement("input");
	input1.setAttribute("id","candidate_firstname");
	input1.setAttribute("type","text");
	var error_label_1 = document.createElement("label");
	error_label_1.setAttribute("id","err_msg_box_1");
	
	
	
	
	var div_3 = document.createElement("div");
	div_3.setAttribute("id","lastname");
	
	var label2 = document.createElement("label");
	label2.innerHTML = "Last Name";
	
	var div_4 = document.createElement("div");
	
	var input2 = document.createElement("input");
	input2.setAttribute("id","candidate_lastname");
	input2.setAttribute("type","text");
	var error_label_2 = document.createElement("label");
	error_label_2.setAttribute("id","err_msg_box_2");
	
	
	
	var div_5 = document.createElement("div");
	div_5.setAttribute("id","email");
	
	var label3 = document.createElement("label");
	label3.innerHTML = "Email*";
	
	var div_6 = document.createElement("div");
	
	var input3 = document.createElement("input");
	input3.setAttribute("id","candidate_email");
	input3.setAttribute("type","text");
	var error_label_3 = document.createElement("label");
	error_label_3.setAttribute("id","err_msg_box_3");
	
	var div_7 = document.createElement("div");
	div_7.setAttribute("id","phone");
	
	var label4 = document.createElement("label");
	label4.innerHTML = "Phone*";
	
	var div_8 = document.createElement("div");
	
	var input4 = document.createElement("input");
	input4.setAttribute("id","candidate_phone");
	input4.setAttribute("type","text");
	var error_label_4 = document.createElement("label");
	error_label_4.setAttribute("id","err_msg_box_4");
	
	
	var div_9 = document.createElement("div");
	div_9.setAttribute("id","resume");
	
	var label5 = document.createElement("label");
	label5.innerHTML = "Resume*";
	
	var div_10 = document.createElement("div");
	
	var input5 = document.createElement("input");
	input5.setAttribute("id","candidate_resume");
	input5.setAttribute("type","file");
	input5.setAttribute("onchange","openFile(event)");
	input5.setAttribute("accept","application/pdf")
	var error_label_5 = document.createElement("label");
	error_label_5.setAttribute("id","err_msg_box_5");
	
	var div_11 = document.createElement("div");
	div_11.setAttribute("id","submit");
	var submit_button = document.createElement("button");
	submit_button.setAttribute("id","submit_button");
	submit_button.setAttribute("onclick","submit_application()");
	submit_button.innerHTML = "Submit Application";
	
	var label6 = document.createElement("span");
	label6.innerHTML = "Application Sent Successfuly";
	label6.setAttribute("id","output_msg");
	
	
	$('#roles').append(application_form_div);
	application_form_div.appendChild(application_form);
	application_form.appendChild(fieldset);
	fieldset.appendChild(div_1);
	div_1.appendChild(label);
	div_1.appendChild(div_2);
	div_2.appendChild(input1);
	div_2.appendChild(error_label_1);
	fieldset.appendChild(div_3);
	div_3.appendChild(label2);
	div_3.appendChild(div_4);
	div_4.appendChild(input2);
	div_4.appendChild(error_label_2);
	fieldset.appendChild(div_5);
	div_5.appendChild(label3);
	div_5.appendChild(div_6);
	div_6.appendChild(input3);
	div_6.appendChild(error_label_3);
	fieldset.appendChild(div_7);
	div_7.appendChild(label4);
	div_7.appendChild(div_8);
	div_8.appendChild(input4);
	div_8.appendChild(error_label_4);
	fieldset.appendChild(div_9);
	div_9.appendChild(label5);
	div_9.appendChild(div_10);
	div_10.appendChild(input5);
	div_10.appendChild(error_label_5);
	fieldset.appendChild(div_11);
	div_11.appendChild(submit_button);
	div_11.appendChild(label6);
	
	$('#output_msg').hide();
	$('.apply').hide();
	$('#hide').show();
}

/*hiding the apply button*/

function hide(){
$('#application_form_div').remove();
$('.apply').show();
$('#hide').hide();	
}


function submit_application(){
	var firstname = document.getElementById('candidate_firstname').value;
	var lastname = document.getElementById('candidate_lastname').value;
	var to_email = document.getElementById('candidate_email').value;
	var phone = document.getElementById('candidate_phone').value;
	
	if(firstname != "" || to_email != "" || phone != ""){
	//console.log(data);
	//alert("hello");
		Parse.Cloud.run('mailPdf',{email:to_email, content:data},{
		success:function(results){
		console.log("Application sent successfully");
		$('#output_msg').show();
		//email_arr.length = 0;
		//att_arr.length = 0;
	},
	error:function(error){
		console.log("Sending failed" + "" + error.code);
	}
	});	
	}
}



	var data;
  var openFile = function(event) {
			var input = event.target;

			var reader = new FileReader();
			reader.onload = function(){
			  var data = reader.result;
			 // data = dataURL.substr(28,dataURL.length);
			  //console.log(dataURL);
			  //console.log(data);
			};
			reader.readAsDataURL(input.files[0]);
		  };
		  