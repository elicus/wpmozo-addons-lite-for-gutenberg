import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";


registerBlockType( 'wpmozo/content-wraper', {
	title: __( 'Content Wraper', 'wpmozo-addons-for-gutenberg' ),
    icon: '',
    apiVersion: 3,
    attributes: attributes,
    parent: [ 'wpmozo' ],
    edit: Edit,
	save: Save,
    supports: { 
        lock: false,
        html: false,
    },
});