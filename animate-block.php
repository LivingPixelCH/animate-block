<?php
/**
 * Plugin Name:       Animate Block
 * Description:       Fade in blocks on scroll.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           0.6.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       animate-block
 *
 * @package           livingpixel-blocks
 */

function create_block_animate_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_animate_block_block_init' );
