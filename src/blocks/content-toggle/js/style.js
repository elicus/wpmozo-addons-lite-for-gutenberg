
const Style = (attributes) => {

	const clientId = attributes.clientId,
    parent = '#block-'+clientId,
    toConvertStyles = [ 
    	'titleOne', 
    	'titleTwo', 
    	'toggleSwitchDimensions', 
    	'contentOne', 
    	'contentOneDimensions', 
    	'contentTwo', 
    	'contentTwoDimensions' 
    ];

    let convertedStyle = window.wpmozo.convetInlineStyleStr( toConvertStyles, attributes );
    
    let css = `
    	${parent} {
    		.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:before{
    			background-color: ${attributes.toggleSwitchColor};
    		}
    		.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:before{
    			background-color: ${attributes.toggleSwitchOnState};
    		}
    		.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch{
    			background-color: ${attributes.toggleSwitchBackground};
    		}
    		.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch{
    			background-color: ${attributes.toggleSwitchOnStateBackground};
    		}
    		.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:hover::before{
    			background-color: ${attributes.toggleSwitchHoverColor};
    		}
    		.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:hover::before{
    			background-color: ${attributes.toggleSwitchHoverOnState};
    		}
    		.wpmozo-adfgu-toggle-button-wrap .wpmozo-adfgu-toggle-switch:hover{
    			background-color: ${attributes.toggleSwitchHoverBackground};
    		}
    		.wpmozo-adfgu-toggle-button-wrap input:checked + .wpmozo-adfgu-toggle-switch:hover{
    			background-color: ${attributes.toggleSwitchHoverOnStateBackground};
    		}
    		.wpmozo-adfgu-toggle-button-wrap{
    			${convertedStyle.toggleSwitchDimensions}
    			justify-content: ${attributes.toggleSwitchAlignment};
    		}
    		.wpmozo-adfgu-toggle-title-one h5{
    			${convertedStyle.titleOne}
    			color: ${attributes.titleOneColor};
    			gap: ${attributes.titleOneIconSpacing}px;
    		}
    		.wpmozo-adfgu-toggle-title-two h5{
    			${convertedStyle.titleTwo}
    			color: ${attributes.titleTwoColor};
    			gap: ${attributes.titleTwoIconSpacing}px;
    		}
    		.wpmozo-adfgu-toggle-title-one .icon-wrapper i{
    			font-size: ${attributes.titleOneIconSize}px;
    			color: ${attributes.titleOneIconColor};
    		}
    		.wpmozo-adfgu-toggle-title-two .icon-wrapper i{
    			font-size: ${attributes.titleTwoIconSize}px;
    			color: ${attributes.titleTwoIconColor};
    		}
    		.wpmozo-adfgu-content-toggle-one{
    			${convertedStyle.contentOne}
    			${convertedStyle.contentOneDimensions}
    			color: ${attributes.contentOneColor};
    			background-color: ${attributes.contentOneBackground};
    			text-align: ${attributes.contentOneAlignment};
    		}
    		.wpmozo-adfgu-content-toggle-two{
    			${convertedStyle.contentTwo}
    			${convertedStyle.contentTwoDimensions}
    			color: ${attributes.contentTwoColor};
    			background-color: ${attributes.contentTwoBackground};
    			text-align: ${attributes.contentTwoAlignment};
    		}
    	}
    `;

	return (
		<style>{css}</style>
	);

}

export default Style;