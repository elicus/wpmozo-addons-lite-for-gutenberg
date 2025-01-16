
import { __ } from "@wordpress/i18n";

const attributes = {
	images: {
		type: "array",
	},
	logoPerSlide: {
		type: "string",
		default: '4'
	},
	slidesPerGroup: {
		type: "string",
		default: '1'
	},
	spaceBetweenSlides: {
		type: "number",
		default: 20
	},
	sliderLoop: {
		type: "boolean"
	},
	autoplay: {
		type: "boolean",
		default: true
	},
	enableLinearTransition: {
		type: "boolean"
	},
	autoplaySpeed: {
		type: "string",
		default: '3000'
	},
	pauseOnHover: {
		type: "boolean",
		default: true
	},
	transitionDuration: {
		type: "string",
		default: '1000'
	},
	showArrow: {
		type: "boolean",
		default: true
	},
	previousSlideArrow: {
		type: "string"
	},
	showArrowOnHover: {
		type: "boolean"
	},
	arrowsPosition: {
		type: "string"
	},
	showControlDot: {
		type: "boolean",
		default: true
	}	
};

export default attributes;