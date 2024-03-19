
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId,
    toggleSwitchTypeClass = ' wpmozo_'+attributes.toggleSwitchType;

    attributes.clientId = clientId;

	const blockProps = useBlockProps({
        className: 'wpmozo-adfgu-content-toggle-main',
    });

    const wraperTemplate = [
        [ 'wpmozo/content-wraper', {
            className: 'wpmozo-adfgu-content-toggle-one',
            lock: { 
                remove: true 
            }
        } ],
        [ 'wpmozo/content-wraper', {
            className: 'wpmozo-adfgu-content-toggle-two',
            lock: { 
                remove: true 
            }
        } ],
    ];

    jQuery('.wpmozo-adfgu-toggle-field').change(function(e){

        let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
        if( jQuery(this).is(':checked') ){
            selector.find('.wpmozo-adfgu-content-toggle-one').hide();
            selector.find('.wpmozo-adfgu-content-toggle-two').show();
        }else{
            selector.find('.wpmozo-adfgu-content-toggle-one').show();
            selector.find('.wpmozo-adfgu-content-toggle-two').hide();
        }

    });

    jQuery(document).ready(function ($) {
        jQuery('.wpmozo-adfgu-toggle-field').each(function( keym, el ){

            let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
            if( jQuery(this).is(':checked') ){
                selector.find('.wpmozo-adfgu-content-toggle-one').hide();
                selector.find('.wpmozo-adfgu-content-toggle-two').show();
            }else{
                selector.find('.wpmozo-adfgu-content-toggle-one').show();
                selector.find('.wpmozo-adfgu-content-toggle-two').hide();
            }

        });
    });

    const iconOne = (
        <div className="icon-wrapper">
            <i className={`${ attributes.toggleOneIcon }`}></i>
        </div>
    );

    const iconTwo = (
        <div className="icon-wrapper">
            <i className={`${ attributes.toggleTwoIcon }`}></i>
        </div>
    );

	return (
        <Fragment>
            <Inspector {...props} />
            <Style {...attributes} />
            <div {...blockProps}>
                <div className="wpmozo-adfgu-toggle-button-wrap">
                    <div className="wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-one">
                        { 'before' === attributes.toggleOneIconPostion &&
                            iconOne
                        }
                        <h5>
                            { attributes.toggleOneTitle }
                        </h5>
                        { 'after' === attributes.toggleOneIconPostion &&
                            iconOne
                        }
                    </div>
                    <div className="wpmozo-adfgu-toggle-button">
                        <label className="wpmozo-adfgu-toggle-button-inner">
                            <input 
                                className="wpmozo-adfgu-toggle-field" 
                                type="checkbox" 
                                value=""
                            />
                            <div className={`wpmozo-adfgu-toggle-switch${toggleSwitchTypeClass}`}></div>
                        </label>
                    </div>
                    <div className="wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-one">
                        { 'before' === attributes.toggleTwoIconPostion &&
                            iconTwo
                        }
                        <h5>
                            { attributes.toggleTwoTitle }
                        </h5>
                        { 'after' === attributes.toggleTwoIconPostion &&
                            iconTwo
                        }
                    </div>
                </div>
                <div className="wpmozo-adfgu-content-toggle-content-wrap">
                    <InnerBlocks 
                        template={ wraperTemplate }
                        allowedBlocks={false}
                    />
                </div>    
            </div>
        </Fragment>
    );

};

export default Edit;