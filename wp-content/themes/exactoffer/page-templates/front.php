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
				<div class="home-header">
					<div style="display:table;width:100%;height:100%;">
						<div style="display:table-cell;vertical-align:middle;">
						    <h1 class="entry-title"><?php echo get_field('header'); ?></h1>
						    <p><?php echo get_field('subheader'); ?></p>
							<?php get_template_part('template-parts/free', 'offer'); ?>					    
						</div>
					</div>
				</div> <!-- home-header -->
			</div> <!-- overlay -->
		</div> <!-- home-featured -->
	</div> <!-- featured-container -->
	
	<section class="benefits" role="main">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2 class="magenta"><?php echo get_field('benefits_header'); ?></h2>
					<p><?php echo get_field('benefits_blurb'); ?></p>
				</div>
    	    </div>
    	    <div class="grid-x grid-margin-x">
				<?php if(get_field('benefits_blocks')): ?>
					<?php while(has_sub_field('benefits_blocks')): ?>
						<div class="large-4 medium-4 cell text-center benefit-block">
							<?php echo file_get_contents(get_sub_field('icon')); ?><br />
							<h3 class="teal"><?php echo get_sub_field('header'); ?></h3>
							<p><?php echo get_sub_field('blurb'); ?></p>
						</div>
					<?php endwhile; ?>
				<?php endif; ?>
				<div class="large-12 cell text-center">
					<div class="button arrow"><a href="<?php echo get_field('benefits_link'); ?>">Even More Benefits<?php get_template_part('assets/images/button', 'arrow.svg'); ?></a></div>
				</div>
    	    </div>
		</div>
	</section> <!-- benefits -->
	
	<section class="testimonial" role="main">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2>Don't forget to come back and add testimonial</h2>
				</div>
    	    </div>
		</div>
	</section>	<!-- testimonial -->


	<section class="how-it-works" role="main">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2 class="teal"><?php echo get_field('how_it_works_header'); ?></h2>
					<p><?php echo get_field('how_it_works_blurb'); ?></p>
				</div>
    	    </div>
    	    <div class="grid-x grid-margin-x">
				<?php if(get_field('how_it_works_steps')): ?>
					<?php while(has_sub_field('how_it_works_steps')): ?>
						<div class="large-4 medium-4 cell text-center step-block">
							<?php echo file_get_contents(get_sub_field('step_icon')); ?><br />
							<p class="teal"><?php echo get_sub_field('step_blurb'); ?></p>
						</div>
					<?php endwhile; ?>
				<?php endif; ?>
				<div class="large-12 cell text-center">	
					<?php get_template_part('template-parts/free', 'offer'); ?>
				</div>
    	    </div>														
		</div>
	</section>	<!-- how-it-works -->
	
	<section class="reviews">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-7 medium-7 cell small-text-center">
					<p class="teal"><?php echo get_field('reviews_blurb'); ?></p>
				</div>
				<div class="large-5 medium-5 cell text-center">
					<a href="<?php echo get_field('reviews_facebook_url'); ?>" target="_blank" class="reviews-wrapper">
						<?php get_template_part('assets/images/facebook', 'logo.svg'); ?><br />
						<?php
						$has_half = false;
						$facebook_stars = get_field('reviews_facebook_stars'); 
						if (strpos($facebook_stars, '.5') !== false) {
							$has_half = true;
							$facebook_stars = str_replace ( '.5', '' , $facebook_stars );
						}
						?>
						<?php
						for ($i = 0 ; $i < 5; $i++){
							if ($i >= $facebook_stars) {
								if ($has_half) {
									get_template_part('assets/images/half', 'star.svg');
									$has_half = false;
								} else {
									get_template_part('assets/images/no', 'star.svg');
								}
							} else {
								get_template_part('assets/images/star.svg');
							}
						} ?>
					</a>
					<a href="<?php echo get_field('reviews_google_url'); ?>" target="_blank" class="reviews-wrapper">
						<?php get_template_part('assets/images/google', 'logo.svg'); ?><br />
						<?php
						$has_half = false;
						$google_stars = get_field('reviews_google_stars'); 
						if (strpos($google_stars, '.5') !== false) {
							$has_half = true;
							$google_stars = str_replace ( '.5', '' , $google_stars );
						}
						?>
						<?php
						for ($i = 0 ; $i < 5; $i++){
							if ($i >= $google_stars) {
								if ($has_half) {
									get_template_part('assets/images/half', 'star.svg');
									$has_half = false;
								} else {
									get_template_part('assets/images/no', 'star.svg');
								}
							} else {
								get_template_part('assets/images/star.svg');
							}
						} ?>
					</a>
				</div>
    	    </div>
		</div>
	</section>	<!-- reviews -->

	<section class="cta" role="main">
		<div class="grid-container">
    	    <div class="grid-x">
	    	    <?php $url = wp_get_attachment_image_src(get_field('cta_before_image'), 'full'); ?>
				<div class="large-6 cell text-center cta-image" style="background: url(<?php echo $url[0]; ?>);">
					<?php echo get_field('cta_before_blurb'); ?>
				</div>
				<?php $url = wp_get_attachment_image_src(get_field('cta_after_image'), 'full'); ?>
				<div class="large-6 cell text-center cta-image" style="background: url(<?php echo $url[0]; ?>);">
					<?php echo get_field('cta_after_blurb'); ?>
				</div>
    	    </div>
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2 class="magenta"><?php echo get_field('cta_header'); ?></h2>
					<h3 class="teal"><?php echo get_field('cta_subheader'); ?></h3>
					<p><?php echo get_field('cta_blurb'); ?></p>
					<div class="button arrow"><a href="<?php echo get_field('cta_link'); ?>">Get Your ExactOffer<?php get_template_part('assets/images/button', 'arrow.svg'); ?></a></div>
				</div>
    	    </div>    	    
		</div>		
	</section>	<!-- cta -->	

</div> <!-- #page -->

<?php get_footer(); ?>