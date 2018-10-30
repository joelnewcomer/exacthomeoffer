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
					<?php
					$post_id = get_field('testimonials_page');
					$rows = get_field('testimonials', $post_id);
					$row_count = count($rows);
					$featured_i = array_search(true, array_column($rows, 'featured'));
					$featured = $rows[$featured_i]; 
					?>
					<?php if(get_field('testimonials', $post_id)): ?>
						<div class="grid-container testimonials-container">
							<div class="grid-x grid-padding-x testimonial-block">	
								<?php
								$name = $featured['name'];
								$state = $featured['state'];
								$testimonial = $featured['testimonial'];
								$stars = $featured['stars'];
								$blurb = $featured['photo_blurb'];
								$photo_id = $featured['photo'];
								$photo_url = wp_get_attachment_image_src($photo_id, 'testimonial');
								?>
								<div class="large-6 medium-6 cell text-center testimonial-photo" style="background-image: url(<?php echo $photo_url[0];?>);">
									<div style="display:table;width:100%;height:100%;">
										<div style="display:table-cell;vertical-align:middle;">
									    	<div style="text-align:center;">
										    	<?php echo $blurb; ?>
										    </div>
									  	</div>
									</div>
								</div> <!-- testimonial-photo -->
								<div class="large-6 medium-6 cell text-center testimonial-content">
									<div class="stars">
										<?php echo get_stars($stars); ?>
									</div>
									<p><?php echo $testimonial; ?></p>
									<p class="testimonial-name teal"><?php echo $name; ?> | <?php echo $state; ?></p>
									<?php if ($row_count > 1) : ?>
										<a class="testimonial-more" href="<?php echo get_permalink($post_id); ?>">See More</a>
									<?php endif; ?>
								</div> <!-- testimonial-content -->
			    			</div> <!-- grid-padding-x testimonial-block -->
						</div> <!-- grid-container testimonials-container -->
					<?php endif; ?>					
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
						<?php echo get_stars(get_field('reviews_facebook_stars')); ?>
					</a>
					<a href="<?php echo get_field('reviews_google_url'); ?>" target="_blank" class="reviews-wrapper">
						<?php get_template_part('assets/images/google', 'logo.svg'); ?><br />
						<?php echo get_stars(get_field('reviews_google_stars')); ?>
					</a>
				</div>
    	    </div>
		</div>
	</section>	<!-- reviews -->

	<section class="cta">
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

	<section class="video">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2>Learn More</h2>
					<?php
					$video = get_field('learn_more_video_video'); // OEmbed Code
					$video_url = get_field('learn_more_video_video', FALSE, FALSE); // URL
					?>
					<a class="video" href="<?php echo $video_url; ?>?autoplay=1&modestbranding=1&showinfo=0&rel=0" data-featherlight="iframe" data-featherlight-iframe-width="960" data-featherlight-iframe-height="540">
					    <?php echo wp_get_attachment_image(get_field('learn_more_video_video_poster_image'), 'full'); ?>
					    <div class="play-overlay">
					        <?php get_template_part('assets/images/play', 'button.svg'); ?><br />
					    </div>
					</a>
				
				</div>
    	    </div>
		</div>
	</section>	<!-- testimonial -->

</div> <!-- #page -->

<?php get_footer(); ?>