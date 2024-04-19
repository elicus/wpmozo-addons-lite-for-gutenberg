
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import {
    useBlockProps,
    MediaPlaceholder,
    MediaUpload,
    MediaUploadCheck,
    BlockControls,
    InnerBlocks,
    useInnerBlocksProps
} from '@wordpress/block-editor';


import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    blockProps = useBlockProps(),
    swiperElRef = useRef(null);

    let innerBlocks = [];
    if (  ! wpmozoCoreFun.wpmozo_is_empty( attributes.images ) ) {
        attributes.images.map((logo) => {
            innerBlocks.push(
                [ 
                    'wpmozo/logo-slide', 
                    {
                        logo: logo,
                        lock: { 
                            remove: true 
                        }
                    },
                ]
            )
        });
    }

    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        allowedBlocks: [ 'wpmozo/logo-slide' ],
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
                        'Add Logos',
                        'wpmozo-addons-for-gutenberg'
                    ),
                }}
            />
        }
            <Inspector {...props} />
            <Style {...attributes} />
            <div { ...blockProps }>
                <swiper-container
                  ref={swiperElRef}
                  slides-per-view="3"
                  navigation="true"
                  pagination="true"
                >
                { ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) &&
                    innerBlocksProps.children
                }
                </swiper-container>
            </div>
        </Fragment>
    );

};

export default Edit;