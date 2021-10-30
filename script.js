
$('.active').show();
$('active').show();
$('.header_menu-nav').show();
$('.header_menu-nav').show();
 $('.menu_rasponsive-btn').click(function () {
     $('.header_menu-nav').toggleClass('active');
     $('.divs').toggleClass('active');
      
 });


 $('.divs').click(function () {
     $('.header_menu-nav').toggleClass('active');
     $('.divs').toggleClass('active');
    
     
 })
 
 $('.boxxx').show();
 $('.boxxx1').hide();
 
$('.header_first-block_registration_btn').click(function () {
  
    $('.boxxx1').show();
    $('.boxxx').hide();
});
$('.read_more_p').hide();
$('.read_more_p1').hide();
$('.read_more_p2').hide();
$('.read_more_p3').hide();
$('.read_more_p4').hide();
$('.main_bottom-box-span').click(function () { 
    $('.read_more_p').toggle(100);
    $('.read_more_p1').hide();
$('.read_more_p2').hide();
$('.read_more_p3').hide();
$('.read_more_p4').hide();
    
 })
$('.main_bottom-box-span1').click(function () { 
    $('.read_more_p1').toggle(100);
    $('.read_more_p').hide();
$('.read_more_p2').hide();
$('.read_more_p3').hide();
$('.read_more_p4').hide();
    
 })
$('.main_bottom-box-span2').click(function () { 
    $('.read_more_p2').toggle(100);
    $('.read_more_p1').hide();
$('.read_more_p').hide();
$('.read_more_p3').hide();
$('.read_more_p4').hide();
    
 })
$('.main_bottom-box-span3').click(function () { 
    $('.read_more_p3').toggle(100);
    $('.read_more_p1').hide();
$('.read_more_p2').hide();
$('.read_more_p').hide();
$('.read_more_p4').hide();
    
 })
$('.main_bottom-box-span4').click(function () { 
    $('.read_more_p4').toggle(100);
    $('.read_more_p1').hide();
$('.read_more_p2').hide();
$('.read_more_p3').hide();
$('.read_more_p').hide();
    
 })


 const submit = document.getElementById('age');
 const input = document.getElementById('chekss');
 
 input.addEventListener("click", (e) => {
     const value = e.currentTarget.value;
     submit.disabled = false;
     if(value ===""){
         submit.disabled = true;
     }
 });
 







 
 
 
 
 
// 
// if (isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response']) {
//     $secret = '0000000000000000000000';
//     $ip = $_SERVER['REMOTE_ADDR'];
//     $response = $_POST['g-recaptcha-response'];
//     $rsp = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$ip");
//     $arr = json_decode($rsp, TRUE);
//     if ($arr['success']) {
   
//     }
//   }
// /





