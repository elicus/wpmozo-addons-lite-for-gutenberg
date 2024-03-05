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

        require_once  WPMOZO_ADDONS_GUTENBERG_INC_DIR_PATH . 'class-wpmozo-addons-gutenberg-blocks.php';
        $this->wpmozo_blocks = WPMozo_Addons_Gutenberg_Blocks::instance();

    }

    /**
     * Register the blocks on init wp.
     *
     * @since 1.0.0
     */
    public function wpmozo_register_blocks() {

        $wpmozo_adfgu = wpmozo_adfgu();
        $plugin_name = $wpmozo_adfgu->get_plugin_name();

        wp_register_script(
            $plugin_name . '-editor-script',
            WPMOZO_ADDONS_GUTENBERG_PLUGIN_DIR_URL . 'build/index.js',
            array( 'wp-blocks', 'wp-editor', 'wp-element', 'wp-components', 'wp-i18n', 'jquery' ),
            time()
        );

        wp_enqueue_script( $plugin_name . '-editor-script' );

        wp_register_script(
            $plugin_name . '-twentytwenty-script',
            WPMOZO_ADDONS_GUTENBERG_ASSETS_DIR_URL . 'js/jquery_twentytwenty.min.js',
            array( 'jquery' ),
            time()
        );

        $this->wpmozo_blocks->register_blocks();

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
	 * Add all hooks.
	 *
	 * @since 1.0.0
	 * @param array $loader The instance of loader class.
	 * @param array $instance The instance of this class.
	 */
	public function add_hooks( $loader, $instance ) {

        $loader->add_filter( 'block_categories_all', $instance, 'wpmozo_block_category', 10, 2 );
        $loader->add_action( 'init', $instance, 'wpmozo_register_blocks' );

	}

}
