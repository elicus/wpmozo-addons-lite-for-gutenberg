import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/content-toggle', {
	title: __( 'Content Toggle', 'wpmozo-product-carousel-for-woocommerce' ),
    icon: '',
    apiVersion: 3,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'content-toggle', 'content' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
});