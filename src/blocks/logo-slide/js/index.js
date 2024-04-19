
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/logo-slide', {
	title: __( 'Logo Slide', 'wpmozo-addons-for-gutenberg' ),
    icon: '',
    apiVersion: 2,
    category: 'wpmozo',
    parent: [ 'wpmozo/logo-slider' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
});