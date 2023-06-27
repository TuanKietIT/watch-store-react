import logo from './logo.svg';
import './App.css';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Login from './component/login';
import Register from './component/register';

import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter> 
          <Nav />
          <Routes>
             <Route path='/' element={<h1>Product Listing Component</h1>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/register' element={<Register/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
