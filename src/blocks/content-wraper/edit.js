
import { Fragment } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

const Edit = (props) => {

    const {
        clientId,
    } = props;

	const blockProps = useBlockProps({
        className: 'wpmozo-content-wraper',
    });

	return (
        <Fragment>
            <div {...blockProps}>
                <InnerBlocks
                    renderAppender={
                        select(
                            "core/block-editor"
                        ).getBlockOrder(clientId).length > 0
                            ? undefined
                            : InnerBlocks.ButtonBlockAppender
                    }
                />
            </div>
        </Fragment>
    );

};

export default Edit;