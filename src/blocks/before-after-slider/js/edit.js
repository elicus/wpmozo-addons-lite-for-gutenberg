
import Inspector from "./inspector";

import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object; 

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId;
	const blockProps = useBlockProps({
        className: 'wpmozo-adfgu-before-after-slider-wrapper',
    });

    let beforeImage = ( attributes.beforeImage ) ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = ( attributes.afterImage ) ? attributes.afterImage : WPMozoEditorObj.placeholderImg

    jQuery("#block-"+clientId).html();
    //jQuery(document).ready(function(){
        //if ( jQuery("#block-"+clientId).find('.twentytwenty-wrapper').length < 1 ) {
            jQuery("#block-"+clientId+" .wpmozo-ae-before-after-image-wrapper").twentytwenty();
        //}
    //});

	return (
        <>
            <Inspector {...props} />
            <div {...blockProps}>
                <div className="wpmozo-ae-before-after-image-wrapper">
                    <img src={beforeImage} />
                    <img src={afterImage} />
                </div>
            </div>
        </>
    );

};

export default Edit;