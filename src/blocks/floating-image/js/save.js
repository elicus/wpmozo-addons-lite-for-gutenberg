
import Style from "./style";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

    const Save = ({ attributes }) => {

        const wpmozoCoreFun = window.wpmozo,
            clientId = attributes.clientId,
            blockProps = useBlockProps.save();

        let innerBlocks = [],
           innerBlocksProps = null;

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

            innerBlocksProps = useInnerBlocksProps.save( blockProps, {
                allowedBlocks: [ 'wpmozo/floating-image-item' ],
                template: innerBlocks,
            });

        }

        if( wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) ) {
            return null;
        }

        return (
            <div {...innerBlocksProps} id={`block-${clientId}`}>
                <Style {...attributes} />
                { innerBlocksProps.children }
            </div>
        );

    };

export default Save;