<?php
/*
Template Name: Locations
*/
get_header(); ?>

<div class="locations-page" id="page" role="main">
	
	<section class="locations">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center locations-page-header">		
					<h2 class="magenta"><?php echo get_field('header'); ?></h2>
					<p><?php echo get_field('subheader'); ?></p>
				</div>
				<?php if(get_field('locations')): ?>
					<?php
					$count = count(get_field('locations'));
					$i = 1;	
					?>
					<?php while(has_sub_field('locations')): ?>
						<?php
						$post_id = get_sub_field('location_page');
						$title = get_the_title($post_id);
						$class = "large-6 medium-6";
						$img_url = get_the_post_thumbnail_url($post_id, 'full');
						if (!is_even($count) && $i == $count) {
							$class = "large-12";
						}
						?>
						<a class="<?php echo $class; ?> cell text-center location-block" href="<?php echo get_permalink($post_id); ?>" style="background-image:url(<?php echo $img_url; ?>);">
							<?php echo $title; ?>
						</a>
						<?php $i++; ?>
					<?php endwhile; ?>
				<?php endif; ?>
    	    </div>
		</div>
	</section> <!-- locations -->

	<section class="cta locations-cta">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<?php echo get_field('cta'); ?>
				</div>
    	    </div>    	    
		</div>		
	</section>	<!-- cta -->	
	

</div> <!-- #page -->

<?php get_footer(); ?>