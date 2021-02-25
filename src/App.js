import SubPages from './SubPages.svg';
import Breadcrumb from './Breadcrumb.svg';
import Banner from './Banner.svg';
import support from './support.svg';
import articles from './articles.svg';
import Chatbot from './Chatbot.svg';
import r2 from './r2.svg';
import r1 from './r1.svg';
import r3 from './r3.svg';
import r4 from './r4.svg';
import Facebook from './Facebook.svg';
import Instagram from './Instagram.svg';
import Twitter from './Twitter.svg';
import Youtube from './Youtube.svg';
import Vector from './Vector.svg';
import bip from './bip.svg';



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={SubPages} />      
        
      </header>
     <div className="xxx"><img src={Breadcrumb} /></div>
     <div className="xxx1"><img src={Banner}/></div>
     <div><img src={support}/></div>
     <div><img src={articles}/></div>
     <div className="Chatbot"><img src={Chatbot}/></div>
     <div className="r2"><img src={r2}/></div>
     <div className="r1"><img src={r1}/></div>
     <div className="r3"><img src={r3}/></div>
     <div className="r4"><img src={r4}/></div>
     <div className="social-media">
     <div className="Facebook"><img src={Facebook}/></div>
     <div className="Instagram"><img src={Instagram}/></div>
     <div className="Twitter"><img src={Twitter}/></div>
     <div className="Youtube"><img src={Youtube}/></div>
     <div className="Vector"><img src={Vector}/></div>
     <div className="bip"><img src={bip}/></div>
     </div>
     


    </div>
  );
}
export default App;
