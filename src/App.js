import './App.css';
import Navbar from './component/navBar/ford_navbar';
import BannerSlider from './component/homepage/bannerSlider';
import Homepage from './component/homepage/homepage';
import Variants from './component/Variant/variant';
import {Routes, Route} from 'react-router-dom';
import Finance from './component/finance/finance';
import FordBlog from './component/blog/blog';
import BlogPage from './component/blog/single';
import Footer from './component/footer/footer';
import TradeIn from './component/Trade-in/tradein';
import Aftersale from './component/aftersales/aftersales';
import TestDrive from './component/testdrive/testdrive';
import Contact from './component/contact/contact';
import $ from 'jquery';


function App() {
  return (
    <div>
      <header>
          <Navbar/>
      </header>

      <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/latest-news" element={<FordBlog/>}/>
            <Route path="/finance" element={<Finance/>}/>
            <Route path="/trade-in" element={<TradeIn/>}/>
            <Route path="/test-drive" element={<TestDrive/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/aftersales' element={<Aftersale/>}/>
            <Route path='/variants' element={<Variants/>}/>
            <Route path='/single' element={<BlogPage/>}/>
          

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
