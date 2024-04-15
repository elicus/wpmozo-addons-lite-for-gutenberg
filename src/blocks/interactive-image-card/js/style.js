
const Style = (attributes) => {

	const clientId = attributes.clientId,
    parent = '#block-'+clientId,
    toConvertStyles = [];

    let convertedStyle = window.wpmozo.convetInlineStyleStr( toConvertStyles, attributes );
    
    let css = `
    	${parent} {
    	}
    `;

	return (
		<style>{css}</style>
	);

}

export default Style;