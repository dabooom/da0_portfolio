
$(document).ready(function(){

  // Layout

  var $grid = $('#grid').imagesLoaded( function() {
    $grid.masonry({
        itemSelector: '.grid-item',
        fitwidth: true,
        gutter:10,
        horizontalOrder:true,
    });
  });

  // Magnific Popup

    $('.da0mobile').magnificPopup({
      items:[
        {
          src:'/da0_portfolio/index.html',
          type:'iframe'
        }
      ]
    });

    $('.gnu').magnificPopup({
      items:[
        {
          src:'/da0_port/img/gnu/gnu_popup.jpg',
          type:'iframe'
        }
      ]
    });

    $('.blog').magnificPopup({
      items:[
        {
          src:'/da0_port/img/blog/blog_popup.jpg',
          type:'iframe'
        }
      ]
    });

    $('.cafe24').magnificPopup({
      items:[
        {
          src:'/da0_port/img/cafe24/cafe24_popup.jpg',
          type:'iframe'
        }
      ]
    });

    $('.da0').magnificPopup({
      items:[
        {
          src:'/da0_portfolio/index.html',
          type:'iframe'
        }
      ]
    });

    $('.etc').magnificPopup({
      items:[
        {
          src:'/da0_port/img/max/etc_popup.jpg',
          type:'iframe'
        }
      ]
    });

    //다영_이미지_전환
    $('.da0_basic').mouseenter(function(){
      $(this).fadeOut('slow', function(){
        $(this).attr('src', $(this).data('on'));
        $(this).fadeIn();
      });
    });
    $('.da0_basic').mouseleave(function(){
      $(this).fadeOut('slow', function(){
        $(this).attr('src', $(this).data('off'));
        $(this).fadeIn();
      });
    });


    //hover가 모바일에서




});




// 이벤트 버블링 중지
    document.addEventListener("click", function(e){

      e.stopPropagation();

      alert(e.caption.tagName);
    });
