import db from './db/db.json';

import Hd from './component/Hd';
import Banner from './component/Banner';
import About from './component/About';
import Porfolio from './component/Porfolio';
import Preinterview from './component/Preinterview';
import Contact from './component/Contact';

function App() {  
  return (
    <div className="bbyproejct">
         <Hd  datainfo={ db.navi } id="hd"
         cls="fixed-top border-bottom bg-white"></Hd>
         <Banner  datainfo={ db.mainSlider }></Banner>
         <About id="about" cls="vh-100 bg-dark"></About>
         <Porfolio id="portfolio" cls="vh-100 bg-warning"></Porfolio>
         <Preinterview 
         id="preInterview" 
         datainfo={ db.preinterview } 
         cls="vh-100 "></Preinterview>
         <Contact id="contact" cls="vh-100 bg-light"></Contact>
    </div>
  );
}

export default App;
