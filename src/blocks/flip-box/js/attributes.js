
import { __ } from "@wordpress/i18n";

const attributes = {
	clientId: {
        type: "string",
    },
    animationType: {
        type: "string",
        default: 'flip',
    },
    flipDirection: {
        type: "string",
        default: 'top',
    },
    depth3dEffect: {
        type: "boolean",
        default: true,
    },
    shakeOnFlip: {
        type: "boolean",
        default: false,
    },
    flipSpeed: {
        type: "number",
        default: 100,
    },
    frontTitle: {
        type: "string",
    	default: __('Front Title', 'wpmozo-addons-for-gutenberg'),
    },
    frontContnet: {
        type: "string",
    	default: __('Here you can set front text.', 'wpmozo-addons-for-gutenberg'),
    },
    backTitle: {
        type: "string",
    	default: __('Back Title', 'wpmozo-addons-for-gutenberg'),
    },
    backContnet: {
        type: "string",
    	default: __('Here you can set back text.', 'wpmozo-addons-for-gutenberg'),
    },
    frontElType: {
        type: "string",
    	default: 'icon',
    },
    frontElIcon: {
    	type: "string",
    },
    frontElImage: {
    	type: "string",
    },
    backElType: {
        type: "string",
    	default: 'icon',
    },
    backElIcon: {
    	type: "string",
    },
    backElImage: {
    	type: "string",
    },
    globalTitleColor: {
    	type: "string",
    },
    globalContentColor: {
    	type: "string",
    },
    globalTitletext: {
        type: "string",
    },
    globalTitleFontSize: {
        type: "string",
    },
    globalTitleFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string",
        },
        fontWeight: {
            type: "string",
        },
        default: {
            fontStyle: "",
            fontWeight: "",
        }
    },
    globalTitleLetterSpacing: {
        type: "string",
    },
    globalTitleDecoration: {
        type: "string",
    },
    globalTitleLetterCase: {
        type: "string",
    },
    globalTitleLineHeight: {
        type: "string",
    },
    globalTitleColor: {
    	type: "string",
    },
    globalContentColor: {
    	type: "string",
    },
    globalContenttext: {
        type: "string",
    },
    globalContentFontSize: {
        type: "string",
    },
    globalContentFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string",
        },
        fontWeight: {
            type: "string",
        },
        default: {
            fontStyle: "",
            fontWeight: "",
        }
    },
    globalContentLetterSpacing: {
        type: "string",
    },
    globalContentDecoration: {
        type: "string",
    },
    globalContentLetterCase: {
        type: "string",
    },
    globalContentLineHeight: {
        type: "string",
    },
    frontHeadingLavel: {
        type: "string",
    	default: "h2",
    },
    frontTitleColor: {
    	type: "string",
    },
    frontContentColor: {
    	type: "string",
    },
    frontTitletext: {
        type: "string",
    },
    frontTitleFontSize: {
        type: "string",
    },
    frontTitleFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string",
        },
        fontWeight: {
            type: "string",
        },
        default: {
            fontStyle: "",
            fontWeight: "",
        }
    },
    frontTitleLetterSpacing: {
        type: "string",
    },
    frontTitleDecoration: {
        type: "string",
    },
    frontTitleLetterCase: {
        type: "string",
    },
    frontTitleLineHeight: {
        type: "string",
    },
    frontContenttext: {
        type: "string",
    },
    frontContentFontSize: {
        type: "string",
    },
    frontContentFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string",
        },
        fontWeight: {
            type: "string",
        },
        default: {
            fontStyle: "",
            fontWeight: "",
        }
    },
    frontContentLetterSpacing: {
        type: "string",
    },
    frontContentDecoration: {
        type: "string",
    },
    frontContentLetterCase: {
        type: "string",
    },
    frontContentLineHeight: {
        type: "string",
    },
    backHeadingLavel: {
        type: "string",
    	default: "h2",
    },
    backTitleColor: {
    	type: "string",
    },
    backContentColor: {
    	type: "string",
    },
    backTitletext: {
        type: "string",
    },
    backTitleFontSize: {
        type: "string",
    },
    backTitleFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string",
        },
        fontWeight: {
            type: "string",
        },
        default: {
            fontStyle: "",
            fontWeight: "",
        }
    },
    backTitleLetterSpacing: {
        type: "string",
    },
    backTitleDecoration: {
        type: "string",
    },
    backTitleLetterCase: {
        type: "string",
    },
    backTitleLineHeight: {
        type: "string",
    },
    backContenttext: {
        type: "string",
    },
    backContentFontSize: {
        type: "string",
    },
    backContentFontAppearance: {
        type: "object",
        fontStyle: {
            type: "string",
        },
        fontWeight: {
            type: "string",
        },
        default: {
            fontStyle: "",
            fontWeight: "",
        }
    },
    backContentLetterSpacing: {
        type: "string",
    },
    backContentDecoration: {
        type: "string",
    },
    backContentLetterCase: {
        type: "string",
    },
    backContentLineHeight: {
        type: "string",
    },
    frontElementAlign: {
        type: "string",
        default: "top",
    },
    frontIconColor: {
        type: "string",
    },
    frontIconSize: {
        type: "number",
    },
    frontImageAlignment: {
        type: "string",
        default: "center",
    },
    frontImageWidth: {
        type: "string",
    },
    frontImageWidthUnit: {
        type: "string",
    },
    frontIconStyle: {
        type: "boolean",
        default: false,
    },
    frontIconShape: {
        type: "string",
        default: "square",
    },
    frontIconShapeBackground: {
        type: "string",
        default: "#000000",
    },
    frontIconHasShapeBorder: {
        type: "boolean",
        default: false,
    },
    frontIconShapeborderRadius: {
        type: "string",
    },
    frontIconShapeborder: {
        type: "object",
    },
    backElementAlign: {
        type: "string",
        default: "top",
    },
    backIconColor: {
        type: "string",
    },
    backIconSize: {
        type: "number",
    },
    backImageAlignment: {
        type: "string",
        default: "center",
    },
    backImageWidth: {
        type: "string",
    },
    backImageWidthUnit: {
        type: "string",
    },
    backIconStyle: {
        type: "boolean",
        default: false,
    },
    backIconShape: {
        type: "string",
        default: "square",
    },
    backIconShapeBackground: {
        type: "string",
        default: "#000000",
    },
    backIconHasShapeBorder: {
        type: "boolean",
        default: false,
    },
    backIconShapeborderRadius: {
        type: "string",
    },
    backIconShapeborder: {
        type: "object",
    },
    frontContentHorAlignment: {
        type: "string",
    },
    frontContentVerAlignment: {
        type: "string",
    },
    backContentHorAlignment: {
        type: "string",
    },
    backContentVerAlignment: {
        type: "string",
    },
    frontFlipboxborder: {
        type: "object"
    },
    frontFlipboxborderRadius: {
        type: "string"
    },
    backFlipboxborder: {
        type: "object"
    },
    backFlipboxborderRadius: {
        type: "string"
    },
    frontFlipboxBackground: {
        type: "string"
    },
    backFlipboxBackground: {
        type: "string"
    },
};

export default attributes;