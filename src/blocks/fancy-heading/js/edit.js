
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId;

	return (
        <Fragment>
            <Inspector {...props} />
            <Style {...attributes} />
            <div {...blockProps}>
                   
            </div>
        </Fragment>
    );

};

export default Edit;