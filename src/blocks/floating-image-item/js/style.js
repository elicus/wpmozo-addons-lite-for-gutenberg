
const Style = (attributes) => {

    const clientId = attributes.clientId,
    parent = '#block-'+clientId,
    wpmozoCoreFun = window.wpmozo,
    wpmozo_is_empty = wpmozoCoreFun.wpmozo_is_empty;
    
    let allInline = [],
    css = '';

    css += `
        .floating-image-item {
            position: absolute !important;
        }
    `;

    if ( ! wpmozo_is_empty( attributes.horizontalAlign ) ) {
        allInline.push({
            selector: '',
            style: {
                'top': attributes.horizontalAlign,
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