import Cart from '../Cart/Cart';

export const Header = ({cartProducts}) => {
    return (
        <div className="header">
            <div><h2>Header</h2></div>
            <Cart cartProducts={cartProducts} />
        </div>
    );
};

export default Header;