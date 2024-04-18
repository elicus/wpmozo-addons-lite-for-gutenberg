
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
} from '@wordpress/block-editor';


import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

const Edit = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId;

    const blockProps = useBlockProps();

    const swiperElRef = useRef(null);

	return (
        <Fragment>
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
            <Inspector {...props} />
            <Style {...attributes} />
            <div {...blockProps}>
                <swiper-container
                  ref={swiperElRef}
                  slides-per-view="3"
                  navigation="true"
                  pagination="true"
                >
                  <swiper-slide>Slide 1</swiper-slide>
                  <swiper-slide>Slide 2</swiper-slide>
                  <swiper-slide>Slide 3</swiper-slide>
                  <swiper-slide>Slide 4</swiper-slide>
                  <swiper-slide>Slide 5</swiper-slide>
                </swiper-container>
            </div>
        </Fragment>
    );

};

export default Edit;