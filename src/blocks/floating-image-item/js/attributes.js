
import { __ } from "@wordpress/i18n";

const attributes = {
	clientId: {
        type: "string",
    },
	image: {
		type: "object",
	},
	imagewidth: {
		type: "string",
	},
	imageheight: {
		type: "string",
	},
	imageBackground: {
		type: "string",
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
	horizontalAlign: {
		type: "string",
	},
	verticalAlign: {
		type: "string",
	},
	animationEffect: {
		type: "string",
	},
	animationDelay: {
		type: "number"
	},
	animationDuration: {
		type: "number"
	},
	animationRepeat: {
		type: "string",
	},
};

export default attributes;