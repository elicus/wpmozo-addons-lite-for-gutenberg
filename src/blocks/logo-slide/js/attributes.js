
import { __ } from "@wordpress/i18n";

const attributes = {
	logo: {
		type: "array",
	},
	altText: {
		type: "string",
	},
	link: {
		type: "string",
	},
	linkTarget: {
		type: "string",
		default: "same",
	},
};

export default attributes;