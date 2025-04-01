import './components.css';

import Button from "./Button.tsx";
import { ButtonItem } from "../util/buttonLists.ts";

type ColumnProps = {
    title: string;
    isFirst?: boolean;
    ButtonList: ButtonItem[];
}

function Column({ title, isFirst, ButtonList }: ColumnProps) {
    return (
        <div className={`button-container ${isFirst ? 'no-border' : ''}`}>
            <h1>{title}</h1>
            <div className="button-grid">
                {ButtonList.map((item: ButtonItem, index: number) => (
                    <Button key={index} imgSrc={item.imgSrc} onClickHandler={item.action} alt={item.alt} />
                ))}
            </div>
        </div>
    )
}

export default Column;