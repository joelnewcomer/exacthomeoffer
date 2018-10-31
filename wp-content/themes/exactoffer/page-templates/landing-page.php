<?php
/*
Template Name: Landing Page
*/
get_header(); ?>

<div id="page" role="main">

	<?php
	$title = get_the_title();
	$image_id = get_post_thumbnail_id();
	
	// Default Featured Image
	if ($image_id == null || get_field('featured_not_in_header')) {
		$image_id = get_theme_mod( 'default_featured' );
	}
	?>

	<div class="featured-container">
		<div class="featured-image request-offer-featured">
			<div class="show-for-large-up">
				<?php echo wp_get_attachment_image($image_id, 'home-featured'); ?>
			</div>
			<div class="show-for-medium">
				<?php if (kdmfi_has_featured_image( 'featured-image-tablet')) : ?>
					<?php kdmfi_the_featured_image( 'featured-image-tablet', 'full'); ?>
				<?php else : ?>
					<?php echo wp_get_attachment_image($image_id, 'home-featured'); ?>
				<?php endif; ?>				
			</div>
			<div class="show-for-small">
				<?php if (kdmfi_has_featured_image( 'featured-image-mobile')) : ?>
					<?php kdmfi_the_featured_image( 'featured-image-mobile', 'full'); ?>
				<?php else : ?>
					<?php echo wp_get_attachment_image($image_id, 'home-featured'); ?>
				<?php endif; ?>
			</div>
			<div class="landing-bar"></div>
			<div class="overlay overlay-left">
				<div class="offer-header">
					<div style="display:table;width:100%;height:100%;float:left;">
						<div class="left-table-cell" style="display:table-cell;vertical-align:middle;">
							<div class="offer-header-left">
							    <h1 class="entry-title"><?php echo str_replace( 'guaranteed.' , '<span>guaranteed.</span>' , get_field('header') ); ?></h1>
								<p><?php echo get_field('subheader'); ?></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="overlay overlay-right">
				<div class="offer-header">			
					<div style="display:table;width:100%;height:100%;float:left;">
						<div class="offer-table-cell" style="display:table-cell;vertical-align:middle;padding-right: 20px;padding-left: 20px;">
						    <div class="offer-box">
							    <h2 class="magenta">Start your ExactOffer</h2>
								<p>We'll get started serving you right away!</p>								
								<?php gravity_form(5, false, false, false, '', true, 12); ?>
							</div> <!-- offer-box -->
						</div>
					</div>
				</div> <!-- offer-header -->
			</div> <!-- overlay -->
		</div> <!-- request-offer-featured -->
	</div> <!-- featured-container -->
	
	<?php get_template_part('template-parts/benefits'); ?>
	
	<?php get_template_part('template-parts/testimonial','section'); ?>

	<?php get_template_part('template-parts/how-it-works'); ?>
	

</div> <!-- #page -->

<?php get_footer(); ?>