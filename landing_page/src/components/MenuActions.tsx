import "./components.css";
import { handleReadAction, handleWatchAction } from "../util/actions.ts";

import ActionButton from "./ActionButton.tsx";


function MenuActions() {
    return (
        <div className="actions-container">
            <h1>Bored?</h1>
            <div className="action-buttons-container">
                <ActionButton title={"Read"} onClickHandler={handleReadAction}  color={"green"}/>
                <ActionButton title={"Watch"} onClickHandler={handleWatchAction} color={"red"}/>
            </div>
        </div>
    )
}

export default MenuActions;