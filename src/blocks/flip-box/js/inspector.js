
import { WpmozoAlignment, WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker, WpmozoMediaUploader } from '../../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { 
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl,
    BaseControl,
    ButtonGroup,
    Button,
    TextControl,
    TextareaControl,
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    flipAllDirection = [
        {
            label: __( 'Top', 'wpmozo-addons-for-gutenberg' ),
            value: 'top',
        },
        {
            label: __( 'Bottom', 'wpmozo-addons-for-gutenberg' ),
            value: 'bottom',
        },
        {
            label: __( 'Left', 'wpmozo-addons-for-gutenberg' ),
            value: 'left',
        },
        {
            label: __( 'Right', 'wpmozo-addons-for-gutenberg' ),
            value: 'right',
        },
        ...( 'flip' === attributes.animationType 
            ? [
                {
                    label: __( 'Diagonal Left', 'wpmozo-addons-for-gutenberg' ),
                    value: 'diagonal-left',
                },
                {
                    label: __( 'Diagonal Right', 'wpmozo-addons-for-gutenberg' ),
                    value: 'diagonal-right',
                },
                {
                    label: __( 'Diagonal Left Inverted', 'wpmozo-addons-for-gutenberg' ),
                    value: 'diagonal-left-inverted',
                },
                {
                    label: __( 'Diagonal Right Inverted', 'wpmozo-addons-for-gutenberg' ),
                    value: 'diagonal-right-inverted',
                },
            ]
            : []
        )
    ];
    
    props = Object.assign({}, props, {preAttributes: {}});

    const [ contentType, setContentType ] = useState('front'),
    [ elementType, setElementType ] = useState('front'),
    [ typographyType, setTypographyType ] = useState('title'),
    [ flipBoxType, setFlipBoxType ] = useState('front'),
    [ frontTypographyType, setFrontTypographyType ] = useState('title'),
    [ backTypographyType, setBackTypographyType ] = useState('title'),
    [ elementStyleType, setelEmentStyleType ] = useState('front');

    const headingLavels = [
        {
            label: __( 'H1', 'wpmozo-addons-for-gutenberg' ),
            value: 'h1'
        },
        {
            label: __( 'H2', 'wpmozo-addons-for-gutenberg' ),
            value: 'h2'
        },
        {
            label: __( 'H3', 'wpmozo-addons-for-gutenberg' ),
            value: 'h3'
        },
        {
            label: __( 'H4', 'wpmozo-addons-for-gutenberg' ),
            value: 'h4'
        },
        {
            label: __( 'H5', 'wpmozo-addons-for-gutenberg' ),
            value: 'h5'
        },
        {
            label: __( 'H6', 'wpmozo-addons-for-gutenberg' ),
            value: 'h6'
        }
    ];

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Flip Box Layout', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Animation Type', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.animationType }
                        options={[
                            {
                                label: __( 'Flip', 'wpmozo-addons-for-gutenberg' ),
                                value: 'flip',
                            },
                            {
                                label: __( '3D Cube', 'wpmozo-addons-for-gutenberg' ),
                                value: 'cube',
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { animationType: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Animation Type', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.flipDirection }
                        options={ flipAllDirection }
                        onChange={ ( newValue ) => setAttributes( { flipDirection: newValue } ) }
                    />
                    { 'flip' === attributes.animationType && 
                        <>
                            <ToggleControl
                                label={ __( '3D Depth Effect', 'wpmozo-addons-for-gutenberg' ) }
                                checked={ attributes.depth3dEffect }
                                onChange={ ( newValue ) => setAttributes( { depth3dEffect: newValue } ) }
                            />
                            <ToggleControl
                                label={ __( 'Shacke On Flip', 'wpmozo-addons-for-gutenberg' ) }
                                checked={ attributes.shakeOnFlip }
                                onChange={ ( newValue ) => setAttributes( { shakeOnFlip: newValue } ) }
                            />
                        </>
                    }
                    <RangeControl
                        label={ __( 'Flip Speed(in ms)', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.flipSpeed }
                        onChange={ ( newValue ) => setAttributes( { flipSpeed: newValue } ) }
                        min={ 100 }
                        step={ 100 }
                        max={ 10000 }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Flip Box Content', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === contentType ) ? true : false }
                                onClick={ () => setContentType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === contentType ) ? true : false }
                                onClick={ () => setContentType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === contentType &&
                            <>
                                <TextControl
                                    label={ __( 'Title', 'wpmozo-addons-for-gutenberg' ) }
                                    value={ attributes.frontTitle }
                                    onChange={ ( newValue ) => setAttributes( { frontTitle: newValue } ) }
                                />
                                <TextareaControl
                                    label={ __( 'Content', 'wpmozo-addons-for-gutenberg' ) }
                                    onChange={ ( newValue ) => setAttributes( { frontContnet: newValue } ) }
                                    value={ attributes.frontContnet }
                                />
                            </>
                        }
                        { 'back' === contentType &&
                            <>
                                <TextControl
                                    label={ __( 'Title', 'wpmozo-addons-for-gutenberg' ) }
                                    value={ attributes.backTitle }
                                    onChange={ ( newValue ) => setAttributes( { backTitle: newValue } ) }
                                />
                                <TextareaControl
                                    label={ __( 'Content', 'wpmozo-addons-for-gutenberg' ) }
                                    onChange={ ( newValue ) => setAttributes( { backContnet: newValue } ) }
                                    value={ attributes.backContnet }
                                />
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'Flip Box Elements', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === elementType ) ? true : false }
                                onClick={ () => setElementType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === elementType &&
                            <>
                                <SelectControl
                                    label={ __( 'Element Type', 'wpmozo-addons-for-gutenberg' ) }
                                    value={ attributes.frontElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-addons-for-gutenberg' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-addons-for-gutenberg' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-addons-for-gutenberg' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { frontElType: newValue } ) }
                                />
                                { 'icon' === attributes.frontElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-addons-for-gutenberg' ) }
                                        iconPickerKey='frontElIcon'
                                        props={ props }
                                        value={ attributes.frontElIcon }
                                        onChange={ ( newValue ) => setAttributes( { frontElIcon: newValue } ) }
                                    />
                                }
                                { 'image' === attributes.frontElType &&
                                    <WpmozoMediaUploader 
                                        attrKye="frontElImage" 
                                        props={props} 
                                    />
                                }
                            </>
                        }
                        { 'back' === elementType &&
                            <>
                                <SelectControl
                                    label={ __( 'Element Type', 'wpmozo-addons-for-gutenberg' ) }
                                    value={ attributes.backElType }
                                    options={[
                                        {
                                            label: __( 'None', 'wpmozo-addons-for-gutenberg' ),
                                            value: 'none',
                                        },
                                        {
                                            label: __( 'Icon', 'wpmozo-addons-for-gutenberg' ),
                                            value: 'icon',
                                        },
                                        {
                                            label: __( 'Image', 'wpmozo-addons-for-gutenberg' ),
                                            value: 'image',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { backElType: newValue } ) }
                                />
                                { 'icon' === attributes.backElType &&
                                    <WpmozoIconpicker
                                        label={ __( 'Icon', 'wpmozo-addons-for-gutenberg' ) }
                                        iconPickerKey='backElIcon'
                                        props={ props }
                                        value={ attributes.backElIcon }
                                        onChange={ ( newValue ) => setAttributes( { backElIcon: newValue } ) }
                                    />
                                }
                                { 'image' === attributes.backElType &&
                                    <WpmozoMediaUploader 
                                        attrKye="backElImage" 
                                        props={props} 
                                    />
                                }
                            </>
                        }
                    </BaseControl>
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Global Styling', 'wpmozo-addons-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="global"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'TitleColor',
                                label: __( 'Title Color', 'wpmozo-addons-for-gutenberg' ),
                            },
                            {
                                key: 'ContentColor',
                                label: __( 'Content Color', 'wpmozo-addons-for-gutenberg' ),
                            } 
                        ]}
                    />
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'title' === typographyType ) ? true : false }
                                onClick={ () => setTypographyType( 'title' ) }
                            >
                                { __( 'Title', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'content' === typographyType ) ? true : false }
                                onClick={ () => setTypographyType( 'content' ) }
                            >
                                { __( 'Content', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'title' === typographyType &&
                            <WpmozoTypography
                                TypographyKey="globalTitle"
                                props={props}
                            />
                        }
                        { 'content' === typographyType &&
                            <WpmozoTypography
                                TypographyKey="globalContent"
                                props={props}
                            />
                        }
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'FlipBox Style', 'wpmozo-addons-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === flipBoxType ) ? true : false }
                                onClick={ () => setFlipBoxType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === flipBoxType ) ? true : false }
                                onClick={ () => setFlipBoxType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === flipBoxType &&
                            <>
                                <BaseControl
                                    label={ __( 'Heading Lavel', 'wpmozo-addons-for-gutenberg' ) }
                                >    
                                    <ButtonGroup>
                                        {headingLavels.map((item, key) => (
                                            <Button
                                                key={ 'front-label-'+item.value }
                                                isPressed={ ( item.value === attributes.frontHeadingLavel ) ? true : false }
                                                onClick={ ( newValue ) => setAttributes( { frontHeadingLavel: item.value } ) }
                                            >
                                                { item.label }
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                                <WpmozoColorPicker
                                    ColorKey="front"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'TitleColor',
                                            label: __( 'Title Color', 'wpmozo-addons-for-gutenberg' ),
                                        },
                                        {
                                            key: 'ContentColor',
                                            label: __( 'Content Color', 'wpmozo-addons-for-gutenberg' ),
                                        } 
                                    ]}
                                />
                                <BaseControl
                                    className="wpmozo-button-tabs-wrap"
                                >    
                                    <ButtonGroup>
                                        <Button
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'title' === frontTypographyType ) ? true : false }
                                            onClick={ () => setFrontTypographyType( 'title' ) }
                                        >
                                            { __( 'Title', 'wpmozo-addons-for-gutenberg' ) }
                                        </Button>
                                        <Button 
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'content' === frontTypographyType ) ? true : false }
                                            onClick={ () => setFrontTypographyType( 'content' ) }
                                        >
                                            { __( 'Content', 'wpmozo-addons-for-gutenberg' ) }
                                        </Button>
                                    </ButtonGroup>
                                    { 'title' === frontTypographyType &&
                                        <WpmozoTypography
                                            TypographyKey="frontTitle"
                                            props={props}
                                        />
                                    }
                                    { 'content' === frontTypographyType &&
                                        <WpmozoTypography
                                            TypographyKey="frontContent"
                                            props={props}
                                        />
                                    }
                                </BaseControl>
                            </>
                        }
                        { 'back' === flipBoxType &&
                            <>
                                <BaseControl
                                    label={ __( 'Heading Lavel', 'wpmozo-addons-for-gutenberg' ) }
                                >    
                                    <ButtonGroup>
                                        {headingLavels.map((item, key) => (
                                            <Button
                                                key={ 'back-label-'+item.value }
                                                isPressed={ ( item.value === attributes.backHeadingLavel ) ? true : false }
                                                onClick={ ( newValue ) => setAttributes( { backHeadingLavel: item.value } ) }
                                            >
                                                { item.label }
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                                <WpmozoColorPicker
                                    ColorKey="back"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'TitleColor',
                                            label: __( 'Title Color', 'wpmozo-addons-for-gutenberg' ),
                                        },
                                        {
                                            key: 'ContentColor',
                                            label: __( 'Content Color', 'wpmozo-addons-for-gutenberg' ),
                                        } 
                                    ]}
                                />
                                <BaseControl
                                    className="wpmozo-button-tabs-wrap"
                                >    
                                    <ButtonGroup>
                                        <Button
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'title' === backTypographyType ) ? true : false }
                                            onClick={ () => setBackTypographyType( 'title' ) }
                                        >
                                            { __( 'Title', 'wpmozo-addons-for-gutenberg' ) }
                                        </Button>
                                        <Button 
                                            className="wpmozo-button-tabs-btn"
                                            isPressed={ ( 'content' === backTypographyType ) ? true : false }
                                            onClick={ () => setBackTypographyType( 'content' ) }
                                        >
                                            { __( 'Content', 'wpmozo-addons-for-gutenberg' ) }
                                        </Button>
                                    </ButtonGroup>
                                    { 'title' === backTypographyType &&
                                        <WpmozoTypography
                                            TypographyKey="backTitle"
                                            props={props}
                                        />
                                    }
                                    { 'content' === backTypographyType &&
                                        <WpmozoTypography
                                            TypographyKey="backContent"
                                            props={props}
                                        />
                                    }
                                </BaseControl>
                            </>
                        }
                    </BaseControl>
                </PanelBody>
                 <PanelBody title={ __( 'FlipBox Image/Icon Style', 'wpmozo-addons-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'front' === elementStyleType ) ? true : false }
                                onClick={ () => setelEmentStyleType( 'front' ) }
                            >
                                { __( 'Front', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'back' === elementStyleType ) ? true : false }
                                onClick={ () => setelEmentStyleType( 'back' ) }
                            >
                                { __( 'Back', 'wpmozo-addons-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'front' === elementStyleType &&
                            <>
                                <WpmozoColorPicker
                                    ColorKey="frontElement"
                                    props={props}
                                    ColorTypes={[ 
                                        {
                                            key: 'IconColor',
                                            label: __( 'Icon Color', 'wpmozo-addons-for-gutenberg' ),
                                        },
                                    ]}
                                />
                                <RangeControl
                                    label={ __( 'Icon Size', 'wpmozo-addons-for-gutenberg' ) }
                                    value={ attributes.frontElementIconSize }
                                    onChange={ ( newValue ) => setAttributes( { frontElementIconSize: newValue } ) }
                                    min={ 0 }
                                    max={ 300 }
                                />
                                <SelectControl
                                    label={ __( 'Image/Icon Placment', 'wpmozo-addons-for-gutenberg' ) }
                                    value={ attributes.frontElementAlign }
                                    options={[
                                        {
                                            label: __( 'Top', 'wpmozo-addons-for-gutenberg' ),
                                            value: 'top',
                                        },
                                        {
                                            label: __( 'Left', 'wpmozo-addons-for-gutenberg' ),
                                            value: 'left',
                                        },
                                        {
                                            label: __( 'Right', 'wpmozo-addons-for-gutenberg' ),
                                            value: 'right',
                                        }
                                    ]}
                                    onChange={ ( newValue ) => setAttributes( { frontElementAlign: newValue } ) }
                                />
                            </>
                        }
                        { 'back' === elementStyleType &&
                            <>
                            </>
                        }
                    </BaseControl>
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;