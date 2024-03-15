
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId;
    attributes.clientId = clientId;

	const blockProps = useBlockProps();

    const wraperTemplate = [
        [ 'wpmozo/content-wraper', {
            lock: { 
                remove: true 
            }
        } ],
    ];


	return (
        <Fragment>
            <Inspector {...props} />
            <div {...blockProps}>
                <Style {...attributes} />
                <InnerBlocks 
                    template={ wraperTemplate }
                    allowedBlocks={false}
                />
            </div>
        </Fragment>
    );

};

export default Edit;