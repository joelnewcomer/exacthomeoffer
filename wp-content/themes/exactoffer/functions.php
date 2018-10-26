<?php
/**
 * Author: Drum Creative
 * URL: http://drumcreative.com
 *
 * drumroll functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * @link https://codex.wordpress.org/Theme_Development
 * @package DrumRoll
 * @since DrumRoll 1.0.0
 */
// Global variables
$dimensions = get_theme_mod('featured_dimensions');
global $featured_image_size;
$featured_image_size = intval($dimensions['width']) . ' x ' . intval($dimensions['height']);
$home_dimensions = get_theme_mod('home_featured_dimensions');
global $home_featured_image_size;
$home_featured_image_size = intval($home_dimensions['width']) . ' x ' . intval($home_dimensions['height']);


/** Mobile Detect http://mobiledetect.net/ */
require_once('library/Mobile_Detect.php');

/** Various clean up functions */
require_once( 'library/cleanup.php' );

/** Required for Foundation to work properly */
require_once( 'library/foundation.php' );

/** Format comments */
require_once( 'library/class-drumroll-comments.php' );

/** Register all navigation menus */
require_once( 'library/navigation.php' );

/** Create widget areas in sidebar and footer */
require_once( 'library/widget-areas.php' );

/** Return entry meta information for posts */
require_once( 'library/entry-meta.php' );

/** Enqueue scripts */
require_once( 'library/enqueue-scripts.php' );

/** Add theme support */
require_once( 'library/theme-support.php' );

/** Add Drum's functions */
require_once('library/drum-functions.php');

/** Add Drum's plugins */
require_once('library/drum-plugins.php');

/** Add Customizer Panels/Controls */
require_once('library/customizer.php');

/** Add button shortcode button to TinyMCE */
require_once( 'library/editor-buttons/tinymce-buttons.php' );

/** Add TGM Plugin Activation - http://tgmpluginactivation.com/ */
require_once('library/class-tgm-plugin-activation.php');

add_filter('acf/settings/load_json', 'my_acf_json_load_point');

// Specify Local JSON folder. This was added on 7/19/17 because of a bug preventing the JSON from saving.
function my_acf_json_load_point( $paths ) {
    unset($paths[0]);    
    $paths[] = get_stylesheet_directory() . '/acf-json';
    return $paths;
}


// Add Tablet and Mobile Featured Images
add_filter( 'kdmfi_featured_images', function( $featured_images ) {
  // Add featured-image-tablet to pages and posts
  $args_1 = array(
    'id' => 'featured-image-tablet',
    'desc' => 'This image will be used on tablets.',
    'label_name' => 'Tablet Featured Image',
    'label_set' => 'Set tablet featured image',
    'label_remove' => 'Remove tablet featured image',
    'label_use' => 'Set tablet featured image',
    'post_type' => array( 'page' ),
  );

  // Add featured-image-2 to pages only
  $args_2 = array(
    'id' => 'featured-image-mobile',
    'desc' => 'This image will be used on mobile devices.',
    'label_name' => 'Mobile Featured Image',
    'label_set' => 'Set mobile featured image',
    'label_remove' => 'Remove mobile featured image',
    'label_use' => 'Set mobile featured image',
    'post_type' => array( 'page' ),
  );

  // Add the featured images to the array, so that you are not overwriting images that maybe are created in other filter calls
  $featured_images[] = $args_1;
  $featured_images[] = $args_2;

  // Important! Return all featured images
  return $featured_images;
});