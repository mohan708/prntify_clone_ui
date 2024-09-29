import Create_sells from './components/Create_sells';
import Header from './components/Header/Header';
import Cards_1 from './components/Cards_1';
import Cheaker from './components/Cheaker';
import Cards2 from './components/Cards2';
import Card3 from './components/Card3';
import Card5 from './components/Card5';
import Fotter from './components/Fotter';
import Cards4 from './components/Cards4';

import './App.css';

function App() {
  return (
    <>   
    <div className=''>
      <div className='max-w-full'>
    <Header />
    <Create_sells />  
     <Cards_1 />
     <Cards2 />
     <Card3 />
     <Cards4 />
     <Card5 />
     <Fotter />
    </div>
    </div>


    {/* <Cheaker /> */}

   
    </>
  );
}

export default App;
