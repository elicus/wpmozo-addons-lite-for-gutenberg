
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import {
    useBlockProps,
    MediaPlaceholder,
    MediaUpload,
    MediaUploadCheck,
    InnerBlocks,
    useInnerBlocksProps
} from '@wordpress/block-editor';

import { useRef, useEffect } from 'react';

const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    blockProps = useBlockProps();

    attributes.clientId = clientId;

    let innerBlocks = [];

    if (  ! wpmozoCoreFun.wpmozo_is_empty( attributes.images ) ) {
        attributes.images.map((image) => {
            innerBlocks.push(
                [ 
                    'wpmozo/floating-image-item', 
                    {
                        image: image,
                        lock: { 
                            remove: true 
                        }
                    },
                ]
            )
        });
    }

    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        allowedBlocks: [ 'wpmozo/floating-image-item' ],
        template: innerBlocks,
    });

	return (
        <Fragment>
        { wpmozoCoreFun.wpmozo_is_empty( attributes.images ) &&
           <MediaPlaceholder
                multiple={true}
                onSelect={(media) =>
                    setAttributes({
                        images: media,
                    })
                }
                onFilesPreUpload={(media) =>
                    setAttributes({
                        images: media,
                    })
                }
                onSelectURL={false}
                allowedTypes={['image']}
                labels={{
                    title: __(
                        'Add Images',
                        'wpmozo-addons-lite-for-gutenberg'
                    ),
                    instructions: __(
                        'Insert Images',
                        'wpmozo-addons-lite-for-gutenberg'
                    ),
                }}
            />
        }
        { ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) &&
            <Fragment>
                <Inspector {...props} />
                <div { ...blockProps } id={`block-${clientId}`}>
                    <Style {...attributes} />
                    <div className="wpmozo-adfgu-floating-image-wrapper">
                        { innerBlocksProps.children }
                    </div>
                </div>
            </Fragment>
        }
        </Fragment>
    );

};

export default Edit;