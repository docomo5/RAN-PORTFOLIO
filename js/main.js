$(function(){

    var chart = $('.chart');

    chart.each(function(){
        var item = $(this);
        var title = item.find('h2');
        var targetNum = title.attr('data-num');
        var circle = item.find('circle');

        $({rate:0}).animate({rate:targetNum},
            {
                duration:1500,
                progress:function(){
                    var now = this.rate;
                    var amount = 312 - (312*now/100);
                    console.log(now);
                    circle.css({strokeDashoffset:amount});
                }
            });

    });

})