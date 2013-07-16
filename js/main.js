$(document).on('pop-initialized', function(){
  $('.asset-type-imagegroup').live('initialize', function(){
    $(this).find('.slide').each(function(){
      var $link = $(this).find('a');
      $link.find('img').insertBefore($link);
      $link.addClass('image-overlay').css({'line-height': $(this).height() + 'px'});
    });
  });
});
