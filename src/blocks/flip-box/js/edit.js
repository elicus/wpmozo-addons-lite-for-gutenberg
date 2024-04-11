
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    clientId = props.clientId,
    setAttributes = props.setAttributes;

    attributes.clientId = clientId;

    const blockProps = useBlockProps();

	return (
        <Fragment>
            <Inspector {...props} />
            <Style {...attributes} />
            <div {...blockProps}>
                <div className="wpmozo-adfgu-flip-box-wrap">
                    <div className="wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-front">
                        <div className="wpmozo-adfgu-flip-box-inner">
                            { 'none' !== attributes.frontElType && (
                                <div className={ 'icon' === attributes.frontElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"}>
                                    { 'icon' === attributes.frontElType ? (
                                            <i className={ attributes.frontElIcon }></i>
                                        ) : (
                                            <img src={ attributes.frontElImage } />
                                        )
                                    }
                                </div>
                            )}
                            <div className="wpmozo-adfgu-flip-box-content-wrap">
                                <div className="wpmozo-adfgu-flip-box-heading-wrap">
                                    <RichText
                                        className="wpmozo-adfgu-flip-box-title"
                                        tagName={ attributes.frontHeadingLavel }
                                        value={ attributes.frontTitle }
                                        onChange={ ( newValue ) => setAttributes( { frontTitle: newValue } ) } 
                                        placeholder={ attributes.frontTitle }
                                    />
                                </div>
                                <div className="wpmozo-adfgu-flip-box-description">
                                    <RichText
                                        value={ attributes.frontContnet }
                                        onChange={ ( newValue ) => setAttributes( { frontContnet: newValue } ) } 
                                        placeholder={ attributes.frontContnet }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-back">
                        <div className="wpmozo-adfgu-flip-box-inner">
                            { 'none' !== attributes.backElType && (
                                <div className={ 'icon' === attributes.backElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"}>
                                    { 'icon' === attributes.backElType ? (
                                            <i className={ attributes.backElIcon }></i>
                                        ) : (
                                            <img src={ attributes.backElImage } />
                                        )
                                    }
                                </div>
                            )}
                            <div className="wpmozo-adfgu-flip-box-content-wrap">
                                <div className="wpmozo-adfgu-flip-box-heading-wrap">
                                    <RichText
                                        className="wpmozo-adfgu-flip-box-title"
                                        tagName={ attributes.backHeadingLavel }
                                        value={ attributes.backTitle }
                                        onChange={ ( newValue ) => setAttributes( { backTitle: newValue } ) } 
                                        placeholder={ attributes.backTitle }
                                    />
                                </div>
                                <div className="wpmozo-adfgu-flip-box-description">
                                    <RichText
                                        value={ attributes.backContnet }
                                        onChange={ ( newValue ) => setAttributes( { backContnet: newValue } ) } 
                                        placeholder={ attributes.backContnet }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;