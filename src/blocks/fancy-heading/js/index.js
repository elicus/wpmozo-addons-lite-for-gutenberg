
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/fancy-heading', {
	title: __( 'Fancy Heading', 'wpmozo-addons-lite-for-gutenberg' ),
    icon: '',
    apiVersion: 2,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'fancy-heading', 'heading' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
    example: {},
});