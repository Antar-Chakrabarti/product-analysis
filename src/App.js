import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import DashBoard from './DashBoard/DashBoard';
import Footer from './Footer/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reviews' element={<Review/>}></Route>
        <Route path='dashboard' element={<DashBoard/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
