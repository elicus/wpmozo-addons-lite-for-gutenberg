const { compose }         = wp.compose;
const { ComboboxControl } = wp.components;
const el                  = wp.element.createElement;

const options = wpmozo_adfgu_editor_object.icons;

const { Component } = wp.element;

const WpmozoIconpicker = function(args){

	const iconSetValue = function( value = null ) {

		props.setAttributes( {[ args.iconPickerKey ]: value} );

		if ( args.hasOwnProperty( 'afterOnChange' ) ) {
			args.afterOnChange( props );
		}

	};

	const { iconPickerKey, props, label } = args,
	attributes = props.attributes,
	value = ( '' !== args.value ) ? args.value : '',
	icon = ( 'undefined' !== typeof attributes[ args.iconPickerKey ] && '' !== attributes[ args.iconPickerKey ] ) ? attributes[ args.iconPickerKey ] : 'fas fa-ban',
	onChange = args.hasOwnProperty( 'onChange' ) ? args.onChange : iconSetValue;

	return [
		el(
			'div',
			{
				className: 'wpmozo-icon-picker'
			},
			el(
				ComboboxControl,
				{
					label: label,
					value: value,
					allowReset: false,
					onChange: onChange,
					options: options,
					__experimentalRenderItem: function(option){
						let iconClass = option.item.value;
						return el(
							"span",
							{
								children: [
								el(
									"i",
									{
										class: iconClass,
									}
								),
							" ",
							option.item.label
							]
							}
						);
					},
				},
			),
			el(
				'div',
				{className: 'wpmozo-icon-wraper'},
				el(
					'i',
					{
						class: icon
					}
				),
			),
		)
	];

}

export default WpmozoIconpicker;