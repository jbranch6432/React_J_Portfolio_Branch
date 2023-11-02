import Navbar from './components/NavBar/Navbar.js';
import Intro from './components/NavBar/Intro/Intro.js';
import About from './components/About/about.js';
import Footer from './components/Footer/footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Intro/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
