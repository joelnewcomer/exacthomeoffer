<?php
// Blog featured Image
if (is_home() && get_option('page_for_posts') ) {
	$title = get_the_title(get_option('page_for_posts'));
	$image_id = get_the_post_thumbnail_id(get_option('page_for_posts'));
// Standard Featured Image
} else {
	$title = get_the_title();
	$image_id = get_post_thumbnail_id();
}
// Default Featured Image
if ($image_id == null || get_field('featured_not_in_header')) {
	$image_id = get_theme_mod( 'default_featured' );
}
?>


	<div class="featured-container">
		<div class="grid-container">
			<div class="featured-image blog-landing-featured">
				<div class="show-for-large-up">
					<?php echo wp_get_attachment_image($image_id, 'featured'); ?>
				</div>
				<div class="show-for-medium">
					<?php if (kdmfi_has_featured_image( 'featured-image-tablet')) : ?>
						<?php kdmfi_the_featured_image( 'featured-image-tablet', 'full'); ?>
					<?php else : ?>
						<?php echo wp_get_attachment_image($image_id, 'featured'); ?>
					<?php endif; ?>				
				</div>
				<div class="show-for-small">
					<?php if (kdmfi_has_featured_image( 'featured-image-mobile')) : ?>
						<?php kdmfi_the_featured_image( 'featured-image-mobile', 'full'); ?>
					<?php else : ?>
						<?php echo wp_get_attachment_image($image_id, 'featured'); ?>
					<?php endif; ?>
				</div>
				<div class="overlay">
					<section class="breadcrumbs">
						<div class="grid-container">
							<div class="large-12 cell">
								<?php
								if ( function_exists('yoast_breadcrumb') ) {
									yoast_breadcrumb('<p id="breadcrumbs">','</p>');
								}
								?>
							</div>
						</div> <!-- grid-container -->
					</section>
					<div class="blog-header single-header text-center">
						<div style="display:table;width:100%;height:100%;">
							<div style="display:table-cell;vertical-align:middle;">
						    	<div style="text-align:center;">
							    	<h1 class="entry-title single-title-ul"><?php the_title(); ?></h1>
						    	</div>
							</div>
						</div>
					</div> <!-- blog-header -->
				</div> <!-- overlay -->
			</div> <!-- blog-landing-featured -->
		</div> <!-- row -->
	</div> <!-- featured-container -->