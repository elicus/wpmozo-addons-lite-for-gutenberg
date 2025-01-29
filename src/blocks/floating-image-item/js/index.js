
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/floating-image-item', {
	title: __( 'Floating Image Item', 'wpmozo-addons-lite-for-gutenberg' ),
    icon: '',
    apiVersion: 2,
    category: 'wpmozo',
    parent: [ 'wpmozo/floating-image' ],
    attributes: attributes,
    edit: Edit,
});