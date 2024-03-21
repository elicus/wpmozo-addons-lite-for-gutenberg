
import { __ } from "@wordpress/i18n";

const attributes = {
	clientId: {
        type: "string",
    },
    preHeading: {
        type: "string",
        default: 'Pre',
    },
    mainHeading: {
        type: "string",
        default: 'Main',
    },
    postHeading: {
        type: "string",
        default: 'Post',
    },
    displayInStack: {
        type: "boolean",
    },
    headingLavel: {
        type: "string",
    },
    headingAlignment: {
        type: "string",
    },
    headingColor: {
        type: "string",
    },
    headingBackground: {
        type: "string",
    },
};

export default attributes;