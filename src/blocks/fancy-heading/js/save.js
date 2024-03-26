
import Style from "./style";

import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {

    const clientId = attributes.clientId;

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-fancy-headign-main' })} id={`block-${clientId}`}>
            <Style {...attributes} />
            <div className="wpmozo-adfgu-fancy-heading-inner">
                <span className="wpmozo-adfgu-pre-text">{ attributes.preHeading }</span>
                <span className="wpmozo-adfgu-main-text">{ attributes.mainHeading }</span>
                <span className="wpmozo-adfgu-post-text">{ attributes.postHeading }</span>
            </div>
        </div>
    );
};

export default Save;