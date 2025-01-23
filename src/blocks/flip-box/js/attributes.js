
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
        default: 700,
    },
    frontTitle: {
        type: "string",
    	default: __('Front Title', 'wpmozo-addons-lite-for-gutenberg'),
    },
    frontContnet: {
        type: "string",
    	default: __('Here you can set front text.', 'wpmozo-addons-lite-for-gutenberg'),
    },
    backTitle: {
        type: "string",
    	default: __('Back Title', 'wpmozo-addons-lite-for-gutenberg'),
    },
    backContnet: {
        type: "string",
    	default: __('Here you can set back text.', 'wpmozo-addons-lite-for-gutenberg'),
    },
    frontElType: {
        type: "string",
    	default: 'icon',
    },
    frontElIcon: {
    	type: "string",
        default: "fas fa-star",
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
        default: "fas fa-star",
    },
    backElImage: {
    	type: "string",
    },
    globalTitleColor: {
    	type: "string",
        default: "#fff"
    },
    globalContentColor: {
    	type: "string",
        default: "#fff"
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
        default: "#fff"
    },
    frontIconSize: {
        type: "string",
    },
    frontIconSizeUnit: {
        type: "string",
    },
    frontImageAlignment: {
        type: "string",
        default: "center",
    },
    frontImageWidth: {
        type: "string",
        default: "100px"
    },
    frontImageWidthUnit: {
        type: "string",
        default: "px"
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
        default: "#fff"
    },
    backIconSize: {
        type: "string",
    },
    backIconSizeUnit: {
        type: "string",
    },
    backImageAlignment: {
        type: "string",
        default: "center",
    },
    backImageWidth: {
        type: "string",
        default: "100px"
    },
    backImageWidthUnit: {
        type: "string",
        default: "px"
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
        default: "center"
    },
    frontContentVerAlignment: {
        type: "string",
        default: "center"
    },
    backContentHorAlignment: {
        type: "string",
        default: "center"
    },
    backContentVerAlignment: {
        type: "string",
        default: "center"
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
        type: "string",
        default: "#543EC4"
    },
    backFlipboxBackground: {
        type: "string",
        default: "#863AD0"
    },
    flipboxWidth: {
        type: "string",
        default: "100%"
    },
    flipboxWidthUnit: {
        type: "string",
        default: "%"
    },
    backHasButton: {
        type: "boolean",
        default: false,
    },
    backBtnText: {
        type: "string",
        default: __( 'Click ME!', 'wpmozo-addons-lite-for-gutenberg' )
    },
    backBtnUrl: {
        type: "string",
        default: '#',
    },
    backBtnIcon: {
        type: "string",
        default: 'fas fa-arrow-right',
    },
    backBtnIconPosition: {
        type: "string",
        default: 'after',
    },
    backBtnIconOnHover: {
        type: "boolean",
        default: false,
    },
    backBtnColor: {
        type: "string",
        default: '#fff',
    },
    backBtnBackground: {
        type: "string",
    },
    backBtntext: {
        type: "string",
    },
    backBtnFontSize: {
        type: "string",
    },
    backBtnFontAppearance: {
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
    backBtnLetterSpacing: {
        type: "string",
    },
    backBtnDecoration: {
        type: "string",
        default: "none",
    },
    backBtnLetterCase: {
        type: "string",
    },
    backBtnLineHeight: {
        type: "string",
    },
    backBtnborder: {
        type: "object",
        default: {
            "width": "1px",
            "style": "solid",
            "color": "#fff",
        }
    },
    backBtnborderRadius: {
        type: "string",
        default: "3px",
    },
    backBtnDimensionspadding: {
        type: "object",
        default: {
            "top": '5px',
            "right": '8px',
            "bottom": '5px',
            "left": '8px',
        }
    },
    backBtnDimensionsmargin: {
        type: "object",
    },
    frontIconShapeBorderColor: {
        type: "string"
    },
    backIconShapeBorderColor: {
        type: "string"
    },
};

export default attributes;