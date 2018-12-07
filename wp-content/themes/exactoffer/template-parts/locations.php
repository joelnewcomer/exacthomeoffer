<?php $locations = get_theme_mod( 'locations' ); ?>
<?php if ($locations) : ?>
	<?php foreach( $locations as $location ) : ?>
		<?php if( $location['loc_title'] ): ?>
			<!-- <span class="title"><?php echo $location['loc_title'];?></span> -->
		<?php endif; ?>
		<h2 class="phone">
			<?php // function drum_smart_phone($phone, $phone_text, $phone_label)
			echo drum_smart_phone($location['loc_phone'], $location['loc_phone'], ''); ?>
		</h2>
		<?php if (get_field('footer_address')) : ?>
		<address>
			<?php echo get_field('footer_address'); ?>
		</address>
		<?php endif; ?>
		<p>
			<?php if( $location['loc_email'] ): ?>
				<a class="email" href="mailto:<?php echo $location['loc_email'];?>"><?php get_template_part('assets/images/email', 'icon.svg'); ?><?php echo $location['loc_email'];?></a><br />
			<?php endif; ?>		
		</p>
	<?php endforeach; ?>
<?php endif; ?>