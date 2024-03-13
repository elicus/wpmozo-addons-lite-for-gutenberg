
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { useEffect, Fragment } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object; 

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId;
    attributes.clientId = clientId;

	const blockProps = useBlockProps();
	return (
        <Fragment>
            <Inspector {...props} />
            <div {...blockProps}>
                <Style {...attributes} />
                
            </div>
        </Fragment>
    );

};

export default Edit;