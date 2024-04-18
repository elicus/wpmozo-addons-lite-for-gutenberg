
import Style from "./style";

import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {

    const clientId = attributes.clientId;

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-logo-slider-main' })} id={`block-${clientId}`}>
            <Style {...attributes} />
             <swiper-container
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
    );
};

export default Save;