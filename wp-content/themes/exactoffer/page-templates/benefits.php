<?php
/*
Template Name: Benefits
*/
get_header(); ?>

<div class="benefits-page" id="page" role="main">
	
	<?php get_template_part('template-parts/benefits'); ?>

	<section class="cta benefits-cta">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2 class="white"><?php echo get_field('cta_header'); ?></h2>
					<p><?php echo get_field('cta_blurb'); ?></p>
				</div>
    	    </div>    	    
		</div>		
	</section>	<!-- cta -->	
	

</div> <!-- #page -->

<?php get_footer(); ?>