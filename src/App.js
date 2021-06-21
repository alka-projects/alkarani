import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Skillsection from './Components/Skillsection';
import Mywork from './Components/Mywork';
import Myqualification from './Components/Myqualification';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
   <Header/>
   <Skillsection/>
   <Mywork/>
   <Myqualification/>
   <About/>
   <Footer/>
    </div>
  );
}

export default App;
