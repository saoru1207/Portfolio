
// ＝＝＝＝＝＝＝＝＝＝ハンバーガーメニュ＝＝＝＝＝＝＝＝＝＝＝
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

// ハンバーガーメニュー内アコーディオン


// PCアコーディオン
$(function(){
    $('.toggle').each(function(){
        $(this).on('click',function(){
            $("+.inner-child",this).slideToggle();
            return false;
        });
    });
});

// ＝＝＝＝＝＝＝＝＝TOP画面スクロールボタン＝＝＝＝＝＝＝＝＝＝

$(window).on('load resize',function(){
    //ウィンドウの高さを取得する
    var targetY = $(window).height();
    
    //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
    $('.js-scroll a').on('click',function(){
        $("html, body").stop().animate({scrollTop: targetY}, 500, 'swing');
        return false;
    });
});



// ＝＝＝＝＝＝＝＝＝＝ふわっと浮き上がらせる＝＝＝＝＝＝＝＝＝＝＝
$(function(){
    　$(window).scroll(function (){
        $('.effect-fade').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    });
});

// ＝＝＝＝＝＝＝＝＝＝TOPへ戻るボタンを実装＝＝＝＝＝＝＝＝＝＝

// TOPへもどるボタン表示
//下から表示させる要素を指定
let $pagetop = $('.ScrollTop');

$(window).on( 'scroll', function () {
  //スクロール位置を取得
if ( $(this).scrollTop() < 40 ) {
    $pagetop.removeClass('isActive');
} else {
    $pagetop.addClass('isActive');
}
});


// ＝＝＝＝＝＝＝＝＝マウンテンページの スリック機能＝＝＝＝＝＝＝
$("document").ready(function(){
    $('.mypattern').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 800,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '33%',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10%',
                    slidesToShow: 1
                }
            }
        ]
    });
});



// ＝＝＝＝＝＝＝＝ギャラリーページの機能＝＝＝＝＝＝＝＝＝＝＝＝

$(function () {
    $('.lightgallery').lightGallery({
        thumbnail: true
    });
});
