<?php
/**
 * Define the hooks for WP initialization.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Addons_For_Gutenberg
 * @subpackage WPMozo_Addons_For_Gutenberg/includes
 */

/**
 * This class responsible for defining all actions for WP initialization of the plugin.
 *
 * @since      1.0.0
 * @package    WPMozo_Addons_For_Gutenberg
 * @subpackage WPMozo_Addons_For_Gutenberg/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Addons_Gutenberg_Init {

	/**
	 * The instance of blocks class.
	 *
	 * @since 1.0.0
	 * @var WPMozo_Addons_Gutenberg_Blocks $wpmozo_blocks The instance of blocks class.
	 */
	public $wpmozo_blocks;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		require_once WPMOZO_ADDONS_GUTENBERG_INC_DIR_PATH . 'class-wpmozo-addons-gutenberg-blocks.php';
		$this->wpmozo_blocks = WPMozo_Addons_Gutenberg_Blocks::instance();

	}

	/**
	 * Register the blocks on init wp.
	 *
	 * @since 1.0.0
	 */
	public function wpmozo_register_blocks() {

		$this->wpmozo_blocks->register_blocks();

	}

	/**
	 * Enqueue block editor assets.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_block_editor_assets() {

		$wpmozo_adfgu = wpmozo_adfgu();
		$plugin_name  = $wpmozo_adfgu->get_plugin_name();

		wp_register_script(
			$plugin_name . '-common-function-script',
			WPMOZO_ADDONS_GUTENBERG_ASSETS_DIR_URL . 'js/wpmozo-common-functions.js',
			array(),
			time(),
			true
		);

		wp_enqueue_script( $plugin_name . '-common-function-script' );

		wp_register_script(
			$plugin_name . '-editor-script',
			WPMOZO_ADDONS_GUTENBERG_PLUGIN_DIR_URL . 'build/index.js',
			array( 'react', 'wp-polyfill', 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api', 'wp-api-fetch', 'lodash', 'wp-editor', 'wp-dom-ready', 'jquery' ),
			time(),
			true
		);

		wp_enqueue_script( $plugin_name . '-editor-script' );

		$icons = $this->wpmozo_get_icons();

		$all_options = array(
			'placeholderImg' => WPMOZO_ADDONS_GUTENBERG_ASSETS_DIR_URL . 'images/placeholder.webp',
			'icons'          => $icons,
		);
		wp_localize_script( $plugin_name . '-editor-script', 'wpmozo_adfgu_editor_object', $all_options );

		wp_register_style(
			$plugin_name . '-editor-style',
			WPMOZO_ADDONS_GUTENBERG_ASSETS_DIR_URL . 'css/wpmozo-addons-for-gutenberg-editor.css',
			array( 'wp-edit-blocks' ),
			time()
		);

		wp_enqueue_style( $plugin_name . '-editor-style' );

	}

	/**
	 * Enqueue frontend block assets.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_block_assets() {

		$wpmozo_adfgu = wpmozo_adfgu();
		$plugin_name  = $wpmozo_adfgu->get_plugin_name();

		wp_register_script(
			$plugin_name . '-common-function-script',
			WPMOZO_ADDONS_GUTENBERG_ASSETS_DIR_URL . 'js/wpmozo-common-functions.js',
			array(),
			time(),
			true
		);

		wp_enqueue_script( $plugin_name . '-common-function-script' );

		wp_register_script(
			$plugin_name . '-blocks-script',
			WPMOZO_ADDONS_GUTENBERG_ASSETS_DIR_URL . 'js/frontend.js',
			array( 'wp-i18n', 'jquery' ),
			time(),
			true
		);

		wp_enqueue_script( $plugin_name . '-blocks-script' );

	}

	/**
	 * Add block category.
	 *
	 * @since 1.0.0
	 * @param array $categories The block categories.
	 * @return array The block categories.
	 */
	public function wpmozo_block_category( $categories ) {

		$found = array_search( 'wpmozo', array_column( $categories, 'slug' ) );

		if ( false !== $found ) {
			return $categories;
		}

		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'wpmozo',
					'title' => __( 'WPMozo', 'wpmozo-addons-for-gutenberg' ),
				),
			)
		);
	}

	/**
	 * Get font awesome icons array.
	 *
	 * @since 1.0.0
	 * @return array $icons All icons.
	 */
	public function wpmozo_get_icons() {

		$json = file_get_contents( WPMOZO_ADDONS_GUTENBERG_ASSETS_DIR_PATH . 'libs/fontawesome/fonts.json' );
		if ( empty( $json ) ) {
			return array();
		}
		$default_icons = json_decode( $json );
		$jklsfd        = array();
		$klsdf         = new stdClass();
		$klsdf->label  = 'None';
		$klsdf->value  = '';
		$jklsfd[]      = $klsdf;
		$default_icons = array_merge( $jklsfd, $default_icons );
		$icons         = apply_filters( 'wpmozo_addons_gutenberg_block_icons', $default_icons );
		return $icons;
	}

	/**
	 * Add all hooks.
	 *
	 * @since 1.0.0
	 * @param array $loader The instance of loader class.
	 * @param array $instance The instance of this class.
	 */
	public function add_hooks( $loader, $instance ) {

		$loader->add_filter( 'block_categories_all', $instance, 'wpmozo_block_category', 10, 2 );
		$loader->add_action( 'init', $instance, 'wpmozo_register_blocks' );
		$loader->add_action( 'enqueue_block_editor_assets', $instance, 'enqueue_block_editor_assets' );
		$loader->add_action( 'wp_enqueue_scripts', $instance, 'enqueue_block_assets' );

	}

}
