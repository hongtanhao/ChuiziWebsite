





    // 获取相关元素
    var getE =function (id){
        return document.getElementById(id);
    };
    var getEs =function (cl){
        return document.getElementsByClassName(cl);
    };

    var SIN = 1,
        quantity = 1;
        addShops = getEs('addshopping');
        for(var i=0;i<addShops.length;i++){
        addShops[i].onclick=function(event){
            if(SIN == 1){
                var createShopCarE = document.createElement("div");
                createShopCarE.className="big-shop";
                var allE = '<div id="fath"><div id="sun"></div></div><div id="include">'+
                    '<div id="quantity"><p>共<span id="tatal-quantity"> </span>件商品</p></div>'+
                    '<div id="heji"><p>合计：&yen<span id="tatal-price"> 66.00</span></p></div>'+
                    '<div id="go-shoping"><a>去购物车</a></div> </div>';
                createShopCarE.innerHTML=allE;
                document.body.appendChild(createShopCarE);
                SIN = 0;
            }
            var sunE = getE('sun'),
                shuL  = getE('include'),
                conE = getE('fath'),
                bigWrap = getEs('big-shop')[0];
            var curParent = this.parentNode,
                ulE = curParent.getElementsByClassName("pic-site")[0],
                urll = ulE.getAttribute('src');
            var infoE = curParent.getElementsByClassName("known")[0],
                info = infoE.textContent;
            var priceE = curParent.getElementsByClassName("price")[0],
                rice = priceE.textContent;
            var e = event?event:window.event;
            var x = e.clientX-50 + 'px',
                y = e.clientY-100 + 'px';
            //添加小图片飞进购物车的效果
            var flyPicE = document.createElement('div');
            var styles={
                       backgroundImage:'url('+urll+')',
                       backgroundSize:'30px',
                       backgroundPosition:'center',
                       left:x,
                       top:y
                       }, j,timer;
            for(j in styles){
               flyPicE.style[j]=styles[j];
                            }
            document.body.appendChild(flyPicE);
            flyPicE.className="animate";
            timer = setTimeout(function(){
                document.body.removeChild(flyPicE);
            },600);
            var divEE = document.createElement("div");
                 divEE.className="goods";
            var tet = '<div class="picture"><img class="w-and-h" src='+urll+'>'+'</div><div class="introduction"> ' +
                      '<p class="text-info">'+info+'</p><p>&yen<span class="snt"> '+rice+'</span>　x' +
                      '<span class="qnt">1</span></p></div> <span class="clear" value="x">x</span>';
            divEE.innerHTML=tet;
            var divEEE = document.createElement("div");
            divEEE.appendChild(divEE);
            divEEE.className="hdn";
            conE.insertBefore(divEEE,sunE);
            bigWrap.insertBefore(conE,shuL);
            //if(getEs('hdn').length>1) {
            //    if (divEEE.innerHTML === divEEE.previousSibling.innerHTML) {
            //        conE.removeChild(divEEE);
            //         quantity = quantity+1;
            //        getEs('qnt')[0].innerHTML=quantity;
            //        cleaner(e);
            //    }
            //}
            //购物车的显示与隐藏
            var shopE = getE('buy'),
                shopCarE = getEs('big-shop')[0];
            addEvent(shopE,'mouseenter',function (e){ctrCar(e)});
            addEvent(shopCarE,'mouseleave',hide);
            function addEvent(el,event,callback) {
                if (el.addEventListener){
                    el.addEventListener(event, callback);
                }
                if (el.attachEvent) {
                    el.attachEvent('on' + event, callback);
                }
            }
            function ctrCar(e) {
                var e = e || window.event;
                var El= e.target || e.srcElement;
                var shopEtop = El.getBoundingClientRect().bottom;
                if (e.clientY > shopEtop) {
                    hide();
                } else {
                    show();
                }
            }
            function show(){
                var shopCarE = getEs('big-shop')[0];
                shopCarE.style.display="block";
            }
            function hide(){
                var shopCarE = getEs('big-shop')[0];
                shopCarE.style.display="none";
            }


            //删除已经添加的商品

                var deleteE = getEs("clear");
                for (var i = 0; i < deleteE.length; i++) {
                    deleteE[i].onclick = function (e) {
                        cleaner(e);
                        count();
                        if(getEs('goods').length == 0){
                            getEs('shopping-car')[0].innerHTML= 0;
                            var sme = getEs('big-shop')[0];
                            document.body.removeChild(sme);
                            var mm = document.createElement('div');
                            mm.className="empty-shop";
                            mm.innerHTML='<div id="pos"<figure>'+ '<img src="http://static.smartisanos.cn/index/img/library/cart-empty-bg_9def4e9f15.png">'+
                            '<figcaption>您的购物车还没添加商品</figcaption></figure></div>';
                            document.body.appendChild(mm);
                            var shopE = getE('buy');
                            shopE.onmouseenter=function(){
                                mm.style.display="block";
                            };
                            mm.onmouseleave=function(){
                                mm.style.display="none";
                            };

                            getE('counter').style.background="#999";
                            SIN = 1;
                        }
                        if(getEs('goods').length == 1){
                            var mmm = getEs("empty-shop");
                           mmm.style.display = "none";
                        }

                    };

                }


             //计算价格
               count();

        }
    }

    function count() {
        var aln = getEs('qnt'),
            sro =[];
        var goodsE = getEs("goods"),
            subTotal = [];
        for(var i=0;i<aln.length;i++){
            var chy = parseInt(aln[i].innerHTML);
            sro.push(chy);
            if(sro){
                var ros = 0;
                for(var j=0;j<sro.length;j++){
                    var totalQuan = getE('tatal-quantity');
                    ros+=sro[j];
                    totalQuan.innerHTML = ros;
                    getEs('shopping-car')[0].innerHTML= ros;
                    getE('counter').style.background="#FFBE25";
                    getE('counter').style.color="#fff";
                }
            }
        }

        for (var i = 0; i < goodsE.length; i++) {
            var spc = goodsE[i].getElementsByClassName("snt")[0].innerHTML;
            var spq = goodsE[i].getElementsByClassName("qnt")[0].innerHTML;
            var smallCount = parseInt(spc * spq);
            subTotal.push(smallCount);
            if (subTotal) {
                var allVale = 0;
                for (var j = 0; j < subTotal.length; j++) {
                    var totalPrice = getE('tatal-price');
                        allVale += subTotal[j];
                        totalPrice.innerHTML = allVale.toFixed(2);
                }
            }
        }
    }
    function cleaner (e){
        var conE = getE('fath');
        var e = e?e:window.e;
        e.stopPropagation();
        var tgt = e.target || e.srcElement;
        tgt.style.border = "none";
        var curE = tgt.parentNode.parentNode;
        conE.removeChild(curE);
    }












