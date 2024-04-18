import Cart from '../Cart/Cart';
import './Header.css'

export const Header = ({cartProducts,setSearchQuery,searchAdd}) => {
    return (
        <div className="header">
            <div><h2>Just Shop</h2></div>
           ,<div className="search"> <input type="text" onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button onClick={searchAdd}>search</button>
            </div>
            <Cart cartProducts={cartProducts} />
        </div>
    );
};

export default Header;