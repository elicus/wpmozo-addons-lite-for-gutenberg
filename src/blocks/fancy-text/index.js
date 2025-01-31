
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/fancy-test', {
	title: __( 'Fancy Test', 'wpmozo-addons-lite-for-gutenberg' ),
    icon: Icon,
    apiVersion: 3,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'fancy-text', 'text' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
    example: {},
});