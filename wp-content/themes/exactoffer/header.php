<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package DrumRoll
 * @since DrumRoll 1.0.0
 */
?>

<!doctype html>
<html class="no-js no-svg" <?php html_tag_schema(); ?> <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta http-equiv="x-ua-compatible" content="ie=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		<?php wp_head(); ?>
		
		<link rel="stylesheet" href="https://use.typekit.net/rgc3nrt.css">
		
		<!-- Polyfills to make various versions of IE play nicer -->
		<script>
			jQuery( document ).ready(function() {
				conditionizr.polyfill('<?php echo get_template_directory_uri(); ?>/assets/javascript/polyfills/respond.min.js', ['ie7', 'ie8']);
				conditionizr.polyfill('<?php echo get_template_directory_uri(); ?>/assets/javascript/polyfills/nwmatcher-1.3.4.min.js', ['ie7', 'ie8']);
				conditionizr.polyfill('<?php echo get_template_directory_uri(); ?>/assets/javascript/polyfills/selectivizr-min.js', ['ie7', 'ie8']);
				conditionizr.polyfill('<?php echo get_template_directory_uri(); ?>/assets/javascript/polyfills/html5shiv.min.js', ['ie7', 'ie8', 'ie9']);
				conditionizr.polyfill('<?php echo get_template_directory_uri(); ?>/assets/javascript/polyfills/css3-multi-column.min.js', ['ie7', 'ie8', 'ie9']);
				conditionizr.polyfill('<?php echo get_template_directory_uri(); ?>/assets/javascript/polyfills/flexibility.js', ['ie8', 'ie9']);
				conditionizr.config({
					tests: {
						'ie7': ['class'],
						'ie8': ['class'],
						'ie9': ['class'],
					}
				});
			})
		</script>
		
		<!-- Tidio Chat embed code -->
		<script src="//code.tidio.co/0qcvlpswfjd9eytoo07rurwrhcxbki8c.js"></script>

	</head>
	<body <?php body_class(); ?>>
		<?php // get_template_part('template-parts/preloader'); ?>
		<a class="skip-link sr-only" href="#content"><?php _e( 'Skip to content', 'drumroll' ); ?></a>
		<!-- NOTE: Remove "transparent" class for white relative header (rather than semi-transparent absolute header) -->
		<?php if (!is_page_template( 'page-templates/landing-page.php' )) : ?>
		<div class="header-wrapper">
			<header id="masthead" class="site-header"  role="banner">
				<nav id="site-navigation" class="main-navigation top-bar grid-container" role="navigation">
					<div class="top-bar-left small-text-center">
						<?php get_template_part('template-parts/site-logo','link'); ?>
					</div> <!-- top-bar-left -->
					<div class="top-bar-middle hide-for-print show-for-large-up">
						<?php drumroll_main_menu(); ?>
					</div>
					<div class="top-bar-middle tablet hide-for-print show-for-medium-down">
						<?php $locations = get_theme_mod( 'locations' ); ?>
						<?php foreach( $locations as $location ) : ?>
							<p>
							<?php
							$phone = $location['loc_phone'];	
							$clean_phone = preg_replace("/[^0-9]/","",$phone);
							echo '<a class="hide-for-print call-now" href="tel:' . $clean_phone . '">Call Now</a>';
							?>
							<span class="hide-for-small">&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;</span>
							<a class="magenta" href="<?php echo get_site_url(); ?>/request-an-offer">Request Offer</a>
							</p>
						<?php endforeach; ?>
					</div>
					<div class="top-bar-right hide-for-print show-for-large-up">
						<?php foreach( $locations as $location ) : ?>
							<p>Call Today <?php echo drum_smart_phone($location['loc_phone'], $location['loc_phone'], ''); ?></p>
						<?php endforeach; ?>
					</div>
					<div class="top-bar-right hide-for-print show-for-medium-down">
						<a href="#" class="menu show-for-medium-down" aria-controls="site-navigation"><?php get_template_part('assets/images/hamburger.svg'); ?> <span class="hide-for-small"><?php _e( 'Menu', 'drumroll' ); ?></span></a>
					</div> <!-- top-bar-right -->
				</nav> <!-- #site-navigation -->
			</header> <!-- #masthead -->
		</div> <!-- header-wrapper -->
		
		
		<script>
			jQuery(window).scroll(function (event) {
				if(jQuery(window).width()<641) {
					var scroll = jQuery(window).scrollTop();
					var headerSize = 47;
					if (scroll > headerSize) {
						jQuery('.top-bar-middle').addClass('sticky');
					} else {
						jQuery('.top-bar-middle').removeClass('sticky');
					}
				}
			});
		</script>
		
		<?php else : ?>
		
			<div class="grid-container show-for-small landing-logo">
    	    	<div class="grid-x grid-padding-x">
					<div class="large-12 cell text-center">	
						<?php get_template_part('template-parts/site-logo','link'); ?>
					</div>
    	    	</div>
			</div>
		
		<?php endif; ?>
		
		<main id="content" class="container" tabindex="-1">