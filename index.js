$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

  //＝＝＝Muuriギャラリープラグイン設定
  var grid = new Muuri('.grid', {
  
  //アイテムの表示速度※オプション。入れなくても動作します
  showDuration: 600,
  showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  hideDuration: 600,
  hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    
  // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    }    
  });
  
  //＝＝＝並び替えボタン設定
  $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
    $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
    var className = $(this).attr("class");			//クラス名を取得
    className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
    $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
    if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
       grid.show('');								//全ての要素を出す
    }else{											//それ以外の場合は
      grid.filter("."+className[0]); 				//フィルターを実行
    }
  });
});

$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
      $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
 //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() {    
      //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
      
});

//スクロールした際の動きを関数でまとめる
function setFadeElement(){
  var windowH = $(window).height(); //ウィンドウの高さを取得
  var scroll = $(window).scrollTop(); //スクロール値を取得
    
    //出現範囲の指定
  var contentsTop = Math.round($('#area-3').offset().top);  //要素までの高さを四捨五入した値で取得
  var contentsH = $('#area-3').outerHeight(true); //要素の高さを取得
    
    //出現範囲内に入ったかどうかをチェック
  if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
    $("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
    $("#page-top").removeClass("DownMove");   //DownMoveを削除
    $(".hide-btn").removeClass("hide-btn");   //hide-btnを削除
  }
  //}//それ以外は
    else{
        if(!$(".hide-btn").length){       //サイト表示時にDownMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
    $("#page-top").addClass("DownMove");  //DownMoveをクラス追加
    $("#page-top").removeClass("UpMove"); //UpMoveを削除 
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});



// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// タイトルテキストの動き
const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const DELAY = 100;
const $target1 = $(".title");
const $target2 = $(".sentence");

setInterval(() => {
  $target1.addClass(CLASSNAME);
  setTimeout(() => {
    $target2.addClass(CLASSNAME);
  }, DELAY);

  setTimeout(() => {
    $target1.removeClass(CLASSNAME);
    setTimeout(() => {
      $target2.removeClass(CLASSNAME);
    }, DELAY);
  }, TIMEOUT);
}, TIMEOUT * 2);