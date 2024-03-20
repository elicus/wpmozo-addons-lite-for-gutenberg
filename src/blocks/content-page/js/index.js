//import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";


registerBlockType( 'wpmozo/content-page', {
	title: __( 'Content Page', 'wpmozo-addons-for-gutenberg' ),
    icon: '',
    attributes: {
        pageID: {
            type: 'number',
            default: 7001,
        }
    },
    edit: Edit,
	save: Save,
    supports: { 
        lock: false,
        html: false,
    },
});