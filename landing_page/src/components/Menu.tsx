import './components.css';

import MenuNavigation from './MenuNavigation';
import MenuActions from "./MenuActions.tsx";

function Menu() {
    return (
        <div className="menu-container">
            <MenuNavigation/>
            <MenuActions/>
        </div>
    );
}

export default Menu;