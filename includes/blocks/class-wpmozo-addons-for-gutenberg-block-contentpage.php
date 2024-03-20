<?php
/**
 * Define methods for content page block.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Addons_For_Gutenberg
 * @subpackage WPMozo_Addons_For_Gutenberg/includes
 */

/**
 * This class responsible for defining all methods for content page block.
 *
 * @since      1.0.0
 * @package    WPMozo_Addons_For_Gutenberg
 * @subpackage WPMozo_Addons_For_Gutenberg/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Addons_Gutenberg_Block_Contentpage extends WPMozo_Addons_Gutenberg_Block {

    /**
     * The name of block.
     *
     * @since 1.0.0
     * @access protected
     * @var string $block_name The name of block.
     */
    protected $block_name = 'content-page';

    /**
     * The single instance of the class.
     *
     * @since 1.0.0
     * @access protected
     * @var WPMozo_Addons_Gutenberg_Block $_instance The instances of this class.
     */
    protected static $_instance = null;

    /**
     * The instance of this class.
     *
     * Ensures only one instance of WPMozo_Addons_Gutenberg_Block is loaded or can be loaded.
     *
     * @since 1.0.0
     * @return WPMozo_Addons_Gutenberg_Block - Main instance.
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

        $this->args = array(
            'attributes' => array(
                'pageID' => array(
                    'type' => 'number',
                ),
            ),
            'render_callback' => array( $this, 'render_callback')            
        );

    }

    /**
     * Render markup.
     *
     * @since 1.0.0
     * @param array $args The arguments of carousel.
     */
    public function render_callback( $args ){

        if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) {
            return;
        }

        if ( isset( $_GET['_locale'] ) && ! isset( $_GET['context'] ) ) {
            return;
        }
        //$page_ID = isset( $_REQUEST['pageID'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['pageID'] ) ) : false;
        $page_ID = $args['pageID'];
        ob_start();

        // $post = get_post( $page_ID ); 

        // if ( has_blocks( $post->post_content ) ) {
        //     $blocks = parse_blocks( $post->post_content );
        //     foreach( $blocks as $block ) {
        //         echo render_block( $block );
        //     }
        // }

        $content = get_the_content( null, false, $page_ID );
        echo do_blocks( $content );
        //echo apply_filters( 'the_content', $content );
        //echo $content;
        
        return ob_get_clean();

    }

}
