
import Style from "./style";

import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {

    const clientId = attributes.clientId;

    return (
        <div {...useBlockProps.save({className: 'wpmozo-adfgu-fancy-text-wrap'})} id={`block-${clientId}`}>
            <Style {...attributes} />
            <div
                className={`wpmozo-adfgu-fancy-text-inner ${attributes.textStyle}`}
            >
            { attributes.fancyText }
            </div>
        </div>
    );
};

export default Save;