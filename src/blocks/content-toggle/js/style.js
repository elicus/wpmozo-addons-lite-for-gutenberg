
const Style = (attributes) => {

	const clientId = attributes.clientId,
    parent = '#block-'+clientId;

    let css = `
    	.wpmozo-adfgu-toggle-button {
    		margin: 0 12px;
		    height: 30px;
		}
		.wpmozo-adfgu-toggle-button-wrap {
		    display: flex;
		    align-items: center;
		    margin-bottom: 2%;
		    justify-content: center;
		}
		.wpmozo-adfgu-toggle-button-inner {
		    position: relative;
		    display: inline-block;
		    width: 70px;
		    height: 30px;
		}
		.wpmozo-adfgu-toggle-button-inner input {
		    opacity: 0;
		    width: 0;
		    height: 0;
		}
		.wpmozo-adfgu-toggle-button .wpmozo-adfgu-toggle-switch {
		    position: absolute;
		    cursor: pointer;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    background-color: #ccc;
		    -webkit-transition: 0.4s;
		    transition: 0.4s;
		}
		.wpmozo-adfgu-toggle-button .wpmozo-adfgu-toggle-switch:before {
		    position: absolute;
		    content: "";
		    height: 22px;
		    width: 22px;
		    left: 4px;
		    bottom: 4px;
		    background-color: #fff;
		    -webkit-transition: 0.4s;
		    transition: 0.4s;
		}
		.wpmozo-adfgu-toggle-button input:checked + .wpmozo-adfgu-toggle-switch {
		    background-color: #2196f3;
		}
		.wpmozo-adfgu-toggle-button input:checked + .wpmozo-adfgu-toggle-switch:before {
		    -webkit-transform: translateX(40px);
		    -ms-transform: translateX(40px);
		    transform: translateX(40px);
		}
		.wpmozo-adfgu-toggle-button .wpmozo-adfgu-toggle-switch.wpmozo_rounded {
		    border-radius: 34px;
		}
		.wpmozo-adfgu-toggle-button .wpmozo-adfgu-toggle-switch.wpmozo_rounded:before {
		    border-radius: 50%;
		}
		.wpmozo-adfgu-toggle-title-wrap{
			cursor: pointer;
		    display: flex;
		    align-items: center;
		}
    `;

	return (
		<style>{css}</style>
	);

}

export default Style;