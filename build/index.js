/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/before-after-slider/attributes.js":
/*!******************************************************!*\
  !*** ./src/blocks/before-after-slider/attributes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  clientId: {
    type: "string"
  },
  globalcolorHandle: {
    type: "string"
  },
  globalcolorOverlay: {
    type: "string"
  },
  sliderOrientation: {
    type: "string",
    default: "horizontal"
  },
  handleOffset: {
    type: "number"
  },
  moveHandleOnHover: {
    type: "boolean",
    default: false
  },
  moveHandleOnClick: {
    type: "boolean",
    default: false
  },
  overlayOnHover: {
    type: "boolean",
    default: false
  },
  beforeImage: {
    type: "string"
  },
  beforeHasLabel: {
    type: "boolean",
    default: false
  },
  beforeLabelOnHover: {
    type: "boolean",
    default: false
  },
  beforeLabel: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Before', 'wpmozo-addons-lite-for-gutenberg')
  },
  beforeLabelbackground: {
    type: "string"
  },
  beforeLabeltext: {
    type: "string"
  },
  beforeLabelFontSize: {
    type: "string"
  },
  beforeLabelFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  beforeLabelLetterSpacing: {
    type: "string"
  },
  beforeLabelDecoration: {
    type: "string"
  },
  beforeLabelLetterCase: {
    type: "string"
  },
  beforeLabelLineHeight: {
    type: "string"
  },
  afterImage: {
    type: "string"
  },
  afterHasLabel: {
    type: "boolean",
    default: false
  },
  afterLabelOnHover: {
    type: "boolean",
    default: false
  },
  afterLabel: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('After', 'wpmozo-addons-lite-for-gutenberg')
  },
  afterLabelbackground: {
    type: "string"
  },
  afterLabeltext: {
    type: "string"
  },
  afterLabelFontSize: {
    type: "string"
  },
  afterLabelFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  afterLabelLetterSpacing: {
    type: "string"
  },
  afterLabelDecoration: {
    type: "string"
  },
  afterLabelLetterCase: {
    type: "string"
  },
  afterLabelLineHeight: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/before-after-slider/edit.js":
/*!************************************************!*\
  !*** ./src/blocks/before-after-slider/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/before-after-slider/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/before-after-slider/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId;
  attributes.clientId = clientId;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: 'wpmozo-adfgu-before-after-main'
  });
  let init = false;
  let beforeImage = attributes.beforeImage ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = attributes.afterImage ? attributes.afterImage : WPMozoEditorObj.placeholderImg,
    beforeLabel = attributes.beforeHasLabel ? attributes.beforeLabel : '',
    afterLabel = attributes.afterHasLabel ? attributes.afterLabel : '';
  function wpmozo_before_init(main) {
    main.find('.twentytwenty-wrapper').removeClass('twentytwenty-wrapper');
    main.find('.twentytwenty-horizontal').removeClass('twentytwenty-horizontal');
    main.find('.wpmozo-adfgu-before-after-image-wrapper').unwrap();
    main.find('.wpmozo-adfgu-before-after-image-wrapper').unbind();
    main.find('.wpmozo-adfgu-before-after-image-wrapper').removeClass('twentytwenty-container');
    let beforeSrc = !window.wpmozo.wpmozo_is_empty(beforeImage) ? beforeImage : main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').attr('src');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').remove();
    let afterSrc = !window.wpmozo.wpmozo_is_empty(afterImage) ? afterImage : main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').attr('src');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').remove();
    main.find('.wpmozo-adfgu-before-after-image-wrapper').append('<img src="' + beforeSrc + '">');
    main.find('.wpmozo-adfgu-before-after-image-wrapper').append('<img src="' + afterSrc + '">');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').removeClass('twentytwenty-before');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').removeClass('twentytwenty-after');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-overlay').remove();
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-handle').remove();
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setTimeout(function () {
      let editorIfram = jQuery('body').find('[name="editor-canvas"]').contents(),
        mainFromIfram = editorIfram.find('body').find('#block-' + clientId),
        mainFromBody = jQuery('body').find('#block-' + clientId),
        main = mainFromIfram.length > 0 ? mainFromIfram : mainFromBody,
        imgWrap = main.find('.wpmozo-adfgu-before-after-image-wrapper');
      if (main.find('.twentytwenty-wrapper').length < 1) {
        init = true;
        if (main.find('.twentytwenty-wrapper').length > 0) {
          wpmozo_before_init(main);
        }
        main.find('.wpmozo-adfgu-before-after-image-wrapper').twentytwenty({
          default_offset_pct: attributes.handleOffset,
          orientation: attributes.sliderOrientation,
          before_label: beforeLabel,
          after_label: afterLabel,
          move_slider_on_hover: attributes.moveHandleOnHover,
          move_with_handle_only: true,
          click_to_move: attributes.moveHandleOnClick
        });
      }
    }, 10);
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setTimeout(function () {
      let editorIfram = jQuery('body').find('[name="editor-canvas"]').contents(),
        mainFromIfram = editorIfram.find('body').find('#block-' + clientId),
        mainFromBody = jQuery('body').find('#block-' + clientId),
        main = mainFromIfram.length > 0 ? mainFromIfram : mainFromBody,
        imgWrap = main.find('.wpmozo-adfgu-before-after-image-wrapper');
      if (!init) {
        if (main.find('.twentytwenty-wrapper').length > 0) {
          wpmozo_before_init(main);
        }
        main.find('.wpmozo-adfgu-before-after-image-wrapper').twentytwenty({
          default_offset_pct: attributes.handleOffset,
          orientation: attributes.sliderOrientation,
          before_label: beforeLabel,
          after_label: afterLabel,
          move_slider_on_hover: attributes.moveHandleOnHover,
          move_with_handle_only: true,
          click_to_move: attributes.moveHandleOnClick
        });
      }
    }, 10);
  }, [attributes.handleOffset, attributes.sliderOrientation, attributes.beforeHasLabel, attributes.beforeLabel, attributes.afterHasLabel, attributes.afterLabel, attributes.moveHandleOnHover, attributes.moveHandleOnClick, attributes.overlayOnHover, attributes.beforeImage, attributes.afterImage]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-before-after-image-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: beforeImage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: afterImage
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/before-after-slider/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/before-after-slider/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/before-after-slider/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/before-after-slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/before-after-slider/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/before-after-slider', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Before After Slider', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'before-after-slider', 'before-after'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/before-after-slider/inspector.js":
/*!*****************************************************!*\
  !*** ./src/blocks/before-after-slider/inspector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const Inspector = props => {
  const beforeTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wpmozo-addons-lite-for-gutenberg'),
    afterTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wpmozo-addons-lite-for-gutenberg'),
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    globalColorTypes = [{
      key: 'Handle',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Handle Color', 'wpmozo-addons-lite-for-gutenberg')
    }, ...(attributes.overlayOnHover ? [{
      key: 'Overlay',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color', 'wpmozo-addons-lite-for-gutenberg')
    }] : [])];
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Orientation', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.sliderOrientation,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'horizontal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'vertical'
    }],
    onChange: newValue => setAttributes({
      sliderOrientation: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Handle Offset', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.handleOffset,
    onChange: newValue => setAttributes({
      handleOffset: newValue
    }),
    min: 0,
    step: 0.1,
    max: 1,
    allowReset: true,
    initialPosition: 0.5,
    resetFallbackValue: 0.5
  }), !attributes.moveHandleOnClick && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move Handle on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.moveHandleOnHover,
    onChange: newValue => setAttributes({
      moveHandleOnHover: newValue
    })
  })), !attributes.moveHandleOnHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move Handle on Click', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.moveHandleOnClick,
    onChange: newValue => setAttributes({
      moveHandleOnClick: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: beforeTitle,
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "beforeImage",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.beforeHasLabel,
    onChange: newValue => setAttributes({
      beforeHasLabel: newValue
    })
  }), attributes.beforeHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label Only on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.beforeLabelOnHover,
    onChange: newValue => setAttributes({
      beforeLabelOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter Label', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.beforeLabel,
    onChange: newValue => setAttributes({
      beforeLabel: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: afterTitle,
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "afterImage",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.afterHasLabel,
    onChange: newValue => setAttributes({
      afterHasLabel: newValue
    })
  }), attributes.afterHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label Only on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.afterLabelOnHover,
    onChange: newValue => setAttributes({
      afterLabelOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter Label', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.afterLabel,
    onChange: newValue => setAttributes({
      afterLabel: newValue
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Style'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay on Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.overlayOnHover,
    onChange: newValue => setAttributes({
      overlayOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "globalcolor",
    props: props,
    ColorTypes: globalColorTypes
  })), attributes.beforeHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before Label Style'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "beforeLabel",
    props: props,
    ColorTypes: [{
      key: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "beforeLabel",
    props: props
  }))), attributes.afterHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After Label Style'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "afterLabel",
    props: props,
    ColorTypes: [{
      key: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "afterLabel",
    props: props
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/before-after-slider/save.js":
/*!************************************************!*\
  !*** ./src/blocks/before-after-slider/save.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/before-after-slider/style.js");


const {
  useBlockProps
} = window.wp.blockEditor;
const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Save = ({
  attributes
}) => {
  const elId = 'block-' + attributes.clientId;
  let beforeImage = attributes.beforeImage ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = attributes.afterImage ? attributes.afterImage : WPMozoEditorObj.placeholderImg,
    beforeLabel = attributes.beforeHasLabel ? attributes.beforeLabel : '',
    afterLabel = attributes.afterHasLabel ? attributes.afterLabel : '',
    no_overlay = attributes.overlayOnHover ? false : true,
    handleOffset = attributes.handleOffset,
    sliderOrientation = attributes.sliderOrientation,
    moveHandleOnHover = attributes.moveHandleOnHover,
    moveHandleOnClick = attributes.moveHandleOnClick;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-before-after-image-wrapper",
    id: elId,
    "data-before-label": beforeLabel,
    "data-after-label": afterLabel,
    "data-handle-offset": handleOffset,
    "data-slider-orientation": sliderOrientation,
    "data-move-onhover": moveHandleOnHover,
    "data-move-onclick": moveHandleOnClick,
    "data-no-overlay": no_overlay
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: beforeImage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: afterImage
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/before-after-slider/style.js":
/*!*************************************************!*\
  !*** ./src/blocks/before-after-slider/style.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const clientId = attributes.clientId;
  const parent = '#block-' + clientId,
    toConvertStyles = ['beforeLabel', 'afterLabel'],
    convertedStyle = window.wpmozo.convetInlineStyleStr(toConvertStyles, attributes),
    no_overlay = attributes.overlayOnHover ? false : true;
  let css = '',
    beforeLabelStyle = convertedStyle['beforeLabel'],
    afterLabelStyle = convertedStyle['afterLabel'],
    handleStyle = {
      'background-color': {
        value: attributes.globalcolorHandle,
        suffix: '!important'
      }
    };
  if (!window.wpmozo.wpmozo_is_empty(attributes.globalcolorHandle) && 'horizontal' === attributes.sliderOrientation) {
    handleStyle['-webkit-box-shadow'] = `0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5)`;
    handleStyle['-moz-box-shadow'] = `0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5)`;
    handleStyle['box-shadow'] = `0 3px 0 ${attributes.globalcolorHandle}, 0px 0px 12px rgba(51, 51, 51, 0.5)`;
  }
  let allInline = [{
    selector: '.twentytwenty-handle:before, .twentytwenty-handle:after',
    style: handleStyle
  }, {
    selector: '.twentytwenty-handle',
    style: {
      'border-color': attributes.globalcolorHandle
    }
  }, {
    selector: '.twentytwenty-left-arrow',
    style: {
      'border-right-color': attributes.globalcolorHandle
    }
  }, {
    selector: '.twentytwenty-right-arrow',
    style: {
      'border-left-color': attributes.globalcolorHandle
    }
  }, {
    selector: '.twentytwenty-overlay:hover',
    style: {
      'background-color': attributes.globalcolorOverlay
    }
  }, {
    selector: '.twentytwenty-before-label:before',
    additional: beforeLabelStyle
  }, {
    selector: '.twentytwenty-after-label:before',
    additional: afterLabelStyle
  }];
  if ('horizontal' === attributes.sliderOrientation) {
    allInline.push({
      selector: '.twentytwenty-left-arrow',
      style: {
        'border-right-color': attributes.globalcolorHandle
      }
    });
    allInline.push({
      selector: '.twentytwenty-right-arrow',
      style: {
        'border-left-color': attributes.globalcolorHandle
      }
    });
  } else {
    allInline.push({
      selector: '.twentytwenty-down-arrow',
      style: {
        'border-top-color': attributes.globalcolorHandle
      }
    });
    allInline.push({
      selector: '.twentytwenty-up-arrow',
      style: {
        'border-bottom-color': attributes.globalcolorHandle
      }
    });
  }
  let generateStyle = window.wpmozo.wpmozo_generate_style(allInline);
  if (!window.wpmozo.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  if (no_overlay) {
    css += `
        ${parent} {
            .twentytwenty-overlay:hover{
                background: unset;
            }
        }
        `;
  }
  if (!attributes.beforeLabelOnHover) {
    css += `
        ${parent} {
            .twentytwenty-before-label{
                opacity: 1;
            }
        }
        `;
  }
  if (!attributes.afterLabelOnHover) {
    css += `
        ${parent} {
            .twentytwenty-after-label{
                opacity: 1;
            }
        }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !window.wpmozo.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/content-toggle/js/attributes.js":
/*!****************************************************!*\
  !*** ./src/blocks/content-toggle/js/attributes.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  clientId: {
    type: "string"
  },
  toggleSwitchType: {
    type: "string",
    default: 'rounded'
  },
  toggleSwitchAlignment: {
    type: "string"
  },
  toggleSwitchColor: {
    type: "string"
  },
  toggleSwitchOnState: {
    type: "string"
  },
  toggleSwitchBackground: {
    type: "string"
  },
  toggleSwitchOnStateBackground: {
    type: "string"
  },
  toggleSwitchHoverColor: {
    type: "string"
  },
  toggleSwitchHoverOnState: {
    type: "string"
  },
  toggleSwitchHoverBackground: {
    type: "string"
  },
  toggleSwitchHoverOnStateBackground: {
    type: "string"
  },
  toggleSwitchDimensionspadding: {
    type: "object"
  },
  toggleSwitchDimensionsmargin: {
    type: "object"
  },
  toggleOneTitle: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title One', 'wpmozo-addons-lite-for-gutenberg')
  },
  titleOneColor: {
    type: "string"
  },
  titleOneIconSize: {
    type: "number"
  },
  titleOneIconSpacing: {
    type: "number"
  },
  titleOneIconColor: {
    type: "string"
  },
  titleOneFontSize: {
    type: "string"
  },
  titleOneFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  titleOneLetterSpacing: {
    type: "string"
  },
  titleOneDecoration: {
    type: "string"
  },
  titleOneLetterCase: {
    type: "string"
  },
  titleOneLineHeight: {
    type: "string"
  },
  toggleOneIcon: {
    type: "string"
  },
  toggleOneIconPostion: {
    type: "string",
    default: "before"
  },
  toggleTwoTitle: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Two', 'wpmozo-addons-lite-for-gutenberg')
  },
  toggleTwoIcon: {
    type: "string"
  },
  toggleTwoIconPostion: {
    type: "string",
    default: "before"
  },
  titleTwoColor: {
    type: "string"
  },
  titleTwoIconSize: {
    type: "number"
  },
  titleTwoIconSpacing: {
    type: "number"
  },
  titleTwoIconColor: {
    type: "string"
  },
  titleTwoFontSize: {
    type: "string"
  },
  titleTwoFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  titleTwoLetterSpacing: {
    type: "string"
  },
  titleTwoDecoration: {
    type: "string"
  },
  titleTwoLetterCase: {
    type: "string"
  },
  titleTwoLineHeight: {
    type: "string"
  },
  toggleTwoIcon: {
    type: "string"
  },
  toggleTwoIconPostion: {
    type: "string",
    default: "before"
  },
  contentOneColor: {
    type: "string"
  },
  contentOneBackground: {
    type: "string"
  },
  contentOneFontSize: {
    type: "string"
  },
  contentOneFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  contentOneLetterSpacing: {
    type: "string"
  },
  contentOneDecoration: {
    type: "string"
  },
  contentOneLetterCase: {
    type: "string"
  },
  contentOneLineHeight: {
    type: "string"
  },
  contentOneDimensionspadding: {
    type: "object"
  },
  contentOneDimensionsmargin: {
    type: "object"
  },
  contentOneAlignment: {
    type: "string"
  },
  contentTwoColor: {
    type: "string"
  },
  contentTwoBackground: {
    type: "string"
  },
  contentTwoFontSize: {
    type: "string"
  },
  contentTwoFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  contentTwoLetterSpacing: {
    type: "string"
  },
  contentTwoDecoration: {
    type: "string"
  },
  contentTwoLetterCase: {
    type: "string"
  },
  contentTwoLineHeight: {
    type: "string"
  },
  contentTwoDimensionspadding: {
    type: "object"
  },
  contentTwoDimensionsmargin: {
    type: "object"
  },
  contentTwoAlignment: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/content-toggle/js/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/content-toggle/js/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/content-toggle/js/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/content-toggle/js/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    toggleSwitchTypeClass = ' wpmozo_' + attributes.toggleSwitchType,
    parent = '#block-' + clientId,
    titleWrapClass = 'toggle' === attributes.toggleSwitchType ? ' wpmozo_switch_trigger' : '';
  attributes.clientId = clientId;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: 'wpmozo-adfgu-content-toggle-main'
  });
  const wraperTemplate = [['wpmozo/content-wraper', {
    className: 'wpmozo-adfgu-content-toggle-one',
    lock: {
      remove: true
    }
  }], ['wpmozo/content-wraper', {
    className: 'wpmozo-adfgu-content-toggle-two',
    lock: {
      remove: true
    }
  }]];
  jQuery('.wpmozo-adfgu-toggle-field').change(function (e) {
    let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
    wpmozo_toggle_switch(jQuery(this), selector);
  });
  jQuery('.wpmozo-adfgu-toggle-title-wrap > :header').click(function (e) {
    let wrap = jQuery(this).closest('.wpmozo-adfgu-toggle-title-wrap'),
      selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
      input = selector.find('.wpmozo-adfgu-toggle-field');
    if (wrap.hasClass('wpmozo-adfgu-toggle-title-one')) {
      input.prop('checked', false);
    } else {
      input.prop('checked', true);
    }
    wpmozo_toggle_switch(input, selector);
  });
  jQuery('.wpmozo_switch_trigger').click(function (e) {
    let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
      input = selector.find('.wpmozo-adfgu-toggle-field');
    if (jQuery(this).hasClass('wpmozo-adfgu-toggle-title-one')) {
      input.prop('checked', false);
    } else {
      input.prop('checked', true);
    }
    wpmozo_toggle_switch(input, selector);
  });
  jQuery(document).ready(function ($) {
    jQuery('.wpmozo-adfgu-toggle-field').each(function (keym, el) {
      let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
      wpmozo_toggle_switch(jQuery(this), selector);
    });
  });
  function wpmozo_toggle_switch(input, main) {
    if (input.is(':checked')) {
      main.find('.wpmozo-adfgu-content-toggle-one').hide();
      main.find('.wpmozo-adfgu-content-toggle-two').show();
    } else {
      main.find('.wpmozo-adfgu-content-toggle-one').show();
      main.find('.wpmozo-adfgu-content-toggle-two').hide();
    }
  }
  const iconOne = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.toggleOneIcon}`
  }));
  const iconTwo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.toggleTwoIcon}`
  }));
  const titleOne = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-one${titleWrapClass}`
  }, 'before' === attributes.toggleOneIconPostion && iconOne, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, attributes.toggleOneTitle), 'after' === attributes.toggleOneIconPostion && iconOne);
  const titleTwo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-two${titleWrapClass}`
  }, 'before' === attributes.toggleTwoIconPostion && iconTwo, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, attributes.toggleTwoTitle), 'after' === attributes.toggleTwoIconPostion && iconTwo);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-button-wrap${toggleSwitchTypeClass}`
  }, 'toggle' === attributes.toggleSwitchType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wpmozo-adfgu-toggle-field",
    type: "checkbox",
    value: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `wpmozo-adfgu-toggle-switch`
  }, titleOne, titleTwo)), 'toggle' !== attributes.toggleSwitchType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, titleOne, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-button${toggleSwitchTypeClass}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wpmozo-adfgu-toggle-button-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wpmozo-adfgu-toggle-field",
    type: "checkbox",
    value: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-switch${toggleSwitchTypeClass}`
  }))), titleTwo)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-content-toggle-content-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
    template: wraperTemplate,
    allowedBlocks: false
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/content-toggle/js/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/content-toggle/js/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/content-toggle/js/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/content-toggle/js/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/content-toggle/js/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/content-toggle', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Content Toggle', 'wpmozo-addons-lite-for-gutenberg'),
  apiVersion: 2,
  icon: '',
  category: 'wpmozo',
  keywords: ['wpmozo', 'content-toggle', 'content'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {}
});

/***/ }),

/***/ "./src/blocks/content-toggle/js/inspector.js":
/*!***************************************************!*\
  !*** ./src/blocks/content-toggle/js/inspector.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  const positionValues = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'before'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'after'
  }];
  const switchTypeValues = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rounded', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'rounded'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rectangle', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'rectangle'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'toggle'
  }];
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle One Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleOneTitle,
    onChange: newValue => setAttributes({
      toggleOneTitle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "toggleOneIcon",
    props: props,
    value: attributes.toggleOneIcon,
    onChange: newValue => setAttributes({
      toggleOneIcon: newValue
    })
  }), !window.wpmozo.wpmozo_is_empty(attributes.toggleOneIcon) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleOneIconPostion,
    options: positionValues,
    onChange: newValue => setAttributes({
      toggleOneIconPostion: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Two Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleTwoTitle,
    onChange: newValue => setAttributes({
      toggleTwoTitle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "toggleTwoIcon",
    props: props,
    value: attributes.toggleTwoIcon,
    onChange: newValue => setAttributes({
      toggleTwoIcon: newValue
    })
  }), !window.wpmozo.wpmozo_is_empty(attributes.toggleTwoIcon) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleTwoIconPostion,
    options: positionValues,
    onChange: newValue => setAttributes({
      toggleTwoIconPostion: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Switch'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.toggleSwitchType,
    options: switchTypeValues,
    onChange: newValue => setAttributes({
      toggleSwitchType: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorCombo, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color', 'wpmozo-addons-lite-for-gutenberg'),
    normal: {
      ColorKey: "toggleSwitch",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'OnState',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color (on state)', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Background', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'OnStateBackground',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Background (on state)', 'wpmozo-addons-lite-for-gutenberg')
      }]
    },
    hover: {
      ColorKey: "toggleSwitch",
      props: props,
      ColorTypes: [{
        key: 'HoverColor',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'HoverOnState',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Color (on state)', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'HoverBackground',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Background', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'HoverOnStateBackground',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Background (on state)', 'wpmozo-addons-lite-for-gutenberg')
      }]
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "toggleSwitchDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      toggleSwitchAlignment: newValue
    }),
    value: attributes.toggleSwitchAlignment
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title One'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleOne",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "titleOne",
    props: props
  }), !window.wpmozo.wpmozo_is_empty(attributes.toggleOneIcon) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.titleOneIconSize,
    onChange: newValue => setAttributes({
      titleOneIconSize: newValue
    }),
    min: 0,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Spacing', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.titleOneIconSpacing,
    onChange: newValue => setAttributes({
      titleOneIconSpacing: newValue
    }),
    min: 0,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleOneIcon",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Two'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleTwo",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "titleTwo",
    props: props
  }), !window.wpmozo.wpmozo_is_empty(attributes.toggleTwoIcon) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.titleTwoIconSize,
    onChange: newValue => setAttributes({
      titleTwoIconSize: newValue
    }),
    min: 0,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Spacing', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.titleTwoIconSpacing,
    onChange: newValue => setAttributes({
      titleTwoIconSpacing: newValue
    }),
    min: 0,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleTwoIcon",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content One'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "contentOne",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content One Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      contentOneAlignment: newValue
    }),
    value: attributes.contentOneAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "contentOne",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "contentOneDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    onChange: (type, NewPadding) => {
      if ('padding' === type) {
        setAttributes({
          contentOneDimensionspadding: NewPadding
        });
      } else {
        setAttributes({
          contentOneDimensionsmargin: NewPadding
        });
      }
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Two'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "contentTwo",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Two Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      contentTwoAlignment: newValue
    }),
    value: attributes.contentTwoAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "contentTwo",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "contentTwoDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/content-toggle/js/save.js":
/*!**********************************************!*\
  !*** ./src/blocks/content-toggle/js/save.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/content-toggle/js/style.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const Save = ({
  attributes
}) => {
  const clientId = attributes.clientId,
    toggleSwitchTypeClass = ' wpmozo_' + attributes.toggleSwitchType,
    titleWrapClass = 'toggle' === attributes.toggleSwitchType ? ' wpmozo_switch_trigger' : '';
  const iconOne = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.toggleOneIcon}`
  }));
  const iconTwo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `${attributes.toggleTwoIcon}`
  }));
  const titleOne = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-one${titleWrapClass}`
  }, 'before' === attributes.toggleOneIconPostion && iconOne, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, attributes.toggleOneTitle), 'after' === attributes.toggleOneIconPostion && iconOne);
  const titleTwo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-two${titleWrapClass}`
  }, 'before' === attributes.toggleTwoIconPostion && iconTwo, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, attributes.toggleTwoTitle), 'after' === attributes.toggleTwoIconPostion && iconTwo);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'wpmozo-adfgu-content-toggle-main'
    }),
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-button-wrap${toggleSwitchTypeClass}`
  }, 'toggle' === attributes.toggleSwitchType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wpmozo-adfgu-toggle-field",
    type: "checkbox",
    value: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `wpmozo-adfgu-toggle-switch`
  }, titleOne, titleTwo)), 'toggle' !== attributes.toggleSwitchType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, titleOne, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-button${toggleSwitchTypeClass}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wpmozo-adfgu-toggle-button-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wpmozo-adfgu-toggle-field",
    type: "checkbox",
    value: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-toggle-switch${toggleSwitchTypeClass}`
  }))), titleTwo)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-content-toggle-content-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/content-toggle/js/style.js":
/*!***********************************************!*\
  !*** ./src/blocks/content-toggle/js/style.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const clientId = attributes.clientId,
    parent = '#block-' + clientId,
    toConvertStyles = ['titleOne', 'titleTwo', 'toggleSwitchDimensions', 'contentOne', 'contentOneDimensions', 'contentTwo', 'contentTwoDimensions'];
  let css = '',
    convertedStyle = window.wpmozo.convetInlineStyleStr(toConvertStyles, attributes),
    contentOneAddi = convertedStyle.contentOne + convertedStyle.contentOneDimensions,
    contentTwoAddi = convertedStyle.contentTwo + convertedStyle.contentTwoDimensions;
  let allInline = [{
      selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:before',
      style: {
        'background-color': attributes.toggleSwitchColor
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:before',
      style: {
        'background-color': attributes.toggleSwitchOnState
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch',
      style: {
        'background-color': attributes.toggleSwitchBackground
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch',
      style: {
        'background-color': attributes.toggleSwitchOnStateBackground
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:hover::before',
      style: {
        'background-color': attributes.toggleSwitchHoverColor
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:hover::before',
      style: {
        'background-color': attributes.toggleSwitchHoverOnState
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:hover',
      style: {
        'background-color': attributes.toggleSwitchHoverBackground
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:hover',
      style: {
        'background-color': attributes.toggleSwitchHoverOnStateBackground
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-button-wrap',
      style: {
        'justify-content': attributes.toggleSwitchAlignment
      },
      additional: convertedStyle.toggleSwitchDimensions
    }, {
      selector: '.wpmozo-adfgu-toggle-title-one',
      style: {
        'color': attributes.titleOneColor,
        'gap': {
          value: attributes.titleOneIconSpacing,
          suffix: 'px'
        }
      },
      additional: convertedStyle.titleOne
    }, {
      selector: '.wpmozo-adfgu-toggle-title-two',
      style: {
        'color': attributes.titleTwoColor,
        'gap': {
          value: attributes.titleTwoIconSpacing,
          suffix: 'px'
        }
      },
      additional: convertedStyle.titleTwo
    }, {
      selector: '.wpmozo-adfgu-toggle-title-one .icon-wrapper i',
      style: {
        'font-size': {
          value: attributes.titleOneIconSize,
          suffix: 'px'
        },
        'color': attributes.titleOneIconColor
      }
    }, {
      selector: '.wpmozo-adfgu-toggle-title-two .icon-wrapper i',
      style: {
        'font-size': {
          value: attributes.titleTwoIconSize,
          suffix: 'px'
        },
        'color': attributes.titleTwoIconColor
      }
    }, {
      selector: '.wpmozo-adfgu-content-toggle-one',
      style: {
        'background-color': attributes.contentOneBackground,
        'text-align': attributes.contentOneAlignment,
        'color': attributes.contentOneColor
      },
      additional: contentOneAddi
    }, {
      selector: '.wpmozo-adfgu-content-toggle-two',
      style: {
        'background-color': attributes.contentTwoBackground,
        'text-align': attributes.contentTwoAlignment,
        'color': attributes.contentTwoColor
      },
      additional: contentTwoAddi
    }],
    generateStyle = window.wpmozo.wpmozo_generate_style(allInline);
  if (!window.wpmozo.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !window.wpmozo.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/content-wraper/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/content-wraper/attributes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/content-wraper/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/content-wraper/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




const Edit = props => {
  const {
    clientId
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'wpmozo-content-wraper'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    renderAppender: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlockOrder(clientId).length > 0 ? undefined : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/content-wraper/index.js":
/*!********************************************!*\
  !*** ./src/blocks/content-wraper/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/content-wraper/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/content-wraper/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/content-wraper/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/content-wraper', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Content Wraper', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 3,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  parent: ['wpmozo'],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  supports: {
    lock: false,
    html: false
  }
});

/***/ }),

/***/ "./src/blocks/content-wraper/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/content-wraper/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/fancy-heading/attributes.js":
/*!************************************************!*\
  !*** ./src/blocks/fancy-heading/attributes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  clientId: {
    type: "string"
  },
  preHeading: {
    type: "string",
    default: 'Pre'
  },
  mainHeading: {
    type: "string",
    default: 'Main'
  },
  postHeading: {
    type: "string",
    default: 'Post'
  },
  displayInStack: {
    type: "boolean"
  },
  headingLavel: {
    type: "string",
    default: "h2"
  },
  headingAlignment: {
    type: "string",
    default: "center"
  },
  headingColor: {
    type: "string"
  },
  headingBackground: {
    type: "string"
  },
  preTextColor: {
    type: "string"
  },
  preTextBackground: {
    type: "string"
  },
  preTextHoverColor: {
    type: "string"
  },
  preTextHoverBackground: {
    type: "string"
  },
  preTextDimensionspadding: {
    type: "object"
  },
  preTextDimensionsmargin: {
    type: "object"
  },
  preTextFontSize: {
    type: "string"
  },
  preTextFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  preTextLetterSpacing: {
    type: "string"
  },
  preTextDecoration: {
    type: "string"
  },
  preTextLetterCase: {
    type: "string"
  },
  preTextLineHeight: {
    type: "string"
  },
  mainTextColor: {
    type: "string"
  },
  mainTextBackground: {
    type: "string"
  },
  mainTextHoverColor: {
    type: "string"
  },
  mainTextHoverBackground: {
    type: "string"
  },
  mainTextDimensionspadding: {
    type: "object"
  },
  mainTextDimensionsmargin: {
    type: "object"
  },
  mainTextFontSize: {
    type: "string"
  },
  mainTextFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  mainTextLetterSpacing: {
    type: "string"
  },
  mainTextDecoration: {
    type: "string"
  },
  mainTextLetterCase: {
    type: "string"
  },
  mainTextLineHeight: {
    type: "string"
  },
  postTextColor: {
    type: "string"
  },
  postTextBackground: {
    type: "string"
  },
  postTextHoverColor: {
    type: "string"
  },
  postTextHoverBackground: {
    type: "string"
  },
  postTextDimensionspadding: {
    type: "object"
  },
  postTextDimensionsmargin: {
    type: "object"
  },
  postTextFontSize: {
    type: "string"
  },
  postTextFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  postTextLetterSpacing: {
    type: "string"
  },
  postTextDecoration: {
    type: "string"
  },
  postTextLetterCase: {
    type: "string"
  },
  postTextLineHeight: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/fancy-heading/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/fancy-heading/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./src/blocks/fancy-heading/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/fancy-heading/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);







const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    isSelected = props.isSelected,
    setAttributes = props.setAttributes;
  attributes.clientId = clientId;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  const [currentHeadingType, setcurrentHeadingType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const isActiveType = type => {
    return isSelected && type === currentHeadingType ? 'wpmozo-active-sub-block' : '';
  };
  const activeTypeText = () => {
    let type = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre', 'wpmozo-addons-lite-for-gutenberg');
    if ('t1' === currentHeadingType) {
      type = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre', 'wpmozo-addons-lite-for-gutenberg');
    } else if ('t2' === currentHeadingType) {
      type = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main', 'wpmozo-addons-lite-for-gutenberg');
    } else if ('t3' === currentHeadingType) {
      type = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post', 'wpmozo-addons-lite-for-gutenberg');
    }
    return type;
  };
  const allText = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    className: `wpmozo-adfgu-pre-text ${isActiveType('t1')}`,
    allowedFormats: [],
    tagName: "span",
    value: attributes.preHeading,
    onChange: newValue => setAttributes({
      preHeading: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre', 'wpmozo-addons-lite-for-gutenberg'),
    onFocus: () => setcurrentHeadingType('t1')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    className: `wpmozo-adfgu-main-text ${isActiveType('t2')}`,
    allowedFormats: [],
    tagName: "span",
    value: attributes.mainHeading,
    onChange: newValue => setAttributes({
      mainHeading: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main', 'wpmozo-addons-lite-for-gutenberg'),
    onFocus: () => setcurrentHeadingType('t2')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    className: `wpmozo-adfgu-post-text ${isActiveType('t3')}`,
    allowedFormats: [],
    tagName: "span",
    value: attributes.postHeading,
    onChange: newValue => setAttributes({
      postHeading: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post', 'wpmozo-addons-lite-for-gutenberg'),
    onFocus: () => setcurrentHeadingType('t3')
  }));
  const heading = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(attributes.headingLavel, {
    className: 'wpmozo-adfgu-fancy-heading-inner'
  }, allText);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ...props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("p", null, activeTypeText()))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
    ...blockProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
    className: "wpmozo-adfgu-fancy-heading-wrap"
  }, heading)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/fancy-heading/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/fancy-heading/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/fancy-heading/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/fancy-heading/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/fancy-heading/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/fancy-heading', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Fancy Heading', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 2,
  category: 'wpmozo',
  keywords: ['wpmozo', 'fancy-heading', 'heading'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {}
});

/***/ }),

/***/ "./src/blocks/fancy-heading/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/fancy-heading/inspector.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const headingLavels = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h1'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h2'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h3'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h4'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h5'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h6'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre Heading', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.preHeading,
    onChange: newValue => setAttributes({
      preHeading: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main Heading', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mainHeading,
    onChange: newValue => setAttributes({
      mainHeading: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Heading', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.postHeading,
    onChange: newValue => setAttributes({
      postHeading: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display In Stack', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.displayInStack,
    onChange: newValue => setAttributes({
      displayInStack: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Global Text Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "heading",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPressed: item.value === attributes.headingLavel ? true : false,
    onClick: newValue => setAttributes({
      headingLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      headingAlignment: newValue
    }),
    value: attributes.headingAlignment
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre Text Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorCombo, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pre Text Color', 'wpmozo-addons-lite-for-gutenberg'),
    normal: {
      ColorKey: "preText",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    },
    hover: {
      ColorKey: "preTextHover",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "preText",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "preTextDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main Text Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorCombo, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main Text Color', 'wpmozo-addons-lite-for-gutenberg'),
    normal: {
      ColorKey: "mainText",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    },
    hover: {
      ColorKey: "mainTextHover",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "mainText",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "mainTextDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Text Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorCombo, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Text Color', 'wpmozo-addons-lite-for-gutenberg'),
    normal: {
      ColorKey: "postText",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    },
    hover: {
      ColorKey: "postTextHover",
      props: props,
      ColorTypes: [{
        key: 'Color',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
      }, {
        key: 'Background',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
      }]
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "postText",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "postTextDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/fancy-heading/save.js":
/*!******************************************!*\
  !*** ./src/blocks/fancy-heading/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/fancy-heading/style.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);




const Save = ({
  attributes
}) => {
  const clientId = attributes.clientId;
  const allText = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", {
    className: "wpmozo-adfgu-pre-text"
  }, attributes.preHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", {
    className: "wpmozo-adfgu-main-text"
  }, attributes.mainHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", {
    className: "wpmozo-adfgu-post-text"
  }, attributes.postHeading));
  const heading = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(attributes.headingLavel, {
    className: 'wpmozo-adfgu-fancy-heading-inner'
  }, allText);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'wpmozo-adfgu-fancy-heading-wrap'
    }),
    id: `block-${clientId}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), heading);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/fancy-heading/style.js":
/*!*******************************************!*\
  !*** ./src/blocks/fancy-heading/style.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const clientId = attributes.clientId,
    parent = '#block-' + clientId,
    toConvertStyles = ['preText', 'preTextDimensions', 'mainText', 'mainTextDimensions', 'postText', 'postTextDimensions'];
  let css = '',
    convertedStyle = window.wpmozo.convetInlineStyleStr(toConvertStyles, attributes),
    flexDirection = attributes.displayInStack ? 'column' : 'initial',
    headingAlignment = 'left' === attributes.headingAlignment ? 'flex-start' : 'flex-end',
    preTextAddi = convertedStyle.preText + convertedStyle.preTextDimensions,
    mainTextAddi = convertedStyle.mainText + convertedStyle.mainTextDimensions,
    postTextAddi = convertedStyle.postText + convertedStyle.postTextDimensions;
  if ('center' === attributes.headingAlignment) {
    headingAlignment = 'center';
  }
  let allInline = [{
      selector: '.wpmozo-adfgu-fancy-heading-inner',
      style: {
        'display': 'flex',
        'line-height': 1,
        'padding': 0,
        'margin': 0,
        'align-items': headingAlignment,
        'white-space': 'pre-wrap',
        'flex-wrap': 'wrap',
        'justify-content': headingAlignment,
        'flex-direction': flexDirection
      }
    }, {
      selector: '.wpmozo-adfgu-fancy-heading-inner span',
      style: {
        'display': 'inline-block',
        'color': attributes.headingColor,
        'background': attributes.headingBackground
      }
    }, {
      selector: 'span.wpmozo-adfgu-pre-text',
      style: {
        'color': attributes.preTextColor,
        'background': attributes.preTextBackground
      },
      additional: preTextAddi
    }, {
      selector: 'span.wpmozo-adfgu-pre-text:hover',
      style: {
        'color': attributes.preTextHoverColor,
        'background': attributes.preTextHoverBackground
      }
    }, {
      selector: 'span.wpmozo-adfgu-main-text',
      style: {
        'color': attributes.mainTextColor,
        'background': attributes.mainTextBackground
      },
      additional: mainTextAddi
    }, {
      selector: 'span.wpmozo-adfgu-main-text:hover',
      style: {
        'color': attributes.mainTextHoverColor,
        'background': attributes.mainTextHoverBackground
      }
    }, {
      selector: 'span.wpmozo-adfgu-post-text',
      style: {
        'color': attributes.postTextColor,
        'background': attributes.postTextBackground
      },
      additional: postTextAddi
    }, {
      selector: 'span.wpmozo-adfgu-post-text:hover',
      style: {
        'color': attributes.postTextHoverColor,
        'background': attributes.postTextHoverBackground
      }
    }],
    generateStyle = window.wpmozo.wpmozo_generate_style(allInline);
  if (!window.wpmozo.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !window.wpmozo.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/fancy-text/attributes.js":
/*!*********************************************!*\
  !*** ./src/blocks/fancy-text/attributes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const attributes = {
  clientId: {
    type: "string"
  },
  fancyText: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Here you can set text.', 'wpmozo-addons-lite-for-gutenberg')
  },
  textStyle: {
    type: "string",
    default: 'gradient'
  },
  fancyTextBackground: {
    type: "string",
    default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
  },
  fancyTextBackgroundImg: {
    type: "string",
    default: WPMozoEditorObj.placeholderImg
  },
  textBgSize: {
    type: "string",
    default: "cover"
  },
  textBgPosition: {
    type: "string",
    default: "center"
  },
  textBgRepeat: {
    type: "string",
    default: "initial"
  },
  textBgOverlay: {
    type: "string",
    default: "none"
  },
  textBgOverlayColor: {
    type: "string"
  },
  textBgOverlayColorSolid: {
    type: "string"
  },
  textBgOverlayColorGradient: {
    type: "string"
  },
  textBgDimensionspadding: {
    type: "object"
  },
  textAlignment: {
    type: "string",
    default: "center"
  },
  textFontSize: {
    type: "string"
  },
  textFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  textLetterSpacing: {
    type: "string"
  },
  textDecoration: {
    type: "string"
  },
  textLetterCase: {
    type: "string"
  },
  textLineHeight: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/fancy-text/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/fancy-text/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/fancy-text/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/fancy-text/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    setAttributes = props.setAttributes;
  attributes.clientId = clientId;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: 'wpmozo-adfgu-fancy-text-wrap'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: `wpmozo-adfgu-fancy-text-inner ${attributes.textStyle}`,
    tagName: "div",
    value: attributes.fancyText,
    onChange: newValue => setAttributes({
      fancyText: newValue
    }),
    placeholder: attributes.fancyText
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/fancy-text/index.js":
/*!****************************************!*\
  !*** ./src/blocks/fancy-text/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/fancy-text/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/fancy-text/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/fancy-text/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/fancy-test', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Fancy Test', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'fancy-text', 'text'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {}
});

/***/ }),

/***/ "./src/blocks/fancy-text/inspector.js":
/*!********************************************!*\
  !*** ./src/blocks/fancy-text/inspector.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/fancy-text/attributes.js");





const WPMozoEditorObj = wpmozo_adfgu_editor_object;

const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = attributes.clientId,
    bgAllSize = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cover', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'cover'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'contain'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'auto'
    }],
    bgAllPositions = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Center', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'center left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'center right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Center', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom right'
    }],
    bgAllRepeat = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No Repeat', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'no-repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Repeat', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Repeat X (horizontal)', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'repeat-x'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Repeat Y (vertical)', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'repeat-y'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'space'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Round', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'round'
    }],
    bgAllOverlay = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'color'
    }];
  props = Object.assign({}, props, {
    preAttributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"]
  });
  let backImage = attributes.fancyTextBackgroundImg ? attributes.fancyTextBackgroundImg : WPMozoEditorObj.placeholderImg;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fancy Text Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Style', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textStyle,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gradient', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'gradient'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Clipping', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'clipping'
    }],
    onChange: newValue => setAttributes({
      textStyle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fancy Text', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      fancyText: newValue
    }),
    value: attributes.fancyText
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fancy Text Style', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, 'gradient' === attributes.textStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "fancyText",
    props: props,
    ColorTypes: [{
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg'),
      onlyGradient: true
    }]
  })), 'clipping' === attributes.textStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Image', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: ["image"],
    accept: "image/*",
    value: backImage,
    onSelect: media => {
      setAttributes({
        fancyTextBackgroundImg: media.url
      });
    },
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "wpmozo-background-img-selction-wrap components-button block-editor-block-styles__item"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wpmozo-background-img-selction-overlay",
        onClick: event => {
          event.stopPropagation();
          open();
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Image', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: backImage
      })));
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Size', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textBgSize,
    options: bgAllSize,
    onChange: newValue => setAttributes({
      textBgSize: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textBgPosition,
    options: bgAllPositions,
    onChange: newValue => setAttributes({
      textBgPosition: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Repeat', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textBgRepeat,
    options: bgAllRepeat,
    onChange: newValue => setAttributes({
      textBgRepeat: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Overlay', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.textBgOverlay,
    options: bgAllOverlay,
    onChange: newValue => setAttributes({
      textBgOverlay: newValue
    })
  }), 'none' !== attributes.textBgOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "textBgOverlay",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clip Background Color', 'wpmozo-addons-lite-for-gutenberg'),
      withGradient: true
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "textBgDimensions",
    DimensionsTypes: {
      padding: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      textAlignment: newValue
    }),
    value: attributes.textAlignment
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fancy Text Typography', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "text",
    props: props,
    TypoTypes: {
      'FontSize': true,
      'FontAppearance': true,
      'LetterSpacing': true,
      'LetterCase': true,
      'LineHeight': true
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/fancy-text/save.js":
/*!***************************************!*\
  !*** ./src/blocks/fancy-text/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/fancy-text/style.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const Save = ({
  attributes
}) => {
  const clientId = attributes.clientId;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'wpmozo-adfgu-fancy-text-wrap'
    }),
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-fancy-text-inner ${attributes.textStyle}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "",
    value: attributes.fancyText
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/fancy-text/style.js":
/*!****************************************!*\
  !*** ./src/blocks/fancy-text/style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const wpmozoCoreFun = window.wpmozo,
    clientId = attributes.clientId,
    parent = '#block-' + clientId,
    toConvertStyles = ['text', 'textBgDimensions'];
  let css = '',
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let allInline = [{
    selector: '.wpmozo-adfgu-fancy-text-inner',
    style: {
      'background-clip': 'border-box',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'text-align': attributes.textAlignment
    },
    additional: convertedStyle.text
  }];
  if ('gradient' === attributes.textStyle) {
    allInline.push({
      selector: '.wpmozo-adfgu-fancy-text-inner',
      style: {
        'background-color': 'transparent',
        'background-image': attributes.fancyTextBackground
      }
    });
  } else {
    allInline.push({
      selector: '.wpmozo-adfgu-fancy-text-inner',
      style: {
        'background-image': 'url(' + attributes.fancyTextBackgroundImg + ')',
        'background-size': attributes.textBgSize,
        'background-position': attributes.textBgPosition,
        'background-repeat': attributes.textBgRepeat
      }
    });
    if ('none' !== attributes.textBgOverlay) {
      allInline.push({
        selector: '.wpmozo-adfgu-fancy-text-inner:before',
        style: {
          'content': '""',
          'position': 'absolute',
          'top': '0',
          'right': '0',
          'bottom': '0',
          'left': '0',
          'z-index': '-2',
          'background-image': 'inherit',
          'background-size': attributes.textBgSize,
          'background-position': attributes.textBgPosition,
          'background-repeat': attributes.textBgRepeat
        }
      });
      allInline.push({
        selector: '.wpmozo-adfgu-fancy-text-inner:after',
        style: {
          'content': '""',
          'position': 'absolute',
          'top': '0',
          'right': '0',
          'bottom': '0',
          'left': '0',
          'z-index': '-1',
          ...(!wpmozoCoreFun.wpmozo_is_empty(attributes.textBgOverlayColorSolid) && {
            'background-color': attributes.textBgOverlayColor
          }),
          ...(!wpmozoCoreFun.wpmozo_is_empty(attributes.textBgOverlayColorGradient) && {
            'background': attributes.textBgOverlayColor
          })
        }
      });
      css += `
		    	${parent} {
		    		z-index: 0;
		    		position: relative;
		    	}
		    `;
    }
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  if (!wpmozoCoreFun.wpmozo_is_empty(convertedStyle.textBgDimensions) && 'none' !== attributes.textBgOverlay) {
    css += `
	    	${parent} {
	    		${convertedStyle.textBgDimensions}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !wpmozoCoreFun.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/flip-box/js/attributes.js":
/*!**********************************************!*\
  !*** ./src/blocks/flip-box/js/attributes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  clientId: {
    type: "string"
  },
  animationType: {
    type: "string",
    default: 'flip'
  },
  flipDirection: {
    type: "string",
    default: 'top'
  },
  depth3dEffect: {
    type: "boolean",
    default: true
  },
  shakeOnFlip: {
    type: "boolean",
    default: false
  },
  flipSpeed: {
    type: "number",
    default: 700
  },
  frontTitle: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Front Title', 'wpmozo-addons-lite-for-gutenberg')
  },
  frontContnet: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Here you can set front text.', 'wpmozo-addons-lite-for-gutenberg')
  },
  backTitle: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Back Title', 'wpmozo-addons-lite-for-gutenberg')
  },
  backContnet: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Here you can set back text.', 'wpmozo-addons-lite-for-gutenberg')
  },
  frontElType: {
    type: "string",
    default: 'icon'
  },
  frontElIcon: {
    type: "string",
    default: "fas fa-star"
  },
  frontElImage: {
    type: "string"
  },
  backElType: {
    type: "string",
    default: 'icon'
  },
  backElIcon: {
    type: "string",
    default: "fas fa-star"
  },
  backElImage: {
    type: "string"
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
    type: "string"
  },
  globalTitleFontSize: {
    type: "string"
  },
  globalTitleFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  globalTitleLetterSpacing: {
    type: "string"
  },
  globalTitleDecoration: {
    type: "string"
  },
  globalTitleLetterCase: {
    type: "string"
  },
  globalTitleLineHeight: {
    type: "string"
  },
  globalContenttext: {
    type: "string"
  },
  globalContentFontSize: {
    type: "string"
  },
  globalContentFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  globalContentLetterSpacing: {
    type: "string"
  },
  globalContentDecoration: {
    type: "string"
  },
  globalContentLetterCase: {
    type: "string"
  },
  globalContentLineHeight: {
    type: "string"
  },
  frontHeadingLavel: {
    type: "string",
    default: "h2"
  },
  frontTitleColor: {
    type: "string"
  },
  frontContentColor: {
    type: "string"
  },
  frontTitletext: {
    type: "string"
  },
  frontTitleFontSize: {
    type: "string"
  },
  frontTitleFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  frontTitleLetterSpacing: {
    type: "string"
  },
  frontTitleDecoration: {
    type: "string"
  },
  frontTitleLetterCase: {
    type: "string"
  },
  frontTitleLineHeight: {
    type: "string"
  },
  frontContenttext: {
    type: "string"
  },
  frontContentFontSize: {
    type: "string"
  },
  frontContentFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  frontContentLetterSpacing: {
    type: "string"
  },
  frontContentDecoration: {
    type: "string"
  },
  frontContentLetterCase: {
    type: "string"
  },
  frontContentLineHeight: {
    type: "string"
  },
  backHeadingLavel: {
    type: "string",
    default: "h2"
  },
  backTitleColor: {
    type: "string"
  },
  backContentColor: {
    type: "string"
  },
  backTitletext: {
    type: "string"
  },
  backTitleFontSize: {
    type: "string"
  },
  backTitleFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  backTitleLetterSpacing: {
    type: "string"
  },
  backTitleDecoration: {
    type: "string"
  },
  backTitleLetterCase: {
    type: "string"
  },
  backTitleLineHeight: {
    type: "string"
  },
  backContenttext: {
    type: "string"
  },
  backContentFontSize: {
    type: "string"
  },
  backContentFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  backContentLetterSpacing: {
    type: "string"
  },
  backContentDecoration: {
    type: "string"
  },
  backContentLetterCase: {
    type: "string"
  },
  backContentLineHeight: {
    type: "string"
  },
  frontElementAlign: {
    type: "string",
    default: "top"
  },
  frontIconColor: {
    type: "string",
    default: "#fff"
  },
  frontIconSize: {
    type: "string"
  },
  frontIconSizeUnit: {
    type: "string"
  },
  frontImageAlignment: {
    type: "string",
    default: "center"
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
    default: false
  },
  frontIconShape: {
    type: "string",
    default: "square"
  },
  frontIconShapeBackground: {
    type: "string",
    default: "#000000"
  },
  frontIconHasShapeBorder: {
    type: "boolean",
    default: false
  },
  frontIconShapeborderRadius: {
    type: "string"
  },
  frontIconShapeborder: {
    type: "object"
  },
  backElementAlign: {
    type: "string",
    default: "top"
  },
  backIconColor: {
    type: "string",
    default: "#fff"
  },
  backIconSize: {
    type: "string"
  },
  backIconSizeUnit: {
    type: "string"
  },
  backImageAlignment: {
    type: "string",
    default: "center"
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
    default: false
  },
  backIconShape: {
    type: "string",
    default: "square"
  },
  backIconShapeBackground: {
    type: "string",
    default: "#000000"
  },
  backIconHasShapeBorder: {
    type: "boolean",
    default: false
  },
  backIconShapeborderRadius: {
    type: "string"
  },
  backIconShapeborder: {
    type: "object"
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
    default: false
  },
  backBtnText: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click ME!', 'wpmozo-addons-lite-for-gutenberg')
  },
  backBtnUrl: {
    type: "string",
    default: '#'
  },
  backBtnIcon: {
    type: "string",
    default: 'fas fa-arrow-right'
  },
  backBtnIconPosition: {
    type: "string",
    default: 'after'
  },
  backBtnIconOnHover: {
    type: "boolean",
    default: false
  },
  backBtnColor: {
    type: "string",
    default: '#fff'
  },
  backBtnBackground: {
    type: "string"
  },
  backBtntext: {
    type: "string"
  },
  backBtnFontSize: {
    type: "string"
  },
  backBtnFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  backBtnLetterSpacing: {
    type: "string"
  },
  backBtnDecoration: {
    type: "string",
    default: "none"
  },
  backBtnLetterCase: {
    type: "string"
  },
  backBtnLineHeight: {
    type: "string"
  },
  backBtnborder: {
    type: "object",
    default: {
      "width": "1px",
      "style": "solid",
      "color": "#fff"
    }
  },
  backBtnborderRadius: {
    type: "string",
    default: "3px"
  },
  backBtnDimensionspadding: {
    type: "object",
    default: {
      "top": '5px',
      "right": '8px',
      "bottom": '5px',
      "left": '8px'
    }
  },
  backBtnDimensionsmargin: {
    type: "object"
  },
  frontIconShapeBorderColor: {
    type: "string"
  },
  backIconShapeBorderColor: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/flip-box/js/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/flip-box/js/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/flip-box/js/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/flip-box/js/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);







const Edit = props => {
  const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    clientId = props.clientId,
    isSelected = props.isSelected,
    setAttributes = props.setAttributes,
    layoutType = 'flip' === attributes.animationType ? ' layout1' : ' layout2',
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-flip-box-main'
    }),
    [editMode, setEditMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    editModeLabel = !editMode ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Front', 'wpmozo-addons-lite-for-gutenberg') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Back', 'wpmozo-addons-lite-for-gutenberg');
  attributes.clientId = clientId;
  let editModeSide = !editMode ? ' edit-front' : ' edit-back';
  if (!isSelected) {
    editModeSide = '';
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    jQuery('body').find('.wpmozo-adfgu-flip-box-wrap').each(function () {
      jQuery(this).find('.wpmozo-adfgu-flip-box-side').each(function () {
        jQuery(this).removeAttr('style');
      });
      let $this = jQuery(this);
      var maxHeight = Math.max.apply(null, $this.find('.wpmozo-adfgu-flip-box-side').map(function () {
        return jQuery(this).outerHeight();
      }).get());
      jQuery(this).find('.wpmozo-adfgu-flip-box-side').each(function () {
        jQuery(this).css('height', maxHeight + 'px');
      });
    });
  });
  let backBtnIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.backBtnIcon
    }),
    backBtnOnHover = attributes.backBtnIconOnHover ? ' show-on-hover' : '',
    frontHexagonIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-shape"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.frontElIcon
    }))),
    backHexagonIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-shape"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.backElIcon
    })));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    className: "wpmozo-adfgu-flip-box-edit-control",
    label: editModeLabel,
    checked: editMode,
    onChange: newValue => setEditMode(newValue)
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-flip-box-wrap${layoutType}${editModeSide}`,
    "flip-direction": attributes.flipDirection
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-front"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-inner"
  }, 'none' !== attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'icon' === attributes.frontElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"
  }, 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, "hexagon" !== attributes.frontIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.frontElIcon
  }), "hexagon" === attributes.frontIconShape && frontHexagonIcon), 'image' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.frontElImage
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-content-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-heading-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-flip-box-title",
    tagName: attributes.frontHeadingLavel,
    value: attributes.frontTitle,
    onChange: newValue => setAttributes({
      frontTitle: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Front Title', 'wpmozo-addons-lite-for-gutenberg')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    value: attributes.frontContnet,
    onChange: newValue => setAttributes({
      frontContnet: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Here you can set front text.', 'wpmozo-addons-lite-for-gutenberg')
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-back"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-inner"
  }, 'none' !== attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'icon' === attributes.backElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"
  }, 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, "hexagon" !== attributes.backIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.backElIcon
  }), "hexagon" === attributes.backIconShape && backHexagonIcon), 'image' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.backElImage
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-content-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-heading-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-flip-box-title",
    tagName: attributes.backHeadingLavel,
    value: attributes.backTitle,
    onChange: newValue => setAttributes({
      backTitle: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Back Title', 'wpmozo-addons-lite-for-gutenberg')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    value: attributes.backContnet,
    onChange: newValue => setAttributes({
      backContnet: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Here you can set back text.', 'wpmozo-addons-lite-for-gutenberg')
  })), attributes.backHasButton && !wpmozoCoreFun.wpmozo_is_empty(attributes.backBtnText) && !wpmozoCoreFun.wpmozo_is_empty(attributes.backBtnUrl) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-button-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-button-wrap-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `wpmozo-adfgu-flip-box-button${backBtnOnHover}`,
    target: "_blank",
    href: attributes.backBtnUrl
  }, !wpmozoCoreFun.wpmozo_is_empty(backBtnIcon) && 'before' === attributes.backBtnIconPosition && backBtnIcon, attributes.backBtnText, !wpmozoCoreFun.wpmozo_is_empty(backBtnIcon) && 'after' === attributes.backBtnIconPosition && backBtnIcon)))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/flip-box/js/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/flip-box/js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/flip-box/js/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/flip-box/js/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/flip-box/js/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/flip-box', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Flip Box', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'flip-box', 'box'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/flip-box/js/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/flip-box/js/inspector.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/flip-box/js/attributes.js");







const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    flipAllDirection = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'bottom'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'right'
    }, ...('flip' === attributes.animationType ? [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Diagonal Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'diagonal-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Diagonal Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'diagonal-right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Diagonal Left Inverted', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'diagonal-left-inverted'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Diagonal Right Inverted', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'diagonal-right-inverted'
    }] : [])];
  props = Object.assign({}, props, {
    preAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  });
  const [contentType, setContentType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [elementType, setElementType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [typographyType, setTypographyType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('title'),
    [flipBoxType, setFlipBoxType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [frontTypographyType, setFrontTypographyType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('title'),
    [backTypographyType, setBackTypographyType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('title'),
    [elementStyleType, setelEmentStyleType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [contentAlignType, setContentAlignType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [flipboxBorderType, setFlipboxBorderType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [flipboxBackgroundType, setFlipboxBackgroundType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front'),
    [flipboxWidthType, setFlipboxWidthType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('front');
  const headingLavels = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h1'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h2'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h3'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h4'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h5'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'h6'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Box Layout', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'flip'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3D Cube', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'cube'
    }],
    onChange: newValue => setAttributes({
      animationType: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Direction', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.flipDirection,
    options: flipAllDirection,
    onChange: newValue => setAttributes({
      flipDirection: newValue
    })
  }), 'flip' === attributes.animationType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3D Depth Effect', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.depth3dEffect,
    onChange: newValue => setAttributes({
      depth3dEffect: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shacke On Flip', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.shakeOnFlip,
    onChange: newValue => setAttributes({
      shakeOnFlip: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Speed(in ms)', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.flipSpeed,
    onChange: newValue => setAttributes({
      flipSpeed: newValue
    }),
    min: 100,
    step: 100,
    max: 10000
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Box Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === contentType ? true : false,
    onClick: () => setContentType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === contentType ? true : false,
    onClick: () => setContentType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === contentType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.frontTitle,
    onChange: newValue => setAttributes({
      frontTitle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      frontContnet: newValue
    }),
    value: attributes.frontContnet
  })), 'back' === contentType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backTitle,
    onChange: newValue => setAttributes({
      backTitle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      backContnet: newValue
    }),
    value: attributes.backContnet
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip Box Elements', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === elementType ? true : false,
    onClick: () => setElementType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === elementType ? true : false,
    onClick: () => setElementType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === elementType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Element Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.frontElType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'icon'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'image'
    }],
    onChange: newValue => setAttributes({
      frontElType: newValue
    })
  }), 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "frontElIcon",
    props: props,
    value: attributes.frontElIcon,
    onChange: newValue => setAttributes({
      frontElIcon: newValue
    })
  }), 'image' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "frontElImage",
    props: props
  })), 'back' === elementType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Element Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backElType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'icon'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'image'
    }],
    onChange: newValue => setAttributes({
      backElType: newValue
    })
  }), 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "backElIcon",
    props: props,
    value: attributes.backElIcon,
    onChange: newValue => setAttributes({
      backElIcon: newValue
    })
  }), 'image' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "backElImage",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Button', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backHasButton,
    onChange: newValue => setAttributes({
      backHasButton: newValue
    })
  }), attributes.backHasButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backBtnText,
    onChange: newValue => setAttributes({
      backBtnText: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Url', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backBtnUrl,
    onChange: newValue => setAttributes({
      backBtnUrl: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Icon', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "backBtnIcon",
    props: props,
    value: attributes.backBtnIcon,
    onChange: newValue => setAttributes({
      backBtnIcon: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Element Type', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backBtnIconPosition,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'before'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'after'
    }],
    onChange: newValue => setAttributes({
      backBtnIconPosition: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Icon On Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backBtnIconOnHover,
    onChange: newValue => setAttributes({
      backBtnIconOnHover: newValue
    })
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Global Styling', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Width', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "flipboxWidth",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "global",
    props: props,
    ColorTypes: [{
      key: 'TitleColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ContentColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'title' === typographyType ? true : false,
    onClick: () => setTypographyType('title')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'content' === typographyType ? true : false,
    onClick: () => setTypographyType('content')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'))), 'title' === typographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "globalTitle",
    props: props
  }), 'content' === typographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "globalContent",
    props: props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Style', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === flipBoxType ? true : false,
    onClick: () => setFlipBoxType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === flipBoxType ? true : false,
    onClick: () => setFlipBoxType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === flipBoxType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    key: 'front-label-' + item.value,
    isPressed: item.value === attributes.frontHeadingLavel ? true : false,
    onClick: newValue => setAttributes({
      frontHeadingLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "front",
    props: props,
    ColorTypes: [{
      key: 'TitleColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ContentColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'title' === frontTypographyType ? true : false,
    onClick: () => setFrontTypographyType('title')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'content' === frontTypographyType ? true : false,
    onClick: () => setFrontTypographyType('content')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'))), 'title' === frontTypographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "frontTitle",
    props: props
  }), 'content' === frontTypographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "frontContent",
    props: props
  }))), 'back' === flipBoxType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    key: 'back-label-' + item.value,
    isPressed: item.value === attributes.backHeadingLavel ? true : false,
    onClick: newValue => setAttributes({
      backHeadingLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'TitleColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ContentColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'title' === backTypographyType ? true : false,
    onClick: () => setBackTypographyType('title')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'content' === backTypographyType ? true : false,
    onClick: () => setBackTypographyType('content')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'))), 'title' === backTypographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "backTitle",
    props: props
  }), 'content' === backTypographyType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "backContent",
    props: props
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Image/Icon Style', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === elementStyleType ? true : false,
    onClick: () => setelEmentStyleType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === elementStyleType ? true : false,
    onClick: () => setelEmentStyleType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === elementStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "front",
    props: props,
    ColorTypes: [{
      key: 'IconColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "frontIconSize",
    props: props
  })), 'image' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front Image Width', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "frontImageWidth",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front Image Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      frontImageAlignment: newValue
    }),
    value: attributes.frontImageAlignment
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image/Icon Placment', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.frontElementAlign,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'right'
    }],
    onChange: newValue => setAttributes({
      frontElementAlign: newValue
    })
  }), 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Style Icon', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.frontIconStyle,
    onChange: newValue => setAttributes({
      frontIconStyle: newValue
    })
  }), attributes.frontIconStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Shape Border', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.frontIconHasShapeBorder,
    onChange: newValue => setAttributes({
      frontIconHasShapeBorder: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.frontIconShape,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Square', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'square'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Circle', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'circle'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hexagon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'hexagon'
    }],
    onChange: newValue => {
      setAttributes({
        frontIconShapeborderRadius: ''
      });
      setAttributes({
        frontIconShape: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "front",
    props: props,
    ColorTypes: [{
      key: 'IconShapeBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), attributes.frontIconHasShapeBorder && 'hexagon' !== attributes.frontIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "frontIconShape",
    props: props,
    BorderTypes: 'square' !== attributes.frontIconShape ? {
      border: true
    } : {
      border: true,
      radius: true
    }
  })), attributes.frontIconHasShapeBorder && 'hexagon' === attributes.frontIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "front",
    props: props,
    ColorTypes: [{
      key: 'IconShapeBorderColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Border Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }))))), 'back' === elementStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'IconColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Size', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "backIconSize",
    props: props
  })), 'image' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoRangeSize, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back Image Width', 'wpmozo-addons-lite-for-gutenberg'),
    rangeSizeKey: "backImageWidth",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front Image Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      backImageAlignment: newValue
    }),
    value: attributes.backImageAlignment
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image/Icon Placment', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backElementAlign,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'right'
    }],
    onChange: newValue => setAttributes({
      backElementAlign: newValue
    })
  }), 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Style Icon', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backIconStyle,
    onChange: newValue => setAttributes({
      backIconStyle: newValue
    })
  }), attributes.backIconStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Shape Border', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.backIconHasShapeBorder,
    onChange: newValue => setAttributes({
      backIconHasShapeBorder: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.backIconShape,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Square', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'square'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Circle', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'circle'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hexagon', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'hexagon'
    }],
    onChange: newValue => {
      setAttributes({
        backIconShapeborderRadius: ''
      });
      setAttributes({
        backIconShape: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'IconShapeBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), attributes.backIconHasShapeBorder && 'hexagon' !== attributes.backIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "backIconShape",
    props: props,
    BorderTypes: 'square' !== attributes.backIconShape ? {
      border: true
    } : {
      border: true,
      radius: true
    }
  })), attributes.backIconHasShapeBorder && 'hexagon' === attributes.backIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'IconShapeBorderColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Border Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === contentAlignType ? true : false,
    onClick: () => setContentAlignType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === contentAlignType ? true : false,
    onClick: () => setContentAlignType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === contentAlignType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      frontContentHorAlignment: newValue
    }),
    value: attributes.frontContentHorAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    type: "vertical",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      frontContentVerAlignment: newValue
    }),
    value: attributes.frontContentVerAlignment
  })), 'back' === contentAlignType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      backContentHorAlignment: newValue
    }),
    value: attributes.backContentHorAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    type: "vertical",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      backContentVerAlignment: newValue
    }),
    value: attributes.backContentVerAlignment
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Border', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === flipboxBorderType ? true : false,
    onClick: () => setFlipboxBorderType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === flipboxBorderType ? true : false,
    onClick: () => setFlipboxBorderType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === flipboxBorderType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "frontFlipbox",
    props: props
  }), 'back' === flipboxBorderType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "backFlipbox",
    props: props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Background', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'front' === flipboxBackgroundType ? true : false,
    onClick: () => setFlipboxBackgroundType('front')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'back' === flipboxBackgroundType ? true : false,
    onClick: () => setFlipboxBackgroundType('back')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'wpmozo-addons-lite-for-gutenberg'))), 'front' === flipboxBackgroundType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "front",
    props: props,
    ColorTypes: [{
      key: 'FlipboxBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Front Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), 'back' === flipboxBackgroundType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'FlipboxBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }))), attributes.backHasButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('FlipBox Button', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "back",
    props: props,
    ColorTypes: [{
      key: 'BtnColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'BtnBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "backBtn",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "backBtn",
    props: props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "backBtnDimensions",
    DimensionsTypes: {
      padding: true,
      margin: true
    },
    props: props
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/flip-box/js/save.js":
/*!****************************************!*\
  !*** ./src/blocks/flip-box/js/save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/flip-box/js/style.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const Save = ({
  attributes
}) => {
  const clientId = attributes.clientId,
    wpmozoCoreFun = window.wpmozo,
    layoutType = 'flip' === attributes.animationType ? ' layout1' : ' layout2';
  let backBtnIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.backBtnIcon
    }),
    backBtnOnHover = attributes.backBtnIconOnHover ? ' show-on-hover' : '',
    frontHexagonIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-shape"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.frontElIcon
    }))),
    backHexagonIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpmozo-adfgu-hexagon-shape"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: attributes.backElIcon
    })));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'wpmozo-adfgu-flip-box-main'
    }),
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpmozo-adfgu-flip-box-wrap${layoutType}`,
    "flip-direction": attributes.flipDirection
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-front"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-inner"
  }, 'none' !== attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'icon' === attributes.frontElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"
  }, 'icon' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "hexagon" !== attributes.frontIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.frontElIcon
  }), "hexagon" === attributes.frontIconShape && frontHexagonIcon), 'image' === attributes.frontElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.frontElImage
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-content-wrap"
  }, !wpmozoCoreFun.wpmozo_is_empty(attributes.frontTitle) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-heading-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "wpmozo-adfgu-flip-box-title",
    tagName: attributes.frontHeadingLavel,
    value: attributes.frontTitle
  })), !wpmozoCoreFun.wpmozo_is_empty(attributes.frontContnet) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: attributes.frontContnet
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-back"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-inner"
  }, 'none' !== attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'icon' === attributes.backElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"
  }, 'icon' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "hexagon" !== attributes.backIconShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.backElIcon
  }), "hexagon" === attributes.backIconShape && backHexagonIcon), 'image' === attributes.backElType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.backElImage
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-content-wrap"
  }, !wpmozoCoreFun.wpmozo_is_empty(attributes.backTitle) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-heading-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "wpmozo-adfgu-flip-box-title",
    tagName: attributes.backHeadingLavel,
    value: attributes.backTitle
  })), !wpmozoCoreFun.wpmozo_is_empty(attributes.backContnet) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: attributes.backContnet
  }))), attributes.backHasButton && !wpmozoCoreFun.wpmozo_is_empty(attributes.backBtnText) && !wpmozoCoreFun.wpmozo_is_empty(attributes.backBtnUrl) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-button-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-flip-box-button-wrap-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `wpmozo-adfgu-flip-box-button${backBtnOnHover}`,
    target: "_blank",
    href: attributes.backBtnUrl
  }, !wpmozoCoreFun.wpmozo_is_empty(backBtnIcon) && 'before' === attributes.backBtnIconPosition && backBtnIcon, attributes.backBtnText, !wpmozoCoreFun.wpmozo_is_empty(backBtnIcon) && 'after' === attributes.backBtnIconPosition && backBtnIcon)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/flip-box/js/style.js":
/*!*****************************************!*\
  !*** ./src/blocks/flip-box/js/style.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const wpmozoCoreFun = window.wpmozo,
    clientId = attributes.clientId,
    parent = '#block-' + clientId,
    toConvertStyles = ['globalTitle', 'globalContent', 'frontTitle', 'frontContent', 'backTitle', 'backContent', 'frontIconShape', 'backIconShape', 'frontFlipbox', 'backFlipbox', 'backBtn', 'backBtnDimensions'];
  let css = '',
    frontVerticalAlign = attributes.frontContentVerAlignment,
    backVerticalAlign = attributes.backContentVerAlignment,
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes),
    backBtnAddi = convertedStyle.backBtn + convertedStyle.backBtnDimensions;
  if ('top' === attributes.frontContentVerAlignment) {
    frontVerticalAlign = 'flex-start';
  } else if ('bottom' === attributes.frontContentVerAlignment) {
    frontVerticalAlign = 'flex-end';
  }
  if ('top' === attributes.backContentVerAlignment) {
    backVerticalAlign = 'flex-start';
  } else if ('bottom' === attributes.backContentVerAlignment) {
    backVerticalAlign = 'flex-end';
  }
  let allInline = [{
    selector: '.wpmozo-adfgu-flip-box-wrap',
    style: {
      'width': attributes.flipboxWidth
    }
  }, {
    selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-title',
    style: {
      'color': attributes.globalTitleColor
    }
  }, {
    selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-description',
    style: {
      'color': attributes.globalContentColor
    }
  }, {
    selector: '.wpmozo-adfgu-flip-box-front',
    style: {
      'background-color': attributes.frontFlipboxBackground,
      'align-items': frontVerticalAlign
    },
    additional: convertedStyle.frontFlipbox
  }, {
    selector: '.wpmozo-adfgu-flip-box-back',
    style: {
      'background-color': attributes.backFlipboxBackground,
      'align-items': backVerticalAlign
    },
    additional: convertedStyle.backFlipbox
  }, {
    selector: `
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap, 
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-title,
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-description`,
    style: {
      'text-align': attributes.frontContentHorAlignment
    }
  }, {
    selector: `
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap, 
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-title,
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-description, 
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-button-wrap`,
    style: {
      'text-align': attributes.backContentHorAlignment
    }
  }, {
    selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-title',
    additional: convertedStyle.globalTitle
  }, {
    selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-description',
    additional: convertedStyle.globalContent
  }, {
    selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-title',
    style: {
      'color': attributes.frontTitleColor
    },
    additional: convertedStyle.frontTitle
  }, {
    selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-description',
    style: {
      'color': attributes.frontContentColor
    },
    additional: convertedStyle.frontContent
  }, {
    selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-title',
    style: {
      'color': attributes.backTitleColor
    },
    additional: convertedStyle.backTitle
  }, {
    selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-description',
    style: {
      'color': attributes.backContentColor
    },
    additional: convertedStyle.backContent
  }];
  if (attributes.depth3dEffect) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-inner',
      style: {
        'transform': 'translateZ(50px) scale(0.95)'
      }
    });
  }
  if ('flip' === attributes.animationType) {
    if (attributes.shakeOnFlip) {
      allInline.push({
        selector: '.wpmozo-adfgu-flip-box-wrap.layout1 .wpmozo-adfgu-flip-box-side',
        style: {
          'transition': `transform ${attributes.flipSpeed}ms cubic-bezier(0.3, 0.9, 0.40, 1.3)`,
          '-moz-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(0.3, 0.9, 0.40, 1.3)`,
          '-webkit-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(0.3, 0.9, 0.40, 1.3)`
        }
      });
    } else {
      allInline.push({
        selector: '.wpmozo-adfgu-flip-box-wrap.layout1 .wpmozo-adfgu-flip-box-side',
        style: {
          'transition': `transform ${attributes.flipSpeed}ms cubic-bezier(.5, .3, .3, 1)`,
          '-moz-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(.5, .3, .3, 1)`,
          '-webkit-transition': `transform ${attributes.flipSpeed}ms cubic-bezier(.5, .3, .3, 1)`
        }
      });
    }
  } else {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-wrap.layout2',
      style: {
        'transition': `transform ${attributes.flipSpeed}ms ease`,
        '-moz-transition': `transform ${attributes.flipSpeed}ms ease`,
        '-webkit-transition': `transform ${attributes.flipSpeed}ms ease`
      }
    });
  }
  if ('top' === attributes.frontElementAlign) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-inner',
      style: {
        'flex-direction': 'column'
      }
    });
  }
  if ('left' === attributes.frontElementAlign) {
    allInline.push({
      selector: `
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap`,
      style: {
        'margin-right': '20px'
      }
    }, {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-content-wrap',
      style: {
        'width': 'calc( 100% - 20px )'
      }
    });
  }
  if ('right' === attributes.frontElementAlign) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-inner',
      style: {
        'flex-direction': 'row-reverse'
      }
    }, {
      selector: `
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap`,
      style: {
        'margin-left': '20px'
      }
    }, {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-content-wrap',
      style: {
        'width': 'calc( 100% - 20px )'
      }
    });
  }
  if ('top' === attributes.backElementAlign) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-inner',
      style: {
        'flex-direction': 'column'
      }
    });
  }
  if ('left' === attributes.backElementAlign) {
    allInline.push({
      selector: `
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap`,
      style: {
        'margin-right': '20px'
      }
    }, {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-content-wrap',
      style: {
        'width': 'calc( 100% - 20px )'
      }
    });
  }
  if ('right' === attributes.backElementAlign) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-inner',
      style: {
        'flex-direction': 'row-reverse'
      }
    }, {
      selector: `
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap,
	    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap`,
      style: {
        'margin-left': '20px'
      }
    }, {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-content-wrap',
      style: {
        'width': 'calc( 100% - 20px )'
      }
    });
  }
  if ('icon' === attributes.frontElType) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap i',
      style: {
        'color': attributes.frontIconColor,
        'font-size': attributes.frontIconSize
      }
    }, attributes.frontIconStyle && 'hexagon' !== attributes.frontIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap i',
      style: {
        'padding': '16px',
        'background-color': attributes.frontIconShapeBackground,
        ...('square' === attributes.frontIconShape && {
          'border-radius': attributes.frontIconShapeborderRadius
        }),
        ...('circle' === attributes.frontIconShape && {
          'border-radius': '50%'
        })
      },
      additional: convertedStyle.frontIconShape
    } : {}, attributes.frontIconStyle && 'hexagon' === attributes.frontIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-hexagon-wrap:before',
      style: {
        'background-color': attributes.frontIconShapeBackground
      }
    } : {}, attributes.frontIconStyle && attributes.frontIconHasShapeBorder && 'hexagon' === attributes.frontIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-hexagon-wrap',
      style: {
        'background-color': attributes.frontIconShapeBorderColor
      }
    } : {});
  }
  if ('icon' === attributes.backElType) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap i',
      style: {
        'color': attributes.backIconColor,
        'font-size': attributes.backIconSize
      }
    }, attributes.backIconStyle && 'hexagon' !== attributes.backIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap i',
      style: {
        'padding': '16px',
        'background-color': attributes.backIconShapeBackground,
        ...('circle' === attributes.backIconShape && {
          'border-radius': '50%'
        })
      },
      additional: convertedStyle.backIconShape
    } : {}, attributes.backIconStyle && 'hexagon' === attributes.backIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-hexagon-wrap:before',
      style: {
        'background-color': attributes.backIconShapeBackground
      }
    } : {}, attributes.backIconStyle && attributes.backIconHasShapeBorder && 'hexagon' === attributes.backIconShape ? {
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-hexagon-wrap',
      style: {
        'background-color': attributes.backIconShapeBorderColor
      }
    } : {});
  }
  if ('image' === attributes.frontElType) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap img',
      style: {
        'width': attributes.frontImageWidth,
        'height': attributes.frontImageWidth,
        'object-fit': 'cover',
        'display': 'block',
        ...('left' === attributes.frontImageAlignment && {
          'margin-right': 'auto'
        }),
        ...('center' === attributes.frontImageAlignment && {
          'margin-left': 'auto',
          'margin-right': 'auto'
        }),
        ...('right' === attributes.frontImageAlignment && {
          'margin-left': 'auto'
        })
      }
    });
  }
  if ('image' === attributes.backElType) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap img',
      style: {
        'width': attributes.backImageWidth,
        'height': attributes.backImageWidth,
        'object-fit': 'cover',
        'display': 'block',
        ...('left' === attributes.backImageAlignment && {
          'margin-right': 'auto'
        }),
        ...('center' === attributes.backImageAlignment && {
          'margin-left': 'auto',
          'margin-right': 'auto'
        }),
        ...('right' === attributes.backImageAlignment && {
          'margin-left': 'auto'
        })
      }
    });
  }
  if (attributes.backHasButton) {
    allInline.push({
      selector: '.wpmozo-adfgu-flip-box-button',
      style: {
        'color': attributes.backBtnColor,
        'background-color': attributes.backBtnBackground
      },
      additional: backBtnAddi
    });
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/floating-image-item/attributes.js":
/*!******************************************************!*\
  !*** ./src/blocks/floating-image-item/attributes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  clientId: {
    type: "string"
  },
  image: {
    type: "object"
  },
  imagewidth: {
    type: "string"
  },
  imageheight: {
    type: "string"
  },
  imageBackground: {
    type: "string"
  },
  altText: {
    type: "string"
  },
  horizontalAlign: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
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
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/floating-image-item/edit.js":
/*!************************************************!*\
  !*** ./src/blocks/floating-image-item/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/floating-image-item/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/floating-image-item/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Edit = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    altText = !window.wpmozo.wpmozo_is_empty(attributes.altText) ? attributes.altText : 'alt';
  attributes.clientId = clientId;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "floating-image-item",
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "floating-image",
    src: attributes.image.url,
    alt: altText
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/floating-image-item/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/floating-image-item/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/floating-image-item/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/floating-image-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/floating-image-item/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/floating-image-item', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Floating Image Item', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 2,
  category: 'wpmozo',
  parent: ['wpmozo/floating-image'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/floating-image-item/inspector.js":
/*!*****************************************************!*\
  !*** ./src/blocks/floating-image-item/inspector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const [contentType, setContentType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('front');
  const floatingImageEffects = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Up Down', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'up_down'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left Right', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'left_right'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No Effect', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'no_effect'
  }];
  const speedCurveOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ease-In-Out', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ease-in-out'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ease', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ease'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ease-In', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ease-in'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ease-Out', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'ease-out'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Linear', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'linear'
  }];
  const animationRepeat = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Infinite', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'infinite'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Initial', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'initial'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "image",
    props: props,
    imageSrc: attributes.image.url,
    onSelect: media => setAttributes({
      image: media
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alt Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.altText,
    onChange: newValue => setAttributes({
      altText: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "image",
    props: props,
    ColorTypes: [{
      key: 'Background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Position', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal Align', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.horizontalAlign,
    onChange: newValue => setAttributes({
      horizontalAlign: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Align', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.verticalAlign,
    onChange: newValue => setAttributes({
      verticalAlign: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Animation', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Floating Effect', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationEffect,
    options: floatingImageEffects,
    onChange: newValue => setAttributes({
      animationEffect: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Delay', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationDelay,
    onChange: newValue => setAttributes({
      animationDelay: newValue
    }),
    min: 0,
    step: 1,
    max: 5000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Duration', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationDuration,
    onChange: newValue => setAttributes({
      animationDuration: newValue
    }),
    min: 0,
    step: 1,
    max: 9000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Speed Curve', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.speedCurve,
    options: speedCurveOptions,
    onChange: newValue => setAttributes({
      speedCurve: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Animation Repeat', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.animationRepeat,
    options: animationRepeat,
    onChange: newValue => setAttributes({
      animationRepeat: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Sizing', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoSize, {
    SizeKey: "image",
    props: props,
    SizeTypes: {
      width: true
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/floating-image-item/save.js":
/*!************************************************!*\
  !*** ./src/blocks/floating-image-item/save.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/floating-image-item/style.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const Save = ({
  attributes
}) => {
  const clientId = attributes.clientId,
    altText = !window.wpmozo.wpmozo_is_empty(attributes.altText) ? attributes.altText : 'alt';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "floating-image-item",
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "floating-image",
    src: attributes.image.url,
    alt: altText
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/floating-image-item/style.js":
/*!*************************************************!*\
  !*** ./src/blocks/floating-image-item/style.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const clientId = attributes.clientId,
    parent = '#block-' + clientId,
    wpmozoCoreFun = window.wpmozo,
    wpmozo_is_empty = wpmozoCoreFun.wpmozo_is_empty;
  let allInline = [],
    css = '';
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style([{
    selector: parent,
    style: {
      'top': attributes.horizontalAlign,
      'left': attributes.verticalAlign,
      'width': attributes.imagewidth,
      'background': attributes.imageBackground,
      'animation-name': `wpmozo_float_${attributes.animationEffect}`,
      'animation-duration': attributes.animationDuration + 'ms',
      'animation-direction': 'alternate',
      'animation-iteration-count': attributes.animationRepeat,
      'animation-timing-function': attributes.speedCurve,
      'animation-delay': attributes.animationDelay + 'ms'
    }
  }]);
  css += generateStyle;
  generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/floating-image/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/floating-image/attributes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  clientId: {
    type: "string"
  },
  images: {
    type: "array"
  },
  containerHeight: {
    type: "string",
    default: "450px"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/floating-image/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/floating-image/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/floating-image/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/floating-image/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);







const Edit = props => {
  const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  attributes.clientId = clientId;
  let innerBlocks = [];
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.images)) {
    attributes.images.map(image => {
      innerBlocks.push(['wpmozo/floating-image-item', {
        image: image,
        lock: {
          remove: true
        }
      }]);
    });
  }
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ['wpmozo/floating-image-item'],
    template: innerBlocks
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, wpmozoCoreFun.wpmozo_is_empty(attributes.images) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaPlaceholder, {
    multiple: true,
    onSelect: media => setAttributes({
      images: media
    }),
    onFilesPreUpload: media => setAttributes({
      images: media
    }),
    onSelectURL: false,
    allowedTypes: ['image'],
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Images', 'wpmozo-addons-lite-for-gutenberg'),
      instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Insert Images', 'wpmozo-addons-lite-for-gutenberg')
    }
  }), !wpmozoCoreFun.wpmozo_is_empty(innerBlocks) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-floating-image-wrapper"
  }, innerBlocksProps.children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/floating-image/index.js":
/*!********************************************!*\
  !*** ./src/blocks/floating-image/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/floating-image/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/floating-image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/floating-image/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/floating-image', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Floating Image', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 2,
  category: 'wpmozo',
  keywords: ['wpmozo', 'floating-image', 'floating', 'image'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/floating-image/inspector.js":
/*!************************************************!*\
  !*** ./src/blocks/floating-image/inspector.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.HeightControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container Height', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.containerHeight,
    onChange: newValue => setAttributes({
      containerHeight: newValue
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/floating-image/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/floating-image/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/floating-image/style.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);





const Save = ({
  attributes
}) => {
  const wpmozoCoreFun = window.wpmozo,
    clientId = attributes.clientId,
    blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  let innerBlocks = [],
    innerBlocksProps = null;
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.images)) {
    attributes.images.map(image => {
      innerBlocks.push(['wpmozo/floating-image-item', {
        image: image,
        lock: {
          remove: true
        }
      }]);
    });
    innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(blockProps, {
      allowedBlocks: ['wpmozo/floating-image-item'],
      template: innerBlocks
    });
  }
  if (wpmozoCoreFun.wpmozo_is_empty(innerBlocks)) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps,
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-floating-image-wrapper"
  }, innerBlocksProps.children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/floating-image/style.js":
/*!********************************************!*\
  !*** ./src/blocks/floating-image/style.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const clientId = attributes.clientId,
    parent = '#block-' + clientId,
    toConvertStyles = [],
    wpmozoCoreFun = window.wpmozo;
  let css = '';
  let allInline = [{
    selector: '.wpmozo-adfgu-floating-image-wrapper',
    style: {
      'height': attributes.containerHeight
    }
  }, {
    selector: '.floating-image-item img',
    style: {
      'max-height': attributes.containerHeight
    }
  }];
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/interactive-image-card/js/attributes.js":
/*!************************************************************!*\
  !*** ./src/blocks/interactive-image-card/js/attributes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  clientId: {
    type: "string"
  },
  title: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Card Title', 'wpmozo-addons-lite-for-gutenberg')
  },
  content: {
    type: "string",
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-addons-lite-for-gutenberg')
  },
  backImage: {
    type: "string"
  },
  layout: {
    type: "string",
    default: "lily"
  },
  imageOpacity: {
    type: "number",
    default: 0.7
  },
  layoutborder: {
    type: "object",
    default: {
      color: "#000000",
      width: "1px",
      style: "solid"
    }
  },
  overlayColor: {
    type: "String"
  },
  titleLavel: {
    type: "String",
    default: "h2"
  },
  titleNormalColor: {
    type: "String",
    default: "#222222"
  },
  titleHoverColor: {
    type: "String",
    default: "#000000"
  },
  titleNormalFontSize: {
    type: "string"
  },
  titleNormalFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  titleNormalLetterSpacing: {
    type: "string"
  },
  titleNormalDecoration: {
    type: "string"
  },
  titleNormalLetterCase: {
    type: "string"
  },
  titleNormalLineHeight: {
    type: "string"
  },
  titleHoverFontSize: {
    type: "string"
  },
  titleHoverFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  titleHoverLetterSpacing: {
    type: "string"
  },
  titleHoverDecoration: {
    type: "string"
  },
  titleHoverLetterCase: {
    type: "string"
  },
  titleHoverLineHeight: {
    type: "string"
  },
  titleAlign: {
    type: "string",
    default: "center"
  },
  contentColor: {
    type: "String",
    default: "#222222"
  },
  contentFontSize: {
    type: "string"
  },
  contentFontAppearance: {
    type: "object",
    fontStyle: {
      type: "string"
    },
    fontWeight: {
      type: "string"
    },
    default: {
      fontStyle: "",
      fontWeight: ""
    }
  },
  contentLetterSpacing: {
    type: "string"
  },
  contentDecoration: {
    type: "string"
  },
  contentLetterCase: {
    type: "string"
  },
  contentLineHeight: {
    type: "string"
  },
  contentAlign: {
    type: "string",
    default: "center"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/interactive-image-card/js/edit.js":
/*!******************************************************!*\
  !*** ./src/blocks/interactive-image-card/js/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/interactive-image-card/js/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/interactive-image-card/js/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId,
    setAttributes = props.setAttributes,
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-interactive-image-card-main'
    });
  let backImage = attributes.backImage ? attributes.backImage : WPMozoEditorObj.placeholderImg;
  attributes.clientId = clientId;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-interactive-image-card-wrap wpmozo-editor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: `effect-${attributes.layout}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-interactive-image-card-image",
    src: backImage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-interactive-image-card-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-interactive-image-card-title",
    tagName: attributes.titleLavel,
    value: attributes.title,
    onChange: newValue => setAttributes({
      title: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image Card Title', 'wpmozo-addons-lite-for-gutenberg')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "wpmozo-adfgu-interactive-image-card-content",
    tagName: "div",
    value: attributes.content,
    onChange: newValue => setAttributes({
      content: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-addons-lite-for-gutenberg')
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interactive-image-card/js/index.js":
/*!*******************************************************!*\
  !*** ./src/blocks/interactive-image-card/js/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/interactive-image-card/js/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/interactive-image-card/js/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/interactive-image-card/js/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/interactive-image-card', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Interactive Image Card', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'interactive-image-card', 'image', 'card'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/interactive-image-card/js/inspector.js":
/*!***********************************************************!*\
  !*** ./src/blocks/interactive-image-card/js/inspector.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    allLayouts = [{
      value: 'lily',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lily', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'sadie',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sadie', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'roxy',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Roxy', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'bubba',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bubba', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'romeo',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Romeo', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'layla',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layla', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'oscar',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Oscar', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'marley',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marley', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'ruby',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ruby', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      value: 'milo',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Milo', 'wpmozo-addons-lite-for-gutenberg')
    }],
    headingLavels = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h1'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h2'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h3'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h4'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h5'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'wpmozo-addons-lite-for-gutenberg'),
      value: 'h6'
    }];
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const [titleStyleType, setTitleStyleType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('normal');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.title,
    onChange: newValue => setAttributes({
      title: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      content: newValue
    }),
    value: attributes.content
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoMediaUploader, {
    attrKye: "backImage",
    props: props
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Layout', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.layout,
    options: allLayouts,
    onChange: newValue => setAttributes({
      layout: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout Settings', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, 'romeo' !== attributes.layout && 'marley' !== attributes.layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "overlay",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), 'lily' !== attributes.layout && 'sadie' !== attributes.layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoBorder, {
    BorderKey: "layout",
    props: props,
    BorderTypes: {
      border: true
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Opacity', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.imageOpacity,
    onChange: newValue => setAttributes({
      imageOpacity: newValue
    }),
    min: 0,
    step: 0.1,
    max: 1
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Heading Lavel', 'wpmozo-addons-lite-for-gutenberg')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, headingLavels.map((item, key) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    key: 'title-lavel-' + item.value,
    isPressed: item.value === attributes.titleLavel ? true : false,
    onClick: newValue => setAttributes({
      titleLavel: item.value
    })
  }, item.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'normal' === titleStyleType ? true : false,
    onClick: () => setTitleStyleType('normal')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'hover' === titleStyleType ? true : false,
    onClick: () => setTitleStyleType('hover')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wpmozo-addons-lite-for-gutenberg'))), 'normal' === titleStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleNormal",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "titleNormal",
    props: props
  })), 'hover' === titleStyleType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "titleHover",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "titleHover",
    props: props
  }))), 'milo' !== attributes.layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      titleAlign: newValue
    }),
    value: attributes.titleAlign
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "content",
    props: props,
    ColorTypes: [{
      key: 'Color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "content",
    props: props
  }), 'milo' !== attributes.layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoAlignment, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Alignment', 'wpmozo-addons-lite-for-gutenberg'),
    onChange: newValue => setAttributes({
      contentAlign: newValue
    }),
    value: attributes.contentAlign
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/interactive-image-card/js/save.js":
/*!******************************************************!*\
  !*** ./src/blocks/interactive-image-card/js/save.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/interactive-image-card/js/style.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Save = ({
  attributes
}) => {
  const clientId = attributes.clientId;
  let backImage = attributes.backImage ? attributes.backImage : WPMozoEditorObj.placeholderImg;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'wpmozo-adfgu-interactive-image-card-main'
    }),
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-interactive-image-card-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: `effect-${attributes.layout}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wpmozo-adfgu-interactive-image-card-image",
    src: backImage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpmozo-adfgu-interactive-image-card-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "wpmozo-adfgu-interactive-image-card-title",
    tagName: attributes.titleLavel,
    value: attributes.title
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "wpmozo-adfgu-interactive-image-card-content",
    tagName: "div",
    value: attributes.content
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/interactive-image-card/js/style.js":
/*!*******************************************************!*\
  !*** ./src/blocks/interactive-image-card/js/style.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const wpmozoCoreFun = window.wpmozo,
    clientId = attributes.clientId,
    parent = '#block-' + clientId,
    toConvertStyles = ['titleNormal', 'titleHover', 'content', 'layout'];
  let css = '',
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr(toConvertStyles, attributes);
  let allInline = [{
    selector: '.wpmozo-adfgu-interactive-image-card-image',
    style: {
      'opacity': attributes.imageOpacity
    }
  }, {
    selector: '.wpmozo-adfgu-interactive-image-card-title',
    style: {
      'color': attributes.titleNormalColor
    },
    additional: convertedStyle.titleNormal
  }, {
    selector: '.wpmozo-adfgu-interactive-image-card-wrap figure:hover .wpmozo-adfgu-interactive-image-card-title',
    style: {
      'color': attributes.titleHoverColor
    },
    additional: convertedStyle.titleHover
  }, {
    selector: '.wpmozo-adfgu-interactive-image-card-content',
    style: {
      'color': attributes.contentColor
    },
    additional: convertedStyle.content
  }];
  if ('milo' !== attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-title',
      style: {
        'text-align': attributes.titleAlign
      }
    }, {
      selector: '.wpmozo-adfgu-interactive-image-card-content',
      style: {
        'text-align': attributes.contentAlign
      }
    });
  }
  if ('romeo' !== attributes.layout && 'marley' !== attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure',
      style: {
        'background': attributes.overlayColor
      }
    });
  }
  if ('roxy' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-roxy figcaption::before',
      additional: convertedStyle.layout
    });
  }
  if ('bubba' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-bubba figcaption::before',
      style: {
        'border-top': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color,
        'border-bottom': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    }, {
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-bubba figcaption::after',
      style: {
        'border-right': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color,
        'border-left': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    });
  }
  if ('romeo' === attributes.layout) {
    allInline.push({
      selector: `
	    		.wpmozo-adfgu-interactive-image-card-wrap figure.effect-romeo figcaption::after, 
	    		.wpmozo-adfgu-interactive-image-card-wrap figure.effect-romeo figcaption::before
	    		`,
      style: {
        'height': attributes.layoutborder.width,
        'background': attributes.layoutborder.color
      }
    });
  }
  if ('layla' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-layla figcaption::before',
      style: {
        'border-top': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color,
        'border-bottom': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    }, {
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-layla figcaption::after',
      style: {
        'border-right': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color,
        'border-left': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    });
  }
  if ('oscar' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-oscar figcaption::before',
      additional: convertedStyle.layout
    });
  }
  if ('marley' === attributes.layout) {
    allInline.push({
      selector: `
	    		.wpmozo-adfgu-interactive-image-card-wrap figure.effect-marley .wpmozo-adfgu-interactive-image-card-title::after
	    		`,
      style: {
        'height': attributes.layoutborder.width,
        'background': attributes.layoutborder.color
      }
    });
  }
  if ('ruby' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-ruby .wpmozo-adfgu-interactive-image-card-content',
      additional: convertedStyle.layout
    });
  }
  if ('milo' === attributes.layout) {
    allInline.push({
      selector: '.wpmozo-adfgu-interactive-image-card-wrap figure.effect-milo .wpmozo-adfgu-interactive-image-card-content',
      style: {
        'border-right': attributes.layoutborder.width + ' ' + attributes.layoutborder.style + ' ' + attributes.layoutborder.color
      }
    });
  }
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !wpmozoCoreFun.wpmozo_is_empty(css) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/logo-slide/attributes.js":
/*!*********************************************!*\
  !*** ./src/blocks/logo-slide/attributes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  clientId: {
    type: "string"
  },
  logo: {
    type: "object"
  },
  altText: {
    type: "string"
  },
  link: {
    type: "string"
  },
  linkTarget: {
    type: "string",
    default: "same"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/logo-slide/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/logo-slide/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/logo-slide/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/logo-slide/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Edit = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    altText = !window.wpmozo.wpmozo_is_empty(attributes.altText) ? attributes.altText : 'alt',
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
      className: "swiper-slide"
    });
  attributes.clientId = clientId;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-slide",
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "logo-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "logo-img",
    src: attributes.logo.url,
    alt: altText
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/logo-slide/index.js":
/*!****************************************!*\
  !*** ./src/blocks/logo-slide/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/logo-slide/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/logo-slide/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/logo-slide/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/logo-slide', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Logo Slide', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 2,
  category: 'wpmozo',
  parent: ['wpmozo/logo-slider'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/logo-slide/inspector.js":
/*!********************************************!*\
  !*** ./src/blocks/logo-slide/inspector.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes;
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  const [contentType, setContentType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('front');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alt Text', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.altText,
    onChange: newValue => setAttributes({
      altText: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.link,
    onChange: newValue => setAttributes({
      link: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Target', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-button-tabs-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'same' === attributes.linkTarget ? true : false,
    onClick: () => setAttributes({
      linkTarget: 'same'
    }),
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "admin-links"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Same Window', 'wpmozo-addons-lite-for-gutenberg')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-button-tabs-btn",
    isPressed: 'external' === attributes.linkTarget ? true : false,
    onClick: () => setAttributes({
      linkTarget: 'external'
    }),
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "external"
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('External', 'wpmozo-addons-lite-for-gutenberg')
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/logo-slide/save.js":
/*!***************************************!*\
  !*** ./src/blocks/logo-slide/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/logo-slide/style.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const Save = ({
  attributes
}) => {
  const clientId = attributes.clientId,
    altText = !window.wpmozo.wpmozo_is_empty(attributes.altText) ? attributes.altText : 'alt';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-slide",
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "logo-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "logo-img",
    src: attributes.logo.url,
    alt: altText
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/logo-slide/style.js":
/*!****************************************!*\
  !*** ./src/blocks/logo-slide/style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const clientId = attributes.clientId,
    parent = '#block-' + clientId,
    wpmozoCoreFun = window.wpmozo;
  let allInline = [],
    css = '';
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/logo-slider/attributes.js":
/*!**********************************************!*\
  !*** ./src/blocks/logo-slider/attributes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const attributes = {
  clientId: {
    type: "string"
  },
  images: {
    type: "array"
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
  },
  controlDotStyle: {
    type: "string"
  },
  enableDynamicDots: {
    type: "boolean"
  },
  containerbackground: {
    type: "string"
  },
  containerpadding: {
    type: "object"
  },
  sliderArrowColor: {
    type: "string"
  },
  sliderArrowBackground: {
    type: "string"
  },
  sliderActiveDoteColor: {
    type: "string"
  },
  sliderInactiveDoteColor: {
    type: "string"
  },
  arrowFontSize: {
    type: "string"
  },
  arrowpadding: {
    type: "object"
  },
  logoWidth: {
    type: "number",
    default: 150
  },
  logoHeight: {
    type: "number",
    default: 150
  },
  tabletLogoPerSlide: {
    type: "string",
    default: '3'
  },
  tabletSlidesPerGroup: {
    type: "string",
    default: '1'
  },
  tabletSpaceBetweenSlides: {
    type: "number",
    default: 20
  },
  mobileLogoPerSlide: {
    type: "string",
    default: '1'
  },
  mobileSlidesPerGroup: {
    type: "string",
    default: '1'
  },
  mobileSpaceBetweenSlides: {
    type: "number"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/logo-slider/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/logo-slider/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/logo-slider/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/logo-slider/style.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);







const Edit = props => {
  const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
      className: 'wpmozo-adfgu-logo-slider-main'
    }),
    swiperElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  attributes.clientId = clientId;
  let innerBlocks = [],
    swiperInstance = null;
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.images)) {
    attributes.images.map(logo => {
      innerBlocks.push(['wpmozo/logo-slide', {
        logo: logo,
        lock: {
          remove: true
        }
      }]);
    });
  }
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ['wpmozo/logo-slide'],
    template: innerBlocks
  });
  const initSwiper = attributes => {
    let productsPerSlide = parseInt(attributes.logoPerSlide),
      spaceBetweenSlides = parseInt(attributes.spaceBetweenSlides),
      slidesPerGroup = parseInt(attributes.slidesPerGroup),
      autoHeightSlider = false;
    let loop = false,
      arrows = false,
      dots = false,
      autoplaySlides = false,
      cube = false,
      coverflow = false,
      fade = false,
      slidesPerGroupSkip = 0,
      slidesPerGroupIpad = 1,
      slidesPerGroupMobile = 1,
      slidesPerGroupSkipIpad = 0,
      slidesPerGroupSkipMobile = 0;
    if (productsPerSlide > slidesPerGroup && 1 !== slidesPerGroup) {
      slidesPerGroupSkip = productsPerSlide - slidesPerGroup;
    }

    //if ('on' === showArrow) {
    arrows = {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    };
    //}

    //if ('on' === showControlDot) {
    const dynamicBullets = false;
    dots = {
      el: '.swiper-pagination',
      dynamicBullets: dynamicBullets,
      clickable: true
    };
    //}

    let options = {
      slidesPerView: productsPerSlide,
      spaceBetween: spaceBetweenSlides,
      slidesPerGroup: slidesPerGroup,
      cubeEffect: cube,
      coverflowEffect: coverflow,
      fadeEffect: fade,
      loop: loop,
      autoHeight: autoHeightSlider,
      pagination: dots,
      navigation: arrows,
      grabCursor: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        981: {
          slidesPerView: productsPerSlide,
          spaceBetween: spaceBetweenSlides,
          slidesPerGroup: slidesPerGroup
        },
        768: {
          slidesPerView: productsPerSlide,
          spaceBetween: spaceBetweenSlides,
          slidesPerGroup: slidesPerGroup,
          slidesPerGroupSkip: slidesPerGroupSkip
        },
        0: {
          slidesPerView: productsPerSlide,
          spaceBetween: spaceBetweenSlides,
          slidesPerGroup: slidesPerGroup
        }
      }
    };
    const swiper = new Swiper('.swiper[data-client-id="' + clientId + '"]', options);
    return swiper;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!wpmozoCoreFun.wpmozo_is_empty(innerBlocks) && !jQuery('.swiper[data-client-id="' + clientId + '"]').hasClass('swiper-initialized')) {
      swiperInstance = initSwiper(attributes);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let el = jQuery('.swiper[data-client-id="' + clientId + '"]')[0],
      swiperInstance = el.hasOwnProperty('swiper') ? el.swiper : null;
    if (!wpmozoCoreFun.wpmozo_is_empty(innerBlocks) && !wpmozoCoreFun.wpmozo_is_empty(swiperInstance)) {
      swiperInstance.destroy(true, true);
      initSwiper(attributes);
    }
  }, [attributes.logoPerSlide]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, wpmozoCoreFun.wpmozo_is_empty(attributes.images) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaPlaceholder, {
    multiple: true,
    onSelect: media => setAttributes({
      images: media
    }),
    onFilesPreUpload: media => setAttributes({
      images: media
    }),
    onSelectURL: false,
    allowedTypes: ['image'],
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Logos', 'wpmozo-addons-lite-for-gutenberg')
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper",
    ref: swiperElRef,
    "data-client-id": clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-wrapper"
  }, !wpmozoCoreFun.wpmozo_is_empty(innerBlocks) && innerBlocksProps.children), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-pagination"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-button-prev"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-button-next"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/logo-slider/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/logo-slider/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/logo-slider/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/logo-slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/logo-slider/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/logo-slider', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Logo Slider', 'wpmozo-addons-lite-for-gutenberg'),
  icon: '',
  apiVersion: 2,
  category: 'wpmozo',
  keywords: ['wpmozo', 'logo-slider', 'slider', 'logo'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/logo-slider/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/logo-slider/inspector.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/index */ "./src/components/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const Inspector = props => {
  const attributes = props.attributes,
    setAttributes = props.setAttributes,
    [deviceType, setDeviceType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('tablet');
  const oneToTwenty = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1', 'wpmozo-addons-lite-for-gutenberg'),
    value: '1'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2', 'wpmozo-addons-lite-for-gutenberg'),
    value: '2'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('3', 'wpmozo-addons-lite-for-gutenberg'),
    value: '3'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('4', 'wpmozo-addons-lite-for-gutenberg'),
    value: '4'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('5', 'wpmozo-addons-lite-for-gutenberg'),
    value: '5'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('6', 'wpmozo-addons-lite-for-gutenberg'),
    value: '6'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('7', 'wpmozo-addons-lite-for-gutenberg'),
    value: '7'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('8', 'wpmozo-addons-lite-for-gutenberg'),
    value: '8'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('9', 'wpmozo-addons-lite-for-gutenberg'),
    value: '9'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('10', 'wpmozo-addons-lite-for-gutenberg'),
    value: '10'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('11', 'wpmozo-addons-lite-for-gutenberg'),
    value: '11'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('12', 'wpmozo-addons-lite-for-gutenberg'),
    value: '12'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('13', 'wpmozo-addons-lite-for-gutenberg'),
    value: '13'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('14', 'wpmozo-addons-lite-for-gutenberg'),
    value: '14'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('15', 'wpmozo-addons-lite-for-gutenberg'),
    value: '15'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('16', 'wpmozo-addons-lite-for-gutenberg'),
    value: '16'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('17', 'wpmozo-addons-lite-for-gutenberg'),
    value: '17'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('18', 'wpmozo-addons-lite-for-gutenberg'),
    value: '18'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('19', 'wpmozo-addons-lite-for-gutenberg'),
    value: '19'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('20', 'wpmozo-addons-lite-for-gutenberg'),
    value: '20'
  }];
  const arrowsPositions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inside', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'inside'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Outside', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'outside'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Left', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'top_left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Right', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'top_right'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Center', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'top_center'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Left', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'bottom_left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Right', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'bottom_right'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Center', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'bottom_center'
  }];
  const controlDotStyles = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Solid Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'solid_dot'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Transparent Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'transparent_dot'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stretched Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'stretched_dot'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'line'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rounded Line', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'rounded_line'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Squared Dot', 'wpmozo-addons-lite-for-gutenberg'),
    value: 'square_dot'
  }];
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Logo Per View', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.logoPerSlide,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      logoPerSlide: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.slidesPerGroup,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      slidesPerGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space between Slides', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.spaceBetweenSlides,
    onChange: newValue => setAttributes({
      spaceBetweenSlides: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Loop', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.sliderLoop,
    onChange: newValue => setAttributes({
      sliderLoop: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Autoplay', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.autoplay,
    onChange: newValue => setAttributes({
      autoplay: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Linear Transition', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableLinearTransition,
    onChange: newValue => setAttributes({
      enableLinearTransition: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Autoplay Delay', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.autoplaySpeed,
    onChange: newValue => setAttributes({
      autoplaySpeed: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pause On Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.pauseOnHover,
    onChange: newValue => setAttributes({
      pauseOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Transition Duration', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.transitionDuration,
    onChange: newValue => setAttributes({
      transitionDuration: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Arrows', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showArrow,
    onChange: newValue => setAttributes({
      showArrow: newValue
    })
  }), attributes.showArrow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Previous Arrow', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "previousSlideArrow",
    props: props,
    value: attributes.previousSlideArrow,
    onChange: newValue => setAttributes({
      previousSlideArrow: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Next Arrow', 'wpmozo-addons-lite-for-gutenberg'),
    iconPickerKey: "nextSlideArrow",
    props: props,
    value: attributes.nextSlideArrow,
    onChange: newValue => setAttributes({
      nextSlideArrow: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Arrows Only On Hover', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showArrowOnHover,
    onChange: newValue => setAttributes({
      showArrowOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrows Position', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.arrowsPosition,
    options: arrowsPositions,
    onChange: newValue => setAttributes({
      arrowsPosition: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Dots Pagination', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.showControlDot,
    onChange: newValue => setAttributes({
      showControlDot: newValue
    })
  }), attributes.showControlDot && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dots Pagination Style', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.controlDotStyle,
    options: controlDotStyles,
    onChange: newValue => setAttributes({
      controlDotStyle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Dynamic Dots', 'wpmozo-addons-lite-for-gutenberg'),
    checked: attributes.enableDynamicDots,
    onChange: newValue => setAttributes({
      enableDynamicDots: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Responsive', 'wpmozo-addons-lite-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    className: "wpmozo-color-combo-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'tablet' === deviceType ? true : false,
    onClick: () => setDeviceType('tablet')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tablet', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'mobile' === deviceType ? true : false,
    onClick: () => setDeviceType('mobile')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile', 'wpmozo-addons-lite-for-gutenberg'))), 'tablet' === deviceType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Logo Per View', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tabletLogoPerSlide,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      tabletLogoPerSlide: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tabletSlidesPerGroup,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      tabletSlidesPerGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space between Slides', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.tabletSpaceBetweenSlides,
    onChange: newValue => setAttributes({
      tabletSpaceBetweenSlides: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  })), 'mobile' === deviceType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Logo Per View', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mobileLogoPerSlide,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      mobileLogoPerSlide: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mobileSlidesPerGroup,
    options: oneToTwenty,
    onChange: newValue => setAttributes({
      mobileSlidesPerGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space between Slides', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.mobileSpaceBetweenSlides,
    onChange: newValue => setAttributes({
      mobileSpaceBetweenSlides: newValue
    }),
    min: 0,
    step: 1,
    max: 100
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "container",
    props: props,
    ColorTypes: [{
      key: 'background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "container",
    DimensionsTypes: {
      padding: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "slider",
    props: props,
    ColorTypes: [{
      key: 'ArrowColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ArrowBackground',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Background', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'ActiveDoteColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Active Dot Pagination Color', 'wpmozo-addons-lite-for-gutenberg')
    }, {
      key: 'InactiveDoteColor',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inactive Dot Pagination Color', 'wpmozo-addons-lite-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "arrow",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    props: props,
    TypoTypes: {
      'FontSize': true
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoDimensions, {
    DimensionKey: "arrow",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrows Padding', 'wpmozo-addons-lite-for-gutenberg'),
    DimensionsTypes: {
      padding: true
    },
    props: props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo', 'wpmozo-addons-lite-for-gutenberg'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo Width', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.logoWidth,
    onChange: newValue => setAttributes({
      logoWidth: newValue
    }),
    min: 100,
    step: 1,
    max: 500
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo Height', 'wpmozo-addons-lite-for-gutenberg'),
    value: attributes.logoHeight,
    onChange: newValue => setAttributes({
      logoHeight: newValue
    }),
    min: 100,
    step: 1,
    max: 500
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/logo-slider/save.js":
/*!****************************************!*\
  !*** ./src/blocks/logo-slider/save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/logo-slider/style.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);





const Save = ({
  attributes
}) => {
  const wpmozoCoreFun = window.wpmozo,
    clientId = attributes.clientId,
    blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  let innerBlocks = [],
    innerBlocksProps = null;
  if (!wpmozoCoreFun.wpmozo_is_empty(attributes.images)) {
    attributes.images.map(logo => {
      innerBlocks.push(['wpmozo/logo-slide', {
        logo: logo,
        lock: {
          remove: true
        }
      }]);
    });
    innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(blockProps, {
      allowedBlocks: ['wpmozo/logo-slide'],
      template: innerBlocks
    });
  }
  if (wpmozoCoreFun.wpmozo_is_empty(innerBlocks)) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps,
    id: `block-${clientId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper",
    "data-client-id": clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-wrapper"
  }, innerBlocksProps.children), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-pagination"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-button-prev"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-button-next"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/logo-slider/style.js":
/*!*****************************************!*\
  !*** ./src/blocks/logo-slider/style.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = attributes => {
  const clientId = attributes.clientId,
    parent = '#block-' + clientId,
    toConvertStyles = [],
    wpmozoCoreFun = window.wpmozo;
  let css = '';
  let allInline = [{
    selector: '.logo-img',
    style: {
      'width': attributes.logoWidth + 'px',
      'height': attributes.logoHeight + 'px'
    }
  }];
  let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
  if (!wpmozoCoreFun.wpmozo_is_empty(generateStyle)) {
    css += `
            ${parent} {
                ${generateStyle}
            }
        `;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WpmozoAlignment: () => (/* reexport safe */ _wpmozo_alignment_wpmozo_alignment__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   WpmozoBorder: () => (/* reexport safe */ _wpmozo_border_wpmozo_border__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   WpmozoColorCombo: () => (/* reexport safe */ _wpmozo_colorcombo_wpmozo_colorcombo__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   WpmozoColorPicker: () => (/* reexport safe */ _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   WpmozoDimensions: () => (/* reexport safe */ _wpmozo_dimensions_wpmozo_dimensions__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   WpmozoIconpicker: () => (/* reexport safe */ _wpmozo_iconpicker_wpmozo_iconpicker__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   WpmozoMediaUploader: () => (/* reexport safe */ _wpmozo_media_uploader_wpmozo_media_uploader__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   WpmozoRangeSize: () => (/* reexport safe */ _wpmozo_range_size_wpmozo_range_size__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   WpmozoSize: () => (/* reexport safe */ _wpmozo_size_wpmozo_size__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   WpmozoTypography: () => (/* reexport safe */ _wpmozo_typography_wpmozo_typography__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _wpmozo_typography_wpmozo_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wpmozo-typography/wpmozo-typography */ "./src/components/wpmozo-typography/wpmozo-typography.js");
/* harmony import */ var _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wpmozo-colorpicker/wpmozo-colorpicker */ "./src/components/wpmozo-colorpicker/wpmozo-colorpicker.js");
/* harmony import */ var _wpmozo_dimensions_wpmozo_dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wpmozo-dimensions/wpmozo-dimensions */ "./src/components/wpmozo-dimensions/wpmozo-dimensions.js");
/* harmony import */ var _wpmozo_size_wpmozo_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wpmozo-size/wpmozo-size */ "./src/components/wpmozo-size/wpmozo-size.js");
/* harmony import */ var _wpmozo_border_wpmozo_border__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wpmozo-border/wpmozo-border */ "./src/components/wpmozo-border/wpmozo-border.js");
/* harmony import */ var _wpmozo_media_uploader_wpmozo_media_uploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wpmozo-media-uploader/wpmozo-media-uploader */ "./src/components/wpmozo-media-uploader/wpmozo-media-uploader.js");
/* harmony import */ var _wpmozo_iconpicker_wpmozo_iconpicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wpmozo-iconpicker/wpmozo-iconpicker */ "./src/components/wpmozo-iconpicker/wpmozo-iconpicker.js");
/* harmony import */ var _wpmozo_alignment_wpmozo_alignment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wpmozo-alignment/wpmozo-alignment */ "./src/components/wpmozo-alignment/wpmozo-alignment.js");
/* harmony import */ var _wpmozo_colorcombo_wpmozo_colorcombo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wpmozo-colorcombo/wpmozo-colorcombo */ "./src/components/wpmozo-colorcombo/wpmozo-colorcombo.js");
/* harmony import */ var _wpmozo_range_size_wpmozo_range_size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wpmozo-range-size/wpmozo-range-size */ "./src/components/wpmozo-range-size/wpmozo-range-size.js");












/***/ }),

/***/ "./src/components/wpmozo-alignment/wpmozo-alignment.js":
/*!*************************************************************!*\
  !*** ./src/components/wpmozo-alignment/wpmozo-alignment.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  Icon,
  __experimentalToggleGroupControlOptionIcon,
  __experimentalToggleGroupControl,
  SVG,
  Path
} = window.wp.components;
const WpmozoAlignment = function (args) {
  const {
    alignmentKey
  } = args;
  let elAlignment = '';
  if (!args.hasOwnProperty('type') || args.hasOwnProperty('type') && 'horizontal' === args.type) {
    let label = args.hasOwnProperty('label') ? args.label : __('Alignment', 'wpmozo-addons-lite-for-gutenberg'),
      className = args.hasOwnProperty('className') ? args.className : 'wpmozo-alignment-compo horizontal',
      aignments = {
        left: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-left-' + alignmentKey,
          value: "left",
          icon: el(Icon, {
            icon: 'editor-alignleft'
          }),
          label: __('Left', 'wpmozo-addons-lite-for-gutenberg')
        }),
        center: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-center-' + alignmentKey,
          value: "center",
          icon: el(Icon, {
            icon: 'editor-aligncenter'
          }),
          label: __('Center', 'wpmozo-addons-lite-for-gutenberg')
        }),
        right: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-right-' + alignmentKey,
          value: "right",
          icon: el(Icon, {
            icon: 'editor-alignright'
          }),
          label: __('Right', 'wpmozo-addons-lite-for-gutenberg')
        })
      },
      typeSetAlign = [aignments.left, aignments.center, aignments.right];
    if (args.hasOwnProperty('alignments')) {
      typeSetAlign = [];
      args.alignments.map(alignment => typeSetAlign.push(aignments[alignment]));
    }
    elAlignment = el(__experimentalToggleGroupControl, {
      key: 'wpmozo-alignment-horizontal-' + alignmentKey,
      className: className,
      onChange: args.onChange,
      label: label,
      isDeselectable: true,
      isBlock: true,
      value: args.value,
      children: typeSetAlign
    });
  } else if (args.hasOwnProperty('type') && 'vertical' === args.type) {
    let label = args.hasOwnProperty('label') ? args.label : __('Alignment', 'wpmozo-addons-lite-for-gutenberg'),
      className = args.hasOwnProperty('className') ? args.className : 'wpmozo-alignment-compo vertical',
      aignments = {
        top: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-top-' + alignmentKey,
          value: "top",
          icon: el(SVG, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: el(Path, {
              d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"
            })
          }),
          label: __('Top', 'wpmozo-addons-lite-for-gutenberg')
        }),
        center: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-center-' + alignmentKey,
          value: "center",
          icon: el(SVG, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: el(Path, {
              d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"
            })
          }),
          label: __('Center', 'wpmozo-addons-lite-for-gutenberg')
        }),
        bottom: el(__experimentalToggleGroupControlOptionIcon, {
          key: 'wpmozo-alignment-bottom-' + alignmentKey,
          value: "bottom",
          icon: el(SVG, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: el(Path, {
              d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"
            })
          }),
          label: __('bottom', 'wpmozo-addons-lite-for-gutenberg')
        })
      },
      typeSetAlign = [aignments.top, aignments.center, aignments.bottom];
    if (args.hasOwnProperty('alignments')) {
      typeSetAlign = [];
      args.alignments.map(alignment => typeSetAlign.push(aignments[alignment]));
    }
    elAlignment = el(__experimentalToggleGroupControl, {
      key: 'wpmozo-alignment-vertical-' + alignmentKey,
      className: className,
      onChange: args.onChange,
      label: label,
      isDeselectable: true,
      isBlock: true,
      value: args.value,
      children: typeSetAlign
    });
  }
  return elAlignment;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoAlignment);

/***/ }),

/***/ "./src/components/wpmozo-border/wpmozo-border.js":
/*!*******************************************************!*\
  !*** ./src/components/wpmozo-border/wpmozo-border.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalBorderRadiusControl
} = window.wp.blockEditor;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem,
  __experimentalBorderBoxControl
} = window.wp.components;
const WpmozoBorder = function (args) {
  const {
      BorderKey,
      props
    } = args,
    preAttributes = props.preAttributes,
    label = args.hasOwnProperty('label') ? args.label : __('Border', 'wpmozo-addons-lite-for-gutenberg');
  let BorderTypes = args.hasOwnProperty('BorderTypes') ? args.BorderTypes : null;
  const borderSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [BorderKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[BorderKey + styleType] && preAttributes[BorderKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[BorderKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : borderSetValue;
  return [el(__experimentalToolsPanel, {
    key: 'wpmozo-border-panel-' + BorderKey,
    label: label,
    resetAll: () => {
      if (null === BorderTypes) {
        BorderTypes = {
          'border': '',
          'borderRadius': ''
        };
      }
      for (const type in BorderTypes) {
        let value = setValue(type, null);
        props.setAttributes({
          [BorderKey + type]: value
        });
      }
      if (args.hasOwnProperty('afterOnChange')) {
        args.afterOnChange(props);
      }
    }
  }, (null == BorderTypes || BorderTypes.hasOwnProperty('border')) && el(__experimentalToolsPanelItem, {
    label: __('Border', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => borderSetValue('border')
  }, el(__experimentalBorderBoxControl, {
    label: 'Border',
    value: props.attributes[BorderKey + 'border'],
    onChange: NewBorder => onChange('border', NewBorder)
  })), (null == BorderTypes || BorderTypes.hasOwnProperty('radius')) && el(__experimentalToolsPanelItem, {
    label: __('Radius', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => borderSetValue('borderRadius')
  }, el(__experimentalBorderRadiusControl, {
    label: 'Radius',
    values: props.attributes[BorderKey + 'borderRadius'],
    onChange: NewRadius => onChange('borderRadius', NewRadius)
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoBorder);

/***/ }),

/***/ "./src/components/wpmozo-colorcombo/wpmozo-colorcombo.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-colorcombo/wpmozo-colorcombo.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wpmozo-colorpicker/wpmozo-colorpicker */ "./src/components/wpmozo-colorpicker/wpmozo-colorpicker.js");

const el = window.wp.element.createElement;
const {
  useState
} = window.wp.element;
const __ = wp.i18n.__;
const {
  BaseControl,
  ButtonGroup,
  Button
} = window.wp.components;

const WpmozoColorCombo = function (args) {
  const [colorType, setColorType] = useState('normal'),
    label = args.hasOwnProperty('label') ? args.label : '';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    label: label,
    className: "wpmozo-color-combo-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'normal' === colorType ? true : false,
    onClick: () => setColorType('normal')
  }, __('Normal', 'wpmozo-addons-lite-for-gutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    className: "wpmozo-color-combo-type",
    isPressed: 'hover' === colorType ? true : false,
    onClick: () => setColorType('hover')
  }, __('Hover', 'wpmozo-addons-lite-for-gutenberg'))), 'normal' === colorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...args.normal
  }), 'hover' === colorType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...args.hover
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoColorCombo);

/***/ }),

/***/ "./src/components/wpmozo-colorpicker/wpmozo-colorpicker.js":
/*!*****************************************************************!*\
  !*** ./src/components/wpmozo-colorpicker/wpmozo-colorpicker.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalUseMultipleOriginColorsAndGradients
} = window.wp.blockEditor;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem,
  Dropdown,
  Button,
  ColorIndicator,
  ColorPalette,
  TabPanel,
  GradientPicker
} = window.wp.components;
const WpmozoColorPicker = function (args) {
  const {
      ColorKey,
      ColorTypes,
      props
    } = args,
    preAttributes = props.preAttributes,
    withToolPanel = args.hasOwnProperty('withToolPanel') ? args.withToolPanel : true,
    AllColors = __experimentalUseMultipleOriginColorsAndGradients(),
    defaultGradientColor = 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
    label = args.hasOwnProperty('label') ? args.label : __('Color', 'wpmozo-addons-lite-for-gutenberg');
  const colorSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [ColorKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[ColorKey + styleType] && preAttributes[ColorKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[ColorKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : colorSetValue;
  if (withToolPanel) {
    const colorDropdown = function (colorType, label, colorTypeObj) {
      let _color = props.attributes[ColorKey + colorType],
        fullKey = ColorKey + '-' + colorType,
        colorPlateKey = 'wpmozo-color-palette-' + fullKey;
      const withGradient = colorTypeObj.hasOwnProperty('withGradient') ? colorTypeObj.withGradient : false;
      const onlyGradient = colorTypeObj.hasOwnProperty('onlyGradient') ? colorTypeObj.onlyGradient : false;
      if ('' === _color && args.hasOwnProperty('default')) {
        _color = args.default[colorType];
      }
      return el(Dropdown, {
        key: 'wpmozo-color-dropdown-container-' + fullKey,
        className: "wpmozo-color-dropdown-container",
        contentClassName: "wpmozo-color-popover-content",
        popoverProps: {
          placement: 'left-start',
          offset: 36,
          shift: true
        },
        renderToggle: ({
          isOpen,
          onToggle
        }) => el(Button, {
          key: 'wpmozo-color-dropdown-button-' + fullKey,
          onClick: onToggle,
          "aria-expanded": isOpen,
          children: [el(ColorIndicator, {
            key: 'wpmozo-color-dropdown-indicator-' + fullKey,
            colorValue: _color
          }), label]
        }),
        renderContent: () => {
          if (!withGradient && !onlyGradient) {
            return el(ColorPalette, {
              key: colorPlateKey,
              colors: AllColors.colors,
              value: _color,
              onChange: NewColor => onChange(colorType, NewColor),
              enableAlpha: true
            });
          } else if (withGradient) {
            return el(TabPanel, {
              key: colorPlateKey,
              className: "wpmozo-color-tabs",
              tabs: [{
                name: "solid",
                title: __('Solid', 'wpmozo-addons-lite-for-gutenberg'),
                className: "wpmozo-color-tab-solid"
              }, {
                name: "gradient",
                title: __('Gradient', 'wpmozo-addons-lite-for-gutenberg'),
                className: "wpmozo-color-tab-gradient"
              }],
              children: currentTab => {
                let tabContent;
                let _colorSolid = props.attributes[ColorKey + colorType + 'Solid'];
                if ('' === _colorSolid && args.hasOwnProperty('default')) {
                  _colorSolid = args.default[colorType + 'Solid'];
                }
                let _colorGradient = props.attributes[ColorKey + colorType + 'Gradient'];
                if ('' === _colorGradient && args.hasOwnProperty('default')) {
                  _colorGradient = args.default[colorType + 'Gradient'];
                }
                if ('solid' === currentTab.name) {
                  tabContent = el(ColorPalette, {
                    colors: AllColors.colors,
                    value: _colorSolid,
                    onChange: NewColor => {
                      onChange(colorType, NewColor);
                      onChange(colorType + 'Solid', NewColor);
                      onChange(colorType + 'Gradient', defaultGradientColor);
                    },
                    enableAlpha: true
                  });
                } else {
                  tabContent = el(GradientPicker, {
                    gradients: AllColors.gradients,
                    value: _colorGradient,
                    onChange: NewColor => {
                      onChange(colorType + 'Solid', '');
                      if ('undefined' === typeof NewColor) {
                        onChange(colorType + 'Gradient', defaultGradientColor);
                        onChange(colorType, null);
                      } else {
                        onChange(colorType + 'Gradient', NewColor);
                        onChange(colorType, NewColor);
                      }
                    }
                  });
                }
                return tabContent;
              }
            });
          } else {
            let onlyGradientValue = _color;
            if ('' === onlyGradientValue) {
              onlyGradientValue = defaultGradientColor;
            }
            return el(GradientPicker, {
              key: colorPlateKey,
              gradients: AllColors.gradients,
              value: onlyGradientValue,
              onChange: NewColor => {
                if ('undefined' === typeof NewColor) {
                  onChange(colorType, null);
                } else {
                  onChange(colorType, NewColor);
                }
              }
            });
          }
        }
      });
    };
    const Panels = [];
    for (var i = 0; i < ColorTypes.length; i++) {
      let ct = ColorTypes[i],
        fullKey = ColorKey + '-' + ct.key;
      let Panel = el(__experimentalToolsPanelItem, {
        key: 'wpmozo-color-tools-panel-item-' + fullKey,
        label: ct.label,
        hasValue: () => true,
        isShownByDefault: true,
        onDeselect: () => colorSetValue(ct.key)
      }, colorDropdown(ct.key, ct.label, ct));
      Panels.push(Panel);
    }
    return [el(__experimentalToolsPanel, {
      key: 'wpmozo-color-tools-panel-' + ColorKey,
      label: label,
      className: 'wpmozo-color-tools-panel',
      resetAll: () => {
        ColorTypes.map(type => {
          let value = setValue(type.key, null);
          props.setAttributes({
            [ColorKey + type.key]: value
          });
        });
        if (args.hasOwnProperty('afterOnChange')) {
          args.afterOnChange(props);
        }
      }
    }, Panels)];
  } else {
    const Panels = [];
    for (var i = 0; i < ColorTypes.length; i++) {
      let ct = ColorTypes[i],
        colorType = ct.key,
        label = ct.label,
        fullKey = ColorKey + '-' + colorType,
        _color = props.attributes[ColorKey + colorType];
      if ('' === _color && args.hasOwnProperty('default')) {
        _color = args.default[colorType];
      }
      let Panel = el(ColorPalette, {
        key: 'wpmozo-color-palette-' + fullKey,
        colors: AllColors.colors,
        value: _color,
        onChange: NewColor => onChange(colorType, NewColor)
      });
      Panels.push(Panel);
    }
    return [Panels];
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoColorPicker);

/***/ }),

/***/ "./src/components/wpmozo-dimensions/wpmozo-dimensions.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-dimensions/wpmozo-dimensions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalSpacingSizesControl
} = window.wp.blockEditor;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem
} = window.wp.components;
const WpmozoDimensions = function (args) {
  const {
      DimensionKey,
      props
    } = args,
    preAttributes = props.preAttributes,
    label = args.hasOwnProperty('label') ? args.label : __('Dimensions', 'wpmozo-addons-lite-for-gutenberg');
  let DimensionsTypes = args.hasOwnProperty('DimensionsTypes') ? args.DimensionsTypes : null;
  const dimensionsSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [DimensionKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[DimensionKey + styleType] && preAttributes[DimensionKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[DimensionKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : dimensionsSetValue;
  return [el(__experimentalToolsPanel, {
    key: 'wpmozo-dimensions-panel-' + DimensionKey,
    label: label,
    resetAll: () => {
      if (null === DimensionsTypes) {
        DimensionsTypes = {
          'padding': '',
          'margin': '',
          'position': ''
        };
      }
      for (const type in DimensionsTypes) {
        let value = setValue(type, null);
        props.setAttributes({
          [DimensionKey + type]: value
        });
      }
      if (args.hasOwnProperty('afterOnChange')) {
        args.afterOnChange(props);
      }
    }
  }, (null == DimensionsTypes || DimensionsTypes.hasOwnProperty('padding')) && el(__experimentalToolsPanelItem, {
    label: __('Padding', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    className: 'tools-panel-item-spacing',
    onDeselect: () => dimensionsSetValue('padding')
  }, el(__experimentalSpacingSizesControl, {
    label: 'Padding',
    values: props.attributes[DimensionKey + 'padding'],
    onChange: NewPadding => onChange('padding', NewPadding)
  })), (null == DimensionsTypes || DimensionsTypes.hasOwnProperty('margin')) && el(__experimentalToolsPanelItem, {
    label: __('Margin', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    className: 'tools-panel-item-spacing',
    onDeselect: () => dimensionsSetValue('margin')
  }, el(__experimentalSpacingSizesControl, {
    label: 'Margin',
    values: props.attributes[DimensionKey + 'margin'],
    onChange: NewMargin => onChange('margin', NewMargin)
  })), (null == DimensionsTypes || DimensionsTypes.hasOwnProperty('position')) && el(__experimentalToolsPanelItem, {
    label: __('Position', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    className: 'tools-panel-item-spacing',
    onDeselect: () => dimensionsSetValue('position')
  }, el(__experimentalSpacingSizesControl, {
    label: 'Position',
    values: props.attributes[DimensionKey + 'position'],
    onChange: NewPosition => onChange('position', NewPosition)
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoDimensions);

/***/ }),

/***/ "./src/components/wpmozo-iconpicker/wpmozo-iconpicker.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-iconpicker/wpmozo-iconpicker.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  compose
} = wp.compose;
const {
  ComboboxControl
} = wp.components;
const el = wp.element.createElement;
const options = wpmozo_adfgu_editor_object.icons;
const {
  Component
} = wp.element;
const WpmozoIconpicker = function (args) {
  const iconSetValue = function (value = null) {
    props.setAttributes({
      [args.iconPickerKey]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const {
      iconPickerKey,
      props,
      label
    } = args,
    attributes = props.attributes,
    value = '' !== args.value ? args.value : '',
    icon = 'undefined' !== typeof attributes[args.iconPickerKey] && '' !== attributes[args.iconPickerKey] ? attributes[args.iconPickerKey] : 'fas fa-ban',
    onChange = args.hasOwnProperty('onChange') ? args.onChange : iconSetValue;
  return [el('div', {
    key: 'wpmozo-icon-picker-' + iconPickerKey,
    className: 'wpmozo-icon-picker'
  }, el(ComboboxControl, {
    key: 'wpmozo-icon-combobox-' + iconPickerKey,
    label: label,
    value: value,
    allowReset: false,
    onChange: onChange,
    options: options,
    __experimentalRenderItem: function (option) {
      let iconClass = option.item.value;
      return el("span", {
        key: 'wpmozo-icon-span-' + iconPickerKey,
        children: [el("i", {
          key: 'wpmozo-icon-el-' + iconPickerKey,
          className: iconClass
        }), " ", option.item.label]
      });
    }
  }), el('div', {
    key: 'wpmozo-icon-wrap-' + iconPickerKey,
    className: 'wpmozo-icon-wraper'
  }, el('i', {
    className: icon
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoIconpicker);

/***/ }),

/***/ "./src/components/wpmozo-media-uploader/wpmozo-media-uploader.js":
/*!***********************************************************************!*\
  !*** ./src/components/wpmozo-media-uploader/wpmozo-media-uploader.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);




const el = window.wp.element.createElement;
const WpmozoMediaUploader = function (args) {
  const editImage = args.hasOwnProperty('edit') ? args.edit : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Image", "wpmozo-addons-lite-for-gutenberg"),
    selectImage = args.hasOwnProperty('select') ? args.select : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Image", "wpmozo-addons-lite-for-gutenberg"),
    allowedTypes = args.hasOwnProperty('allowedTypes') ? args.allowedTypes : ["image"],
    accept = args.hasOwnProperty('accept') ? args.accept : "image/*",
    props = args.props,
    attrKye = args.attrKye,
    imageSrc = args.hasOwnProperty('imageSrc') ? args.imageSrc : props.attributes[attrKye];
  const onSelect = function (media) {
    props.setAttributes({
      [attrKye]: media.url
    });
  };
  return [el(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
    key: 'wpmozo-media-uploader-check'
  }, el(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    key: 'wpmozo-media-uploader-el',
    onSelect: media => {
      if (args.hasOwnProperty('onSelect')) {
        args.onSelect(media);
      } else {
        onSelect(media);
      }
    },
    allowedTypes: allowedTypes,
    accept: accept,
    value: imageSrc,
    render: ({
      open
    }) => {
      return el(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        key: 'wpmozo-media-uploader-fragment'
      }, el('div', {
        key: 'wpmozo-media-uploader-wrap',
        className: "components-base-control wpmozo-media-uploader-wrap",
        children: [imageSrc && el('img', {
          key: 'wpmozo-media-uploader-img',
          className: "wpmozo-media-uploader",
          src: imageSrc
        }), el(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          key: 'wpmozo-media-uploader-btn',
          isPrimary: true,
          onClick: event => {
            event.stopPropagation();
            open();
          },
          children: imageSrc ? editImage : selectImage
        })]
      }));
    }
  }))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoMediaUploader);

/***/ }),

/***/ "./src/components/wpmozo-range-size/wpmozo-range-size.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-range-size/wpmozo-range-size.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  useState
} = window.wp.element;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem,
  __experimentalUnitControl,
  RangeControl,
  BaseControl,
  Button
} = window.wp.components;
const wpmozoCoreFun = window.wpmozo;
const WpmozoRangeSize = function (args) {
  const {
      rangeSizeKey,
      props
    } = args,
    preAttributes = props.preAttributes;
  let element = '';
  const sizeSetValue = function (valueType = 'value', value = null) {
    value = setValue(valueType, value);
    if ('value' === valueType) {
      props.setAttributes({
        [rangeSizeKey]: value
      });
    } else {
      props.setAttributes({
        [rangeSizeKey + 'Unit']: value
      });
    }
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (valueType = 'value', value) {
    if ('value' === valueType) {
      if (null === value && 'undefined' !== typeof preAttributes[rangeSizeKey] && preAttributes[rangeSizeKey].hasOwnProperty('default')) {
        value = preAttributes[rangeSizeKey].default;
      }
    } else {
      if (null === value && 'undefined' !== typeof preAttributes[rangeSizeKey + 'Unit'] && preAttributes[rangeSizeKey + 'Unit'].hasOwnProperty('default')) {
        value = preAttributes[rangeSizeKey + 'Unit'].default;
      }
    }
    value = null !== value ? value : '';
    return value;
  };
  let unit = setValue('unit', props.attributes[rangeSizeKey + 'Unit']),
    getRange = setValue('value', props.attributes[rangeSizeKey]),
    defaultRange = !wpmozoCoreFun.wpmozo_is_empty(unit) && !wpmozoCoreFun.wpmozo_is_empty(getRange) ? parseFloat(getRange.replace(unit, '')) : 0;
  const [state, setState] = useState({
    range: defaultRange
  });
  const updateColSpacingRang = val => {
    let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val(),
      _range = parseFloat(val.replace(unit, ''));
    setState({
      ...state,
      range: _range
    });
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : sizeSetValue;
  if (args.hasOwnProperty('withToolsPanel')) {
    element = [el(__experimentalToolsPanel, {
      label: args.label,
      resetAll: () => {
        let sizeRange = setValue('value', null);
        updateColSpacingRang(sizeRange);
        sizeSetValue('value', null);
        sizeSetValue('unit', 'px');
      },
      key: 'wpmozo-range-size' + rangeSizeKey + '-panel',
      className: 'wpmozo-range-size' + rangeSizeKey + '-panel'
    }, el(__experimentalToolsPanelItem, {
      label: args.label,
      hasValue: () => true,
      isShownByDefault: true,
      onDeselect: () => {
        let sizeRange = setValue('value', null);
        updateColSpacingRang(sizeRange);
        sizeSetValue('value', null);
        sizeSetValue('unit', 'px');
      },
      key: 'wpmozo-range-size-' + rangeSizeKey + '-panel-item',
      className: 'wpmozo-range-size-' + rangeSizeKey + '-panel-item'
    }, el(RangeControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-range',
      value: state.range,
      allowReset: false,
      withInputField: false,
      onChange: function (NewSpacing) {
        let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val(),
          spacing = NewSpacing + unit;
        sizeSetValue('value', spacing);
        updateColSpacingRang(spacing);
      }
    }), el(__experimentalUnitControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-size',
      value: props.attributes[rangeSizeKey],
      className: 'wpmozo-range-size-' + rangeSizeKey + '-size',
      onChange: NewSpacing => {
        let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val();
        sizeSetValue('value', NewSpacing);
        sizeSetValue('unit', unit);
        updateColSpacingRang(NewSpacing + unit);
      }
    })))];
  } else {
    element = [el(BaseControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-basecontrol',
      label: args.label,
      className: 'wpmozo-range-size-basecontrol'
    }, el('div', {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-inner',
      className: 'wpmozo-range-size-basecontrol-inner'
    }, el(RangeControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-range',
      value: state.range,
      allowReset: false,
      withInputField: false,
      onChange: function (NewSpacing) {
        let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val(),
          spacing = NewSpacing + unit;
        sizeSetValue('value', spacing);
        updateColSpacingRang(spacing);
      }
    }), el(__experimentalUnitControl, {
      key: 'wpmozo-range-size-' + rangeSizeKey + '-size',
      value: props.attributes[rangeSizeKey],
      className: 'wpmozo-range-size-' + rangeSizeKey + '-size',
      onChange: NewSpacing => {
        let unit = jQuery('.wpmozo-range-size-' + rangeSizeKey + '-size .components-unit-control__select').val();
        sizeSetValue('value', NewSpacing);
        sizeSetValue('unit', unit);
        updateColSpacingRang(NewSpacing + unit);
      }
    }), el(Button, {
      text: __('Reset', 'wpmozo-addons-lite-for-gutenberg'),
      variant: 'secondary',
      onClick: () => {
        let sizeRange = setValue('value', null);
        updateColSpacingRang(sizeRange);
        sizeSetValue('value', null);
        sizeSetValue('unit', 'px');
      }
    })))];
  }
  return element;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoRangeSize);

/***/ }),

/***/ "./src/components/wpmozo-size/wpmozo-size.js":
/*!***************************************************!*\
  !*** ./src/components/wpmozo-size/wpmozo-size.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem,
  __experimentalUnitControl
} = window.wp.components;
const WpmozoSize = function (args) {
  const {
      SizeKey,
      props
    } = args,
    preAttributes = props.preAttributes,
    label = args.hasOwnProperty('label') ? args.label : __('Size', 'wpmozo-addons-lite-for-gutenberg');
  let SizeTypes = args.hasOwnProperty('SizeTypes') ? args.SizeTypes : null;
  const sizeSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [SizeKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[SizeKey + styleType] && preAttributes[SizeKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[SizeKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : sizeSetValue;
  return [el(__experimentalToolsPanel, {
    key: 'wpmozo-size-panel-' + SizeKey,
    label: label,
    resetAll: () => {
      if (null === SizeTypes) {
        SizeTypes = {
          'width': '',
          'height': ''
        };
      }
      for (const type in SizeTypes) {
        let value = setValue(type, null);
        props.setAttributes({
          [SizeKey + type]: value
        });
      }
      if (args.hasOwnProperty('afterOnChange')) {
        args.afterOnChange(props);
      }
    }
  }, (null == SizeTypes || SizeTypes.hasOwnProperty('width')) && el(__experimentalToolsPanelItem, {
    label: __('Width', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => sizeSetValue('width')
  }, el(__experimentalUnitControl, {
    label: 'Width',
    labelPosition: 'side',
    value: props.attributes[SizeKey + 'width'],
    onChange: NewWidth => onChange('width', NewWidth)
  })), (null == SizeTypes || SizeTypes.hasOwnProperty('height')) && el(__experimentalToolsPanelItem, {
    label: __('Height', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => sizeSetValue('height')
  }, el(__experimentalUnitControl, {
    label: 'Height',
    labelPosition: 'side',
    value: props.attributes[SizeKey + 'height'],
    onChange: NewHeight => onChange('height', NewHeight)
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpmozoSize);

/***/ }),

/***/ "./src/components/wpmozo-typography/wpmozo-typography.js":
/*!***************************************************************!*\
  !*** ./src/components/wpmozo-typography/wpmozo-typography.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const {
  __experimentalFontAppearanceControl,
  FontSizePicker,
  __experimentalLetterSpacingControl,
  __experimentalTextTransformControl,
  __experimentalTextDecorationControl,
  LineHeightControl
} = window.wp.blockEditor;
const {
  __experimentalToolsPanel,
  __experimentalToolsPanelItem
} = window.wp.components;
const {
  compose
} = wp.compose;
const WpmozoTypography = function (args) {
  const {
      TypographyKey,
      props
    } = args,
    preAttributes = props.preAttributes,
    label = args.hasOwnProperty('label') ? args.label : __('Typography', 'wpmozo-addons-lite-for-gutenberg');
  let TypoTypes = args.hasOwnProperty('TypoTypes') ? args.TypoTypes : null;
  const typoSetValue = function (styleType, value = null) {
    value = setValue(styleType, value);
    props.setAttributes({
      [TypographyKey + styleType]: value
    });
    if (args.hasOwnProperty('afterOnChange')) {
      args.afterOnChange(props);
    }
  };
  const setValue = function (styleType, value) {
    if (null === value && 'undefined' !== typeof preAttributes[TypographyKey + styleType] && preAttributes[TypographyKey + styleType].hasOwnProperty('default')) {
      value = preAttributes[TypographyKey + styleType].default;
    }
    value = null !== value ? value : '';
    return value;
  };
  const onChange = args.hasOwnProperty('onChange') ? args.onChange : typoSetValue;
  if (null == TypoTypes || TypoTypes.hasOwnProperty('FontAppearance')) {
    var hasFontStyles = args.hasOwnProperty('FontAppearance') && args.FontAppearance.hasOwnProperty('hasFontStyles') ? args.FontAppearance.hasFontStyles : true;
    var hasFontWeights = args.hasOwnProperty('FontAppearance') && args.FontAppearance.hasOwnProperty('hasFontWeights') ? args.FontAppearance.hasFontWeights : true;
    var _FontAppearanceValues = {};
    if (hasFontStyles) {
      _FontAppearanceValues['fontStyle'] = props.attributes[TypographyKey + 'FontAppearance'].fontStyle;
    }
    if (hasFontWeights) {
      _FontAppearanceValues['fontWeight'] = props.attributes[TypographyKey + 'FontAppearance'].fontWeight;
    }
  }
  return [el(__experimentalToolsPanel, {
    key: 'wpmozo-typography-panel-' + TypographyKey,
    label: label,
    resetAll: () => {
      if (null === TypoTypes) {
        TypoTypes = {
          'FontSize': '',
          'LetterSpacing': '',
          'Decoration': '',
          'FontAppearance': {
            'fontStyle': '',
            'fontWeight': ''
          },
          'LetterCase': '',
          'LineHeight': ''
        };
      }
      for (const type in TypoTypes) {
        let _typo = setValue(type, null);
        props.setAttributes({
          [TypographyKey + type]: _typo
        });
      }
      if (args.hasOwnProperty('afterOnChange')) {
        args.afterOnChange(props);
      }
    }
  }, (null == TypoTypes || TypoTypes.hasOwnProperty('FontSize')) && el(__experimentalToolsPanelItem, {
    label: __('Font Size', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('FontSize')
  }, el(FontSizePicker, {
    value: props.attributes[TypographyKey + 'FontSize'],
    onChange: NewFontSize => onChange('FontSize', NewFontSize),
    __nextHasNoMarginBottom: true
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('FontAppearance')) && el(__experimentalToolsPanelItem, {
    className: "single-column",
    label: __('Appearance', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('FontAppearance')
  }, el(__experimentalFontAppearanceControl, {
    key: 'wpmozo-titleapp',
    hasFontStyles: hasFontStyles,
    hasFontWeights: hasFontWeights,
    value: _FontAppearanceValues,
    onChange: NewFontAppearance => onChange('FontAppearance', NewFontAppearance)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('LetterSpacing')) && el(__experimentalToolsPanelItem, {
    className: "single-column",
    label: __('Letter spacing', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('LetterSpacing')
  }, el(__experimentalLetterSpacingControl, {
    value: props.attributes[TypographyKey + 'LetterSpacing'],
    onChange: NewLetterSpacing => onChange('LetterSpacing', NewLetterSpacing)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('Decoration')) && el(__experimentalToolsPanelItem, {
    label: __('Decoration', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('Decoration')
  }, el(__experimentalTextDecorationControl, {
    value: props.attributes[TypographyKey + 'Decoration'],
    onChange: NewDecoration => onChange('Decoration', NewDecoration)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('LetterCase')) && el(__experimentalToolsPanelItem, {
    label: __('Letter case', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('LetterCase')
  }, el(__experimentalTextTransformControl, {
    value: props.attributes[TypographyKey + 'LetterCase'],
    onChange: NewLetterCase => onChange('LetterCase', NewLetterCase)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('LineHeight')) && el(__experimentalToolsPanelItem, {
    className: "single-column",
    label: __('Line Height', 'wpmozo-addons-lite-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('LineHeight')
  }, el(LineHeightControl, {
    value: props.attributes[TypographyKey + 'LineHeight'],
    onChange: NewLineHeight => onChange('LineHeight', NewLineHeight),
    __nextHasNoMarginBottom: true
  })))];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose()(WpmozoTypography));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_before_after_slider_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/before-after-slider/index.js */ "./src/blocks/before-after-slider/index.js");
/* harmony import */ var _blocks_content_toggle_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/content-toggle/js/index.js */ "./src/blocks/content-toggle/js/index.js");
/* harmony import */ var _blocks_content_wraper_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/content-wraper/index.js */ "./src/blocks/content-wraper/index.js");
/* harmony import */ var _blocks_fancy_heading_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/fancy-heading/index.js */ "./src/blocks/fancy-heading/index.js");
/* harmony import */ var _blocks_fancy_text_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/fancy-text/index.js */ "./src/blocks/fancy-text/index.js");
/* harmony import */ var _blocks_flip_box_js_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/flip-box/js/index.js */ "./src/blocks/flip-box/js/index.js");
/* harmony import */ var _blocks_interactive_image_card_js_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/interactive-image-card/js/index.js */ "./src/blocks/interactive-image-card/js/index.js");
/* harmony import */ var _blocks_logo_slider_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/logo-slider/index.js */ "./src/blocks/logo-slider/index.js");
/* harmony import */ var _blocks_logo_slide_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/logo-slide/index.js */ "./src/blocks/logo-slide/index.js");
/* harmony import */ var _blocks_floating_image_item_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/floating-image-item/index.js */ "./src/blocks/floating-image-item/index.js");
/* harmony import */ var _blocks_floating_image_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/floating-image/index.js */ "./src/blocks/floating-image/index.js");











})();

/******/ })()
;
//# sourceMappingURL=index.js.map