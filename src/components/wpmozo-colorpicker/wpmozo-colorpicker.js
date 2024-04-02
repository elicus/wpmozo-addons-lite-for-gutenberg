
const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const { __experimentalUseMultipleOriginColorsAndGradients} = window.wp.blockEditor;
const { __experimentalToolsPanel, __experimentalToolsPanelItem, Dropdown, Button, ColorIndicator, ColorPalette, TabPanel, GradientPicker } = window.wp.components;

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

        const colorDropdown = function( colorType, label, colorTypeObj ) {

            let _color = props.attributes[ ColorKey+colorType ]

            const withGradient = ( colorTypeObj.hasOwnProperty('withGradient') ) ? colorTypeObj.withGradient : false;
            const onlyGradient = ( colorTypeObj.hasOwnProperty('onlyGradient') ) ? colorTypeObj.onlyGradient : false;

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
                    renderContent: () => {
                        if ( ! withGradient && ! onlyGradient ) {
                            return el(
                                ColorPalette,
                                {
                                    colors: AllColors.colors,
                                    value: _color,
                                    onChange: (NewColor) => onChange( colorType, NewColor ),
                                    enableAlpha: true,
                                }
                            )
                        }else if ( withGradient ){
                            return el(TabPanel, {
                                tabs: [
                                    {
                                        name: "solid",
                                        title: __( 'Solid', 'wpmozo-addons-for-gutenberg' ),
                                        className: "wpmozo-color-tab-solid"
                                    },
                                    {
                                        name: "gradient",
                                        title: __( 'Gradient', 'wpmozo-addons-for-gutenberg' ),
                                        className: "wpmozo-color-tab-gradient"
                                    }
                                ],
                                children: (currentTab) => {
                                    let tabContent;
                                    let _colorSolid = props.attributes[ ColorKey+colorType+'Solid' ];
                                    if ( '' === _colorSolid && args.hasOwnProperty( 'default' ) ) {
                                        _colorSolid = args.default[colorType+'Solid'];
                                    }
                                    let _colorGradient = props.attributes[ ColorKey+colorType+'Gradient' ];
                                    if ( '' === _colorGradient && args.hasOwnProperty( 'default' ) ) {
                                        _colorGradient = args.default[colorType+'Gradient'];
                                    }
                                    if( 'solid' === currentTab.name ){
                                        tabContent = el(
                                            ColorPalette,
                                            {
                                                colors: AllColors.colors,
                                                value: _colorSolid,
                                                onChange: (NewColor) => {
                                                    onChange( colorType, NewColor )
                                                    onChange( colorType+'Solid', NewColor )
                                                    onChange( colorType+'Gradient', 'linear-gradient(90deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)' )
                                                },
                                                enableAlpha: true,
                                            }
                                        )
                                    }else{
                                        tabContent = el(
                                            GradientPicker,
                                            {
                                                gradients: AllColors.gradients,
                                                value: _colorGradient,
                                                onChange: (NewColor) => {
                                                    onChange( colorType, NewColor )
                                                    onChange( colorType+'Solid', '' )
                                                    onChange( colorType+'Gradient', NewColor )
                                                },
                                            }
                                        )
                                    }

                                    return tabContent;
                                }
                            })
                        }else{
                            return el(
                                GradientPicker,
                                {
                                    gradients: AllColors.gradients,
                                    value: _color,
                                    onChange: (NewColor) => onChange( colorType, NewColor ),
                                }
                            )
                        }
                    }
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
                    ct.label,
                    ct
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
