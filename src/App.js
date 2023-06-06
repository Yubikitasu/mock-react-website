import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Suspense } from 'react';
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
import { Bars } from 'react-loader-spinner';

function Loader() {
  return (
    <div className='loader-container'>
      <Bars height="80" width="80" color="#ffffff" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true}/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{height: 92 + 'px', width: 100 + '%', backgroundColor: 'black'}}></div>
        <Routes>
            <Route path="mock-react-website/" element={<Home />}></Route>
            <Route path="mock-react-website/news" element={<News />}></Route>
            <Route path="mock-react-website/shirts" element={<Shirts />}></Route>
            <Route path="mock-react-website/trousers" element = {<Trousers />}></Route>
            <Route path="mock-react-website/women" element = {<Women />}></Route>
            <Route path="mock-react-website/men" element={(
              <Suspense fallback={<Loader />}>
                <Men/ >
              </Suspense>
            )}></Route>
            <Route path="mock-react-website/handbags" element={<Handbags/ >}></Route>
            <Route path="mock-react-website/children" element={<Children/ >}></Route>
            <Route path="mock-react-website/contact" element={<Contact/ >}></Route>
            <Route path="mock-react-website/login" element={<Login/ >}></Route>
            <Route path="mock-react-website/signup" element={<Signup/ >}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
