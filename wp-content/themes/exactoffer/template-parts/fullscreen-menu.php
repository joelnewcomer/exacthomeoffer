<div id="fullscreen-menu-container" class="transition">
	<div class="menu-left-container menu-container small-text-center transition">
		<div class="menu-top-right">
			<a href="#" class="close"><span>&times;</span> <?php _e( 'Close', 'drumroll' ); ?></a>
		</div>
		<div class="menu-left">
			<div style="display:table;width:100%;height:100%;">
				<div style="display:table-cell;vertical-align:middle;">
					<div class="fs-menu-inner">
				    	<?php drumroll_fullscreen_menu(); ?>
						<div class="full-logo">
							<?php get_template_part('template-parts/site-logo','link'); ?>
						</div>
						<div class="address">
							<?php get_template_part('template-parts/locations'); ?>
						</div> <!-- address -->					
						<p class="social-p"><?php _e( 'Follow Us:', 'drumroll' ); ?></p><?php get_template_part('template-parts/social'); ?>
					</div> <!-- fs-menu-inner -->
			  	</div>
			</div>
		</div> <!-- menu-right -->
	</div> <!-- menu-right-container -->
</div> <!-- fullscreen-menu-container -->

<script>
var modal = document.querySelector("#fullscreen-menu-container");
var focusableEls = modal.querySelectorAll('a[href], input:not([disabled]):not([type=hidden])');
var focusableEls = Array.prototype.slice.call(focusableEls);
var firstFocusableEl = focusableEls[0];
var lastFocusableEl = focusableEls[ focusableEls.length - 1 ];
var lastFocusableElFocus = false;

jQuery(document).on( "click", ".fullscreen-menu li.menu-item-has-children a", function(e) {
	jQuery(this).parent().toggleClass('expanded');	
});

jQuery( "a.menu" ).on( "click", function(e) {
	e.preventDefault();
	// Get currently focused element and save it so we can return to it when the menu closes
	var focusedElBeforeOpen = document.activeElement;
	firstFocusableEl.focus();
	jQuery('#fullscreen-menu-container').addClass('active');
});
jQuery( "a.close" ).on( "click", function(e) {
	e.preventDefault();
	jQuery('#fullscreen-menu-container').removeClass('active');
});

function handleBackwardTab(e) {
	if ( document.activeElement === firstFocusableEl ) {
		e.preventDefault();
		lastFocusableEl.focus();
	}
}

function handleForwardTab(e) {
	if (lastFocusableElFocus) {
		firstFocusableEl.focus();
		lastFocusableElFocus = false;
	}
	if ( document.activeElement === lastFocusableEl ) {
		e.preventDefault();
		lastFocusableElFocus = true;
	}
}
	
// Add keyboard support so that the esc key closes the menu
document.addEventListener('keyup', (e) => {
	if(e.keyCode === 27) {
    	jQuery('#fullscreen-menu-container').removeClass('active');
    	focusedElBeforeOpen.focus();
  	}
  	if(e.keyCode === 9 && jQuery('#fullscreen-menu-container').hasClass('active')) {
		if ( focusableEls.length === 1 ) {
			e.preventDefault();
		} 
		if ( e.shiftKey ) {
			handleBackwardTab(e);
		} else {
			handleForwardTab(e);
		}	  	
	}
});
</script>