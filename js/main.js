  $('#popup').click(function(){
            $('.modal-popup').css('display','block'); 
            if($('.modal-popup').css('display','block')){
               $('.container-wrapper').css('opacity','0.5');    
              }          
        }); 
        $('.popup-close').click(function(){
            $('.modal-popup').css('display','none');
            $('.container-wrapper').css('opacity','1');    

        });