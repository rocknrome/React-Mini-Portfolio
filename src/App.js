import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Header from './components/header'
import Footer from './components/Footer'
import Projects from './components/Projects'
/*import './index.css';*/

function App() {
  return (
    <div className="App">

      <Header />
      <Main />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
