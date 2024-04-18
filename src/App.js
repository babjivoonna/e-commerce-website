import './App.css';
import Header from './Header/Header';
import Filters from './Filters/Filters';
import Products from './Products/Products';
import { useEffect, useState } from 'react';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [duplicate,setDuplicate]=useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchQuery,setSearchQuery]=useState("")
  const [categeories,setCategeories]=useState([])
  const [searchCategories,setSearchCategeories]=useState([])

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    setDuplicate(data)
    setProducts(data);
    const allcategory = data.map((e) => e.category)
    setCategeories([...new Set(allcategory)])
  }

  const addToCart = (product) => {
    if (cartProducts.includes(product)) {
      setProducts(products.map((e)=>{
        if(e.id==product.id){
          e.quantity=e.quantity+1
        }
        return e;
      })) 
    }
    else {
      product.quantity=1
      setCartProducts([...cartProducts,product])
    }

  }
  useEffect(()=>{
    const filterPro=categeories.filter((ele)=>ele.includes(searchQuery.toLowerCase()))
    console.log({filterPro})
    setSearchCategeories(filterPro)
  },[searchQuery])
  console.log(categeories)
  const searchAdd=()=>{
  if(searchQuery===""){
    setDuplicate(products)
  }
  else{
    const filterPro=duplicate.filter((ele)=>searchCategories.includes(ele.category))
    if(filterPro.length>0){
      setDuplicate(filterPro)
    }
    else{
    setDuplicate(products)
    }
  }
  }

  return (
    <div className="main">
      <div className="header">
        <Header searchAdd={searchAdd} setSearchQuery={setSearchQuery} cartProducts={cartProducts} />
      </div>
      <div className="content">
        <div className="filters">
          <Filters products={products} setProducts={setDuplicate} />
        </div>
        <div className="products">
          <Products addToCart={addToCart} allProducts={duplicate} />
        </div>
      </div>
    </div>
  );
}

export default App;
