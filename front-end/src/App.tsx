import './App.css';
import Navigation from './components/Navigate';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Activities from './components/Activities';
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Intro/>
      <Activities/>
      <Footer/>
    </div>
  );
}

export default App;
