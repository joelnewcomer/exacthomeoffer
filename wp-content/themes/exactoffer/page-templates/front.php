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
				<?php echo wp_get_attachment_image($image_id, 'featured-home'); ?>
			</div>
			<div class="show-for-medium">
				<?php if (kdmfi_has_featured_image( 'featured-image-tablet')) : ?>
					<?php kdmfi_the_featured_image( 'featured-image-tablet', 'full'); ?>
				<?php else : ?>
					<?php echo wp_get_attachment_image($image_id, 'featured-home'); ?>
				<?php endif; ?>				
			</div>
			<div class="show-for-small">
				<?php if (kdmfi_has_featured_image( 'featured-image-mobile')) : ?>
					<?php kdmfi_the_featured_image( 'featured-image-mobile', 'full'); ?>
				<?php else : ?>
					<?php echo wp_get_attachment_image($image_id, 'featured-home'); ?>
				<?php endif; ?>
			</div>
			<div class="overlay">
				<?php if (!is_front_page()) : ?>
					<div class="overlay-gradient"></div>
				<?php endif; ?>
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
	
	<?php get_template_part('template-parts/benefits'); ?>
	
	<?php get_template_part('template-parts/testimonial','section'); ?>

	<?php get_template_part('template-parts/how-it-works'); ?>
	
	
	<section class="reviews">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-7 medium-7 cell small-text-center">
					<p class="teal"><?php echo get_field('reviews_blurb'); ?></p>
				</div>
				<div class="large-5 medium-5 cell text-center">
					<a href="<?php echo get_field('reviews_facebook_url'); ?>" target="_blank" class="reviews-wrapper facebook-reviews">
						<?php echo get_stars(get_field('reviews_facebook_stars')); ?><br />
						<?php get_template_part('assets/images/facebook', 'logo.svg'); ?>
					</a>
					<a href="<?php echo get_field('reviews_google_url'); ?>" target="_blank" class="reviews-wrapper google-reviews">
						<?php echo get_stars(get_field('reviews_google_stars')); ?><br />
						<?php get_template_part('assets/images/google', 'logo.svg'); ?>
					</a>
				</div>
    	    </div>
		</div>
	</section>	<!-- reviews -->

	<section class="cta">
		<div class="grid-container">
    	    <div class="grid-x">
	    	    <?php $url = wp_get_attachment_image_src(get_field('cta_before_image'), 'full'); ?>
				<div class="large-6 cell text-center cta-image" style="background-image: url(<?php echo $url[0]; ?>);">
					<?php echo get_field('cta_before_blurb'); ?>
				</div>
				<?php $url = wp_get_attachment_image_src(get_field('cta_after_image'), 'full'); ?>
				<div class="large-6 cell text-center cta-image" style="background-image: url(<?php echo $url[0]; ?>);">
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

	<section class="video">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2>Learn More</h2>
					<?php
					$video = get_field('learn_more_video_video'); // OEmbed Code
					$video_url = get_field('learn_more_video_video', FALSE, FALSE); // URL
					$video = true;
					if ($video_url == '') {
						$video = false;
					}
					?>
					<?php if ($video) : ?>
						<a class="video" href="<?php echo $video_url; ?>?autoplay=1&modestbranding=1&showinfo=0&rel=0" data-featherlight="iframe" data-featherlight-iframe-width="960" data-featherlight-iframe-height="540">
					<?php else : ?>
						<a class="video no-video" href="#">
					<?php endif; ?>
					    <?php echo wp_get_attachment_image(get_field('learn_more_video_video_poster_image'), 'full'); ?>
					    <?php if ($video): ?>
					    <div class="play-overlay">
					        <?php get_template_part('assets/images/play', 'button.svg'); ?><br />
					    </div>
					    <?php endif; ?>
					</a>
				
				</div>
    	    </div>
		</div>
	</section>	<!-- video -->

</div> <!-- #page -->

<?php get_footer(); ?>