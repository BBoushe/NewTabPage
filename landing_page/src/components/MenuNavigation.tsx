import Column from "./Column.tsx";
import { devButtons, productivityButtons, personalButtons } from "../util/buttonLists.ts";

function MenuNavigation() {
    return (
        <div className="menu-nav">
            <Column title={"Developer"}  ButtonList={devButtons} isFirst />
            <Column title={"Productivity"} ButtonList={productivityButtons} />
            <Column title={"Personal"} ButtonList={personalButtons} />
        </div>
    )
}

export default MenuNavigation;