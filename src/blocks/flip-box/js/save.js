
import Style from "./style";

import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {

    const clientId = attributes.clientId;

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-flip-box-main' })} id={`block-${clientId}`}>
            <Style {...attributes} />
        </div>
    );
};

export default Save;