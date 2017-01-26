;(function($){
    var index;

    $("#btnG > li").eq(0).addClass("active");
    $("#left-arrow").on('click',function(){


        var changingV = parseInt($('#slide-group').css("left"));
        if (changingV <= -6100) {
        	$('#slide-group').css('left',0);
        }
        if(changingV == -1220){
            index = 5;
        }
        animate(-1220);

        index --;
        $("#btnG > li").removeClass("active").eq(index).addClass("active");

    });
    $("#right-arrow").on('click',function(){
        var changingV = parseInt($('#slide-group').css("left"));
        if (changingV >= -1220) {
        	$('#slide-group').css('left',-7320);
        }
         changingV = parseInt($('#slide-group').css("left"));
        if(changingV == -7320){
            index = -1
        }
        animate(1220);
        index ++;
        $("#btnG > li").removeClass("active").eq(index).addClass("active");
       });
    //实现帧动画函数
    function animate(offset){
        var timer,
            interTime = 10,
            totalTime = 200,
            speed,
            leftv = 0;
        speed = offset/(totalTime/interTime);
        timer = setInterval(function(){
            leftv += speed;
            var curl =parseInt($('#slide-group').css('left')),
                fina = curl + speed;
            $('#slide-group').css('left',fina);

            if(leftv == offset){
                clearInterval(timer);
            }
        },interTime);}

    var time = setInterval(function(){
        $("#right-arrow").click();
    },6000)

})(jQuery);













