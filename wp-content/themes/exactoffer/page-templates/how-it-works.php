<?php
/*
Template Name: How it Works
*/
get_header(); ?>

<div id="page" role="main">

	<?php
	$title = get_the_title();
	$image_id = get_post_thumbnail_id();
	?>
	
	<section class="how-it-works" role="main">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2 class="teal"><?php echo get_field('header'); ?></h2>
					<p><?php echo get_field('subheader'); ?></p>
				</div>
    	    </div>
    	    <div class="grid-x grid-margin-x">
				<?php if(get_field('steps')): ?>
					<?php while(has_sub_field('steps')): ?>
						<div class="large-6 medium-6 cell text-center step-block">
							<?php echo file_get_contents(get_sub_field('step_icon')); ?><br />
							<h3><?php echo get_sub_field('step_title'); ?></h3
							<p class="teal"><?php echo get_sub_field('step_blurb'); ?></p>
						</div>
					<?php endwhile; ?>
				<?php endif; ?>
    	    </div>														
		</div>
	</section>	<!-- how-it-works -->
	
	<?php get_template_part('template-parts/testimonial','section'); ?>

	<section class="cta">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2 class="magenta"><?php echo get_field('cta_header'); ?></h2>
					<p><?php echo get_field('cta_subheader'); ?></p>
					<div class="button arrow"><a href="<?php echo get_site_url(); ?>/request-an-offer">Get Your ExactOffer<?php get_template_part('assets/images/button', 'arrow.svg'); ?></a></div>
				</div>
    	    </div>    	    
		</div>		
	</section>	<!-- cta -->	
	

</div> <!-- #page -->

<?php get_footer(); ?>