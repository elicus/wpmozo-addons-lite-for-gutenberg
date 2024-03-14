/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/before-after-slider/js/attributes.js":
/*!*********************************************************!*\
  !*** ./src/blocks/before-after-slider/js/attributes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {
  clientId: {
    type: "string"
  },
  sliderOrientation: {
    type: "string"
  },
  handleOffset: {
    type: "number"
  },
  moveHandleOnHover: {
    type: "boolean"
  },
  moveHandleOnClick: {
    type: "boolean"
  },
  handlecolor: {
    type: "string"
  },
  overlayOnHover: {
    type: "boolean"
  },
  overlaycolor: {
    type: "string"
  },
  beforeImage: {
    type: "string"
  },
  beforeHasLabel: {
    type: "boolean"
  },
  beforeLabelOnHover: {
    type: "boolean"
  },
  beforeLabel: {
    type: "string"
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
    type: "boolean"
  },
  afterLabelOnHover: {
    type: "boolean"
  },
  afterLabel: {
    type: "string"
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

/***/ "./src/blocks/before-after-slider/js/edit.js":
/*!***************************************************!*\
  !*** ./src/blocks/before-after-slider/js/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/before-after-slider/js/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/blocks/before-after-slider/js/style.js");
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
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  let init = false;
  let beforeImage = attributes.beforeImage ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = attributes.afterImage ? attributes.afterImage : WPMozoEditorObj.placeholderImg,
    beforeLabel = attributes.beforeHasLabel ? attributes.beforeLabel : '',
    afterLabel = attributes.afterHasLabel ? attributes.afterLabel : '';
  function wpmozo_before_init(main) {
    main.find('.twentytwenty-wrapper').removeClass('twentytwenty-wrapper');
    main.find('.twentytwenty-horizontal').removeClass('twentytwenty-horizontal');
    main.find('.wpmozo-adfgu-before-after-image-wrapper').unwrap();
    main.find('.wpmozo-adfgu-before-after-image-wrapper').removeClass('twentytwenty-container');
    let beforeSrc = main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').attr('src');
    main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').remove();
    let afterSrc = main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').attr('src');
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
        main = editorIfram.find('body').find('#block-' + clientId),
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
        main = editorIfram.find('body').find('#block-' + clientId),
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
  }, [attributes.handleOffset, attributes.sliderOrientation, attributes.beforeLabel, attributes.afterLabel, attributes.moveHandleOnHover, attributes.moveHandleOnClick, attributes.overlayOnHover]);
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

/***/ "./src/blocks/before-after-slider/js/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/before-after-slider/js/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/before-after-slider/js/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/before-after-slider/js/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/before-after-slider/js/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('wpmozo/before-after-slider', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Before After Slider', 'wpmozo-product-carousel-for-woocommerce'),
  icon: '',
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'before-after-slider', 'before-after'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/before-after-slider/js/inspector.js":
/*!********************************************************!*\
  !*** ./src/blocks/before-after-slider/js/inspector.js ***!
  \********************************************************/
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
  const beforeTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wpmozo-addons-for-gutenberg'),
    afterTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wpmozo-addons-for-gutenberg'),
    attributes = props.attributes,
    setAttributes = props.setAttributes;
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General', 'wpmozo-addons-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Orientation', 'wpmozo-addons-for-gutenberg'),
    value: attributes.sliderOrientation,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal', 'wpmozo-addons-for-gutenberg'),
      value: 'horizontal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical', 'wpmozo-addons-for-gutenberg'),
      value: 'vertical'
    }],
    onChange: newValue => setAttributes({
      sliderOrientation: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Handle Offset', 'wpmozo-addons-for-gutenberg'),
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
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move Handle on Hover', 'wpmozo-addons-for-gutenberg'),
    checked: attributes.moveHandleOnHover,
    onChange: newValue => setAttributes({
      moveHandleOnHover: newValue
    })
  })), !attributes.moveHandleOnHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Move Handle on Click', 'wpmozo-addons-for-gutenberg'),
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
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label', 'wpmozo-addons-for-gutenberg'),
    checked: attributes.beforeHasLabel,
    onChange: newValue => setAttributes({
      beforeHasLabel: newValue
    })
  }), attributes.beforeHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label Only on Hover', 'wpmozo-addons-for-gutenberg'),
    checked: attributes.beforeLabelOnHover,
    onChange: newValue => setAttributes({
      beforeLabelOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter Label', 'wpmozo-addons-for-gutenberg'),
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
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label', 'wpmozo-addons-for-gutenberg'),
    checked: attributes.afterHasLabel,
    onChange: newValue => setAttributes({
      afterHasLabel: newValue
    })
  }), attributes.afterHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Label Only on Hover', 'wpmozo-addons-for-gutenberg'),
    checked: attributes.afterLabelOnHover,
    onChange: newValue => setAttributes({
      afterLabelOnHover: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter Label', 'wpmozo-addons-for-gutenberg'),
    value: attributes.afterLabel,
    onChange: newValue => setAttributes({
      afterLabel: newValue
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Style'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "handle",
    props: props,
    ColorTypes: [{
      key: 'color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Handle Color', 'wpmozo-addons-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay on Hover', 'wpmozo-addons-for-gutenberg'),
    checked: attributes.overlayOnHover,
    onChange: newValue => setAttributes({
      overlayOnHover: newValue
    })
  }), attributes.overlayOnHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "overlay",
    props: props,
    ColorTypes: [{
      key: 'color',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color', 'wpmozo-addons-for-gutenberg')
    }]
  }))), attributes.beforeHasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before Label Style'),
    className: "wpmozo-typography-panel",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoColorPicker, {
    ColorKey: "beforeLabel",
    props: props,
    ColorTypes: [{
      key: 'text',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Color', 'wpmozo-addons-for-gutenberg')
    }, {
      key: 'background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Background', 'wpmozo-addons-for-gutenberg')
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Color', 'wpmozo-addons-for-gutenberg')
    }, {
      key: 'background',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label Background', 'wpmozo-addons-for-gutenberg')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoTypography, {
    TypographyKey: "afterLabel",
    props: props
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/before-after-slider/js/save.js":
/*!***************************************************!*\
  !*** ./src/blocks/before-after-slider/js/save.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/blocks/before-after-slider/js/style.js");


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

/***/ "./src/blocks/before-after-slider/js/style.js":
/*!****************************************************!*\
  !*** ./src/blocks/before-after-slider/js/style.js ***!
  \****************************************************/
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
  let beforeLabelStyle = convertedStyle['beforeLabel'],
    afterLabelStyle = convertedStyle['afterLabel'];
  let css = `
        ${parent} {
            .twentytwenty-handle:before, 
            .twentytwenty-handle:after {
                background-color: ${attributes.handlecolor} !important;
                -webkit-box-shadow: 0 3px 0 ${attributes.handlecolor}, 0px 0px 12px ${attributes.handlecolor};
                -moz-box-shadow: 0 3px 0 ${attributes.handlecolor}, 0px 0px 12px ${attributes.handlecolor};
                box-shadow: 0 3px 0 ${attributes.handlecolor}, 0px 0px 12px ${attributes.handlecolor};
            }
            .twentytwenty-handle{
                border-color: ${attributes.handlecolor};
            }
            .twentytwenty-left-arrow{
                border-right-color: ${attributes.handlecolor};
            }
            .twentytwenty-right-arrow{
                border-left-color: ${attributes.handlecolor};
            }
            .twentytwenty-overlay:hover{
                background-color: ${attributes.overlaycolor};
            }
            .twentytwenty-before-label:before{
                ${beforeLabelStyle}
            }
            .twentytwenty-after-label:before{
                ${afterLabelStyle}
            }
        }
    `;
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, css);
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
const attributes = {
  clientId: {
    type: "string"
  },
  toggleOneTitle: {
    type: "string"
  },
  toggleOneIcon: {
    type: "string"
  },
  toggleTwoTitle: {
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






const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Edit = props => {
  const attributes = props.attributes,
    clientId = props.clientId;
  attributes.clientId = clientId;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...attributes
  })));
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
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Content Toggle', 'wpmozo-product-carousel-for-woocommerce'),
  icon: '',
  apiVersion: 3,
  category: 'wpmozo',
  keywords: ['wpmozo', 'content-toggle', 'content'],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
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
  props = Object.assign({}, props, {
    preAttributes: {}
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle One Content', 'wpmozo-addons-for-gutenberg'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Title', 'wpmozo-addons-for-gutenberg'),
    value: attributes.toggleOneTitle,
    onChange: newValue => setAttributes({
      toggleOneTitle: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_index__WEBPACK_IMPORTED_MODULE_1__.WpmozoIconpicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'wpmozo-addons-for-gutenberg'),
    iconPickerKey: "toggleOneIcon",
    props: props,
    onChange: newValue => setAttributes({
      toggleOneIcon: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "styles",
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Style'),
    initialOpen: false
  })));
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


const {
  useBlockProps
} = window.wp.blockEditor;
const WPMozoEditorObj = wpmozo_adfgu_editor_object;
const Save = ({
  attributes
}) => {
  const elId = 'block-' + attributes.clientId;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attributes
  }));
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
    parent = '#block-' + clientId;
  let css = ``;
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
/* harmony export */   WpmozoBorder: () => (/* reexport safe */ _wpmozo_border_wpmozo_border__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   WpmozoColorPicker: () => (/* reexport safe */ _wpmozo_colorpicker_wpmozo_colorpicker__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   WpmozoDimensions: () => (/* reexport safe */ _wpmozo_dimensions_wpmozo_dimensions__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   WpmozoIconpicker: () => (/* reexport safe */ _wpmozo_iconpicker_wpmozo_iconpicker__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   WpmozoMediaUploader: () => (/* reexport safe */ _wpmozo_media_uploader_wpmozo_media_uploader__WEBPACK_IMPORTED_MODULE_5__["default"]),
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
  } = args;
  const preAttributes = props.preAttributes;
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
    label: __('Border', 'wpmozo-addons-for-gutenberg'),
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
    label: __('Border', 'wpmozo-addons-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => borderSetValue('border')
  }, el(__experimentalBorderBoxControl, {
    label: 'Border',
    value: props.attributes[BorderKey + 'border'],
    onChange: NewBorder => onChange('border', NewBorder)
  })), (null == BorderTypes || BorderTypes.hasOwnProperty('radius')) && el(__experimentalToolsPanelItem, {
    label: __('Radius', 'wpmozo-addons-for-gutenberg'),
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
  ColorPalette
} = window.wp.components;
const WpmozoColorPicker = function (args) {
  const {
    ColorKey,
    ColorTypes,
    props
  } = args;
  const preAttributes = props.preAttributes;
  const withToolPanel = args.hasOwnProperty('withToolPanel') ? args.withToolPanel : true;
  const AllColors = __experimentalUseMultipleOriginColorsAndGradients();
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
    const colorDropdown = function (colorType, label) {
      let _color = props.attributes[ColorKey + colorType];
      if ('' === _color && args.hasOwnProperty('default')) {
        _color = args.default[colorType];
      }
      return el(Dropdown, {
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
          onClick: onToggle,
          "aria-expanded": isOpen,
          children: [el(ColorIndicator, {
            colorValue: _color
          }), label]
        }),
        renderContent: () => el(ColorPalette, {
          colors: AllColors.colors,
          value: _color,
          onChange: NewColor => onChange(colorType, NewColor)
        })
      });
    };
    const Panels = [];
    for (var i = 0; i < ColorTypes.length; i++) {
      let ct = ColorTypes[i];
      let Panel = el(__experimentalToolsPanelItem, {
        label: ct.label,
        hasValue: () => true,
        isShownByDefault: true,
        onDeselect: () => colorSetValue(ct.key)
      }, colorDropdown(ct.key, ct.label));
      Panels.push(Panel);
    }
    return [el(__experimentalToolsPanel, {
      label: __('Color', 'wpmozo-addons-for-gutenberg'),
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
      let ct = ColorTypes[i];
      let colorType = ct.key;
      let label = ct.label;
      let _color = props.attributes[ColorKey + colorType];
      if ('' === _color && args.hasOwnProperty('default')) {
        _color = args.default[colorType];
      }
      let Panel = el(ColorPalette, {
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
  } = args;
  const preAttributes = props.preAttributes;
  let DimensionsTypes = args.hasOwnProperty('DimensionsTypes') ? args.DimensionsTypes : null;
  const label = args.hasOwnProperty('label') ? args.label : __('Dimensions', 'wpmozo-addons-for-gutenberg');
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
    label: __('Padding', 'wpmozo-addons-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    className: 'tools-panel-item-spacing',
    onDeselect: () => dimensionsSetValue('padding')
  }, el(__experimentalSpacingSizesControl, {
    label: 'Padding',
    values: props.attributes[DimensionKey + 'padding'],
    onChange: NewPadding => onChange('padding', NewPadding)
  })), (null == DimensionsTypes || DimensionsTypes.hasOwnProperty('margin')) && el(__experimentalToolsPanelItem, {
    label: __('Margin', 'wpmozo-addons-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    className: 'tools-panel-item-spacing',
    onDeselect: () => dimensionsSetValue('margin')
  }, el(__experimentalSpacingSizesControl, {
    label: 'Margin',
    values: props.attributes[DimensionKey + 'margin'],
    onChange: NewMargin => onChange('margin', NewMargin)
  })), (null == DimensionsTypes || DimensionsTypes.hasOwnProperty('position')) && el(__experimentalToolsPanelItem, {
    label: __('Position', 'wpmozo-addons-for-gutenberg'),
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
    onChange = args.hasOwnProperty('onChange') ? args.onChange : iconSetValue;
  return [el('div', {
    className: 'wpmozo-icon-picker'
  }, el(ComboboxControl, {
    label: label,
    value: args.value,
    allowReset: false,
    onChange: onChange,
    options: options,
    __experimentalRenderItem: function (option) {
      let iconClass = option.item.value;
      return el("span", {
        children: [el("i", {
          class: iconClass
        }), " ", option.item.label]
      });
    }
  }), attributes.hasOwnProperty(args.iconPickerKey) && attributes[args.iconPickerKey] && el('div', {
    className: 'wpmozo-icon-wraper'
  }, el('i', {
    class: attributes[args.iconPickerKey]
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
  const editImage = args.hasOwnProperty('edit') ? args.edit : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Image", "wpmozo-addons-for-gutenberg"),
    selectImage = args.hasOwnProperty('select') ? args.select : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Image", "wpmozo-addons-for-gutenberg"),
    allowedTypes = args.hasOwnProperty('allowedTypes') ? args.allowedTypes : ["image"],
    accept = args.hasOwnProperty('accept') ? args.accept : "image/*",
    props = args.props,
    attrKye = args.attrKye,
    imageSrc = props.attributes[attrKye];
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
  } = args;
  const preAttributes = props.preAttributes;
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
    label: __('Size', 'wpmozo-addons-for-gutenberg'),
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
    label: __('Width', 'wpmozo-addons-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => sizeSetValue('width')
  }, el(__experimentalUnitControl, {
    label: 'Width',
    labelPosition: 'side',
    value: props.attributes[SizeKey + 'width'],
    onChange: NewWidth => onChange('width', NewWidth)
  })), (null == SizeTypes || SizeTypes.hasOwnProperty('height')) && el(__experimentalToolsPanelItem, {
    label: __('Height', 'wpmozo-addons-for-gutenberg'),
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
  } = args;
  const preAttributes = props.preAttributes;
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
    label: __('Typography', 'wpmozo-addons-for-gutenberg'),
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
    label: __('Font Size', 'wpmozo-addons-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('FontSize')
  }, el(FontSizePicker, {
    value: props.attributes[TypographyKey + 'FontSize'],
    onChange: NewFontSize => onChange('FontSize', NewFontSize),
    __nextHasNoMarginBottom: true
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('FontAppearance')) && el(__experimentalToolsPanelItem, {
    className: "single-column",
    label: __('Appearance', 'wpmozo-addons-for-gutenberg'),
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
    label: __('Letter spacing', 'wpmozo-addons-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('LetterSpacing')
  }, el(__experimentalLetterSpacingControl, {
    value: props.attributes[TypographyKey + 'LetterSpacing'],
    onChange: NewLetterSpacing => onChange('LetterSpacing', NewLetterSpacing)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('Decoration')) && el(__experimentalToolsPanelItem, {
    label: __('Decoration', 'wpmozo-addons-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('Decoration')
  }, el(__experimentalTextDecorationControl, {
    value: props.attributes[TypographyKey + 'Decoration'],
    onChange: NewDecoration => onChange('Decoration', NewDecoration)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('LetterCase')) && el(__experimentalToolsPanelItem, {
    label: __('Letter case', 'wpmozo-addons-for-gutenberg'),
    hasValue: () => true,
    isShownByDefault: true,
    onDeselect: () => typoSetValue('LetterCase')
  }, el(__experimentalTextTransformControl, {
    value: props.attributes[TypographyKey + 'LetterCase'],
    onChange: NewLetterCase => onChange('LetterCase', NewLetterCase)
  })), (null == TypoTypes || TypoTypes.hasOwnProperty('LineHeight')) && el(__experimentalToolsPanelItem, {
    className: "single-column",
    label: __('Line Height', 'wpmozo-addons-for-gutenberg'),
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
/* harmony import */ var _blocks_before_after_slider_js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/before-after-slider/js/index.js */ "./src/blocks/before-after-slider/js/index.js");
/* harmony import */ var _blocks_content_toggle_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/content-toggle/js/index.js */ "./src/blocks/content-toggle/js/index.js");


})();

/******/ })()
;
//# sourceMappingURL=index.js.map