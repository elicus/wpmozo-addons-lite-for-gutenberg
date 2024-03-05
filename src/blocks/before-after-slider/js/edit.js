import '../../../components/index';
import Inspector from "./inspector";

import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const Edit = (props) => {

	const blockProps = useBlockProps({
        className: `eb-guten-block-main-parent-wrapper`,
    });

	return (
        <>
            <Inspector {...props} />
            <div {...blockProps}>
                <div>
                    <div className="eb-accordion-add-button">
                        <span className="eb-accordion-add-button-label">
                            {__("Add Accordion Item", "essential-blocks")}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Edit;