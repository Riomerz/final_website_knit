	$(document).ready(function() {
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
        // currentPagerPosition:'left',
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

