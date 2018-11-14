<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage DrumRoll
 * @since DrumRoll 1.0.0
 */
get_header();

$image_id = get_post_thumbnail_id();
// Default Featured Image
if ($image_id == null || get_field('featured_not_in_header')) {
	$image_id = get_theme_mod( 'default_featured' );
}
// Featured Image Dimensions from Customizer
$dimensions = get_theme_mod('featured_dimensions');
$width = intval($dimensions['width']);
$height = intval($dimensions['height']);
$size = $width . '|' . $height;
$blur_size = 'width=' . $width . '&height=' . $height . '&crop=1';
?>

<div id="single-post" role="main">

	<div class="featured-container hide-for-print">	
		<div class="grid-container no-padding">
			<div class="featured-image blog-landing-featured">
				<?php echo wp_get_attachment_image($image_id,'featured'); ?>
			</div> <!-- blog-landing-featured -->
		</div> <!-- grid-container -->
	</div> <!-- featured-container -->
	
	<div class="single-container">
		<div class="grid-container entry-content">
		<?php while ( have_posts() ) : the_post(); ?>
			<article class="main-content large-12 cell" <?php post_class() ?> id="post-<?php the_ID(); ?>">
				<header>
					<h1 class="entry-title"><?php the_title(); ?></h1>
					<?php drum_entry_meta(); ?>
					<?php get_template_part('template-parts/single','cats'); ?>
				</header>
				<div class="entry-content">
					<?php the_content(); ?>
				</div>
				<footer>
					<?php wp_link_pages( array('before' => '<nav id="page-nav"><p>' . __( 'Pages:', 'drumroll' ), 'after' => '</p></nav>' ) ); ?>
					<p><?php the_tags(); ?></p>
				</footer>
				<?php comments_template(); ?>
			</article>
		<?php endwhile;?>
		
		</div> <!-- row -->
	</div> <!-- single-container -->
</div> <!-- #single-post -->
<?php get_footer(); ?>