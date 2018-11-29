<?php $post_id = get_option( 'page_on_front' ); ?>

	<section class="video">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2><?php echo get_field('learn_more_video_title', $post_id); ?></h2>
					<?php
					$video = get_field('learn_more_video_video', $post_id); // OEmbed Code
					$video_url = get_field('learn_more_video_video', $post_id, FALSE); // URL
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
					    <?php echo wp_get_attachment_image(get_field('learn_more_video_video_poster_image', $post_id), 'full'); ?>
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