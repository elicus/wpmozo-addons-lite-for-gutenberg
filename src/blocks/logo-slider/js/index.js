
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/logo-slider', {
	title: __( 'Logo Slider', 'wpmozo-addons-for-gutenberg' ),
    icon: '',
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'logo-slider', 'slider', 'logo' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
});