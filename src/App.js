import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <section className="w-full h-full bg-white">
        <Header />
        <Main />
        <Footer />
      </section>
    </>
  );
}

export default App;
