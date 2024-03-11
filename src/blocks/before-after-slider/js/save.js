
const { useBlockProps } = window.wp.blockEditor;
const WPMozoEditorObj = wpmozo_adfgu_editor_object; 

const Save = ({ attributes }) => {
    
    let beforeImage = ( attributes.beforeImage ) ? attributes.beforeImage : WPMozoEditorObj.placeholderImg,
    afterImage = ( attributes.afterImage ) ? attributes.afterImage : WPMozoEditorObj.placeholderImg,
    beforeLabel = ( attributes.beforeHasLabel ) ? attributes.beforeLabel : '',
    afterLabel = ( attributes.afterHasLabel ) ? attributes.afterLabel : '', 
    handleOffset = attributes.handleOffset,
    sliderOrientation = attributes.sliderOrientation,
    moveHandleOnHover = attributes.moveHandleOnHover,
    moveHandleOnClick = attributes.moveHandleOnClick;

    return (
        <div {...useBlockProps.save()}>
            <div 
                className="wpmozo-adfgu-before-after-image-wrapper"
                data-before-label={beforeLabel} 
                data-after-label={afterLabel} 
                data-handle-offset={handleOffset} 
                data-slider-orientation={sliderOrientation} 
                data-move-onhover={moveHandleOnHover} 
                data-move-onclick={moveHandleOnClick} 
            >
                <img src={beforeImage} />
                <img src={afterImage} />
            </div>
        </div>
    );
};

export default Save;