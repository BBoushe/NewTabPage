import './components.css';

type ActionButtonProps = {
    onClickHandler: () => void;
    title: string;
    color: string
}

function ActionButton({ onClickHandler, title, color }: ActionButtonProps ) {
    return (
        <button className={`action-button ${color === 'green' ? 'green-button' : 'red-button'}`} onClick={onClickHandler}>
            <h2>{title}</h2>
        </button>
    )
}

export default ActionButton;