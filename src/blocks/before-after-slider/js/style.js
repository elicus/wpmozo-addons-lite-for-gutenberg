
const Style = (attributes) => {

	const clientId = attributes.clientId;

	const parent = '#block-'+clientId,
    toConvertStyles = [ 'beforeLabel', 'afterLabel' ],
    convertedStyle = window.wpmozo.convetInlineStyleStr( toConvertStyles, attributes ),
    no_overlay = attributes.overlayOnHover ? false : true;

    let beforeLabelStyle = convertedStyle['beforeLabel'],
    afterLabelStyle = convertedStyle['afterLabel'];

    let css = `
        ${parent} {
            .twentytwenty-handle:before, 
            .twentytwenty-handle:after {
                background-color: ${attributes.handlecolor} !important;
            }
            .twentytwenty-handle{
                border-color: ${attributes.handlecolor};
            }
            .twentytwenty-left-arrow, 
            twentytwenty-right-arrow{
                border-color: ${attributes.handlecolor};
            }
            .twentytwenty-overlay:hover{
                background-color: ${attributes.overlaycolor};
            }
            .twentytwenty-before-label:before{
                ${beforeLabelStyle}
            }
            .twentytwenty-after-label:before{
                ${afterLabelStyle}
            }
        }
    `;

    if ( no_overlay ) {
        css += `
        ${parent} {
            .twentytwenty-overlay:hover{
                background: unset;
            }
        }
        `
    }

    if ( ! attributes.beforeLabelOnHover ) {
        css += `
        ${parent} {
            .twentytwenty-before-label{
                opacity: 1;
            }
        }
        `
    }

    if ( ! attributes.afterLabelOnHover ) {
        css += `
        ${parent} {
            .twentytwenty-after-label{
                opacity: 1;
            }
        }
        `
    }

	return (
		<style>{css}</style>
	);

}

export default Style;