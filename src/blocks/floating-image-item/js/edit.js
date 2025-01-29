
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
} from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";


const Edit = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    altText = ! window.wpmozo.wpmozo_is_empty( attributes.altText ) 
        ? attributes.altText
        : 'alt',
    blockProps = useBlockProps({
        className:"swiper-slide"
    });

    attributes.clientId = clientId;

	return (
        <Fragment>
            <Inspector {...props} />
            <div className="swiper-slide" id={`block-${clientId}`}>
                <Style {...attributes} />
                <div className="logo-wrap">
                    <img className="logo-img" src={ attributes.image.url } alt={altText} />
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;