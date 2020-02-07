var curr_slide = '001';
var max_slide = '013';

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

$(document).ready(function(){

function gotoslide(delta){

  var move = false;

	var slide = parseInt(curr_slide) + delta;
  
  if (slide>max_slide){
    curr_slide = pad( max_slide ,3);  
  }else if(slide<1){
    curr_slide = pad(1,3);
    if ($('.ontop').attr('id') != '001'){
      move=true;
    }
  }else{
    curr_slide = pad( slide, 3)
    move = true;
  }
  
  //alert(curr_slide)
  
  if (move){
     $('.ontop').slideUp(1000);
     $('.fw').removeClass('ontop');
      $('#'+curr_slide).slideDown(1000);
      $('#'+curr_slide).addClass('ontop');    

      //reload iframes here

      // if ($('#'+curr_slide+' iframe').length >0 ){
      //   $('#loader').show();
      //   $.each($('#'+curr_slide+' iframe'),function(){

      //     var src = $(this).attr('src_target');

      //     //alert(src);
      //     $(this).on('load',function(){
      //       $('#loader').hide();
      //     });
          
      //     $(this).attr('src',src);
          
      //   })
      // }
  }
  
}


$('.divnext').on('click',function(){
   gotoslide(+1);
  });
  $('.divprev').on('click',function(){
   gotoslide(-1)
  });
  
  $('.divfirst').on('click',function(){
      gotoslide(-9999)
   })
})

$('.switcher').on('click',function(){

  $(this).next().fadeToggle();

})

$('.switcher_down').on('click',function(){

  $(this).next().fadeToggle();

})

$('.fadeInDiv').on('click',function(){

  var target = $(this).attr('target');

  if( $(target).hasClass('active')){
    //already active
  }else{
    $('.fade_text').fadeOut();
    $('.active').addClass('inactive');
    $('.active').removeClass('active');
    $(target).fadeIn('1500');
    $(target).addClass('active');
  }

});



