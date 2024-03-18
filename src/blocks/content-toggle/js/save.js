
import Style from "./style";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object; 

const Save = ({ attributes }) => {
    
    const elId = 'block-'+attributes.clientId;

    return (
        <div {...useBlockProps.save()}>
            <Style {...attributes} />
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;