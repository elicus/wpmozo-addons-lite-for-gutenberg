
import { WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker } from '../../../components/index';
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

    const positionValues = [
        {
            label: __( 'Before', 'wpmozo-addons-for-gutenberg' ),
            value: 'before',
        },
        {
            label: __( 'After', 'wpmozo-addons-for-gutenberg' ),
            value: 'after',
        }
    ];
    const contentTypeValues = [
        {
            label: __( 'Blocks', 'wpmozo-addons-for-gutenberg' ),
            value: 'blocks',
        },
        {
            label: __( 'Page', 'wpmozo-addons-for-gutenberg' ),
            value: 'page',
        }
    ];
    
    props = Object.assign({}, props, {preAttributes: {}});

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Toggle One Content', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Toggle Title', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.toggleOneTitle }
                        onChange={ ( newValue ) => setAttributes( { toggleOneTitle: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Icon', 'wpmozo-addons-for-gutenberg' ) }
                        iconPickerKey='toggleOneIcon'
                        props={ props }
                        value={ attributes.toggleOneIcon }
                        onChange={ ( newValue ) => setAttributes( { toggleOneIcon: newValue } ) }
                    />
                    { ! window.wpmozo.wpmozo_is_empty( attributes.toggleOneIcon ) &&
                        <SelectControl
                            label={ __( 'Icon Position', 'wpmozo-addons-for-gutenberg' ) }
                            value={ attributes.toggleOneIconPostion }
                            options={ positionValues }
                            onChange={ ( newValue ) => setAttributes( { toggleOneIconPostion: newValue } ) }
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Toggle Two Content', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Toggle Title', 'wpmozo-addons-for-gutenberg' ) }
                        value={ attributes.toggleTwoTitle }
                        onChange={ ( newValue ) => setAttributes( { toggleTwoTitle: newValue } ) }
                    />
                    <WpmozoIconpicker
                        label={ __( 'Icon', 'wpmozo-addons-for-gutenberg' ) }
                        iconPickerKey='toggleTwoIcon'
                        props={ props }
                        value={ attributes.toggleTwoIcon }
                        onChange={ ( newValue ) => setAttributes( { toggleTwoIcon: newValue } ) }
                    />
                    { ! window.wpmozo.wpmozo_is_empty( attributes.toggleTwoIcon ) &&
                        <SelectControl
                            label={ __( 'Icon Position', 'wpmozo-addons-for-gutenberg' ) }
                            value={ attributes.toggleTwoIconPostion }
                            options={ positionValues }
                            onChange={ ( newValue ) => setAttributes( { toggleTwoIconPostion: newValue } ) }
                        />
                    }
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Toggle Switch' ) } initialOpen={false}>
                    <PanelBody title={ __( 'Normal Switch Color' ) } initialOpen={false}>
                        <WpmozoColorPicker
                            ColorKey="toggleSwitch"
                            props={props}
                            ColorTypes={[ 
                                {
                                    key: 'Color',
                                    label: __( 'Switch Color', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'OnState',
                                    label: __( 'Switch Color (on state)', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Switch Background', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'OnStateBackground',
                                    label: __( 'Switch Background (on state)', 'wpmozo-addons-for-gutenberg' ),
                                } 
                            ]}
                        />
                    </PanelBody>
                    <PanelBody title={ __( 'Hover Switch Color' ) } initialOpen={false}>
                        <WpmozoColorPicker
                            ColorKey="toggleSwitch"
                            props={props}
                            ColorTypes={[ 
                                {
                                    key: 'HoverColor',
                                    label: __( 'Switch Color', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'HoverOnState',
                                    label: __( 'Switch Color (on state)', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'HoverBackground',
                                    label: __( 'Switch Background', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'HoverOnStateBackground',
                                    label: __( 'Switch Background (on state)', 'wpmozo-addons-for-gutenberg' ),
                                } 
                            ]}
                        />
                    </PanelBody>
                    <WpmozoDimensions
                        DimensionKey='toggleSwitchDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;