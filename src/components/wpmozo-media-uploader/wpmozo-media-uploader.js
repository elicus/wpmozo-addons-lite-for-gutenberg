
import {
    Button,
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";

const WpmozoMediaUploader = function(args){
	
    const editImage = ( args.hasOwnProperty('edit') ) ? args.edit : __("Edit Image", "wpmozo-addons-for-gutenberg"),
    selectImage = ( args.hasOwnProperty('select') ) ? args.select : __("Select Image", "wpmozo-addons-for-gutenberg"),
    imageSrc = args.src,
    allowedTypes = ( args.hasOwnProperty('allowedTypes') ) ? args.allowedTypes : ["image"],
    accept = ( args.hasOwnProperty('accept') ) ? args.accept : "image/*";

	el(MediaUploadCheck, {}, 
        el(MediaUpload, {
            onSelect: (media) => args.onSelect(media),
            allowedTypes: allowedTypes,
            accept: accept,
            value: imageSrc,
            render: ({ open }) => {
                return el(Fragment, {},
                    el('div', {
                        class: "components-base-control wpmozo-media-uploader-wrap",
                        children: [
                           imageSrc &&
                            el('img',
                              {
                                class: "wpmozo-media-uploader",
                                src: imageSrc,
                              },
                            ),
                            el(Button, {
                              isPrimary: true,
                              onClick: (event) => {
                                event.stopPropagation();
                                open();
                              },
                              children:
                               imageSrc
                                  ? editImage
                                  : selectImage
                            })
                        ],
                    })
                );
            }
        })
    );

}

export default WpmozoMediaUploader;