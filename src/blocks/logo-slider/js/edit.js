
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

const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    blockProps = useBlockProps(),
    swiperElRef = useRef(null);

    let innerBlocks = [],
    isInit = false;
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

    useEffect(() => {
        setTimeout(function() {
            console.log(attributes);
            if ( ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) ) {
                console.log('2');

                let productsPerSlide = parseInt( attributes.logoPerSlide ),
        spaceBetweenSlides = parseInt( attributes.spaceBetweenSlides ),
        slidesPerGroup = parseInt( attributes.slidesPerGroup ),
        autoHeightSlider = false;

        let loop =  false,
            arrows = false,
            dots = false,
            autoplaySlides = false,
            cube = false,
            coverflow = false,
            fade = false,
            slidesPerGroupSkip = 0,
            slidesPerGroupIpad = 1,
            slidesPerGroupMobile = 1,
            slidesPerGroupSkipIpad = 0,
            slidesPerGroupSkipMobile = 0;

        if ( productsPerSlide > slidesPerGroup && 1 !== slidesPerGroup ) {
            slidesPerGroupSkip = productsPerSlide - slidesPerGroup;
        }

        //if ('on' === showArrow) {
            arrows = {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            };
        //}

        //if ('on' === showControlDot) {
            const dynamicBullets = false;
            dots = {
                el: '.swiper-pagination',
                dynamicBullets: dynamicBullets,
                clickable: true
            };
        //}

        let options = {
            slidesPerView: productsPerSlide,
            spaceBetween: spaceBetweenSlides,
            slidesPerGroup: slidesPerGroup,
            cubeEffect: cube,
            coverflowEffect: coverflow,
            fadeEffect: fade,
            loop: loop,
            autoHeight: autoHeightSlider,
            pagination: dots,
            navigation: arrows,
            grabCursor   : true,
            observer: true,
            observeParents: true,
            breakpoints: {
                981: {
                    slidesPerView: productsPerSlide,
                    spaceBetween: spaceBetweenSlides,
                    slidesPerGroup: slidesPerGroup,
                },
                768: {
                    slidesPerView: productsPerSlide,
                    spaceBetween: spaceBetweenSlides,
                    slidesPerGroup: slidesPerGroup,
                    slidesPerGroupSkip: slidesPerGroupSkip,
                },
                0: {
                    slidesPerView: productsPerSlide,
                    spaceBetween: spaceBetweenSlides,
                    slidesPerGroup: slidesPerGroup,
                }
            },
        };

                if ( ! isInit && ! jQuery('.swiper[data-client-id="'+clientId+'"]').hasClass('swiper-initialized') ) {
                    console.log('sdfsdfsdf');
                    const swiper = new Swiper('.swiper[data-client-id="'+clientId+'"]', options );
                    isInit = true;
                }
            }

        }, 10);
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
                <div className="swiper" ref={swiperElRef} data-client-id={clientId}>
                    <div className="swiper-wrapper">
                        { ! wpmozoCoreFun.wpmozo_is_empty( innerBlocks ) &&
                            innerBlocksProps.children
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;