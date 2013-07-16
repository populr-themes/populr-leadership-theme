// $(document).on('pop-initialized', function(){
//   $('.asset-type-imagegroup').live('initialize', function(){
//     $(this).find('.slide').each(function(){
//       var $link = $(this).find('a');
//       $link.find('img').insertBefore($link);
//       $link.addClass('image-overlay').css({'line-height': $(this).height() + 'px'});
//     });
//   });
// });

$(document).on('pop-initialized', function(){
  $('.asset-type-imagegroup').live('initialize', function(){
    $(this).find('.slide').each(function(){
      var $el = $(this).find('a');
      $link = $el.clone();
      $link.find('img').remove();
      $link.addClass('image-overlay').css({'line-height': $(this).height() + 'px'});
      $link.insertAfter($el);
    });
  });
});
