import "./App.css";
import { NavBar } from './Components/NavBar';
import {Banner} from "./Components/Banner";
import {Skills} from "./Components/Skills";
import {ProfessionalH} from "./Components/ProffesionalH";
import {Contact} from "./Components/Contact";
import {Footer} from "./Components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <NavBar/> 
      <Banner/>
      <Skills/>
      <ProfessionalH/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
