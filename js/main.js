$(document).ready(function(){

    // MENU 작업
    var trigger=$("#trigger");
    var menu=$("nav ul");

    $(trigger).on("click",function(e){
        e.preventDefault();//a 링크를 막아줌
        menu.slideToggle();
    });

    // bxslider
    $(".bxslider").bxSlider({
        auto:true, // 자동 스크롤 적용
        autoHover:true, // 이미지 위로 마우스 포인터를 올리면 멈춤
        mode:'horizontal',
        captions:true,
        autoControls:true,
        stopAutoOnclick:true,
    });

});