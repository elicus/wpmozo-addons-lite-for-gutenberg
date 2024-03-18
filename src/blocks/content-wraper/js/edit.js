
import { Fragment } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const Edit = (props) => {

	const blockProps = useBlockProps({
        className: 'wpmozo-content-wraper',
    });

	return (
        <Fragment>
            <div {...blockProps}>
                <InnerBlocks/>
            </div>
        </Fragment>
    );

};

export default Edit;