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
		
				
	<footer id="footer" role="contentinfo">
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