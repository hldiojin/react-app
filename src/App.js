import './App.css';
import Navigation from './components/Navigation';
import Players from './components/Players';
import './components/Navigation.css';
import './components/Players.css';
import Footer from './components/Footer';
import './components/Footer.css';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Players/>
      <Footer/>

    </div>
  );
}

export default App;
