
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/content-toggle', {
	title: __( 'Content Toggle', 'wpmozo-addons-for-gutenberg' ),
    icon: '',
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'content-toggle', 'content' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
});