
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { useEffect, Fragment } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object; 

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId;
    attributes.clientId = clientId;

	const blockProps = useBlockProps();
    let init = false;

    let beforeImage = ( attributes.beforeImage ) ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = ( attributes.afterImage ) ? attributes.afterImage : WPMozoEditorObj.placeholderImg,
    beforeLabel = ( attributes.beforeHasLabel ) ? attributes.beforeLabel : '',
    afterLabel = ( attributes.afterHasLabel ) ? attributes.afterLabel : '';

    function wpmozo_before_init( main ){
        main.find('.twentytwenty-wrapper').removeClass('twentytwenty-wrapper');
        main.find('.twentytwenty-horizontal').removeClass('twentytwenty-horizontal');
        main.find('.wpmozo-adfgu-before-after-image-wrapper').unwrap();
        main.find('.wpmozo-adfgu-before-after-image-wrapper').removeClass('twentytwenty-container');
        
        let beforeSrc = main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').attr('src');
        main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').remove();
        let afterSrc = main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').attr('src');
        main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').remove();

        main.find('.wpmozo-adfgu-before-after-image-wrapper').append( '<img src="'+beforeSrc+'">' );
        main.find('.wpmozo-adfgu-before-after-image-wrapper').append( '<img src="'+afterSrc+'">' );

        main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-before').removeClass('twentytwenty-before');
        main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-after').removeClass('twentytwenty-after');
        main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-overlay').remove();
        main.find('.wpmozo-adfgu-before-after-image-wrapper .twentytwenty-handle').remove();
    }

    useEffect(() => {
        setTimeout(function() {
           
            let editorIfram = jQuery('body').find('[name="editor-canvas"]').contents(),
            main = editorIfram.find('body').find('#block-'+clientId),
            imgWrap = main.find('.wpmozo-adfgu-before-after-image-wrapper');

            if( main.find('.twentytwenty-wrapper').length < 1 ){
                init = true;
                if( main.find('.twentytwenty-wrapper').length > 0 ){
                    wpmozo_before_init( main );
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
            }

        }, 10);
        
    });

    useEffect(() => {
        setTimeout(function() {
           
            let editorIfram = jQuery('body').find('[name="editor-canvas"]').contents(),
            main = editorIfram.find('body').find('#block-'+clientId),
            imgWrap = main.find('.wpmozo-adfgu-before-after-image-wrapper');
            if ( ! init ) {
                if( main.find('.twentytwenty-wrapper').length > 0 ){
                    wpmozo_before_init( main );
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
            }

        }, 10);
        
    }, [ attributes.handleOffset, attributes.sliderOrientation, attributes.beforeLabel, attributes.afterLabel, attributes.moveHandleOnHover, attributes.moveHandleOnClick, attributes.overlayOnHover ]);


	return (
        <Fragment>
            <Inspector {...props} />
            <div {...blockProps}>
                <Style {...attributes} />
                <div className="wpmozo-adfgu-before-after-image-wrapper">
                    <img src={beforeImage} />
                    <img src={afterImage} />
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;