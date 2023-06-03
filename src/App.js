import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar.js'
import Home from './site/Home';
import News from './site/news';
import Shirts from './site/Shirts';
import Trousers from './site/Trousers';
import Women from './site/Women';
import Men from './site/Men';
import Handbags from './site/Handbags';
import Children from './site/Children';
import Contact from './site/Contact';
import Login from './site/Login';
import Signup from './site/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{height: 92 + 'px', width: 100 + '%', backgroundColor: 'black'}}></div>
      <Routes>
          <Route path="./" element={<Home />}></Route>
          <Route path="./news" element={<News />}></Route>
          <Route path="./shirts" element={<Shirts />}></Route>
          <Route path="./trousers" element = {<Trousers />}></Route>
          <Route path="./women" element = {<Women />}></Route>
          <Route path="./men" element={<Men/ >}></Route>
          <Route path="./handbags" element={<Handbags/ >}></Route>
          <Route path="./children" element={<Children/ >}></Route>
          <Route path="./contact" element={<Contact/ >}></Route>
          <Route path="./login" element={<Login/ >}></Route>
          <Route path="./signup" element={<Signup/ >}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
