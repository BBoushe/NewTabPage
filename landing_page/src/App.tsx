import Image from './components/Image';
import Menu from './components/Menu';
import { CSSTransition } from "react-transition-group";

import './App.css';

import {useRef, useState} from "react";

function App() {
  const [imageClicked, setImageClicked] = useState<boolean>(false);
  const nodeRef = useRef(null);

  return (
    <div className="app-container">
        <Image onClick={() => setImageClicked(!imageClicked)} />

        {/*{imageClicked && <Menu/>}*/}
        <CSSTransition
            in={imageClicked}
            timeout={100}
            classNames="menu"
            unmountOnExit
            nodeRef={nodeRef}
        >
            <Menu ref={nodeRef}/>
        </CSSTransition>
    </div>
  )
}

export default App;
