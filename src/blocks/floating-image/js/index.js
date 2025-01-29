
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/floating-image', {
	title: __( 'Floating Image', 'wpmozo-addons-lite-for-gutenberg' ),
    icon: '',
    apiVersion: 2,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'floating-image', 'floating', 'image' ],
    attributes: attributes,
    edit: Edit,
});