
window.onscroll=function () {
    shw();
    bak();
    };

function shw(){
	 
	 var ks_area = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
	 var bodyScrollTop = document.body.scrollTop;

     var backTopE = document.getElementById('back-top'),
             styles={
             	height:"55px",
             	width:"55px",
             	position:"fixed",
             	right:"10px",
             	bottom: "60px"
             },i;
         for (i in styles){
         backTopE.style[i]=styles[i]
         }
         
        if(bodyScrollTop<ks_area){
        	backTopE.style.display="none";
        }else{
        	backTopE.style.display="block";
        }


}
function bak(){
        var backTopE = document.getElementById('back-top'),
            wholeHeight = document.body.scrollHeight,
            bodyScrollTop = document.body.scrollTop,
            timer;
    backTopE.onclick=function (){
              clearInterval(timer);
        timer =setInterval(function(){
            var totalTime = 5000,
                perTime = 100,
                perle = wholeHeight/(totalTime/perTime);
        if(document.body.scrollTop==0){
            clearInterval(timer);
        }
            document.body.scrollTop -= perle;
        },10);

   }
}
