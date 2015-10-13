document.addEventListener('DOMContentLoaded',function(){
    console.log('ready');

    var doc = document;

    var $urlInput = doc.querySelector('#urlInput');
    var $form = doc.querySelector('form');
    var $content = doc.querySelector('#content');

    $urlInput.addEventListener('change',function(){
        if($urlInput.validity.typeMismatch) {
            $urlInput.setCustomValidity("please insert a normal url!");
          } else {
            $urlInput.setCustomValidity("");
            var url = this.value.trim();
            show(url)
        }
    });

    $form.addEventListener('submit',function(e){
        e.preventDefault();
    });

    function show(url){
        // TODO ：这里可以读取 localstorage 的配置
        // 或者可以从进入页面的URL读取参数

        var options = {
            "iframes" : [{
                width : 320,
                height: 568
            },{
                width : 1024,
                height : 768
            },{
                width : 1440,
                height : 900
            }]
        }

        options.iframes.forEach(function(el){
            var iframe = document.createElement('iframe');
            iframe.width = el.width + 'px';
            el.height ? iframe.height = el.height + 'px' : '';
            iframe.src = url;
            $content.appendChild(iframe);
        })



    }


});