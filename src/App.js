import './App.css';
import Navbar from './components/Home';
import Herosection from './components/Home/Herosection';
import About from './components/About';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Portfolio from './components/Portfolio';
import ViewerOpinions from './components/ViewerOpinions';
import Contact from './components/Contact';

function App() {
  return <>
  <Navbar/>
  <Herosection/>
  <About/>
<Services/>
<Experiences/>
<Portfolio/>
<ViewerOpinions/>
<Contact/>
  </>
}

export default App;
