import './components.css';

import MenuNavigation from './MenuNavigation';
import MenuActions from "./MenuActions.tsx";
import {forwardRef} from "react";

const Menu = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className="menu-container" ref={ref}>
            <MenuNavigation />
            <MenuActions />
        </div>
    );
});
// function Menu() {
//     return (
//         <div className="menu-container">
//             <MenuNavigation/>
//             <MenuActions/>
//         </div>
//     );
// }

export default Menu;