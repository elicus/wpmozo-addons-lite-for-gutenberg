
import { WpmozoDimensions, WpmozoAlignment, WpmozoColorPicker, WpmozoTypography } from '../../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { 
    PanelBody,
    SelectControl,
    TextareaControl,
    BaseControl,
} from "@wordpress/components";
const WPMozoEditorObj = wpmozo_adfgu_editor_object; 

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = attributes.clientId,
    bgAllSize = [
        {
            label: __( 'Cover', 'wpmozo-addons-for-gutenberg' ),
            value: 'cover',
        },
        {
            label: __( 'Contain', 'wpmozo-addons-for-gutenberg' ),
            value: 'contain',
        },
        {
            label: __( 'Auto', 'wpmozo-addons-for-gutenberg' ),
            value: 'auto',
        }
    ],
    bgAllPositions = [
        {
            label: __('Top Left', 'wpmozo-addons-for-gutenberg'),
            value: 'top left'
        },
        {
            label: __('Top Center', 'wpmozo-addons-for-gutenberg'),
            value: 'top center'
        },
        {
            label: __('Top Right', 'wpmozo-addons-for-gutenberg'),
            value: 'top right'
        },
        {
            label: __('Center Left', 'wpmozo-addons-for-gutenberg'),
            value: 'center left'
        },
        {
            label: __('Center', 'wpmozo-addons-for-gutenberg'),
            value: 'center'
        },
        {
            label: __('Center Right', 'wpmozo-addons-for-gutenberg'),
            value: 'center right'
        },
        {
            label: __('Bottom Left', 'wpmozo-addons-for-gutenberg'),
            value: 'bottom left'
        },
        {
            label: __('Bottom Center', 'wpmozo-addons-for-gutenberg'),
            value: 'bottom center'
        },
        {
            label: __('Bottom Right', 'wpmozo-addons-for-gutenberg'),
            value: 'bottom right'
        },
    ],
    bgAllRepeat = [
        {
            label: __('No Repeat', 'wpmozo-addons-for-gutenberg'),
            value: 'no-repeat'
        },                  
        {
            label: __('Repeat', 'wpmozo-addons-for-gutenberg'),
            value: 'repeat'
        },
        {
            label: __('Repeat X (horizontal)', 'wpmozo-addons-for-gutenberg'),
            value: 'repeat-x'
        },
        {
            label: __('Repeat Y (vertical)', 'wpmozo-addons-for-gutenberg'),
            value: 'repeat-y'
        },
        {
            label: __('Space', 'wpmozo-addons-for-gutenberg'),
            value: 'space'
        },
        {
            label: __('Round', 'wpmozo-addons-for-gutenberg'),
            value: 'round'
        },
    ],
    bgAllOverlay = [
        {
            label: __('None', 'wpmozo-addons-for-gutenberg'),
            value: 'none'
        },
        {
            label: __('Color', 'wpmozo-addons-for-gutenberg'),
            value: 'color'
        },
        {
            label: __('Gradient', 'wpmozo-addons-for-gutenberg'),
            value: 'gradient'
        },
    ];

    props = Object.assign({}, props, {preAttributes: {}});

    let backImage = ( attributes.fancyTextBackgroundImg ) ? attributes.fancyTextBackgroundImg : WPMozoEditorObj.placeholderImg;


	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Fancy Text Content', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Text Style', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.textStyle }
                        options={[
                            {
                                label: __( 'Gradient', 'wpmozo-addons-for-gutenberg' ),
                                value: 'gradient',
                            },
                            {
                                label: __( 'Background Clipping', 'wpmozo-addons-for-gutenberg' ),
                                value: 'clipping',
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { textStyle: newValue } ) }
                    />
                    <TextareaControl
                      label={ __( 'Fancy Text', 'wpmozo-addons-for-gutenberg' ) }
                      onChange={ ( newValue ) => setAttributes( { fancyText: newValue } ) }
                      value={ attributes.fancyText }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Fancy Text Style', 'wpmozo-addons-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    { 'gradient' === attributes.textStyle && (
                        <>
                            <WpmozoColorPicker
                                ColorKey="fancyText"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'Background',
                                        label: __( 'Background', 'wpmozo-addons-for-gutenberg' ),
                                        onlyGradient: true,
                                    },
                                ]}
                            />
                        </>
                    )}
                    { 'clipping' === attributes.textStyle && (
                        <>
                            <BaseControl 
                                label={ __( 'Background Image', 'wpmozo-addons-for-gutenberg' ) }
                            >
                                <MediaUploadCheck>
                                    <MediaUpload
                                        allowedTypes={["image"]}
                                        accept="image/*"
                                        value={ backImage }
                                        onSelect={(media) => {
                                            setAttributes( { fancyTextBackgroundImg: media.url } )
                                        }}
                                        render={({ open }) => {
                                            return (
                                                <>
                                                    <button className="wpmozo-background-img-selction-wrap components-button block-editor-block-styles__item">
                                                        <div 
                                                            className="wpmozo-background-img-selction-overlay"
                                                            onClick={(event) => {
                                                                event.stopPropagation();
                                                                open();
                                                            }}
                                                        >
                                                            {__( 'Select Image', 'wpmozo-addons-for-gutenberg' )}
                                                        </div>
                                                        <img
                                                            src={ backImage }
                                                        />
                                                    </button>
                                                </>
                                            )
                                        }}
                                    >
                                    </MediaUpload>
                                </MediaUploadCheck>
                            </BaseControl>
                            <SelectControl
                                label={ __( 'Background Size', 'wpmozo-addons-for-gutenberg' ) }
                                value={ attributes.textBgSize }
                                options={ bgAllSize }
                                onChange={ ( newValue ) => setAttributes( { textBgSize: newValue } ) }
                            />
                            <SelectControl
                                label={ __( 'Background Position', 'wpmozo-addons-for-gutenberg' ) }
                                value={ attributes.textBgPosition }
                                options={ bgAllPositions }
                                onChange={ ( newValue ) => setAttributes( { textBgPosition: newValue } ) }
                            /> 
                            <SelectControl
                                label={ __( 'Background Repeat', 'wpmozo-addons-for-gutenberg' ) }
                                value={ attributes.textBgRepeat }
                                options={ bgAllRepeat }
                                onChange={ ( newValue ) => setAttributes( { textBgRepeat: newValue } ) }
                            />
                            <SelectControl
                                label={ __( 'Background Overlay', 'wpmozo-addons-for-gutenberg' ) }
                                value={ attributes.textBgOverlay }
                                options={ bgAllOverlay }
                                onChange={ ( newValue ) => setAttributes( { textBgOverlay: newValue } ) }
                            />    
                            { 'none' !== attributes.textBgOverlay && (
                                <> 
                                    <WpmozoColorPicker
                                        ColorKey="textBgOverlay"
                                        props={props}
                                        ColorTypes={[ 
                                            {
                                                key: 'Color',
                                                label: __( 'Clip Background Color', 'wpmozo-addons-for-gutenberg' ),
                                                onlyGradient: ( 'gradient' === attributes.textBgOverlay ) ? true : false,
                                            },
                                        ]}
                                    /> 
                                    <WpmozoDimensions
                                        DimensionKey='textBgDimensions'
                                        DimensionsTypes={{
                                            padding: true,
                                        }}
                                        props={props}
                                    />
                                </>
                            )} 
                            <WpmozoAlignment
                                label={__( 'Text Alignment', 'wpmozo-addons-for-gutenberg')}
                                onChange={ ( newValue ) => setAttributes( { textAlignment: newValue } ) }
                                value={ attributes.textAlignment }
                            />                
                        </>
                    )}
                </PanelBody>
                <PanelBody title={ __( 'Fancy Text Typography', 'wpmozo-addons-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoTypography
                        TypographyKey="text"
                        props={props}
                        TypoTypes={{
                            'FontSize': true,
                            'FontAppearance': true,
                            'LetterSpacing': true,
                            'LetterCase': true,
                            'LineHeight': true,
                        }}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;