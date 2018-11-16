	<section class="testimonial" role="main">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<?php
					$frontpage_id = get_option( 'page_on_front' );	
					$post_id = get_field('testimonials_page', $frontpage_id);
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
									<div class="testimonial-overlay"></div>
									<div class="testimonial-blurb" style="display:table;width:100%;height:100%;">
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