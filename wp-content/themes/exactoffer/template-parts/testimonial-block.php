				<div class="grid-x grid-padding-x testimonial-block">	
					<?php
					$name = get_sub_field('name');
					$state = get_sub_field('state');
					$testimonial = get_sub_field('testimonial');
					$stars = get_sub_field('stars');
					$blurb = get_sub_field('photo_blurb');
					$photo_id = get_sub_field('photo');
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
					</div> <!-- testimonial-content -->
			    </div> <!-- grid-padding-x testimonial-block -->