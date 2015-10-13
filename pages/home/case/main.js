define(['../scene', 'less!./case.less'], function(Scene) {


    function showCases(){
        var $caseWrapper = $('#case');
        //加载case页面的内容
    }

    return {
        caseHandler: function() {
            $('.guideBtn').html('案例').attr('href','/#case');
            $('.subGuideBtn').html('');
            $('.module').removeClass('show');
            $('#case').addClass('show');
            
            Scene.set("channel")

            showCases();
        },
        caseDetailHandler: function(caseName) {
            console.log('case name is:' + caseName);
        }
    }
})
