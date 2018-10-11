$(function () {
		$('body').on('click', '[data-toggle]', function(e){
			ele = $(this);
//			ele.toggleClass('on');
			target = ele.attr('data-toggle');
			$('#'+target).toggleClass('on');
		});

  // remove class "on" from responsive menu on ESC Keyup
  $(document).on('keyup', function(e) {
    if (e.keyCode === 27) {
      $('#overlay-menu').removeClass('on');
    };
  });
});