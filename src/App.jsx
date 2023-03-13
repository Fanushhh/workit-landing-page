import './App.scss';
import Navbar from './components/navbar/navbar';
import { data } from './data';
import Hero from './components/Hero/hero';
import Perks from './components/Perks/perks';
import Cta from './components/Cta/cta';
import Footer from './components/footer/footer';

function App() {

  return (
    <main className="app">
      <Hero props={data}/>
      <Perks props={data.perks}/>
      <Cta props={data.cta}/>
      <Footer props={data.footer} />
    </main>
  )
}

export default App
