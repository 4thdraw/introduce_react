import db from './db/db.json';

import Hd from './component/Hd';
import Banner from './component/Banner';
import About from './component/About';
import Porfolio from './component/Porfolio';
import Preinterview from './component/Preinterview';

function App() {  
  return (
    <div className="bbyproejct">
         <Hd  datainfo={ db.navi } 
         cls="fixed-top border-bottom bg-white"></Hd>
         <Banner  datainfo={ db.mainSlider }></Banner>
         <About ></About>
         <Porfolio ></Porfolio>
         <Preinterview datainfo={ db.preinterview }></Preinterview>
    </div>
  );
}

export default App;
