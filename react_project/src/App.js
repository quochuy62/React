import './App.css';
import Card from './component/Card';
import Header from './component/Header';
import Items from './component/Items';
import Nav from './component/Nav';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Items/>
      <Footer/>
    </div>
  );
}

export default App;
