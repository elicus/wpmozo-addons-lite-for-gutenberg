
import Style from "./style";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const Save = ({ attributes }) => {

    const clientId = attributes.clientId,
    toggleSwitchTypeClass = ' wpmozo_'+attributes.toggleSwitchType;

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
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-content-toggle-main' })}>
            <Style {...attributes} />
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
                <InnerBlocks.Content />
            </div>    
        </div>
    );
};

export default Save;