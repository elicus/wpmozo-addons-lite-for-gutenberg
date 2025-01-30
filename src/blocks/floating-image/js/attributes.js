
import { __ } from "@wordpress/i18n";

const attributes = {
	clientId: {
        type: "string",
    },
	images: {
		type: "array",
	},
	containerHeight: {
		type: "string",
		default: "450px"
	},
};

export default attributes;