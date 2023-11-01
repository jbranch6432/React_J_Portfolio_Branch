import Navbar from './components/NavBar/Navbar.js';
import Intro from './components/NavBar/Intro/Intro.js';
import About from './components/About/about.js';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Intro/>
      <About />
    </div>
  );
}

export default App;
