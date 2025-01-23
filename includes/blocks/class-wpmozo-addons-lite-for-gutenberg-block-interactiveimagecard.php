<?php
/**
 * Define methods for interactive image card block.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 */

/**
 * This class responsible for defining all methods for interactive image card block.
 *
 * @since      1.0.0
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Addons_Lite_Gutenberg_Block_Interactiveimagecard extends WPMozo_Addons_Lite_Gutenberg_Block {

	/**
	 * The name of block.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var string $block_name The name of block.
	 */
	protected $block_name = 'interactive-image-card';

	/**
	 * The single instance of the class.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var WPMozo_Addons_Lite_Gutenberg_Block $_instance The instances of this class.
	 */
	protected static $_instance = null;

	/**
	 * The instance of this class.
	 *
	 * Ensures only one instance of WPMozo_Addons_Lite_Gutenberg_Block is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @return WPMozo_Addons_Lite_Gutenberg_Block - Main instance.
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		parent::__construct();

		$this->styles[] = array(
			'handle' => $this->plugin_name . '-interactive-image-card-style',
			'src'    => WPMOZO_ADDONS_LITE_GUTENBERG_SRC_DIR_URL . 'blocks/interactive-image-card/css/interactive-image-card.css',
			'deps'   => array(),
			'ver'    => time(),
		);

		$this->args = array(
			'style_handles' => array(
				$this->plugin_name . '-interactive-image-card-style',
			),
		);

	}

}
