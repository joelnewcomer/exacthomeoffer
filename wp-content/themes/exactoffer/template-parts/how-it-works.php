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
				<?php if (!is_page_template('page-templates/landing-page.php')) : ?>
				<div class="large-12 cell text-center">	
					<?php get_template_part('template-parts/free', 'offer'); ?>
				</div>
				<?php endif; ?>
    	    </div>														
		</div>
	</section>	<!-- how-it-works -->