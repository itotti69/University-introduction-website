$(function(){
    //文字を一文字ずつ囲う処理（タグは入っていない前提です）
    var text = $('.text').text().replace(/[\s\n　    ]/g, '');
    var html = '';
    $.each(text.split(''),function(key,value){
        if(value){
            html += '<span>' + value + '</span>';
        }
    });
    $('.text').html(html);
    
    //アニメーション実行
    anime({
        targets: '.text > span',
        scale: [0,1],
        duration: 500,
        easing: 'easeInElastic(10,1)',
        delay: anime.stagger(100)
    });
    
});


