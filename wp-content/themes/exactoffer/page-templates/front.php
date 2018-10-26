<?php
/*
Template Name: Front
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
		<div class="featured-image home-featured">
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
				<div class="home-header">
					<div style="display:table;width:100%;height:100%;">
						<div style="display:table-cell;vertical-align:middle;">
						    <h1 class="entry-title"><?php echo get_field('header'); ?></h1>
						    <p><?php echo get_field('subheader'); ?></p>
						</div>
					</div>
				</div> <!-- home-header -->
			</div> <!-- overlay -->
		</div> <!-- home-featured -->
	</div> <!-- featured-container -->
	
	<section class="intro" role="main">
	   <div <?php post_class() ?> id="post-<?php the_ID(); ?>">
	   	<div class="entry-content grid-container">
	   		<div class="grid-x">
	   			<div class="large-12 cell">
	   				<?php the_content(); ?>
	   			</div>
	   		</div> <!-- grid-x -->
	   	</div> <!-- grid-container -->
	   </div>
	</section>

</div> <!-- #page -->

<?php get_footer(); ?>