
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const { __experimentalUseMultipleOriginColorsAndGradients} = window.wp.blockEditor;
const { __experimentalToolsPanel, __experimentalToolsPanelItem, Dropdown, Button, ColorIndicator, ColorPalette } = window.wp.components;

const WpmozoColorPicker = function(args){

    const { ColorKey, ColorTypes, props } = args;
    const preAttributes = props.preAttributes;
    const withToolPanel = ( args.hasOwnProperty('withToolPanel') ) ? args.withToolPanel : true;
    const AllColors                               = __experimentalUseMultipleOriginColorsAndGradients();

    const colorSetValue = function( styleType, value = null ) {

        value = setValue( styleType, value );
        props.setAttributes( {[ ColorKey+styleType ]: value} );

        if ( args.hasOwnProperty( 'afterOnChange' ) ) {
            args.afterOnChange( props );
        }

    };

    const setValue = function(styleType, value){

        if ( null === value && 'undefined' !== typeof preAttributes[ ColorKey + styleType ] && preAttributes[ ColorKey + styleType ].hasOwnProperty( 'default' ) ) {
            value = preAttributes[ ColorKey+styleType ].default;
        }
        value = ( null !== value ) ? value : '';

        return value;

    }

    const onChange = args.hasOwnProperty( 'onChange' ) ? args.onChange : colorSetValue;

    if ( withToolPanel ) {

        const colorDropdown = function( colorType, label ) {

            let _color = props.attributes[ ColorKey+colorType ]

            if ( '' === _color && args.hasOwnProperty( 'default' ) ) {
                _color = args.default[colorType];
            }

            return el(
                Dropdown,
                {
                    className: "wpmozo-color-dropdown-container",
                    contentClassName: "wpmozo-color-popover-content",
                    popoverProps: {
                        placement: 'left-start',
                        offset: 36,
                        shift: true
                    },
                    renderToggle: ({ isOpen, onToggle }) =>
                    el(
                        Button,
                        {
                            onClick: onToggle,
                            "aria-expanded": isOpen,
                            children: [
                            el(
                                ColorIndicator,
                                {
                                    colorValue: _color,
                                }
                            ),
                            label
                        ],
                        }
                    ),
                renderContent: () =>
                    el(
                        ColorPalette,
                        {
                            colors: AllColors.colors,
                            value: _color,
                            onChange: (NewColor) => onChange( colorType, NewColor ),
                            enableAlpha: true,
                        }
                    ),
                }
            );

        }

        const Panels = [];
        for (var i = 0; i < ColorTypes.length; i++) {
            let ct    = ColorTypes[i];
            let Panel = el(
                __experimentalToolsPanelItem,
                {
                    label: ct.label,
                    hasValue: () => true,
                    isShownByDefault: true,
                    onDeselect: () => colorSetValue( ct.key ),
                },
                colorDropdown(
                    ct.key,
                    ct.label
                ),
            );
            Panels.push( Panel );
        }

        return [
            el(
                __experimentalToolsPanel,
                {
                    label: __( 'Color', 'wpmozo-addons-for-gutenberg' ),
                    className: 'wpmozo-color-tools-panel',
                    resetAll: () => {
                        ColorTypes.map( type => { 

                            let value = setValue( type.key, null );
                            props.setAttributes( {[ ColorKey+type.key ]: value} ); 

                        } );
                        

                        if ( args.hasOwnProperty( 'afterOnChange' ) ) {
                            args.afterOnChange( props );
                        }
                    }
                },
                Panels,
            ),
        ];

    }else{

        const Panels = [];
        for (var i = 0; i < ColorTypes.length; i++) {
            let ct    = ColorTypes[i];

            let colorType = ct.key;
            let label = ct.label;

            let _color = props.attributes[ ColorKey+colorType ]

            if ( '' === _color && args.hasOwnProperty( 'default' ) ) {
                _color = args.default[colorType];
            }
            let Panel = el(
                ColorPalette,
                {
                    colors: AllColors.colors,
                    value: _color,
                    onChange: (NewColor) => onChange( colorType, NewColor ),
                }
            );
            Panels.push( Panel );
        }

        return [ Panels ];

    }

}

export default WpmozoColorPicker;
