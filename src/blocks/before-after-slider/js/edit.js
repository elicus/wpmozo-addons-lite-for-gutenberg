
import Inspector from "./inspector";

import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object; 

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId;
	const blockProps = useBlockProps();

    let beforeImage = ( attributes.beforeImage ) ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = ( attributes.afterImage ) ? attributes.afterImage : WPMozoEditorObj.placeholderImg,
    beforeLabel = ( attributes.beforeHasLabel ) ? attributes.beforeLabel : '',
    afterLabel = ( attributes.afterHasLabel ) ? attributes.afterLabel : '';
   
    jQuery(document).ready(function(){
        let main = jQuery('#block-'+clientId);
        if( main.find('.twentytwenty-wrapper').length > 0 ){
            let content = main.find('.twentytwenty-wrapper').html();
            main.html( content );
            main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-overlay').remove();
            main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-handle').remove();
        }
        main.find('.wpmozo-adfgu-before-after-image-wrapper').twentytwenty({
            default_offset_pct: attributes.handleOffset,
            orientation: attributes.sliderOrientation,
            before_label: beforeLabel,
            after_label: afterLabel,
            move_slider_on_hover: attributes.moveHandleOnHover,
            move_with_handle_only: true,
            click_to_move: attributes.moveHandleOnClick,
        });
    })

	return (
        <>
            <div {...blockProps}>
                <div className="wpmozo-adfgu-before-after-image-wrapper">
                    <img src={beforeImage} />
                    <img src={afterImage} />
                </div>
            </div>
            <Inspector {...props} />
        </>
    );

};

export default Edit;