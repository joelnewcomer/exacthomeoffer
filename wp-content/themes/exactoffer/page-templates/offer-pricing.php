<?php
/*
Template Name: Offer Pricing
*/
get_header(); ?>

<div class="benefits-page" id="page" role="main">
	
	<section class="offer-pricing">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center pricing-page-header">		
					<h2 class="magenta"><?php echo get_field('header'); ?></h2>
					<p><?php echo get_field('subheader'); ?></p>
				</div>
    	    </div>
		</div>
		<div class="grid-container no-padding">
    	    <div class="grid-x">		
				<div class="pricing-table">
					<div class="pricing-row table-header">
						<div class="pricing-title"></div>
						<div class="pricing-value">
							<div class="table-logo text-left">
								Selling to<br />
								<?php get_template_part('assets/images/exactoffer', 'white.svg'); ?>
							</div>
						</div>
						<div class="pricing-value">
							Traditional Home Sale
						</div>
					</div>
					<?php if(get_field('section')): ?>
						<?php while(has_sub_field('section')): ?>
							<div class="pricing-row pricing-header">
								<div class="pricing-title">
									<?php echo get_sub_field('section_header'); ?>
								</div>
								<div class="pricing-value"></div>
							</div>
							<?php if(get_sub_field('rows')): ?>
								<?php while(has_sub_field('rows')): ?>
									<div class="pricing-row">
										<div class="pricing-title">
											<?php echo get_sub_field('title'); ?>
										</div>
										<div class="pricing-value">
											<?php echo get_sub_field('exactoffer'); ?>
										</div>
										<div class="pricing-value">
											<?php echo get_sub_field('traditiona'); ?>
										</div>
									</div> <!-- pricing-row -->
								<?php endwhile; ?>
							<?php endif; ?>
							<?php echo get_sub_field('sub_field_2'); ?>
						<?php endwhile; ?>
					<?php endif; ?>
					<p class="pricing-note"><?php echo get_field('pricing_table_note'); ?></p>
				</div> <!-- pricing-table -->
    	    </div> <!-- grid-padding-x -->
		</div> <!-- grid-container -->
	</section> <!-- offer-pricing -->
	
	<?php get_template_part('template-parts/testimonial','section'); ?>

	<section class="cta">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2 class="teal"><?php echo get_field('cta_header'); ?></h2>
					<p><?php echo get_field('cta_subheader'); ?></p>
					<div class="button arrow"><a href="<?php echo get_site_url(); ?>/request-an-offer">Get Your ExactOffer<?php get_template_part('assets/images/button', 'arrow.svg'); ?></a></div>
				</div>
    	    </div>    	    
		</div>		
	</section>	<!-- cta -->	
	

</div> <!-- #page -->

<?php get_footer(); ?>