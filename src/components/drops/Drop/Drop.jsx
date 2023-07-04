import './Drop.scss';
import { useEffect } from 'react';

const Drop = ({ name = "drop", style, isOpen, onClose, content }) => {

    let addClass = '';
    if (style) addClass = ' drop--' + style

    useEffect(() => {
        const closeDropByKey = (event) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('mousedown', (event) => {
            if (Array.isArray(name)) {
                if (!name.includes(event.target.name)) onClose();
            } else {
                if (event.target.name !== name) onClose();
            }
        });

        document.addEventListener('keydown', closeDropByKey);

        return () => {
            document.removeEventListener('mousedown', onClose);
            document.removeEventListener('keydown', closeDropByKey);
        };
    }, []);

    if (!isOpen) return null;

    if (content.type.name === "DropList" && content.props.list.length === 0) return null;

    return (
        <div
            className={'drop' + addClass}
            onClick={(event) => { event.stopPropagation() }}
            onMouseDown={(event) => { event.stopPropagation() }}
        >
            {content}
        </div>
    );
}

export default Drop;