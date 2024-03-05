
const { useBlockProps } = window.wp.blockEditor;

const Save = ({ attributes }) => {
    const {} = attributes;

    return (
        <div {...useBlockProps.save()}>
            
        </div>
    );
};

export default Save;