<?php
/*
Template Name: Testimonials
*/
get_header(); ?>

<?php get_template_part( 'template-parts/featured-image' ); ?>
<?php // get_template_part( 'template-parts/featured-image-parallax' ); ?>

<div id="page" role="main">
	<?php
	$rows = get_field('testimonials');
	$row_count = count($rows);
	?>
	<?php if(get_field('testimonials')): ?>
		<div class="grid-container testimonials-container">
			<?php while(has_sub_field('testimonials')): ?>
				<?php get_template_part('template-parts/testimonial','block'); ?>
			<?php endwhile; ?>
		</div> <!-- grid-container -->
	<?php endif; ?>
</div> <!-- #page -->

<?php get_footer();