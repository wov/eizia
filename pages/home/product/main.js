define(['../scene', '../title', 'less!./product.less'], function(Scene, Title) {

    var $allProduct = $("#product .cardContainer");
    var $product = $("#product")
    var $topic = $product.find(".topic");

    $allProduct.each(function(index, elem){
        var $elem = $(elem);
        var animating = false;
        var latestX = 0;
        var latestY = 0;

        var $light = $elem.find(".light");
        var $float = $elem.find(".float");
        var $bg = $elem.find(".bg");
        var $card = $elem.find(".card");
        var $shadow = $elem.find(".shadow");
        var $rotateXY = $elem.find(".rotateXY");

        var $area = $elem.find(".area");
        var width = $area.width();
        var height = $area.height();


        function transform(valueX, valueY, animation, fn){
            var duration = animation ? animation : 0;
            $bg.velocity('stop').velocity({
                translateX : -valueX * 20 + "px",
                translateY : -valueY * 20 + "px"
            }, duration, "ease-in-out")
            $light.velocity('stop').velocity({
                translateX : -valueX * 400 + "px",
                translateY : -valueY * 200 + "px"
            }, duration, "ease-in-out")
            $shadow.velocity('stop').velocity({
                translateX : -valueX * 10 + "px",
                translateY : -valueY * 10 + "px"
            }, duration, "ease-in-out")
            $float.velocity('stop').velocity({
                translateX : valueX * 8 + "px",
                translateY : valueY * 8 + "px"
            }, duration, "ease-in-out")
            $rotateXY.velocity('stop').velocity({
                rotateY : valueX * 8 + "deg",
                rotateX : -valueY * 8 + "deg"
            }, duration, "ease-in-out", fn)
        }


        $area.mousemove(function(event){
            var valueX = 2 * event.offsetX / width - 1
            var valueY = 2 * event.offsetY / height - 1
            //如果变化过大，缩小value的数值，避免跳动
            valueX = Math.abs(valueX - latestX) > 0.3 ? ((valueX - latestX)*0.3 + latestX) : valueX;
            valueY = Math.abs(valueY - latestY) > 0.3 ? ((valueY - latestY)*0.3 + latestY) : valueY;
            latestX = valueX
            latestY = valueY
            transform(valueX, valueY);
        })
        $area.mouseout(function(){
            transform(0,0,300)
            latestX = 0;
            latestY = 0;
        })
    })

    return {
        productHandler: function() {
            $product.addClass("show")
            $allProduct.addClass("show");

            setTimeout(function(){
                $topic.addClass("show");
            }, 400)
            Title.set([
                {text: '产品'}
            ]);
            return Scene.set("channel")

        },
        productExitHandler:function(){
            $allProduct.removeClass("show");
            $topic.removeClass("show")
            setTimeout(function(){
                $product.removeClass("show")
            }, 500)
        }
    }
})
