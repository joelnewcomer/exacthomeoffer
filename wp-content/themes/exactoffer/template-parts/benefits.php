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