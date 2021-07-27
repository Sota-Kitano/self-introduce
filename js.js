
// $(function(){
//     $('a[href^="#"]').click(function() {
//     var speed = 800;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//     });
//     });

    $('.inner nav ul li #career').click(function () {
        var elmHash = $(this).attr('href'); //hrefの内容を取得
        var pos = Math.round($(elmHash).offset().top-120);  //headerの高さを引く
        $('career').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
        return false;//リンクの無効化
      });