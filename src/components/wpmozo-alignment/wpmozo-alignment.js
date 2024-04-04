const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const { Icon, __experimentalToggleGroupControlOptionIcon, __experimentalToggleGroupControl } = window.wp.components;

const WpmozoAlignment = function(args){

    const { alignmentKey } = args;
    let label = args.hasOwnProperty('label') ? args.label
        : __( 'Alignment', 'wpmozo-addons-for-gutenberg'),
        className = args.hasOwnProperty('className') ? args.className : 
        'wpmozo-alignment-compo',
        aignments = {
            left: el(__experimentalToggleGroupControlOptionIcon, {
                key: 'wpmozo-alignment-left-'+alignmentKey,
                value: "left",
                icon: el(Icon, {icon: 'editor-alignleft'}),
                label: __( 'Left', 'wpmozo-addons-for-gutenberg')
            }),
            center: el(__experimentalToggleGroupControlOptionIcon, {
                key: 'wpmozo-alignment-center-'+alignmentKey,
                value: "center",
                icon: el(Icon, {icon: 'editor-aligncenter'}),
                label: __( 'Center', 'wpmozo-addons-for-gutenberg')
            }),
            right: el(__experimentalToggleGroupControlOptionIcon, {
                key: 'wpmozo-alignment-right-'+alignmentKey,
                value: "right",
                icon: el(Icon, {icon: 'editor-alignright'}),
                label: __( 'Right', 'wpmozo-addons-for-gutenberg')
            })
        },
        typeSetAlign = [aignments.left,aignments.center,aignments.right];

    if ( args.hasOwnProperty('alignments') ) {
        typeSetAlign = [];
        args.alignments.map( alignment => typeSetAlign.push( aignments[alignment]) );
    }
    
    return el(__experimentalToggleGroupControl, {
        key: 'wpmozo-alignment-'+alignmentKey,
        className: className,
        onChange: args.onChange,
        label: label,
        isDeselectable: true,
        isBlock: true,
        value: args.value,
        children: typeSetAlign,
    });

}

export default WpmozoAlignment;
