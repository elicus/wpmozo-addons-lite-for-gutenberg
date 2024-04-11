
const Style = (attributes) => {

	const wpmozoCoreFun = window.wpmozo,
	clientId = attributes.clientId,
    parent = '#block-'+clientId,
    toConvertStyles = [
    	'globalTitle',
    	'globalContent',
    	'frontTitle',
    	'frontContent',
    	'backTitle',
    	'backContent',
    	'frontIconShape',
    	'backIconShape',
    	'frontFlipbox',
    	'backFlipbox'
    ];

    let css = '',
    frontVerticalAlign = attributes.frontContentVerAlignment,
    backVerticalAlign = attributes.backContentVerAlignment, 
    convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    if ( 'top' === attributes.frontContentVerAlignment ) {
    	frontVerticalAlign = 'flex-start';
    }else if( 'bottom' === attributes.frontContentVerAlignment ){
		frontVerticalAlign = 'flex-end';
    }

    if ( 'top' === attributes.backContentVerAlignment ) {
    	backVerticalAlign = 'flex-start';
    }else if( 'bottom' === attributes.backContentVerAlignment ){
		backVerticalAlign = 'flex-end';
    }
    
    let allInline = [
    	{
    		selector: '.wpmozo-adfgu-flip-box-wrap',
    		style: {
			    'width': attributes.flipboxWidth,
    		},
    	},
		{
    		selector: '.wpmozo-adfgu-flip-box-side',
    		style: {
    			'min-height': '200px',
			    'width': '100%',
			    'background-size': 'cover',
			    'background-position': 'center',
			    'background-repeat': 'no-repeat',
			    'display': 'flex',
			    'justify-content': 'center',
			    'padding': '30px',
    		},
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-inner',
    		style: {
			    'width': '100%',
			    'display': 'flex',
    		},
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-title',
    		style: {
    			'color': attributes.globalTitleColor,
    		},
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-description',
    		style: {
    			'color': attributes.globalContentColor,
    		},
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-front',
    		style: {
    			'background-color': attributes.frontFlipboxBackground,
    			'align-items': frontVerticalAlign
    		},
    		additional: convertedStyle.frontFlipbox,
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-back',
    		style: {
    			'background-color': attributes.backFlipboxBackground,
    			'align-items': backVerticalAlign
    		},
    		additional: convertedStyle.backFlipbox,
    	},
    	{
    		selector: `
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap, 
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-title,
    		.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-description`,
    		style: {
    			'text-align': attributes.frontContentHorAlignment,
    		},
    	},
    	{
    		selector: `
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap, 
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-title,
    		.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-description`,
    		style: {
    			'text-align': attributes.backContentHorAlignment,
    		},
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-title',
    		additional: convertedStyle.globalTitle
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-side .wpmozo-adfgu-flip-box-description',
    		additional: convertedStyle.globalContent
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-title',
    		style: {
    			'color': attributes.frontTitleColor,
    		},
    		additional: convertedStyle.frontTitle
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-description',
    		style: {
    			'color': attributes.frontContentColor,
    		},
    		additional: convertedStyle.frontContent
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-title',
    		style: {
    			'color': attributes.backTitleColor,
    		},
    		additional: convertedStyle.backTitle
    	},
    	{
    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-description',
    		style: {
    			'color': attributes.backContentColor,
    		},
    		additional: convertedStyle.backContent
    	},
    ];

    if ( 'top' === attributes.frontElementAlign ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-inner',
    		style: {
			    'flex-direction': 'column'
    		}
    	})
    }
    if ( 'top' === attributes.backElementAlign ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-inner',
    		style: {
			    'flex-direction': 'column'
    		}
    	})
    }

    if ( 'icon' === attributes.frontElType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap i',
	    		style: {
	    			'color': attributes.frontIconColor,
	    			'font-size': attributes.frontIconSize,
	    		}
	    	},
	    	(attributes.frontIconStyle && 'hexagon' !== attributes.frontIconShape ) ? {
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-icon-wrap i',
	    		style: {
	    			'padding': '16px',
	    			'background-color': attributes.frontIconShapeBackground,
	    			...( 'square' === attributes.frontIconShape && {'border-radius': attributes.frontIconShapeborderRadius} ),
	    			...( 'circle' === attributes.frontIconShape && {'border-radius': '50%'} )
	    		},
	    		additional: convertedStyle.frontIconShape,
	    	} : {}
    	)
    }
    if ( 'icon' === attributes.backElType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap i',
	    		style: {
	    			'color': attributes.backIconColor,
	    			'font-size': attributes.backIconSize,
	    		}
	    	},
	    	(attributes.backIconStyle && 'hexagon' !== attributes.backIconShape ) ? {
	    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-icon-wrap i',
	    		style: {
	    			'padding': '16px',
	    			'background-color': attributes.backIconShapeBackground,
	    			...( 'circle' === attributes.backIconShape && {'border-radius': '50%'} )
	    		},
	    		additional: convertedStyle.backIconShape,
	    	} : {}
    	)
    }

    if ( 'image' === attributes.frontElType ) {
    	allInline.push(
	    	{
	    		selector: '.wpmozo-adfgu-flip-box-front .wpmozo-adfgu-flip-box-image-wrap img',
	    		style: {
				    'width': attributes.frontImageWidth,
				    'height': attributes.frontImageWidth,
				    'object-fit': 'cover',
				    'display': 'block',
				    ...( 'left' === attributes.frontImageAlignment && {'margin-right': 'auto'} ),
				    ...( 'center' === attributes.frontImageAlignment && {'margin-left': 'auto','margin-right': 'auto'} ),
				    ...( 'right' === attributes.frontImageAlignment && {'margin-left': 'auto'} ),
	    		}
	    	},
    	)
    }
    if ( 'image' === attributes.backElType ) {
    	allInline.push({
    		selector: '.wpmozo-adfgu-flip-box-back .wpmozo-adfgu-flip-box-image-wrap img',
    		style: {
			    'width': attributes.backImageWidth,
			    'height': attributes.backImageWidth,
			    'object-fit': 'cover',
			    'display': 'block',
			    ...( 'left' === attributes.backImageAlignment && {'margin-right': 'auto'} ),
			    ...( 'center' === attributes.backImageAlignment && {'margin-left': 'auto','margin-right': 'auto'} ),
			    ...( 'right' === attributes.backImageAlignment && {'margin-left': 'auto'} ),
    		}
    	})
    }

    let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);

    if ( ! wpmozoCoreFun.wpmozo_is_empty( generateStyle ) ) {
	    css += `
	    	${parent} {
	    		${generateStyle}
	    	}
	    `;
	}

	return (
		<style>{css}</style>
	);

}

export default Style;