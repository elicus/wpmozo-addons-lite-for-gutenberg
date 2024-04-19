
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
} from '@wordpress/block-editor';


const Edit = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId;

    const blockProps = useBlockProps();

	return (
        <swiper-slide {...blockProps}>
            <Inspector {...props} />
            <Style {...attributes} />
                <img src={ attributes.logo.url } />
        </swiper-slide>
    );

};

export default Edit;