
import Style from "./style";

import { useBlockProps } from "@wordpress/block-editor";

const Save = ({attributes}) => {
  
    const clientId = attributes.clientId,
    altText = ! window.wpmozo.wpmozo_is_empty( attributes.altText ) 
    	? attributes.altText
    	: 'alt';
 
    return (
        <div className="floating-image-item-wrapper" id={`block-${clientId}`}>
            <Style {...attributes} />
            <img className="floating-image" src={ attributes.image.url } alt={altText} />
        </div>
    );
};

export default Save;