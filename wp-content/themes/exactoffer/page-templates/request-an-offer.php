<?php
/*
Template Name: Request an Offer
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
			<div class="overlay">
				<div class="offer-header">
					<div style="display:table;width:50%;height:100%;float:left;">
						<div style="display:table-cell;vertical-align:middle;">
						    <h1 class="entry-title"><?php echo get_field('header'); ?></h1>
						    <p><?php echo get_field('subheader'); ?></p>
						</div>
					</div>
					<div style="display:table;width:50%;height:100%;float:left;">
						<div style="display:table-cell;vertical-align:middle;">
						    <div class="offer-box">
							    <h2>Start Your ExactOffer</h2>
								<p>We'll get started serving you right away!</p>
								Form goes here!
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