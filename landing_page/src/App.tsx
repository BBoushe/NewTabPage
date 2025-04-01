import Image from './components/Image';
import Menu from './components/Menu';

import './App.css';

import {useState} from "react";

function App() {
  const [imageClicked, setImageClicked] = useState<boolean>(false);

  return (
    <>
      <div className="app-container">
        <Image onClick={() => setImageClicked(!imageClicked)} />

        {imageClicked && <Menu/>}
      </div>
    </>
  )
}

export default App;
