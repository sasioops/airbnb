import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar';
import Head from './components/Head';
import Card from './components/Card';


import data from'./data';

const cards = data.map(item => {
  return (
  <Card
  key = {item.id}
  item = {item}
/>
  )
})

function App() {
  return (
    <div >
      <Navbar/>
      <Head/>
      <section className= "cards-list">
        {cards}
      </section>
     
    </div>
  );
}

export default App;
