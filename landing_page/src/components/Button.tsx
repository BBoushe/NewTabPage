import './components.css';

type ButtonProps = {
    onClickHandler: () => void;
    imgSrc: string;
    alt: string;
}

function Button( { onClickHandler, imgSrc, alt }: ButtonProps ) {
    return (
        <button className="icon-button" onClick={onClickHandler}>
            <img src={imgSrc} alt={alt} className="icon"/>
        </button>
    )
}

export default Button;