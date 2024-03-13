
const Style = (attributes) => {

	const clientId = attributes.clientId,
    parent = '#block-'+clientId;

    let css = ``;

	return (
		<style>{css}</style>
	);

}

export default Style;