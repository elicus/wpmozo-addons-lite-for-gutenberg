
import { __ } from "@wordpress/i18n";
import { InspectorControls, HeightControl } from "@wordpress/block-editor";
import { 
    PanelBody
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Container', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <HeightControl
                        label={ __( 'Container Height', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.containerHeight }
                        onChange={ ( newValue ) => setAttributes( { containerHeight: newValue } ) }
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;