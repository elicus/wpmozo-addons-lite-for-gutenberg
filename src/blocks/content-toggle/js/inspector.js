
import { WpmozoMediaUploader, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker } from '../../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    ToggleControl,
    TextControl,
    SelectControl,
    RangeControl
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;
    
    props = Object.assign({}, props, {preAttributes: {}});

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Toggle One Content', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Toggle Title', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.toggleOneTitle }
                        onChange={ ( newValue ) => setAttributes( { toggleOneTitle: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Icon', 'wpmozo-addons-for-gutenberg' ) }
                        iconPickerKey='toggleOneIcon'
                        props={ props }
                        value={ attributes.toggleOneIcon }
                        onChange={ ( newValue ) => setAttributes( { toggleOneIcon: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Content Type', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.toggleOneContentType }
                        options={[
                            {
                                label: __( 'Text', 'wpmozo-addons-for-gutenberg' ),
                                value: 'text',
                            },
                            {
                                label: __( 'Page', 'wpmozo-addons-for-gutenberg' ),
                                value: 'page',
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { toggleOneContentType: newValue } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Toggle Two Content', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Toggle Title', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.toggleTwoTitle }
                        onChange={ ( newValue ) => setAttributes( { toggleTwoTitle: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Icon', 'wpmozo-addons-for-gutenberg' ) }
                        iconPickerKey='toggleTwoIcon'
                        props={ props }
                        value={ attributes.toggleTwoIcon }
                        onChange={ ( newValue ) => setAttributes( { toggleTwoIcon: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Content Type', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.toggleTwoContentType }
                        options={[
                            {
                                label: __( 'Text', 'wpmozo-addons-for-gutenberg' ),
                                value: 'text',
                            },
                            {
                                label: __( 'Page', 'wpmozo-addons-for-gutenberg' ),
                                value: 'page',
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { toggleTwoContentType: newValue } ) }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'General Style' ) } initialOpen={false}>
                    
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;