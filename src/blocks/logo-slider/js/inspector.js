
import { WpmozoAlignment, WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker } from '../../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    ToggleControl,
    TextControl,
    SelectControl,
    RangeControl
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;

    const oneToTwenty = [
        {
            label: __( '1', 'wpmozo-addons-for-gutenberg' ),
            value: '1'
        },
        {
            label: __( '2', 'wpmozo-addons-for-gutenberg' ),
            value: '2'
        },
        {
            label: __( '3', 'wpmozo-addons-for-gutenberg' ),
            value: '3'
        },
        {
            label: __( '4', 'wpmozo-addons-for-gutenberg' ),
            value: '4'
        },
        {
            label: __( '5', 'wpmozo-addons-for-gutenberg' ),
            value: '5'
        },
        {
            label: __( '6', 'wpmozo-addons-for-gutenberg' ),
            value: '6'
        },
        {
            label: __( '7', 'wpmozo-addons-for-gutenberg' ),
            value: '7'
        },
        {
            label: __( '8', 'wpmozo-addons-for-gutenberg' ),
            value: '8'
        },
        {
            label: __( '9', 'wpmozo-addons-for-gutenberg' ),
            value: '9'
        },
        {
            label: __( '10', 'wpmozo-addons-for-gutenberg' ),
            value: '10'
        },
        {
            label: __( '11', 'wpmozo-addons-for-gutenberg' ),
            value: '11'
        },
        {
            label: __( '12', 'wpmozo-addons-for-gutenberg' ),
            value: '12'
        },
        {
            label: __( '13', 'wpmozo-addons-for-gutenberg' ),
            value: '13'
        },
        {
            label: __( '14', 'wpmozo-addons-for-gutenberg' ),
            value: '14'
        },
        {
            label: __( '15', 'wpmozo-addons-for-gutenberg' ),
            value: '15'
        },
        {
            label: __( '16', 'wpmozo-addons-for-gutenberg' ),
            value: '16'
        },
        {
            label: __( '17', 'wpmozo-addons-for-gutenberg' ),
            value: '17'
        },
        {
            label: __( '18', 'wpmozo-addons-for-gutenberg' ),
            value: '18'
        },
        {
            label: __( '19', 'wpmozo-addons-for-gutenberg' ),
            value: '19'
        },
        {
            label: __( '20', 'wpmozo-addons-for-gutenberg' ),
            value: '20'
        }
    ];
    const arrowsPositions = [
        {
            label: __( 'Inside', 'wpmozo-addons-for-gutenberg' ),
            value: 'inside'
        },
        {
            label: __( 'Outside', 'wpmozo-addons-for-gutenberg' ),
            value: 'outside'
        },
        {
            label: __( 'Top Left', 'wpmozo-addons-for-gutenberg' ),
            value: 'top_left'
        },
        {
            label: __( 'Top Right', 'wpmozo-addons-for-gutenberg' ),
            value: 'top_right'
        },
        {
            label: __( 'Top Center', 'wpmozo-addons-for-gutenberg' ),
            value: 'top_center'
        },
        {
            label: __( 'Bottom Left', 'wpmozo-addons-for-gutenberg' ),
            value: 'bottom_left'
        },
        {
            label: __( 'Bottom Right', 'wpmozo-addons-for-gutenberg' ),
            value: 'bottom_right'
        },
        {
            label: __( 'Bottom Center', 'wpmozo-addons-for-gutenberg' ),
            value: 'bottom_center'
        },
    ];
    
    props = Object.assign({}, props, {preAttributes: {}});

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Slider', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Number of Logo Per View', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.logoPerSlide }
                        options={oneToTwenty}
                        onChange={ ( newValue ) => setAttributes( { logoPerSlide: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Number of Slides Per Group', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.slidesPerGroup }
                        options={oneToTwenty}
                        onChange={ ( newValue ) => setAttributes( { slidesPerGroup: newValue } ) }
                    />
                    <RangeControl
                        label={ __( 'Space between Slides', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.spaceBetweenSlides }
                        onChange={ ( newValue ) => setAttributes( { spaceBetweenSlides: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 100 }
                    />
                    <ToggleControl
                        label={ __( 'Enable Loop', 'wpmozo-addons-for-gutenberg' ) }
                        checked={ attributes.sliderLoop }
                        onChange={ ( newValue ) => setAttributes( { sliderLoop: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Autoplay', 'wpmozo-addons-for-gutenberg' ) }
                        checked={ attributes.autoplay }
                        onChange={ ( newValue ) => setAttributes( { autoplay: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Enable Linear Transition', 'wpmozo-addons-for-gutenberg' ) }
                        checked={ attributes.enableLinearTransition }
                        onChange={ ( newValue ) => setAttributes( { enableLinearTransition: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'Autoplay Delay', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.autoplaySpeed }
                        onChange={ ( newValue ) => setAttributes( { autoplaySpeed: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Pause On Hover', 'wpmozo-addons-for-gutenberg' ) }
                        checked={ attributes.pauseOnHover }
                        onChange={ ( newValue ) => setAttributes( { pauseOnHover: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'Transition Duration', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.transitionDuration }
                        onChange={ ( newValue ) => setAttributes( { transitionDuration: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Show Arrows', 'wpmozo-addons-for-gutenberg' ) }
                        checked={ attributes.showArrow }
                        onChange={ ( newValue ) => setAttributes( { showArrow: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Previous Arrow', 'wpmozo-addons-for-gutenberg' ) }
                        iconPickerKey='previousSlideArrow'
                        props={ props }
                        value={ attributes.previousSlideArrow }
                        onChange={ ( newValue ) => setAttributes( { previousSlideArrow: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Next Arrow', 'wpmozo-addons-for-gutenberg' ) }
                        iconPickerKey='nextSlideArrow'
                        props={ props }
                        value={ attributes.nextSlideArrow }
                        onChange={ ( newValue ) => setAttributes( { nextSlideArrow: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Show Arrows Only On Hover', 'wpmozo-addons-for-gutenberg' ) }
                        checked={ attributes.showArrowOnHover }
                        onChange={ ( newValue ) => setAttributes( { showArrowOnHover: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Arrows Position', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.arrowsPosition }
                        options={arrowsPositions}
                        onChange={ ( newValue ) => setAttributes( { arrowsPosition: newValue } ) }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( '', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;