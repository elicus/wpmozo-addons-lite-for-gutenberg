
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
	horizontalAlign: {
		type: "string",
	},
	verticalAlign: {
		type: "string",
	},
	animationEffect: {
		type: "string",
		default: "no_effect"
	},
	animationDelay: {
		type: "number",
		default: 0
	},
	animationDuration: {
		type: "number",
		default: 4000
	},
	animationRepeat: {
		type: "string",
		default: "infinite"
	},
	speedCurve: {
		type: "string",
	}
};

export default attributes;