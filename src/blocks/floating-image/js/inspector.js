
import { WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker } from '../../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    [ deviceType, setDeviceType ] = useState('tablet');
    
    props = Object.assign({}, props, {preAttributes: {}});

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( '', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;