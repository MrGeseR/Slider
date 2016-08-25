var sliding = function(num,time){
    for(let i=1;i<num;i++) {
        $('.slider').append('<div class="slider__element"><img alt="" src="img/'+i+'.jpg" id="'+i+'"></div>');
    }
    var slides = $(".slider").children(".slider__element");
    var width = $(".slider").width();
    var i = slides.length;
    var offset = i * width;
    i--;
    $(".slider").css('width',offset);
    offset = 0;
    $(".wrapper__rightArrow").click(function() {
        if (offset<width*i) {
            offset += width;
            $(".slider").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
        } else {
            offset = 0;
            $(".slider").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
        }
    });
    $(".wrapper__leftArrow").click(function(){
        if (offset > 0) {
            offset -= width;
            $(".slider").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
        } else {
            offset = width*i;
            $(".slider").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
        }
    });
    setInterval(function(){
        $(".wrapper__rightArrow").trigger('click');
    }, time);

};

sliding (12, 6000);