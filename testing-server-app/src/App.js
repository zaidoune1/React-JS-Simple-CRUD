import './App.css';
import NavBar from "./Compounents/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Compounents/Home";
import Products from "./Compounents/Products";
import Categories from "./Compounents/Categories";
import Add from "./Compounents/Add";
import ProductId from "./Compounents/ProductId";
import Edit from './Compounents/Edit';

function App() {
  return (
    <div>
      <NavBar />
      
        <div className= "col-10">
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/Products' element={<Products/>}></Route>
            <Route path='/Categories' element={<Categories/>} ></Route>
            <Route path='/Products/add' element={<Add/>} ></Route>
            <Route path='/Products/:idProduct' element={<ProductId/>}></Route>
            <Route path='/Products/Edit/:editPrice/:editTitle/:editId'element={<Edit/>}></Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
