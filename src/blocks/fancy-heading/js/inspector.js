
import { WpmozoAlignment, WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker } from '../../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    ToggleControl,
    TextControl,
    SelectControl,
    RangeControl,
    BaseControl,
    ButtonGroup,
    Button
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;
    
    props = Object.assign({}, props, {preAttributes: {}});

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
                <PanelBody title={ __( 'Heading Content', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Pre Heading', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.preHeading }
                        onChange={ ( newValue ) => setAttributes( { preHeading: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'Main Heading', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.mainHeading }
                        onChange={ ( newValue ) => setAttributes( { mainHeading: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'Post Heading', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.postHeading }
                        onChange={ ( newValue ) => setAttributes( { postHeading: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Display In Stack', 'wpmozo-addons-for-gutenberg' ) }
                        checked={ attributes.displayInStack }
                        onChange={ ( newValue ) => setAttributes( { displayInStack: newValue } ) }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Global Text Settings', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <BaseControl
                        label={ __( 'Heading Lavel', 'wpmozo-addons-for-gutenberg' ) }
                    >    
                        <ButtonGroup>
                            {headingLavels.map((item, key) => (
                                <Button 
                                    variant="tertiary"
                                    isPressed={ ( item.value === attributes.headingLavel ) ? true : false }
                                    onClick={ ( newValue ) => setAttributes( { headingLavel: item.value } ) }
                                >
                                    { item.label }
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                    <WpmozoAlignment
                        label={__( 'Heading Alignment', 'wpmozo-addons-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { headingAlignment: newValue } ) }
                        value={ attributes.headingAlignment }
                    />
                    <WpmozoColorPicker
                        ColorKey="heading"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Color', 'wpmozo-addons-for-gutenberg' ),
                            },
                            {
                                key: 'Background',
                                label: __( 'Background', 'wpmozo-addons-for-gutenberg' ),
                            },
                        ]}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;