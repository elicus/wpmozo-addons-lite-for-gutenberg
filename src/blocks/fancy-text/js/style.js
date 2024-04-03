
const Style = (attributes) => {

	const clientId = attributes.clientId,
    parent = '#block-'+clientId,
    toConvertStyles = [
    	'text',
    	'textBgDimensions',
    ];

    let css = '', 
    convertedStyle = window.wpmozo.convetInlineStyleStr( toConvertStyles, attributes );

    let allInline = [
		{
    		selector: '.wpmozo-adfgu-fancy-text-inner',
    		style: {
    			'background-clip': 'border-box',
    			'-webkit-background-clip': 'text',
    			'-webkit-text-fill-color': 'transparent',
			    'text-align': attributes.textAlignment,
    		},
    		additional: convertedStyle.text
    	},
    ];

    if ( 'gradient' === attributes.textStyle ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-fancy-text-inner',
    		style: {
    			'background-color': 'transparent',
			    'background-image': attributes.fancyTextBackground,
    		}
    	})
    }else{
    	allInline.push({
    		selector: '.wpmozo-adfgu-fancy-text-inner',
    		style: {
			    'background-image': 'url('+attributes.fancyTextBackgroundImg+')',
			    'background-size': attributes.textBgSize,
			    'background-position': attributes.textBgPosition,
			    'background-repeat': attributes.textBgRepeat,
    		}
    	})
    }

    if ( 'none' !== attributes.textBgOverlay ) {
		allInline.push({
    		selector: '.wpmozo-adfgu-fancy-text-inner:before',
    		style: {
    			'content': '""',
    			'position': 'absolute',
			    'top': '0',
			    'right': '0',
			    'bottom': '0',
			    'left': '0',
			    'z-index': '-2',
			    'background-image': 'inherit',
			    'background-size': attributes.textBgSize,
			    'background-position': attributes.textBgPosition,
			    'background-repeat': attributes.textBgRepeat,
    		},
    	})
    	allInline.push({
    		selector: '.wpmozo-adfgu-fancy-text-inner:after',
    		style: {
    			'content': '""',
    			'position': 'absolute',
			    'top': '0',
			    'right': '0',
			    'bottom': '0',
			    'left': '0',
			    'z-index': '-1',
			    ...('color' === attributes.textBgOverlay && {'background-color': attributes.textBgOverlayColor}),
			    ...('gradient' === attributes.textBgOverlay && {'background': attributes.textBgOverlayColor})
    		},
    	})
    	css += `
	    	${parent} {
	    		z-index: 0;
	    		position: relative;
	    	}
	    `;
    }

    let generateStyle = window.wpmozo.wpmozo_generate_style(allInline);
    
    if ( ! window.wpmozo.wpmozo_is_empty( generateStyle ) ) {
	    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
	}

	if ( ! window.wpmozo.wpmozo_is_empty( convertedStyle.textBgDimensions ) ) {
		css += `
	    	${parent} {
	    		${convertedStyle.textBgDimensions}
	    	}
	    `;
	}

	return (
		<>
			{ ! window.wpmozo.wpmozo_is_empty( css ) &&
				<style>{css}</style>
			}
		</>
	);

}

export default Style;