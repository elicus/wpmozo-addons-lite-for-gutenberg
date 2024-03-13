
import Style from "./style";

const { useBlockProps } = window.wp.blockEditor;
const WPMozoEditorObj = wpmozo_adfgu_editor_object; 

const Save = ({ attributes }) => {
    
    const elId = 'block-'+attributes.clientId;

    return (
        <div {...useBlockProps.save()}>
            <Style {...attributes} />
            
        </div>
    );
};

export default Save;