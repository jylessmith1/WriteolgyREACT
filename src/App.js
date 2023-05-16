import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Latest from './components/Latest';
import Featured from './components/Featured';
import Popular from './components/Popular'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Latest />
      <Featured />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;
