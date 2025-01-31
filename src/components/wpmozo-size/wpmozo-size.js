const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const { __experimentalToolsPanel, __experimentalToolsPanelItem, __experimentalUnitControl } = window.wp.components;

const WpmozoSize = function(args){

	const { SizeKey, props } = args;
	const preAttributes = props.preAttributes;
	let SizeTypes            = args.hasOwnProperty( 'SizeTypes' ) ? args.SizeTypes : null;

	const sizeSetValue = function( styleType, value = null ) {

		value = setValue( styleType, value );
		props.setAttributes( {[ SizeKey + styleType ]: value} );

		if ( args.hasOwnProperty( 'afterOnChange' ) ) {
			args.afterOnChange( props );
		}

	};

	const setValue = function(styleType, value){

		if ( null === value && 'undefined' !== typeof preAttributes[ SizeKey + styleType ] && preAttributes[ SizeKey + styleType ].hasOwnProperty( 'default' ) ) {
			value = preAttributes[ SizeKey + styleType ].default;
		}
		value = ( null !== value ) ? value : '';

		return value;

	}

	const onChange = args.hasOwnProperty( 'onChange' ) ? args.onChange : sizeSetValue;

	return [
		el(
			__experimentalToolsPanel,
			{
				key: 'wpmozo-size-panel-'+SizeKey,
				label: __( 'Size', 'wpmozo-addons-for-gutenberg' ),
				resetAll: () => {

					if ( null === SizeTypes ) {
						SizeTypes = {
							'width': '',
							'height': '',
						}
					}
					for (const type in SizeTypes) {
						let value = setValue( type, null );
						props.setAttributes( {[ SizeKey + type ]: value} );
					}

					if ( args.hasOwnProperty( 'afterOnChange' ) ) {
						args.afterOnChange( props );
					}
				}
			},
			( null == SizeTypes || SizeTypes.hasOwnProperty( 'width' ) ) &&
				el(
					__experimentalToolsPanelItem,
					{
						label: __( 'Width', 'wpmozo-addons-for-gutenberg' ),
						hasValue: () => true,
						isShownByDefault: true,
						onDeselect: () => sizeSetValue( 'width' ),
					},
					el(
						__experimentalUnitControl,
						{
							label: 'Width',
							labelPosition: 'side',
							value: props.attributes[ SizeKey + 'width' ],
							onChange: ( NewWidth ) => onChange( 'width', NewWidth ),
						}
					),
				),
			( null == SizeTypes || SizeTypes.hasOwnProperty( 'height' ) ) &&
				el(
					__experimentalToolsPanelItem,
					{
						label: __( 'Height', 'wpmozo-addons-for-gutenberg' ),
						hasValue: () => true,
						isShownByDefault: true,
						onDeselect: () => sizeSetValue( 'height' ),
					},
					el(
						__experimentalUnitControl,
						{
							label: 'Height',
							labelPosition: 'side',
							value: props.attributes[ SizeKey + 'height' ],
							onChange: ( NewHeight ) => onChange( 'height', NewHeight ),
						}
					),
				),
		),
	];

}

export default WpmozoSize;
