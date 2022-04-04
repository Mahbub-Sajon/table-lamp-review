import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home'
import Reviews from './component/Reviews/Reviews'
import Dashboard from './component/Dashboard/Dashboard'
import Blogs from './component/Blogs/Blogs'
import About from './component/About/About'
import NotFound from './component/NotFound/NotFound';
import Navbar from './component/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/reviews" element={<Reviews/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
