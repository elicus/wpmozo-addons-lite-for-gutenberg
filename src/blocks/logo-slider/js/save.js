
import Style from "./style";

import { useBlockProps, InnerBlocks, useInnerBlocksProps } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

    const Save = ({ attributes, clientId }) => {

      const wpmozoCoreFun = window.wpmozo,
        blockProps = useBlockProps.save();

      let innerBlocks = [],
       innerBlocksProps = null;
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

    innerBlocksProps = useInnerBlocksProps.save( blockProps, {
        allowedBlocks: [ 'wpmozo/logo-slide' ],
        template: innerBlocks,
    });

}
    if( wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) ) {
        return null;
    }

      return (
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-logo-slider-main' })} id={`block-${clientId}`}>
            <Style {...attributes} />
            <div className="swiper" data-client-id={clientId}>
                <div className="swiper-wrapper">
                    { innerBlocksProps.children }
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
      );

    };

export default Save;