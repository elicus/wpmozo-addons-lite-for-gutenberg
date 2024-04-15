
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/interactive-image-card', {
	title: __( 'Interactive Image Card', 'wpmozo-addons-for-gutenberg' ),
    icon: '',
    apiVersion: 3,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'interactive-image-card', 'image', 'card' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
});