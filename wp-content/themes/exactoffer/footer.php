<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "off-canvas-wrap" div and all content after.
 *
 * @package DrumRoll
 * @since DrumRoll 1.0.0
 */
?>
	</main> <!-- .container -->
	
	<?php if (get_field('time_factor') == true) : ?>
	<?php $benefits_page_id = 663; ?>
	<section class="cta benefits-cta">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-12 cell text-center">
					<h2 class="white"><?php echo get_field('cta_header', $benefits_page_id); ?></h2>
					<p><?php echo get_field('cta_blurb', $benefits_page_id); ?></p>
				</div>
    	    </div>    	    
		</div>		
	</section>	<!-- cta -->
	<?php endif; ?>	
	
	<?php if (get_field('hide_cta') != true) : ?>
	<section class="footer-cta">
		<div class="grid-container">
    	    <div class="grid-x grid-padding-x">
				<div class="large-4 medium-4 cell text-center">
					<?php get_template_part('assets/images/exactoffer', 'logo-tagline.svg'); ?><br />
				</div>
				<div class="large-8 medium-8 cell text-center">
					<?php get_template_part('template-parts/free', 'offer'); ?>
				</div>				
    	    </div>
		</div>
	</section>	<!-- footer-cta -->
	<?php endif; ?>
		
				
	<footer id="footer" role="contentinfo">
		<?php if (!is_page_template( 'page-templates/landing-page.php' )) : ?>
		<div class="main-footer">
			<div class="grid-container">
				<div class="grid-x">
					<div class="large-4 medium-4 cell small-text-center">
						<div class="address">
							<?php get_template_part('template-parts/locations'); ?>
						</div> <!-- address -->
						<p class="social-p"><?php _e( 'Follow Us:', 'drumroll' ); ?><?php get_template_part('template-parts/social'); ?></p>						
					</div>
					<div class="large-8 medium-8 cell hide-for-print hide-for-small">
						<?php drumroll_footer_menu(); ?>
					</div>
				</div> <!-- grid-x -->
			</div> <!-- grid-container -->
		</div> <!-- main-footer -->
		<?php endif; ?>
		<div class="sub-footer">
			<div class="grid-container">
				<div class="grid-x">
					<div class="large-7 medium-7 cell drum hide-on-print small-text-center">
						<p>&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>.  <span class="no-break"><?php _e( 'All rights reserved.', 'textdomain' ); ?>
							<?php
							$terms_page = get_theme_mod( 'terms_page' );
							$privacy_page = get_theme_mod( 'privacy_page' );
							?>
							<span class="hide-for-print">
							<?php if ($terms_page) : ?>
								&nbsp;&nbsp;|&nbsp;&nbsp;<a href="<?php echo get_permalink($terms_page); ?>"><?php _e( 'Terms', 'drumroll' ); ?></a>
							<?php endif; ?>
							<?php if ($privacy_page) : ?>
								&nbsp;&nbsp;|&nbsp;&nbsp;<a href="<?php echo get_permalink($privacy_page); ?>"><?php _e( 'Privacy', 'drumroll' ); ?></a>
							<?php endif; ?>
							&nbsp;&nbsp;|&nbsp;&nbsp;<a href="<?php echo get_site_url(); ?>/sitemap"><?php _e( 'Sitemap', 'drumroll' ); ?></a>
							</span> <!-- hide-for-print -->
							</span>
						</p>
					</div>
					<div class="large-5 medium-5 cell drum hide-on-print text-right small-text-center">
						<p><a href="http://www.drumcreative.com" target="_blank"><?php _e( 'Web Design by: Drum Creative' ); ?></a></p>
					</div>					
				</div> <!-- grid-x -->
			</div> <!-- grid-container -->			
		</div> <!-- sub-footer -->
	</footer>
	
	<?php get_template_part( 'template-parts/fullscreen-menu' ); ?>	
	<a class="cd-top"><?php _e( 'Top', 'textdomain' ); ?></a>

<?php wp_footer(); ?>

</body>
</html>