
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";


const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId,
    toggleSwitchTypeClass = ' wpmozo_'+attributes.toggleSwitchType,
    parent = '#block-'+clientId,
    titleWrapClass = ( 'toggle' === attributes.toggleSwitchType ) ? ' wpmozo_switch_trigger' : '';

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
        wpmozo_toggle_switch( jQuery(this), selector );

    });

    jQuery('.wpmozo-adfgu-toggle-title-wrap > :header').click(function(e){

        let wrap = jQuery(this).closest('.wpmozo-adfgu-toggle-title-wrap'),
        selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
        input = selector.find('.wpmozo-adfgu-toggle-field');

        if ( wrap.hasClass('wpmozo-adfgu-toggle-title-one') ) {
            input.prop('checked', false);
        }else{
            input.prop('checked', true);
        }

        wpmozo_toggle_switch( input, selector );

    });

    jQuery('.wpmozo_switch_trigger').click(function(e){

        let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
        input = selector.find('.wpmozo-adfgu-toggle-field');

        if ( jQuery(this).hasClass('wpmozo-adfgu-toggle-title-one') ) {
            input.prop('checked', false);
        }else{
            input.prop('checked', true);
        }

        wpmozo_toggle_switch( input, selector );

    });

    jQuery(document).ready(function ($) {
        jQuery('.wpmozo-adfgu-toggle-field').each(function( keym, el ){

            let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
            wpmozo_toggle_switch( jQuery(this), selector );

        });
    });

    function wpmozo_toggle_switch( input, main ){

        if( input.is(':checked') ){
            main.find('.wpmozo-adfgu-content-toggle-one').hide();
            main.find('.wpmozo-adfgu-content-toggle-two').show();
        }else{
            main.find('.wpmozo-adfgu-content-toggle-one').show();
            main.find('.wpmozo-adfgu-content-toggle-two').hide();
        }

    }

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

    const titleOne = (
       <div className={`wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-one${titleWrapClass}`}>
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
    );

    const titleTwo = (
        <div className={`wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-two${titleWrapClass}`}>
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
    );

	return (
        <Fragment>
            <Inspector {...props} />
            <Style {...attributes} />
            <div {...blockProps}>
                <div className={`wpmozo-adfgu-toggle-button-wrap${toggleSwitchTypeClass}`}>
                    { 'toggle' === attributes.toggleSwitchType && (
                        <>
                            <input 
                                className="wpmozo-adfgu-toggle-field" 
                                type="checkbox" 
                                value=""
                            />
                            <label className={`wpmozo-adfgu-toggle-switch`}>
                                { titleOne }
                                { titleTwo }
                            </label>
                        </>
                    )}
                    { 'toggle' !== attributes.toggleSwitchType && (
                        <>
                            { titleOne }
                            <div className={`wpmozo-adfgu-toggle-button${toggleSwitchTypeClass}`}>
                                <label className="wpmozo-adfgu-toggle-button-inner">
                                    <input 
                                        className="wpmozo-adfgu-toggle-field" 
                                        type="checkbox" 
                                        value=""
                                    />
                                    <div className={`wpmozo-adfgu-toggle-switch${toggleSwitchTypeClass}`}></div>
                                </label>
                            </div>
                            { titleTwo }
                        </>
                    )}
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