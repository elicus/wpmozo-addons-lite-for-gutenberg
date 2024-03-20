
import { __ } from "@wordpress/i18n";

const attributes = {
    clientId: {
        type: "string",
    },
    toggleSwitchType: {
        type: "string",
        default: 'rounded',
    },
    toggleOneTitle: {
        type: "string",
        default: __('Title One', 'wpmozo-addons-for-gutenberg')
    },
    toggleOneIcon: {
        type: "string",
    },
    toggleOneIconPostion: {
        type: "string",
        default: "before",
    },
    toggleTwoTitle: {
        type: "string",
        default: __('Title Two', 'wpmozo-addons-for-gutenberg')
    },
    toggleTwoIcon: {
        type: "string",
    },
    toggleTwoIconPostion: {
        type: "string",
        default: "before",
    },
};

export default attributes;