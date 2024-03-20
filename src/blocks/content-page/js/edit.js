
import { Fragment } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { select } from "@wordpress/data";
import ServerSideRender from "@wordpress/server-side-render";


const Edit = (props) => {

    const {
        clientId,
    } = props;

	return (
        <Fragment>
           <ServerSideRender
                block='wpmozo/content-page'
                attributes={{ pageID: 7001 }}
                urlQueryArgs={{ pageID: 7001 }}
            />
        </Fragment>
    );

};

export default Edit;