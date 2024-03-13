
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
                        props={props}
                        onChange={ ( newValue ) => setAttributes( { toggleOneIcon: newValue } ) }
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